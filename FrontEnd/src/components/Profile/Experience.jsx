import { ExperienceRow } from './ExperienceRow';
import "./Experience.css";

const Experience = () => {
    return (
        <div id='experience-card' className='p-4 mt-3'>
            <div>
                <h5 className='font-bold'>Experience</h5>
                <p className='desc-font-small p-light'>View the work experience of the engineer</p>
            </div>
            <div className="row border-bottom px-3">
                <p className="col-3 font-bold">EMPLOYER</p>
                <p className="col-4 font-bold">POSITION</p>
                <p className="col-3 font-bold">DATES</p>
                <p className='col-2'></p>
            </div>
            <ExperienceRow />
            <ExperienceRow />
            <ExperienceRow />
        </div >
    )
}

export default Experience