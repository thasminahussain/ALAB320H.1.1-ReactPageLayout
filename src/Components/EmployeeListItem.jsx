import "./component.css"
import reactimg from "../assets/react.svg"


function EmployeeListItem(props) {
    return (
        <div className="list">
        <img src={reactimg} alt="react image" />
        <div className="text">
        <h3>{props.employee.name}</h3>
        <p>{props.employee.title}</p>
        </div>
       </div>
    )
}

export default EmployeeListItem; 