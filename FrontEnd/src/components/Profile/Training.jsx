import { TrainingRow } from "./TrainingRow.jsx";
import './Training.css';

export const Training = () => {
  return (
    <div id='training-card' className='p-4 mt-3'>
      <div>
        <h5 className='font-bold'>Training Progress</h5>
        <p className='desc-font-small p-light'>Expand each module to learn more</p>
      </div>
      <div className="row border-bottom px-3">
        <p className="col-5 font-bold">LEARNING MODULE</p>
        <p className="col-5 font-bold">CHALLENGE</p>
        <p className="col-2 font-bold">RESULT</p>
      </div>
      <TrainingRow />
      <TrainingRow />
      <TrainingRow />
      <TrainingRow />
    </div >
  )
}
