import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getJphPostsByUserIdRequestAction } from '../redux/jph/jphAction';

const Posts = () => {

  const { userId } = useParams();

  const dispatch = useDispatch();
  const { posts, loading } = useSelector(state => state.jphReducer);

  useEffect(() => {
    dispatch(getJphPostsByUserIdRequestAction({id: userId}))
  }, []);

  console.log(loading)
  return (
    <div>
      {loading? <div>loading</div> : null}
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <div>{post.body}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Posts


