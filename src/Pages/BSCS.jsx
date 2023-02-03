import { useLoaderData } from "react-router-dom"
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import Card from "../UI/Card";
import Semester from "../Components/Semester";
import Optionals from "../Components/Optionals";
import Button from "../Components/Button";
import classes from './Pages.module.css'
import { useState } from "react";
import { json } from "react-router-dom";

const BSCS = () => {
    const [isShown, setIsShown] = useState(false)
    const data = useLoaderData()
    const BsseCourses = Object.values(data)
    const showButtonClickHandler = () => {
        setIsShown((isShown) => !isShown)
    }

    return <>
        <div className="course-container">
            <Glider
                hasArrows
                slidesToShow={1}
                slidesToScroll={1}
                itemWidth={8}
            >
                {BsseCourses.map((sem) => (
                    <Card>
                        <Semester key={sem.semID} semester={sem} ></Semester>
                    </Card>
                ))}
            </Glider>
            {!isShown &&
                <Button onclick={showButtonClickHandler} btnClass={classes.btn}>Available Optional Courses</Button>
            }
        </div>
        {isShown &&
            <Optionals onclick={showButtonClickHandler}></Optionals>
        }
    </>
}
export const loader = async () => {
    const response = await fetch('https://courses-21dbb-default-rtdb.firebaseio.com/bscs.json')
    if (!response.ok) {
        throw json({ message: 'Could Not fetch' }, { status: 500 })
    }
    else {
        return response
    }
}
export default BSCS