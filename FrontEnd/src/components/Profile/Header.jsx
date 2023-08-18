import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "./Widgets.css";

export const Header = ({ user }) => {
  const [dayTime, setDayTime] = useState("");
  const firstname = user.firstname;

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setDayTime("morning");
    }
    if (currentHour >= 12 && currentHour < 18) {
      setDayTime("afternoon");
    }
    if (currentHour >= 18 || currentHour < 5) {
      setDayTime("evening");
    }
  }, []);

  return (
    <div id="header" className="d-flex justify-content-between border-bottom px-4 py-2">
      <h5>
        Good {dayTime}, {firstname}! 👋
      </h5>
      <div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="themeSwitch" />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.object,
};
