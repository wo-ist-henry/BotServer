import {Attendance} from "../../models/attendance";
import SimpleListEntry from "./simple-list-entry";

interface GroupModel {
    entries: Attendance[];
}

export default function OverviewDayGroup({entries}: GroupModel) {
    if (entries == null || entries.length === 0) {
        return null;
    }

    function groupEntriesByDate(): { [key: string]: Attendance[] } {
        const entryGroupByDate: { [key: string]: Attendance[] } = {};
        for (const entry of entries) {
            const from = entry.momentFrom;
            const date = `${from.getDate()}${from.getMonth()}${from.getFullYear()}`;
            if (entryGroupByDate[date] == null) {
                entryGroupByDate[date] = [];
            }
            entryGroupByDate[date].push(entry);
        }
        return entryGroupByDate;
    }

    const groups = groupEntriesByDate();

    function dayOfGroup(groupKey: string) {
        return groups[groupKey][0].momentFrom.toLocaleDateString();
    }

    return (
        <>
            {Object.keys(groups).map((date, i) =>
                <div className="Overview-Day-Group" key={i}>
                    <h3>{dayOfGroup(date)}</h3>

                    {Object.values(groups[date]).map((entry) => <SimpleListEntry
                            key={entry.id}
                            title={entry.place}
                            content={entry.description}
                            momentFrom={entry.momentFrom}
                            momentUntil={entry.momentUntil}
                        />
                    )}
                </div>
            )}
        </>
    );
}
