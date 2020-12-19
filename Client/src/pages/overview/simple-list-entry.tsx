import './simple-list-entry.css';
import WoIstHenryIcon, {ValidIcons} from "../../dumb/icon/wih-icon";
import DateFromToFormat from "../../functions/date-from-to-format";

interface ListEntryModel {
    title: string;
    content?: string;
    momentFrom: Date;
    momentUntil?: Date;
    status: ListStatus;
}

export type ListStatus = 'notStarted' | 'active' | 'done';


export default function SimpleListEntry({content, title, status, momentFrom, momentUntil}: ListEntryModel) {
    function statusToIcon(): ValidIcons {
        switch (status) {
            case "notStarted": {
                return 'clock';
            }
            case "done": {
                return 'check-circle';
            }
            case "active": {
                return 'at';
            }
        }
    }

    return (
        <div className="Simple-List-Entry" data-testid="Simple-List-Entry">
            <div className="Simple-List-Entry--icon-prefix">
                <WoIstHenryIcon icon={statusToIcon()}/>
            </div>

            <div className="Simple-List-Entry--content-wrapper">
                <div className="Simple-List-Entry--title" data-testid="Simple-List-Entry--title">
                    <div className="Simple-List-Entry--title-text">{title}</div>
                    <div className="Simple-List-Entry--title-date" data-testid="Simple-List-Entry--title-date">
                        {DateFromToFormat({
                            from: momentFrom,
                            to: momentUntil
                        })}
                    </div>
                </div>

                <div className="Simple-List-Entry--content" data-testid="Simple-List-Entry--content">
                    {!!content && content}

                    {!content &&
                    <div className="Simple-List-Entry--no-content">
                        Es wurde keine genauere Beschreibung hinterlegt.
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}
