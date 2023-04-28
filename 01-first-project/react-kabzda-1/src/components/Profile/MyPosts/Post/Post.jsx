import React from "react";
import s from "./Post.module.css";


const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gmU4bDbD7f7qG8xDCR9FiHZ_Ya1Yn5hKBw&usqp=CAU" />
        {props.message}
         <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
