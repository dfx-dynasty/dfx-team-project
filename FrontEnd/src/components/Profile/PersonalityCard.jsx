import './Widgets.css';

export const PersonalityCard = () => {
    return (
        <div id="personality-card" className="p-4 mt-3">
            <h5 className='font-bold'>Personality Type <i className="fa-solid fa-circle-question question-icon ms-2"></i></h5>
            <p className='desc-font-small p-light'>{"John's"} personality type is <span className="personality-type font-bold">{"ESTP-A"}</span></p>
            <div className="row d-flex align-items-center">
                <div className="col-4">
                    <img className="personality-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSml9FZwBntf9HZSwL86jyQGuQhlInkut4y06frJQ4iPtu1QODB" alt="Personality type illustration." />
                </div>
                <div className="col-8">
                    <p className='ms-2 p-light'>{"An Entrepreneur (ESTP) is someone with the Extraverted, Observant, Thinking, and Prospecting personality traits. They tend to be energetic and action-oriented, deftly navigating whatever is in front of them. They love uncovering life’s opportunities, whether socializing with others or in more personal pursuits."}</p>
                </div>
            </div>
        </div>
    )
}
