import reactimg from "../assets/react.svg"
import "./component.css"

function EmployeeList() {
    return (
       <div>
        
        <div className="list">
        <img src={reactimg} alt="react image" />
        <h3>James King</h3>
        <p>President and CEO</p>
       </div>

       <div className="list">
        <img src={reactimg} alt="react image" />
        <h3>Julie Taylor</h3>
        <p>VP of Marketing</p>
       </div>

       <div className="list">
        <img src={reactimg} alt="react image" />
        <h3>Eugene Lee</h3>
        <p>CEO</p>
       </div>

       <div className="list">
        <img src={reactimg} alt="react image" />
        <h3>John Williams</h3>
        <p>VP of Engineering</p>
       </div>

       <div className="list">
        <img src={reactimg} alt="react image" />
        <h3> Ray Moore</h3>
        <p>VP of Sales</p>
       </div>

       <div className="list">
        <img src={reactimg} alt="react image" />
        <h3>Paul Jones</h3>
        <p>QA Manager</p>
       </div>

       </div>
    )
}

export default EmployeeList;




