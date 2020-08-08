import React from "react";

import ProfileImg from "./ProfileImg";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profileBg">
      <div className="profile">
        <div className="person-info">
          <div className="profilInfo">
            <h1>Personal Info</h1>
          </div>
          <div className="personDesc">
            <div className="personIcon">
              <i class="fa fa-user-circle"></i>
            </div>
            <div className="personIdentity">
              <p className="profName">M.Fachri Zain</p>
              <p>Full name</p>
            </div>
          </div>

          <div className="personDesc">
            <div className="personIcon">
              <i class="fa fa-envelope"></i>
            </div>
            <div className="personIdentity">
              <p className="profName">zainfachri23@gmail.com</p>
              <p>Email</p>
            </div>
          </div>

          <div className="personDesc">
            <div className="personIcon">
              <i class="fa fa-phone"></i>
            </div>
            <div className="personIdentity">
              <p className="profName">0821-6480-4643</p>
              <p>Mobile phone</p>
            </div>
          </div>

          <div className="personDesc">
            <div className="personIcon">
              <i class="fa fa-map-marker"></i>
            </div>
            <div className="personIdentity">
              <p className="profName">Perumahan Permata Indah Residence B-12</p>
              <p>Address</p>
            </div>
          </div>
        </div>
        <ProfileImg />
      </div>
    </div>
  );
};

export default Profile;
