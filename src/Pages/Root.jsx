import { Outlet } from "react-router-dom"
import MainNavigation from "../Components/MainNavigation"


const Root = () =>
{
    return <>
    <MainNavigation />
    <Outlet />
    </>
}

export default Root