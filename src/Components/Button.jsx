import classes from './Button.module.css'

const Button = (props) =>{
    const classess = props.btnClass
    return <button  className={classess} onClick={props.onclick}>{props.children}</button>
}

export default Button