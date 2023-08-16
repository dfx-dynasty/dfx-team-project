import "./Widgets.css";

export const Qualifications = () => {
    return (
        <div id="qualifications-card" className="p-4 mt-3">
            <h5 className="font-bold">Qualifications <i className="fa-solid fa-circle-question question-icon ms-2"></i></h5>
            <div className="d-flex flex-wrap">
                {/* Next div is the one to map thorough */}
                <div className="widget-card d-flex align-items-center p-3 m-3">
                    <i className="fa-solid fa-award fa-xl widget-icon"></i>
                    <div className="ms-3 mb-0">
                        <p className="font-small mb-0">Batchelors - Mathematics</p>
                        <p className="font-small p-light mb-0">Cambridge University</p>
                    </div>
                </div>
                {/* Following 3 divs are just placeholders, to see if layout is working */}
                <div className="widget-card d-flex align-items-center p-3 m-3">
                    <i className="fa-solid fa-award fa-xl widget-icon"></i>
                    <div className="ms-3 mb-0">
                        <p className="font-small mb-0">Batchelors - Mathematics</p>
                        <p className="font-small p-light mb-0">Cambridge University</p>
                    </div>
                </div>
                <div className="widget-card d-flex align-items-center p-3 m-3">
                    <i className="fa-solid fa-award fa-xl widget-icon"></i>
                    <div className="ms-3 mb-0">
                        <p className="font-small mb-0">Batchelors - Mathematics</p>
                        <p className="font-small p-light mb-0">Cambridge University</p>
                    </div>
                </div>
                <div className="widget-card d-flex align-items-center p-3 m-3">
                    <i className="fa-solid fa-award fa-xl widget-icon"></i>
                    <div className="ms-3 mb-0">
                        <p className="font-small mb-0">Batchelors - Mathematics</p>
                        <p className="font-small p-light mb-0">Cambridge University</p>
                    </div>
                </div>
            </div>
            <h6 className="view-all font-bold text-center mt-2">View All Projects</h6>
        </div>
    )
}
