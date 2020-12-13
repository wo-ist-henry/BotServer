import './simpler-listen-eintrag.css';
import WoIstHenryIcon, {ValideIcons} from "../../dumb/icon/wih-icon";

export type ListenStatus = 'nichtBegonnen' | 'aktuell' | 'abgeschlossen';

interface ListenEintragModel {
    icon: string;
    titel: string;
    inhalt?: string;
    status: ListenStatus;
}

export default function SimplerListenEintrag({inhalt, titel, status}: ListenEintragModel) {
    function statusZuIcon(): ValideIcons {
        switch (status) {
            case "nichtBegonnen": {
                return 'clock';
            }
            case "abgeschlossen": {
                return 'check-circle';
            }
            case "aktuell": {
                return 'at';
            }
        }
    }

    return (
        <div className="Simpler-Listen-Eintrag" data-testid="SimplerListenEintrag">
            <div className="Simpler-Listen-Eintrag--icon-prefix">
                <WoIstHenryIcon icon={statusZuIcon()}/>
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
