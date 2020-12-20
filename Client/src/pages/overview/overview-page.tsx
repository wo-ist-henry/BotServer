import './overview-page.css';

import {useEffect, useState} from "react";
import {Attendance} from "../../models/attendance";
import OverviewDayGroup from "./overview-day-group";

// Export is only for testing purpose. Will be replaced once real fetching/loading is implemented
export function fakeFetchEntries(): Promise<Attendance[]> {
    const today = new Date();
    return Promise.resolve([
        {
            id: 1,
            momentFrom: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 6),
            momentUntil: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 7, 30),
            place: 'Zuhause',
            description: 'Gerade aufgestanden und gleich gehts zur Arbeit.'
        },
        {
            id: 2,
            momentFrom: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 7, 30),
            momentUntil: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8),
            place: 'Unterwegs',
            description: 'Auf dem Weg zur Arbeit.'
        },
        {
            id: 3,
            momentFrom: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8),
            momentUntil: undefined,
            place: 'Arbeit',
            description: 'Zur Zeit bin ich im Büro.'
        },
        {
            id: 4,
            momentFrom: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 15),
            momentUntil: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 20),
            place: 'Kaffeemaschine'
        }
    ]);
}

export default function OverviewPage() {
    const [entries, setEntries] = useState<Attendance[]>([]);

    useEffect(() => {
        fakeFetchEntries().then(eintraege => {
            setEntries(eintraege);
        }).catch(error => {
            // TODO: Implement Error Service..?
            console.error('Error while loading entries: ', error);
        })
    }, [])

    return (
        <>
            <h2>Übersicht der Statuseinträge</h2>

            <div className="Overview-Page--list-wrapper" data-testid="Overview-Page--list-wrapper">
                <OverviewDayGroup entries={entries}/>
            </div>
        </>
    )
}
