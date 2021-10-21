import React from "react";
import * as Style from "./styles";
import userImage from "./../../assets/userImage.png";

const ProfileCard = ({ profile }) => {
  return (
    <Style.Container>
      <div>
        <img src={profile.image || userImage} />
        <h3>{profile.nickname}</h3>
      </div>
    </Style.Container>
  );
};

export default ProfileCard;
