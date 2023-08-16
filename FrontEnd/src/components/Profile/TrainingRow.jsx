export const TrainingRow = () => {
    return (
        <div className="row d-flex align-items-center p-3 mt-3 training-row">
            <div className="col-5">
                <p>Best Practice</p>
                <p className="learn-more-btn">Learn More</p>
            </div>
            <div className='col-5'>
                <p className="font-bold">Data ethics assignment</p>
                <p className="font-bold">Python Challenges</p>
            </div>
            <div className="col-2">
                <p className="pass-badge text-center">Pass</p>
                <p className="pass-badge text-center">Pass</p>
            </div>
        </div>
    )
}
