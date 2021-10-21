import React, { useState, useEffect } from "react";
import * as Style from "./styles";
import { Api } from "./../../api/api";
import Button from "../../components/Button";
import ProfileCard from "../../components/ProfileCard";

const Profiles = (props) => {
  const id = localStorage.getItem("USER_ID");
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const loadProfiles = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readAllProfilesbyUserId(id),
        true
      );
      const result = await response.json();
      setProfiles(result);
    };
    loadProfiles();
  }, []);
  console.log(profiles);
  return (
    <>
      <Style.Container>
        <Style.ProfileInfo>
          {profiles.map((profile) => {
            return <ProfileCard key={profile.id} profile={profile} />;
          })}
        </Style.ProfileInfo>
        <Button text="Criar Perfil" />
      </Style.Container>
    </>
  );
};

export default Profiles;
