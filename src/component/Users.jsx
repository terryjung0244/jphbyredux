import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { getJphUsersRequestAction, getJphPostsByUserIdRequestAction } from '../redux/jph/jphAction'
import { useNavigate } from 'react-router-dom'

const Users = () => {

  const dispatch = useDispatch();
  const { users, posts } = useSelector(state => state.jphReducer);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getJphUsersRequestAction())
  }, []);

  const onClickUser = (user) => {
    // dispatch(getJphPostsByUserIdRequestAction(user))
    navigate(`/posts/${user.id}`);
  }

  console.log(posts);

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id} onClick={() => onClickUser(user)}>
            {user.name}
          </div>
        )
      })}
    </div>
  )
}

export default Users
