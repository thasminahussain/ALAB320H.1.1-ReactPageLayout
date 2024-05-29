import "./component.css"
import reactimg from "../assets/react.svg"


function EmployeeListItem() {
    return (
        <div className="list">
        <img src={reactimg} alt="react image" />
        <div className="text">
        <h3>James King</h3>
        <p>President and CEO</p>
        </div>
       </div>
    )
}

export default EmployeeListItem; 