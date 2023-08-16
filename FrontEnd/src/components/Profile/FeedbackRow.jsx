import './FeedbackCard.css';

export const FeedbackRow = () => {
    return (
        <div className="row p-3 mt-3 feedback-row">
            <div className='d-flex'>
                <div className='col-3'>
                    <div className="d-flex">
                        <img className="feedback-image" src={"https://imgs.search.brave.com/bHpTjt49BE6IN6GPjmIm4FaNZXFj4xFH3ey8KXtPew0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw"} alt="Profile Picture" />
                        <div className='mx-3 pt-1'>
                            <h6 className='font-bold'>{"John Doe"}</h6>
                            <p className='p-light'>{"Trainer"}</p>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <p className='p-light mb-0'>{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim voluptate error, odio facilis neque exercitationem illum cumque, excepturi ea eaque quidem assumenda. Esse nostrum repudiandae fuga quisquam et asperiores?Saepe accusamus dolore magnam cumque vero praesentium iusto aperiam odio iure, quos molestiae eligendi sunt non, consectetur voluptatibus illum dolores eum nobis. Ullam cumque, expedita eos suscipit labore ipsam quia. Dolores fugit autem vero nihil eveniet illo doloribus dolorem quae repellat."}</p>
                </div>
            </div>
        </div>
    )
}