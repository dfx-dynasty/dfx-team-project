import PropTypes from "prop-types";
import { useState } from "react";
import { BioFormModal } from "./BioFormModal";
import "./Bio.css";

const Bio = ({ bioData, fetchUserData }) => {
  const fullName = `${bioData.firstname} ${bioData.lastname}`;

  const { socials } = bioData;

  const youtube = bioData.socials.youtube;
  const github = bioData.socials.github;
  const linkedin = bioData.socials.linkedin;
  const pronouns = bioData.pronouns;
  const nationality = bioData.nationality;
  const headshot = bioData.headshot;
  const overview = bioData.overview;
  const headline = bioData.headline;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfileEditClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div id="bio-card">
      <div className="bio-banner">
        <img
          id="banner-image"
          src={
            "https://imgs.search.brave.com/c9qsI2YF7ouCcvlQ2W7GFlPHWKROa5y3tvHf6bHoO0Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFFTnZr/MkNTNE0vMS8wLzE2/MDB3L2NhbnZhLXNp/bXBsZS10ZWNobm9s/b2d5LWxpbmtlZGlu/LWJhbm5lci1pSHZt/LVltZFRjUS5qcGc"
          }
          alt=""
        />
      </div>
      <div className="profile-wrapper d-flex">
        <div className="picture-and-links">
          <div className="profile-images-container d-flex flex-column align-items-center mx-auto mb-5">
            <img id="profile-picture" src={headshot} />
            <img
              id="nationality"
              src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/255px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"}
              alt={nationality}
            />
          </div>
          <div className="links d-flex justify-content-evenly">
            <a className="linkIcon" href={linkedin}>
              <i className="fa-brands fa-linkedin fa-xl"></i>
            </a>
            <a className="linkIcon" href={github}>
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
            <a className="linkIcon" href={youtube}>
              <i className="fa-brands fa-youtube fa-xl"></i>
            </a>
          </div>
        </div>
        <div className="bio-details flex-grow-1">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-end mb-2">
              <h4 className="font-bold align-self-end me-2 mb-0">{fullName}</h4>
              <p className="p-light align-self-end mb-0">({pronouns})</p>
            </div>
            <i className="fa-solid fa-pen" onClick={handleProfileEditClick} />
            <BioFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} bio={bioData} fetchUserData={fetchUserData} />
          </div>
          <p className="p-light">{headline}</p>
          <div id="overview" className="px-4 py-3">
            <h6 className="font-bold">Overview</h6>
            <p className="p-light">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Bio.propTypes = {
  Bio: PropTypes.shape({
    _id: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    headshot: PropTypes.string,
    nationality: PropTypes.string,
    pronouns: PropTypes.string,
    socials: PropTypes.shape({
      youtube: PropTypes.string,
      github: PropTypes.string,
      linkedin: PropTypes.string,
    }),
  }),
};
export default Bio;
