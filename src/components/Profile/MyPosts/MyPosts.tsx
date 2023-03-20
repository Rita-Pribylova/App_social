import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { PostType } from "../../../types/types";
import { required } from "../../../utils/validators/validators";
import { createField, GetStringKeys, Input} from "../../Common/FormsControls/FormsControls";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

export type MapPropsType = {
  posts: Array<PostType>
}

export type DispatchPropsType = {
  addPost: (newPostText: string) => void

}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = props => {
  let postsElements = props.posts.map(p => 
  <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

  type PropsType = {
  }

  type AddPostFormValuesType = {
    newPostText: string
  }

  type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

  const AddNewPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          {createField<AddPostFormValuesTypeKeys>('Post your message', 'newPostText', [required], Input)}
        </div>
        <div>
          <button> Add post </button>
        </div>
      </form>
    )
  }

  const AddNewPostFormRedux = reduxForm<AddPostFormValuesType, PropsType>({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

  let onAddPost = (values: AddPostFormValuesType) => {
    props.addPost(values.newPostText);
  }

  return <div className={s.postBlock}>
    <h3>My posts</h3>
    <AddNewPostFormRedux onSubmit={onAddPost} />
    <div className={s.posts}>
      {postsElements}
    </div>
  </div>
};

const MyPostsMemorized = React.memo(MyPosts)

export default MyPostsMemorized;