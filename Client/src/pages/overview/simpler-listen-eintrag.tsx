import './simpler-listen-eintrag.css';

interface ListenEintragModel {
    titel: string;
    inhalt?: string;
}

export default function SimplerListenEintrag({inhalt, titel}: ListenEintragModel) {
    return (
        <div className="Simpler-Listen-Eintrag" data-testid="SimplerListenEintrag">
            <div className="Simpler-Listen-Eintrag--titel" data-testid="Simpler-Listen-Eintrag--titel">
                {titel}
            </div>

            <div className="Simpler-Listen-Eintrag--inhalt" data-testid="Simpler-Listen-Eintrag--inhalt">
                {!!inhalt && inhalt}

                {!inhalt &&
                <div className="Simpler-Listen-Eintrag--kein-inhalt">Es wurde keine genauere Beschreibung
                    hinterlegt.</div>
                }
            </div>
        </div>
    )
}
