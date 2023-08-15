import './ExperienceRow.css'

export const ExperienceRow = () => {
    return (
        <div>

            <div className="row align-items-center">
                <div className="col">
                    <div className="d-flex">
                        <img src={"https://imgs.search.brave.com/35yJ0AAz887gh9V1WNVzv5WiPSmUbdJJlIp-Dp_Rabg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3ZjljYmNlZjEw/MTRjMGI1ZTQ4Yzgu/cG5n"} alt="qualification item image" className='employer-image' />
                        <p className='ms-4'>{"Google"}</p>
                    </div>
                </div>
                <div className='col'>
                    <p className="text-sm font-weight-bold col-12 mt-3 text-dark col-md-8 col-lg-4">{"Software Engineer"}</p>
                </div>
                <div className="col">
                    {"Jan 22 - Mar 22"}
                </div>
                <div className="col">
                    <button className="btn btn-link btn-sm">
                        Expand <i className="fas fa-plus ml-1"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
