
import Button from './Button'
import classes from './CurrentInterests.module.css'

const CurrentInterests = (props) =>
{
    return <div className={`mb-5 mt-0 p-0 bg-none container mx-sm-auto text-md-start text-center ${classes.InterestContainer}`}>
        <div className="row">
            <div className={`col-sm-12`}>
                <h3 className={`${classes.header} fs-md-2 fs-4`}>Courses In Topic of Current Interest</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className='ms-2'>Enterprise Resource Planner</div>
            </div>
            <div className="col-md-4 pb-md-2 pb-0">
                <div className='ms-2 ms-md-0'>Web Infrastructure Services and Applications</div>
            </div>
            <div className="col-md-4">
                <div className='ms-2'>Game Theory and Simulation</div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className='ms-2'>API Programming</div>
            </div>
            <div className="col-md-4 pb-md-2 pb-0">
                <div className='ms-2 ms-md-0'> Enterprise Network Technologies/Window/Linux</div>
            </div>
            <div className="col-md-4">
             <div className='ms-2'> Entrepreneurship</div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <Button btnClass = {classes.btn} onclick ={props.onclick}>Close</Button>
            </div>
        </div>
    </div>
   
}

export default CurrentInterests