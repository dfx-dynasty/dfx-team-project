import './ExperienceRow.css'

export const ExperienceRow = () => {
    return (
        <div className="row align-items-center p-3 mt-3 experience-row">
            <div className="col-3">
                <div className="d-flex align-items-center">
                    <img src="https://imgs.search.brave.com/35yJ0AAz887gh9V1WNVzv5WiPSmUbdJJlIp-Dp_Rabg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3ZjljYmNlZjEw/MTRjMGI1ZTQ4Yzgu/cG5n" alt="qualification item image" className='employer-image' />
                    <p className='ms-4 mb-0 font-bold'>Google</p>
                </div>
            </div>
            <div className='col-4'>
                <p className="font-bold mb-0">Software Engineer</p>
            </div>
            <div className="col-3">
                Jan 22 - Mar 22
            </div>
            <div className="col-2 text-end">
                <button className="btn btn-sm expand-btn font-bold">
                    Expand <i className="fas fa-plus ml-1"></i>
                </button>
            </div>
        </div>
    )
}
