import React from "react";
import { ProfileType } from "../../types/types";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PropsType = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  saveProfile: (profile: ProfileType) => Promise<any>
  savePhoto: (file: File) => void
}

const Profile: React.FC<PropsType> = (props) => {
  return <div>
    <ProfileInfo savePhoto={props.savePhoto}
      isOwner={props.isOwner}
      profile={props.profile}
      status={props.status}
      saveProfile={props.saveProfile}
      updateStatus={props.updateStatus} />
    <MyPostsContainer />
  </div>
}

export default Profile;