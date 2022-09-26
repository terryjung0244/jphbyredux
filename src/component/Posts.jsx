import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Posts = () => {

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    // dispatch
  }, []);

  return (
    <div>
      Posts
    </div>
  )
}

export default Posts
