import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    new_post_text: state.profilePage.new_post_text,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
