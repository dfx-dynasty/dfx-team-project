import './Widgets.css';

export const PersonalityCard = () => {
    return (
        <div id="personality-card" className="p-4 m-3">
            <h5>Personality Type <i class="fa-solid fa-circle-question question-icon ms-2"></i></h5>
            <p>{"John's"} personality type is {"ESTP-A"}</p>
            <div className="row">
                <div className="col-2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSml9FZwBntf9HZSwL86jyQGuQhlInkut4y06frJQ4iPtu1QODB" alt="Personality type illustration." />
                </div>
                <div className="col-10">
                    <p>{"An Entrepreneur (ESTP) is someone with the Extraverted, Observant, Thinking, and Prospecting personality traits. They tend to be energetic and action-oriented, deftly navigating whatever is in front of them. They love uncovering life’s opportunities, whether socializing with others or in more personal pursuits."}</p>
                </div>
            </div>
        </div>
    )
}
