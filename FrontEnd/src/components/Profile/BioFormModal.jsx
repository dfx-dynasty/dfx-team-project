import { useState } from "react";
import "./BioFormModal.css";
import { putBioDataHandler } from "../../../utils/dataHandlers.js";
// import 

export const BioFormModal = ({ isOpen, onClose, Bio }) => {
  if (!isOpen) return null;
  //set the default formdata to retrieve current data

  // const { socials } = Bio;

  // console.log({ Bio });

  const [formData, setFormData] = useState({

    _id: {
      $oid: "64e492014bf1530e7e87f788"
    },
    user_type: "Graduate",
    bio: {
      firstName: Bio.firstname,
      lastName: "test",
      headshot: Bio.headshot,
      nationality: Bio.nationality,
      pronouns: Bio.pronouns,
      headline: Bio.headline,
      overview: Bio.overview,
      socials: {
        linkedin: Bio.socials.linkedin,
        github: Bio.socials.github,
        youtube: Bio.socials.youtube,
      }
    }

  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
    console.log(formData);
    putBioDataHandler(formData);


    // window.location.reload(false);
  };

  return (
    <div>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal fade show" style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Bio</h5>
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
                      <input type="text" id="headshot" name="headshot" value={formData.Bio.headshot} onChange={handleInputChange} className="form-control" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="headshot" className="form-label">
                        Nationality Image URL
                      </label>
                      <input type="text" id="overview" name="overview" value={formData.Bio.overview} onChange={handleInputChange} className="form-control" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="linkedin" className="form-label">
                        LinkedIn URL
                      </label>
                      <input type="text" id="linkedin" name="linkedin" value={formData.Bio.socials.linkedin} onChange={handleInputChange} className="form-control" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="github" className="form-label">
                        GitHub URL
                      </label>
                      <input type="text" id="github" name="github" value={formData.Bio.socials.github} onChange={handleInputChange} className="form-control" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="youtube" className="form-label">
                        Profile Video URL
                      </label>
                      <input type="text" id="youtube" name="youtube" value={formData.Bio.socials.youtube} onChange={handleInputChange} className="form-control" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2">
                      <label htmlFor="firstName" className="form-label">
                        First Name*
                      </label>
                      <input type="text" id="firstName" name="firstName" value={formData.Bio.firstName} onChange={handleInputChange} className="form-control" required />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="lastName" className="form-label">
                        Last Name*
                      </label>
                      <input type="text" id="lastName" name="lastName" value={formData.Bio.lastName} onChange={handleInputChange} className="form-control" required />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="pronouns" className="form-label">
                        Pronouns
                      </label>
                      <input type="text" id="pronouns" name="pronouns" value={formData.Bio.pronouns} onChange={handleInputChange} className="form-control" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="headline" className="form-label">
                        Profile Headline*
                      </label>
                      <input type="text" id="headline" name="headline" value={formData.Bio.headline} onChange={handleInputChange} className="form-control" required />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="overview" className="form-label">
                        overview
                      </label>
                      <input type="text" id="overview" name="overview" value={formData.Bio.overview} onChange={handleInputChange} className="form-control" />
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
