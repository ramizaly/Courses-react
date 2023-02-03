import { NavLink } from "react-router-dom"
import classes from './Programs.module.css'

const Programs = (props) => 
{
    return <div className="px-3">
    <NavLink onClick={props.onclick} className={`${classes.link} text-center`} to={props.path}>
        <div className={`${classes.mainLink}  fs-4  `}>
        {props.children}
        </div>
        </NavLink>
    </div>
}

export default Programs