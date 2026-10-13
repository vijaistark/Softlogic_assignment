import { Children } from "react";
function Employee(props) {
    return (
        <div>
            <h2>Employee Information</h2>
            {props.children}
            <hr />
        </div>
    );
}
export default Employee;