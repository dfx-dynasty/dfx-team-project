import { Header } from "./Header.jsx";
import Bio from "./Bio.jsx";
import Experience from "./Experience.jsx";
import { Training } from "./Training.jsx";
import { FeedbackCard } from "./FeedbackCard.jsx";
import { PersonalityCard } from "./PersonalityCard.jsx";
import { Certifications } from "./Certifications.jsx";
import { Qualifications } from "./Qualifications.jsx";
import { DiligenceChecks } from "./DiligenceChecks.jsx";
import { Interests } from "./Interests.jsx";
import { KeyTools } from "./KeyTools.jsx";
import PropTypes from "prop-types";

const Profile = ({ userData, fetchUserData }) => {
  // Calls Bio, Experience, Feedback, Personality, Extras
  const bioData = userData.bio;

  return (
    <>
      <div className="row">
        <div className="col">
          <Header bioData={bioData} />
        </div>
      </div>
      <div className="m-3">
        <div className="row">
          <div className="col">
            <Bio bioData={bioData} fetchUserData={fetchUserData} />
          </div>
        </div>
        {/* <div className="row">
          <div className="col-8">
            <Experience />
            <Training />
            <FeedbackCard />
          </div>
          <div className="col-4">
            <PersonalityCard />
            <Certifications />
            <Qualifications />
            <DiligenceChecks />
            <Interests />
            <KeyTools />
          </div>
        </div> */}
      </div>
    </>
  );
};

Profile.defaultProps = {
  userData: {},
};

Profile.propTypes = {
  userData: PropTypes.object,
};

export default Profile;
