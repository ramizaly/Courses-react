import classes from './Courses.module.css'

const Courses = (props) =>
{
    return <div className={classes.courses}>
    <div className="container m-0 p-0">
        <div className="row m-0 p-0">
            <div className="col-sm-3 m-0 p-0">
            <div className={classes.courseNo}>{props.course.CourseNo}</div>
            </div>
            <div className="col-sm-6 m-0 p-0">
            <div className={classes.courseName}>{props.course.name}</div>
            </div>
            <div className="col-sm-3 m-0 p-0">
            <div className={classes.creditHours}>{props.course.CreditHours}</div>
            </div>
        </div>
    </div>
    </div>
}

export default Courses