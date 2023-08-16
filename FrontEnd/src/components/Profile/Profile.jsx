import Bio from "./Bio.jsx";
import Experience from './Experience.jsx'

const Profile = ({ userData }) => {
  // Calls Bio, Experience, Feedback, Personality, Extras
  return (


    <div>
      <Bio></Bio>
      <Experience></Experience>
    </div>

  )

};


export default Profile;
