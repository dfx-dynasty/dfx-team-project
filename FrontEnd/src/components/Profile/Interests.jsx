import "./Widgets.css";

export const Interests = () => {
    return (
        <div id="interests-card" className="p-4 mt-3">
            <h5 className=" font-bold">Interests <i className="fa-solid fa-circle-question question-icon ms-2"></i></h5>
            <div className="d-flex flex-wrap">
                {/* Next div is the one to map thorough */}
                <div className="widget-card d-flex align-items-center p-3 m-3">
                    <i className="fa-solid fa-map fa-xl widget-icon"></i>
                    <div className="ms-3">
                        <p className="mb-0 font-bold font-smallest p-light">FAVOURITE TRAVEL</p>
                        <p className="mb-0 font-small">Las Vegas</p>
                    </div>
                </div>
                {/* Following 3 divs are just placeholders, to see if layout is working */}
                <div className="widget-card d-flex align-items-center p-3 m-3">
                    <i className="fa-solid fa-tv fa-xl widget-icon"></i>
                    <div className="ms-3">
                        <p className="mb-0 font-bold font-smallest p-light">FAVOURITE SERIES</p>
                        <p className="mb-0 font-small">Breaking Bad</p>
                    </div>
                </div>
                <div className="widget-card d-flex align-items-center p-3 m-3">
                    <i className="fa-solid fa-headphones fa-xl widget-icon"></i>
                    <div className="ms-3">
                        <p className="mb-0 font-bold font-smallest p-light">FAVOURITE BAND</p>
                        <p className="mb-0 font-small">Foo Fighters</p>
                    </div>
                </div>
                <div className="widget-card d-flex align-items-center p-3 m-3">
                    <i className="fa-regular fa-futbol fa-xl widget-icon"></i>
                    <div className="ms-3">
                        <p className="mb-0 font-bold font-smallest p-light">FAVOURITE SPORT</p>
                        <p className="mb-0 font-small">Any team game</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
