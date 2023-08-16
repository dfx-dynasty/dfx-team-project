import { ExperienceRow } from './ExperienceRow';
import "./Experience.css";

const Experience = () => {
    return (
        <div id='experience-card' className='p-4 m-3'>
            <div>
                <h5 className='font-bold'>Experience</h5>
                <p className='p-light'>View the work experience of the engineer</p>
            </div>
            <div className="row border-bottom px-3">
                <p className="col-3 font-bold">EMPLOYER</p>
                <p className="col-4 font-bold">POSITION</p>
                <p className="col-3 font-bold">DATES</p>
                <p className='col-2'></p>
            </div>
            <ExperienceRow />
        </div >
    )
}

export default Experience