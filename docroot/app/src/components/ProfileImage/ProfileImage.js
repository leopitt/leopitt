import React from "react";
import './ProfileImage.css';

class ProfileImage extends React.Component {
  render() {
    return <div className={"c-profile-image"}>
      <div className={"c-profile-image__inner"}>
        <img className={"c-profile-image__image"} src={"/profile.jpg"} />
      </div>
    </div>;
  }
}

export default ProfileImage