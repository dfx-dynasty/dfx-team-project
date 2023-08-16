import "./Widgets.css";

export const Certifications = () => {
    return (
        <div id="certifications-card" className="p-4 m-3">
            <h5>Certifications <i class="fa-solid fa-circle-question question-icon ms-2"></i></h5>
            <div className="d-flex flex-wrap">
                {/* Next div is the one to map thorough */}
                <div className="widget-card d-flex align-content-center align-items-center p-3 m-3">
                    <img className="widget-images" src="https://imgs.search.brave.com/NC6ONilNbhJb6M309y2cY_Agu30aT4SSOMP3QhjDRJg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3JlZGx5LmNv/bS9pbWFnZXMvZDgw/MTdjNzctM2NjMC00/ZmRmLThlMTctNjJl/NTA2MzI4MTJlL2Jy/b256ZV8xX3NtYWxs/LnBuZw" alt="Certification icon." />
                    <p className="ms-3 mb-0">Certified Entry-Level Python Programmer</p>
                </div>
                {/* Following 3 divs are just placeholders, to see if layout is working */}
                <div className="widget-card d-flex align-content-center align-items-center p-3 m-3">
                    <img className="widget-images" src="https://imgs.search.brave.com/NC6ONilNbhJb6M309y2cY_Agu30aT4SSOMP3QhjDRJg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3JlZGx5LmNv/bS9pbWFnZXMvZDgw/MTdjNzctM2NjMC00/ZmRmLThlMTctNjJl/NTA2MzI4MTJlL2Jy/b256ZV8xX3NtYWxs/LnBuZw" alt="Certification icon." />
                    <p className="ms-3 mb-0">Certified Entry-Level Python Programmer</p>
                </div>
                <div className="widget-card d-flex align-content-center align-items-center p-3 m-3">
                    <img className="widget-images" src="https://imgs.search.brave.com/NC6ONilNbhJb6M309y2cY_Agu30aT4SSOMP3QhjDRJg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3JlZGx5LmNv/bS9pbWFnZXMvZDgw/MTdjNzctM2NjMC00/ZmRmLThlMTctNjJl/NTA2MzI4MTJlL2Jy/b256ZV8xX3NtYWxs/LnBuZw" alt="Certification icon." />
                    <p className="ms-3 mb-0">Certified Entry-Level Python Programmer</p>
                </div>
                <div className="widget-card d-flex align-content-center align-items-center p-3 m-3">
                    <img className="widget-images" src="https://imgs.search.brave.com/NC6ONilNbhJb6M309y2cY_Agu30aT4SSOMP3QhjDRJg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3JlZGx5LmNv/bS9pbWFnZXMvZDgw/MTdjNzctM2NjMC00/ZmRmLThlMTctNjJl/NTA2MzI4MTJlL2Jy/b256ZV8xX3NtYWxs/LnBuZw" alt="Certification icon." />
                    <p className="ms-3 mb-0">Certified Entry-Level Python Programmer</p>
                </div>
            </div>
        </div>
    )
}
