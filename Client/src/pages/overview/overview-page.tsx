import './overview-page.css';

import {useEffect, useState} from "react";
import SimplerListenEintrag, {ListenStatus} from "./simpler-listen-eintrag";

interface Eintrag {
    id: number;
    ort: string;
    beschreibung?: string;
    zeitpunktAb: Date;
    zeitpunktBis?: Date;
}

// Export is only for testing purpose. Will be replaced once real fetching/loading is implemented
export function fakeFetchEintraege(): Promise<Eintrag[]> {
    const today = new Date();

    return Promise.resolve([
        {
            id: 1,
            zeitpunktAb: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 6),
            zeitpunktBis: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 7, 30),
            ort: 'Zuhause',
            beschreibung: 'Gerade aufgestanden und gleich gehts zur Arbeit.'
        },
        {
            id: 2,
            zeitpunktAb: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 7, 30),
            zeitpunktBis: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8),
            ort: 'Unterwegs',
            beschreibung: 'Auf dem Weg zur Arbeit.'
        },
        {
            id: 3,
            zeitpunktAb: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8),
            zeitpunktBis: undefined,
            ort: 'Arbeit',
            beschreibung: 'Zur Zeit bin ich im Büro.'
        },
        {
            id: 4,
            zeitpunktAb: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 15),
            zeitpunktBis: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 20),
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

    function datumZuStatus(eintragIndex: number): ListenStatus {
        const eintrag = eintraege[eintragIndex];

        const now = new Date();
        const entryIsInFuture = now < eintrag.zeitpunktAb;
        if (entryIsInFuture) {
            return "nichtBegonnen";
        }
        const entryIsInPast = eintrag.zeitpunktBis != null && now > eintrag.zeitpunktBis;
        if (entryIsInPast) {
            return "abgeschlossen";
        }
        return "aktuell";
    }

    return (
        <>
            <h2>Übersicht der Statuseinträge</h2>

            <div className="Overview-Page--list-wrapper" data-testid="Overview-Page--list-wrapper">
                {eintraege.map((eintrag, i) => <SimplerListenEintrag
                        key={eintrag.id}
                        icon="check-circle"
                        titel={eintrag.ort}
                        inhalt={eintrag.beschreibung}
                        status={datumZuStatus(i)}
                    />
                )}
            </div>
        </>
    )
}
