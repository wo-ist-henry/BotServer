import {Route, Switch} from "react-router-dom";
import OverviewPage from "../../pages/overview/overview-page";

export default function Content() {
    return (
        <Switch>
            <Route exact={true} path={["", "/status"]}>
                <div className="Content--Status-Wrapper" data-testid="status-content">
                    <OverviewPage/>
                </div>
            </Route>

            <Route exact={true} path="/add">
                <div className="Content--Add-Wrapper" data-testid="add-content">
                    Add
                </div>
            </Route>
        </Switch>
    )
}
