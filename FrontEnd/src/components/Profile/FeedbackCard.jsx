import { FeedbackRow } from "./FeedbackRow";
import './FeedbackCard.css'

export const FeedbackCard = () => {
    return (
        <div id='feedback-card' className='p-4 m-3'>
            <div>
                <h5 className='font-bold'>Feedback</h5>
            </div>
            <FeedbackRow />
        </div >
    )
}
