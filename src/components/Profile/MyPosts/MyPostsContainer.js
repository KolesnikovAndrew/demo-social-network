import { connect } from "react-redux";
import {
  addPostActionCreator,
  getProfile,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state, props) => {
  return {
    posts: state.profilePage.posts,
    new_post_text: state.profilePage.new_post_text,
    profile: props.profile,
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
