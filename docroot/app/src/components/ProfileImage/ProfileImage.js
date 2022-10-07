import React from "react";
import './ProfileImage.css';

class ProfileImage extends React.Component {
  render() {
    return <div className={"c-profile-image"}>
      <div className={"c-profile-image__inner"}>
        <picture className={"c-profile-image__image"}>
          <source media={"(min-width: 1028px)"} srcSet={"/leo-pitt-md.jpg"} />
          <source media={"(min-width: 375px)"} srcSet={"/leo-pitt-sm.jpg"} />
          <source srcSet={"/leo-pitt-xs.jpg"} />
          <img src={"/leo-pitt-md.jpg"} alt={"Leo Pitt"} />
        </picture>
      </div>
    </div>;
  }
}

export default ProfileImage