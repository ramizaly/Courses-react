import { useRouteError } from "react-router-dom"
import MainNavigation from "../Components/MainNavigation"


const ErrorPage = () =>
{
    const error = useRouteError();
    let title = 'An error Occured'
    let message = 'There was an error'

    if(error.status === 500)
    {
       message = error.data.message

    }
    else if(error.status === 404)
    {
        title = 'NOT FOUND'
        message = 'Could not find the page You are looking for'
    }
    return <>
    <MainNavigation />
    <div className="text-center  m-5 ">
        <h1>
            <span>
                <img src="./Error.png"
                style={{height : '3rem' , margin : '0px 1rem' , paddingBottom : '10px'}}
                className = 'd-sm-inline-block d-none'>
                </img>
            </span>{title}
        </h1>
        <p>{message}</p>
    </div>
    </>
}

export default ErrorPage