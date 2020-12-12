import {Link} from "react-router-dom";
import './sidenav.css';

export default function Sidenav() {
    return (
        <nav className="Sidenav--nav" data-testid="sidenav">
            <Link to="/status">
                Status
            </Link>

            <Link to="/add">
                Hinzufügen
            </Link>
        </nav>
    )
}
