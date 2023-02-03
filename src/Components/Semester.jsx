import classes from './Semester.module.css'
import Courses from "./Courses"



const Semester = (props) =>
{
    const courseArray = Object.values(props.semester.Courses)
 
   return <>
  <ul>
    <div className={classes.semName}>
        
        <h2> <img src='./Finger-right.png' ></img> {props.semester.SemName}</h2>
    </div>
    <div className= {classes.headers}>
    <div className="container m-0 p-0">
        <div className="row m-0 p-0">
            <div className="col-sm-3 m-0 p-0">
            <div className={classes.courseCode}>Course Code</div>
            </div>
            <div className="col-sm-6 m-0 p-0">
            <div className={classes.courseTitle}>Course Title</div>
            </div>
            <div className="col-sm-3 m-0 p-0">
            <div className={classes.creditHours}>Credit Hrs</div>
            </div>
        </div>
    </div>
   
    </div>
   {courseArray.map((course)=>(
        <li >
            <Courses course = {course}/>
            </li>
    ))}
    </ul>
   </>
    
}

export default Semester