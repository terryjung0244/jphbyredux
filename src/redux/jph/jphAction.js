import { JPH_CONST_STRING } from '../../service/const/actionConst';

const { GET_JPH_USERS_REQUEST, 
  GET_JPH_USERS_SUCCESS, 
  GET_JPH_USERS_FAILURE, 
  GET_JPH_POSTS_BY_USER_ID_REQUEST,
  GET_JPH_POSTS_BY_USER_ID_SUCCESS,
  GET_JPH_POSTS_BY_USER_ID_FAILURE } = JPH_CONST_STRING;

export const getJphUsersRequestAction = () => {
  return {
    type: GET_JPH_USERS_REQUEST
  }
}

export const getJphUsersSuccessAction = (apiSuccess) => {
  return {
    type: GET_JPH_USERS_SUCCESS, payload: apiSuccess
  }
}

export const getJphUsersFailureAction = (apiFailure) => {
  return {
    type: GET_JPH_USERS_FAILURE, payload: apiFailure
  }
}

export const getJphPostsByUserIdRequestAction = (userId) => {
  return {
    type: GET_JPH_POSTS_BY_USER_ID_REQUEST, payload: userId
  }
}

export const getJphPostsByUserIdSuccessAction = (apiSuccess) => {
  return {
    type: GET_JPH_POSTS_BY_USER_ID_SUCCESS, payload: apiSuccess
  }
}

export const getJphPostsByUserIdFailureAction = (apiFailure) => {
  return {
    type: GET_JPH_POSTS_BY_USER_ID_FAILURE, payload: apiFailure
  }
}

