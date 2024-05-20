import { 
  GET_GENERAL_POSTS_SUCCESS,
  GET_GENERAL_POSTS_FAIL,
  ADD_GENERAL_POSTS_SUCCESS,
  ADD_GENERAL_POSTS_FAIL,
  UPDATE_GENERAL_POSTS_SUCCESS,
  UPDATE_GENERAL_POSTS_FAIL,
  DELETE_GENERAL_POSTS_SUCCESS,
  DELETE_GENERAL_POSTS_FAIL,
  GET_USER_POSTS_SUCCESS,
  GET_USER_POSTS_FAIL,
  ADD_USER_POSTS_SUCCESS,
  ADD_USER_POSTS_FAIL,
  UPDATE_USER_POSTS_SUCCESS,
  UPDATE_USER_POSTS_FAIL,
  DELETE_USER_POSTS_SUCCESS,
  DELETE_USER_POSTS_FAIL
} from "./actionTypes"

const INIT_STATE = {
  generalPosts: [],
  usersPosts: [],
};

const posts = (state = INIT_STATE, action) => {
  switch (action.type) {
    // general posts cases

    case GET_GENERAL_POSTS_SUCCESS:
      return {
        ...state,
        generalPosts: action.payload,
      };

    case GET_GENERAL_POSTS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case ADD_GENERAL_POSTS_SUCCESS:
      return {
        ...state,
      };
    case ADD_GENERAL_POSTS_FAIL:
      return {
        ...state,
        error: action.payload.message,
      };
    
    case UPDATE_GENERAL_POSTS_SUCCESS:
      return {
        ...state,
        generalPosts: state.generalPosts.map(post =>
          post._id === action.payload._id ? { post, ...action.payload } : post
        ),
      };

    case UPDATE_GENERAL_POSTS_FAIL:
      return {
        ...state,
        error: action.payload.message,
      };

    case DELETE_GENERAL_POSTS_SUCCESS:
      return {
        ...state,
        generalPosts: state.generalPosts.filter(
          post => post._id.toString() !== action.payload.id.toString()
        ),
      };

    case DELETE_GENERAL_POSTS_FAIL: {
      return {
        ...state,
        error: action.payload.message,
      };
    }
    // users posts cases
    case GET_USER_POSTS_SUCCESS:
      return {
        ...state,
        usersPosts: action.payload,
      };

    case GET_USER_POSTS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case ADD_USER_POSTS_SUCCESS:
      return {
        ...state,
      };
    case ADD_USER_POSTS_FAIL:
      return {
        ...state,
        error: action.payload.message,
      };
    
    case UPDATE_USER_POSTS_SUCCESS:
      return {
        ...state,
        usersPosts: state.usersPosts.map(post =>
          post._id === action.payload._id ? { post, ...action.payload } : post
        ),
      };

    case UPDATE_USER_POSTS_FAIL:
      return {
        ...state,
        error: action.payload.message,
      };

    case DELETE_USER_POSTS_SUCCESS:
      return {
        ...state,
        usersPosts: state.usersPosts.filter(
          post => post._id.toString() !== action.payload.id.toString()
        ),
      };

    case DELETE_USER_POSTS_FAIL: {
      return {
        ...state,
        error: action.payload.message,
      };
    }

    default:
      return state;
  }
};

export default posts;
