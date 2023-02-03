import Button from './Button'
import OptionalCourses from './OptionalCourses'
import classes from './Optionals.module.css'

const optionals = [
    {
        semName : 'Semester 5',
        Courses : {
            C1 : 'Stochastic Processes and Inference',
            C2 : 'Operations Research - I ',
            C3 : 'Advanced Numerical Analysis',
            C4 : 'System Analysis & Design' ,
            C5 :  'Business Programming Language'    
        }
    },
    {
        semName : 'Semester 6',
        Courses : {
            C1 : 'Modeling and Simulation',
            C2 : 'Operations Research - II ',
            C3 : 'Microcomputer Design & Interfacing-I'    
        }
    },
    {
        semName : 'Semester 7',
        Courses : {
            C1 : 'Advanced Computer Graphics',
            C2 : 'Microcomputer Design & Interfacing-II',
            C3 : 'Parallel Computing',
            C4 : 'Topics of Current/Special Interest.' ,
            C5 :  'VLSI Design Techniques',
            C6 : 'Network Security and Cryptography',
            C7 : 'Internet Application Development',
            C8 : 'Data Warehousing and Data Mining'
        }
    },
    {
        semName : 'Semester 8',
        Courses : {
            C1 : '	Operating System Case Study',
            C2 : '	Multimedia Systems',
            C3 : 'Computational Linear Algebra',
            C4 : '	Wireless Communication ' ,
            C5 :  'Neural Networks and Fuzzy Logic',
            C6 : 'Human Computer Interaction',
            C7 : 'Remote Sensing and Geographic Information System'
        }
    },
]

const Optionals = (props) =>{
   return <div className={`container text-center ${classes.optContainer}`}>
    <Button btnClass = {classes.btn} onclick = {props.onclick}>Close</Button>
        <div className="row ms-sm-5 ms-3">
            {optionals.map((optional)=>(
                <OptionalCourses semName = {optional.semName} Courses = {optional.Courses} />
            ))}
        </div>
        
    </div>
}

export default Optionals