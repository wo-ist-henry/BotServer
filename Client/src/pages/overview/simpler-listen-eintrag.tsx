import './simpler-listen-eintrag.css';
import WoIstHenryIcon from "../../dumb/icon/wih-icon";

interface ListenEintragModel {
    icon: string;
    titel: string;
    inhalt?: string;
}

export default function SimplerListenEintrag({inhalt, titel}: ListenEintragModel) {
    return (
        <div className="Simpler-Listen-Eintrag" data-testid="SimplerListenEintrag">
            <div className="Simpler-Listen-Eintrag--icon-prefix">
                <WoIstHenryIcon icon={"check-circle"}/>
            </div>

            <div className="Simpler-Listen-Eintrag--content">
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
        </div>
    )
}
