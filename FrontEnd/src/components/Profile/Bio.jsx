import './Bio.css';

const Bio = () => {
  return (
    <div id="bio-card">
      <div className="bio-banner">
        <img id="banner-image" src={"https://imgs.search.brave.com/c9qsI2YF7ouCcvlQ2W7GFlPHWKROa5y3tvHf6bHoO0Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFFTnZr/MkNTNE0vMS8wLzE2/MDB3L2NhbnZhLXNp/bXBsZS10ZWNobm9s/b2d5LWxpbmtlZGlu/LWJhbm5lci1pSHZt/LVltZFRjUS5qcGc"} alt="" />
      </div>
      <div className='d-flex'>
        <div className="picture-and-links">
          <div className='profile-images-container'>
            <img id="profile-picture" src={"https://imgs.search.brave.com/bHpTjt49BE6IN6GPjmIm4FaNZXFj4xFH3ey8KXtPew0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw"} />
            <img id="nationality" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/255px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"} alt="Nationality flag." />
          </div>
          <div className="links" >
            <a className="linkIcon" href={"https://www.linkedin.com/in/JohnDoe"}><i className="fa-brands fa-linkedin fa-xl"></i></a>
            <a className="linkIcon" href={"http://www.github.com/JohnDoe"}><i className="fa-brands fa-github fa-xl"></i></a>
            <a className="linkIcon" href={"http://www.youtube.com/JohnDoe"}><i className="fa-brands fa-youtube "></i></a>
          </div>
        </div>
        <div className="bio-details">
          <div className='d-flex'>
            <h4>{"John Doe"}</h4>
            <p>({"he/him"})</p>
          </div>
          <p>{"Tagline"}</p>
          <div id="overview" className='px-4 py-3'>
            <h6>Overview</h6>
            <p>{"Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consequuntur enim voluptas voluptate ea, ullam sint, animi facere quo sit nulla dolorum voluptatibus iste quas facilis! Necessitatibus ipsa repudiandae enim."}</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Bio;
