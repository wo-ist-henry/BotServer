import './overview-page.css';
import OverviewDayGroup from "./list-modes/overview-day-group";
import {LoadListDataButton} from "./load-list-data-button";
import useEntries from "../../effects/useEntries";

export default function OverviewPage() {
    const [entries, setEntries] = useEntries();

    return (
        <>
            <h2>
                Übersicht der Statuseinträge
                <LoadListDataButton entries={entries} setEntries={setEntries}/>
            </h2>

            <div className="Overview-Page--list-wrapper" data-testid="Overview-Page--list-wrapper">
                <OverviewDayGroup entries={entries}/>
            </div>
        </>
    )
}
