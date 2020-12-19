import './simple-list-entry.css';

interface ListEntryModel {
    title: string;
    content?: string;
}

export default function SimpleListEntry({content, title}: ListEntryModel) {
    return (
        <div className="Simple-List-Entry" data-testid="Simple-List-Entry">
            <div className="Simple-List-Entry--title" data-testid="Simple-List-Entry--title">
                {title}
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
    )
}
