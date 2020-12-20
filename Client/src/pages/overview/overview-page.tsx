import './overview-page.css';

import {useEffect, useState} from "react";
import {Attendance, ATTENDANCE_LOCAL_STORAGE_KEY} from "../../models/attendance";
import OverviewDayGroup from "./overview-day-group";
import {LoadListDataButton} from "./load-list-data-button";
import {getMockEntries} from "../../functions/get-mock-attendances";

export default function OverviewPage() {
    const [entries, setEntries] = useState<Attendance[]>([]);

    useEffect(() => {
        const attendanceJson = localStorage.getItem(ATTENDANCE_LOCAL_STORAGE_KEY) || '[]';
        const attendances = JSON.parse(attendanceJson) as Attendance[];
        attendances.forEach(a => {
            a.momentFrom = new Date(a.momentFrom);
            a.momentUntil = a.momentUntil != null ? new Date(a.momentUntil) : undefined;
        })
        setEntries(attendances);
    }, [])

    function loadStandardAttendances() {
        const newEntries = entries.slice();
        for (const mockEntry of getMockEntries()) {
            const mockEntryIndex = newEntries.findIndex(e => e.id === mockEntry.id);

            if (mockEntryIndex > -1) {
                newEntries.splice(mockEntryIndex, 1, mockEntry);
            } else {
                newEntries.push(mockEntry);
            }
        }
        localStorage.setItem(ATTENDANCE_LOCAL_STORAGE_KEY, JSON.stringify(newEntries));
        setEntries(newEntries);
    }

    return (
        <>
            <h2>
                Übersicht der Statuseinträge
                <LoadListDataButton modelsChanged={entries.length === 0} onClick={() => loadStandardAttendances()}/>
            </h2>

            <div className="Overview-Page--list-wrapper" data-testid="Overview-Page--list-wrapper">
                <OverviewDayGroup entries={entries}/>
            </div>
        </>
    )
}
