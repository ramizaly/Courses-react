const OptionalCourses = (props) => {
    const Courses = Object.values(props.Courses)
    return <div className="col-md-6 p-3">
        <div className="bg-white pb-3 rounded" style={{height : 'auto' , width : '90%'}}>
        <h3 className="rounded-top" style={{background : '#a37cff' , color : 'white'}}>{props.semName}</h3>
        <ul>
            {Courses.map((course)=>(
                <li className="p-md-1 p-2">- {course}</li>
            ))}
        </ul>
        </div>
    </div>
}

export default OptionalCourses