import React, { Suspense } from 'react'
import { Routes, Route, Link } from 'react-router-dom';

const Home = React.lazy(() => import('./component/Home'));
const Posts = React.lazy(() => import('./component/Posts'));
const Users = React.lazy(() => import('./component/Users'));

const route = [
  {
    to: '/',
    title: 'Home'
  },
  {
    to: '/users',
    title: 'Users'
  }
]

const App = () => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: '30px'}}>
        {route.map((route) => {
          return (
            <Link key={route.title} to={route.to} style={{textDecoration: 'none', color: 'red'}}>
              {route.title}
            </Link>
          )
        })}
      </div>
      <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/users'} element={<Users />} />
            <Route path={'/posts/:userId'} element={<Posts />} />
          </Routes>
        </Suspense>
    </div>
  )
}
export default App
