import './overview-page.css';

import {useEffect, useState} from "react";
import SimpleListEntry, {ListStatus} from "./simple-list-entry";

interface Entry {
    id: number;
    place: string;
    description?: string;
    momentFrom: Date;
    momentUntil?: Date;
}

// Export is only for testing purpose. Will be replaced once real fetching/loading is implemented
export function fakeFetchEntries(): Promise<Entry[]> {
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
    const [entries, setEntries] = useState<Entry[]>([]);

    useEffect(() => {
        fakeFetchEntries().then(eintraege => {
            setEntries(eintraege);
        }).catch(error => {
            // TODO: Implement Error Service..?
            console.error('Error while loading entries: ', error);
        })
    }, [])

    function datumZuStatus(eintragIndex: number): ListStatus {
        const eintrag = eintraege[eintragIndex];

        const now = new Date();
        const entryIsInFuture = now < eintrag.zeitpunktAb;
        if (entryIsInFuture) {
            return "notStarted";
        }
        const entryIsInPast = eintrag.zeitpunktBis != null && now > eintrag.zeitpunktBis;
        if (entryIsInPast) {
            return "done";
        }
        return "active";
    }

    return (
        <>
            <h2>Übersicht der Statuseinträge</h2>

            <div className="Overview-Page--list-wrapper" data-testid="Overview-Page--list-wrapper">
                {entries.map((entry, i) => <SimpleListEntry
                        key={entry.id}
                        icon="check-circle"
                        titel={entry.place}
                        inhalt={entry.description}
                        status={datumZuStatus(i)}
                    />
                )}
            </div>
        </>
    )
}
