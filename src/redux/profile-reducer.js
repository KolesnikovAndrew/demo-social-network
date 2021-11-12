import { usersAPI, profileAPI } from "../components/api/api";

const ADD_POST = "ADD-POST";

const SET_PROFILE = "SET_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
  posts: [
    { id: 1, message: "Здравствуйте", likescount: "12" },
    { id: 2, message: "абоба", likescount: "0" },
    { id: 3, message: "фркуты жизни...", likescount: "16" },
  ],
  profile: null,
  status: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let new_post = {
        id: 5,
        message: action.newPostText,
        likescount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, new_post],
        new_post_text: "",
      };
    }
    case SET_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const getProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);

  dispatch(setProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
