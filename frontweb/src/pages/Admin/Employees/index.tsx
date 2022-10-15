import { Redirect, Route, Switch } from "react-router-dom";
import { hasAnyRoles } from "util/auth";
import Form from "./Form";
import List from "./List";

const Employee = () => {

    return (
        <Switch>
            <Route path="/admin/employees" exact>
                <List />
            </Route>
            {hasAnyRoles(['ROLE_ADMIN']) ?
                (
                    <Route path="/admin/employees/:employeeId">
                        <Form />
                    </Route>
                ) :
                (
                    <Redirect to={"/admin/employees"} from={"/admin/employees/:employeeId"} />
                )
            }
        </Switch>
    );
};

export default Employee;
