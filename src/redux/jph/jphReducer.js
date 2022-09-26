import { JPH_CONST_STRING } from '../../service/const/actionConst';

const { GET_JPH_USERS_REQUEST, 
  GET_JPH_USERS_SUCCESS, 
  GET_JPH_USERS_FAILURE,
GET_JPH_POSTS_BY_USER_ID_REQUEST,
GET_JPH_POSTS_BY_USER_ID_SUCCESS,
GET_JPH_POSTS_BY_USER_ID_FAILURE } = JPH_CONST_STRING;

const initialState = {
  users: [],
  posts: []
}


export default function jphReducer(state = initialState, action) {
  switch (action.type) {
    case GET_JPH_USERS_REQUEST:
      return {
        ...state
      }
    case GET_JPH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      }
    case GET_JPH_USERS_FAILURE:
      return {
        ...state,
      }
    case GET_JPH_POSTS_BY_USER_ID_REQUEST:
      return {
        ...state,
      }
    
    case GET_JPH_POSTS_BY_USER_ID_SUCCESS:
      return {
        ...state,
        posts: action.payload
      }
    
    case GET_JPH_POSTS_BY_USER_ID_FAILURE:
      return {
        ...state,
        
      }
    default:
      return state;
  }
}