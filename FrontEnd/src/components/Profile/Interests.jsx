import "./Widgets.css";

export const Interests = () => {
    return (
        <div id="interests-card" className="p-4 m-3">
            <h5>Interests <i class="fa-solid fa-circle-question question-icon ms-2"></i></h5>
            <div className="d-flex flex-wrap">
                {/* Next div is the one to map thorough */}
                <div className="widget-card d-flex align-items-center p-3 m-3">
                    <i class="fa-solid fa-map fa-xl widget-icon"></i>
                    <div className="ms-3">
                        <p className="mb-0">FAVOURITE TRAVEL</p>
                        <p className="mb-0">Las Vegas</p>
                    </div>
                </div>
                {/* Following 3 divs are just placeholders, to see if layout is working */}
                <div className="widget-card d-flex align-items-center p-3 m-3">
                    <i class="fa-solid fa-tv fa-xl widget-icon"></i>
                    <div className="ms-3">
                        <p className="mb-0">FAVOURITE SERIES</p>
                        <p className="mb-0">Breaking Bad</p>
                    </div>
                </div>
                <div className="widget-card d-flex align-items-center p-3 m-3">
                    <i class="fa-solid fa-headphones fa-xl widget-icon"></i>
                    <div className="ms-3">
                        <p className="mb-0">FAVOURITE BAND</p>
                        <p className="mb-0">Foo Fighters</p>
                    </div>
                </div>
                <div className="widget-card d-flex align-items-center p-3 m-3">
                    <i class="fa-regular fa-futbol fa-xl widget-icon"></i>
                    <div className="ms-3">
                        <p className="mb-0">FAVOURITE SPORT</p>
                        <p className="mb-0">Any team game</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
