import { ExperienceRow } from './ExperienceRow';
import "./Experience.css";

const Experience = () => {

    // const populateExperience = () => {
    //     return (
    //         <h1>test</h1>
    //     )
    // }

    return (
        // <div>
        //     <h4>Experience</h4>
        //     <h6>View the work experience of the engineer</h6>
        //     <table className="experience-table">
        //         <thead>
        //             <tr>
        //                 <th>Employer</th>
        //                 <th>Position</th>
        //                 <th>Dates</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             <tr>
        //                 <td>
        //                     <ExperienceRow></ExperienceRow>
        //                 </td>
        //             </tr>
        //         </tbody>
        //     </table>
        // </div>
        <div id='experience-card' className='p-4'>
            <div>
                <h5>Experience</h5>
                <p>View the work experience of the engineer</p>
            </div>
            <div className="row border-bottom">
                <p className="col">EMPLOYER</p>
                <p className="col">POSITION</p>
                <p className="col">DATES</p>
                <p className='col'></p>
            </div>
            <div>
                <ExperienceRow></ExperienceRow>
            </div>
        </div >
    )
}

export default Experience