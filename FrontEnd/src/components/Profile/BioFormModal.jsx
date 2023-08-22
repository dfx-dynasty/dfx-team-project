import { useState } from "react";
import './BioFormModal.css';

export const BioFormModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        imageUrl: "",
        nationalityImageUrl: "",
        pronouns: "",
        headline: "",
        tagline: "",
        linkedinUrl: "",
        githubUrl: "",
        videoUrl: "",
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
    };

    return (
        <div>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal fade show" style={{ display: "block" }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Bio</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form id="bioForm" onSubmit={handleSubmit}>
                                <div className="d-flex">
                                    <div className="me-5">
                                        <div className="mb-2">
                                            <label htmlFor="imageUrl" className="form-label">
                                                Profile Image URL:
                                            </label>
                                            <input
                                                type="text"
                                                id="imageUrl"
                                                name="imageUrl"
                                                value={formData.imageUrl}
                                                onChange={handleInputChange}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="imageUrl" className="form-label">
                                                Nationality Image URL
                                            </label>
                                            <input
                                                type="text"
                                                id="nationalityImageUrl"
                                                name="nationalityImageUrl"
                                                value={formData.nationalityImageUrl}
                                                onChange={handleInputChange}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="linkedinUrl" className="form-label">
                                                LinkedIn URL
                                            </label>
                                            <input
                                                type="text"
                                                id="linkedinUrl"
                                                name="linkedinUrl"
                                                value={formData.linkedinUrl}
                                                onChange={handleInputChange}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="githubUrl" className="form-label">
                                                GitHub URL
                                            </label>
                                            <input
                                                type="text"
                                                id="githubUrl"
                                                name="githubUrl"
                                                value={formData.githubUrl}
                                                onChange={handleInputChange}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="videoUrl" className="form-label">
                                                Profile Video URL
                                            </label>
                                            <input
                                                type="text"
                                                id="videoUrl"
                                                name="videoUrl"
                                                value={formData.videoUrl}
                                                onChange={handleInputChange}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mb-2">
                                            <label htmlFor="firstName" className="form-label">
                                                First Name*
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                className="form-control"
                                                required
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="lastName" className="form-label">
                                                Last Name*
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className="form-control"
                                                required
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="pronouns" className="form-label">
                                                Pronouns
                                            </label>
                                            <input
                                                type="text"
                                                id="pronouns"
                                                name="pronouns"
                                                value={formData.pronouns}
                                                onChange={handleInputChange}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="headline" className="form-label">
                                                Profile Headline*
                                            </label>
                                            <input
                                                type="text"
                                                id="headline"
                                                name="headline"
                                                value={formData.headline}
                                                onChange={handleInputChange}
                                                className="form-control"
                                                required
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="tagline" className="form-label">
                                                Tagline
                                            </label>
                                            <input
                                                type="text"
                                                id="tagline"
                                                name="tagline"
                                                value={formData.tagline}
                                                onChange={handleInputChange}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn"
                                form="bioForm"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
