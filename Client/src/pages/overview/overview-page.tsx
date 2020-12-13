import './overview-page.css';

import {useEffect, useState} from "react";
import SimplerListenEintrag from "./simpler-listen-eintrag";

interface Eintrag {
    id: number;
    ort: string;
    beschreibung?: string;
    zeitpunktAb: Date;
    zeitpunktBis?: Date;
}

// Export is only for testing purpose. Will be replaced once real fetching/loading is implemented
export function fakeFetchEintraege(): Promise<Eintrag[]> {
    return Promise.resolve([
        {
            id: 1,
            zeitpunktAb: new Date(2020, 12, 2, 6),
            zeitpunktBis: new Date(2020, 12, 2, 7, 30),
            ort: 'Zuhause',
            beschreibung: 'Gerade aufgestanden und gleich gehts zur Arbeit.'
        },
        {
            id: 2,
            zeitpunktAb: new Date(2020, 12, 2, 7, 30),
            zeitpunktBis: new Date(2020, 12, 2, 8),
            ort: 'Unterwegs',
            beschreibung: 'Auf dem Weg zur Arbeit.'
        },
        {
            id: 3,
            zeitpunktAb: new Date(2020, 12, 2, 8),
            zeitpunktBis: undefined,
            ort: 'Arbeit',
            beschreibung: 'Zur Zeit bin ich im Büro.'
        },
        {
            id: 4,
            zeitpunktAb: new Date(2020, 12, 2, 8, 15),
            zeitpunktBis: new Date(2020, 12, 2, 8, 20),
            ort: 'Kaffeemaschine'
        }
    ]);
}

export default function OverviewPage() {
    const [eintraege, setEintraege] = useState<Eintrag[]>([]);

    useEffect(() => {
        fakeFetchEintraege().then(eintraege => {
            setEintraege(eintraege);
        }).catch(error => {
            // TODO: Implement Error Service..?
            console.error('Fehler beim Laden der Einträge aufgetreten: ', error);
        })
    }, [])

    return (
        <>
            <h2>Übersicht der Statuseinträge</h2>

            <div className="Overview-Page--list-wrapper" data-testid="Overview-Page--list-wrapper">
                {eintraege.map(eintrag => <SimplerListenEintrag
                    key={eintrag.id}
                    icon="check-circle"
                    titel={eintrag.ort}
                    inhalt={eintrag.beschreibung}
                    />
                )}
            </div>
        </>
    )
}
