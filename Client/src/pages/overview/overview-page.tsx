import './overview-page.css';

import {useEffect, useState} from "react";
import SimpleListEntry from "./simple-list-entry";

interface Entry {
    id: number;
    place: string;
    description?: string;
    momentFrom: Date;
    momentUntil?: Date;
}

// Export is only for testing purpose. Will be replaced once real fetching/loading is implemented
export function fakeFetchEntries(): Promise<Entry[]> {
    return Promise.resolve([
        {
            id: 1,
            momentFrom: new Date(2020, 12, 2, 6),
            momentUntil: new Date(2020, 12, 2, 7, 30),
            place: 'Zuhause',
            description: 'Gerade aufgestanden und gleich gehts zur Arbeit.'
        },
        {
            id: 2,
            momentFrom: new Date(2020, 12, 2, 7, 30),
            momentUntil: new Date(2020, 12, 2, 8),
            place: 'Unterwegs',
            description: 'Auf dem Weg zur Arbeit.'
        },
        {
            id: 3,
            momentFrom: new Date(2020, 12, 2, 8),
            momentUntil: undefined,
            place: 'Arbeit',
            description: 'Zur Zeit bin ich im Büro.'
        },
        {
            id: 4,
            momentFrom: new Date(2020, 12, 2, 8, 15),
            momentUntil: new Date(2020, 12, 2, 8, 20),
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

    return (
        <>
            <h2>Übersicht der Statuseinträge</h2>

            <div className="Overview-Page--list-wrapper" data-testid="Overview-Page--list-wrapper">
                {entries.map(eintrag => <SimpleListEntry
                        key={eintrag.id}
                        title={eintrag.place}
                        content={eintrag.description}
                    />
                )}
            </div>
        </>
    )
}
