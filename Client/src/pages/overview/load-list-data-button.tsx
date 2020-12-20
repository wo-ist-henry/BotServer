import './load-list-data-button.css';
import {Button} from "react-bootstrap";

interface LoadListDataButtonModel {
    modelsChanged: boolean;
    onClick?: (event: any) => void
}

export function LoadListDataButton({modelsChanged, onClick}: LoadListDataButtonModel) {
    if (!modelsChanged) {
        return null;
    }

    return (
        <Button className="Load-List-Data-Button" variant="outline-primary" onClick={(e) => onClick?.(e)}>
            Refill
        </Button>
    )
}
