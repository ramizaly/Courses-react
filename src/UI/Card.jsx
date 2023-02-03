import React from "react";
import classes from './Card.module.css'

const Card = props =>
{
    // const classess = classes.Card + props.classname;
    return(
        <div className="container px-4">
        <div className={`${classes.Card} ${props.classname} container pb-2 p-0 mb-4 mb-md-4 mx-sm-auto`}>{props.children}</div>
        </div>
    )
}

export default Card