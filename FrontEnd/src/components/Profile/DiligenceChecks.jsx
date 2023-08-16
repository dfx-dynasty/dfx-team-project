import "./Widgets.css";

export const DiligenceChecks = () => {
    return (
        <div id="diligence-check-card" className="p-4 m-3">
            <h5>Due Diligence Checks</h5>
            <div className="d-flex flex-wrap">
                {/* Next div is the one to map thorough */}
                <div className="widget-card d-flex align-items-center justify-content-between p-3 m-3">
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-user-secret fa-xl widget-icon"></i>
                        <p className="ms-3 mb-0">Disclosure</p>
                    </div>
                    <i className="fa-regular fa-circle-check fa-xl diligence-check"></i>
                </div>
                {/* Following 3 divs are just placeholders, to see if layout is working */}
                <div className="widget-card d-flex align-items-center justify-content-between p-3 m-3">
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-id-card-clip fa-xl widget-icon"></i>
                        <p className="ms-3 mb-0">Identity</p>
                    </div>
                    <i className="fa-regular fa-circle-check fa-xl diligence-check"></i>
                </div>
                <div className="widget-card d-flex align-items-center justify-content-between p-3 m-3">
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-laptop fa-xl widget-icon"></i>
                        <p className="ms-3 mb-0">Credit</p>
                    </div>
                    <i className="fa-regular fa-circle-check fa-xl diligence-check"></i>
                </div>
                <div className="widget-card d-flex align-items-center justify-content-between p-3 m-3">
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-clipboard-check fa-xl widget-icon"></i>
                        <p className="ms-3 mb-0">Right to work</p>
                    </div>
                    <i className="fa-regular fa-circle-check fa-xl diligence-check"></i>
                </div>
                <div className="widget-card d-flex align-items-center justify-content-between p-3 m-3">
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-user-graduate fa-xl widget-icon"></i>
                        <p className="ms-3 mb-0">Education</p>
                    </div>
                    <i className="fa-regular fa-circle-check fa-xl diligence-check"></i>
                </div>
            </div>
        </div>
    )
}
