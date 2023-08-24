import { useState } from "react";
import "./BioFormModal.css";
import { putBioDataHandler } from "../../../utils/dataHandlers.js";
import BioModel from "../../../utils/Bio.Model.js";
import { useNavigate } from "react-router-dom";

export const BioFormModal = ({ isOpen, onClose, bio }) => {
  if (!isOpen) return null;

  const [firstname, setFirstname] = useState(bio.firstname);
  const [lastname, setLastname] = useState(bio.lastname);
  const [headshot, setHeadshot] = useState(bio.headshot);
  const [nationality, setNationality] = useState(bio.nationality);
  const [pronouns, setPronouns] = useState(bio.pronouns);
  const [headline, setHeadline] = useState(bio.headline);
  const [overview, setOverview] = useState(bio.overview);
  const [linkedinLink, setLinkedin] = useState(bio.socials.linkedin);
  const [githubLink, setGithub] = useState(bio.socials.github);
  const [youtubeLink, setYoutube] = useState(bio.socials.youtube);



  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
    const socials = {
      youtube: youtubeLink,
      github: githubLink,
      linkedin: linkedinLink,
    };
    const _id = {
      $oid: "64e492014bf1530e7e87f788",
    };
    const updatedBio = new BioModel(_id, firstname, lastname, headshot, nationality, pronouns, headline, overview, socials);

    updateAndRefreshPage(updatedBio)
  };

  const updateAndRefreshPage = async (updatedBio) => {
    await putBioDataHandler(updatedBio);
    window.location.reload(false);
  }

  return (
    <div>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal fade show" style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit bio</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <form id="bioForm" onSubmit={handleSubmit}>
                <div className="d-flex">
                  <div className="me-5">
                    <div className="mb-2">
                      <label htmlFor="headshot" className="form-label">
                        Profile Image URL:
                      </label>
                      <input type="text" id="headshot" name="headshot" placeholder={bio.headshot} onChange={(event) => setHeadshot(event.target.value)} className="form-control" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="nationality" className="form-label">
                        Nationality Image URL
                      </label>
                      <input type="text" id="headshot" name="nationality" placeholder={bio.nationality} onChange={(event) => setNationality(event.target.value)} className="form-control" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="linkedin" className="form-label">
                        LinkedIn URL
                      </label>
                      <input type="text" id="linkedin" name="linkedinLink" placeholder={bio.socials.linkedin} onChange={(event) => setLinkedin(event.target.value)} className="form-control" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="github" className="form-label">
                        GitHub URL
                      </label>
                      <input type="text" id="github" name="githubLink" placeholder={bio.socials.github} onChange={(event) => setGithub(event.target.value)} className="form-control" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="youtube" className="form-label">
                        Profile Video URL
                      </label>
                      <input type="text" id="youtube" name="youtubeLink" placeholder={bio.socials.youtube} onChange={(event) => setYoutube(event.target.value)} className="form-control" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2">
                      <label htmlFor="firstName" className="form-label">
                        First Name*
                      </label>
                      <input type="text" id="firstName" name="firstname" placeholder={bio.firstname} onChange={(event) => setFirstname(event.target.value)} className="form-control" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="lastName" className="form-label">
                        Last Name*
                      </label>
                      <input type="text" id="lastName" name="lastname" placeholder={bio.lastname} onChange={(event) => setLastname(event.target.value)} className="form-control" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="pronouns" className="form-label">
                        Pronouns
                      </label>
                      <input type="text" id="pronouns" name="pronouns" placeholder={bio.pronouns} onChange={(event) => setPronouns(event.target.value)} className="form-control" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="headline" className="form-label">
                        Profile Headline*
                      </label>
                      <input type="text" id="headline" name="headline" placeholder={bio.headline} onChange={(event) => setHeadline(event.target.value)} className="form-control" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="overview" className="form-label">
                        overview
                      </label>
                      <input type="text" id="overview" name="overview" placeholder={bio.overview} onChange={(event) => setOverview(event.target.value)} className="form-control" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn" form="bioForm">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
