import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return <div className={s.item}>
    <img src="https://skrapxit.ru/image/cache/catalog/products/nashivki/zhenskie/04963-800x800.jpg" alt="avatar"></img>
    {props.message}
    <div>
      <span>like</span> {props.likesCount}
    </div>
  </div>
}

export default Post;