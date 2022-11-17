import {Link} from 'react-router-dom'
import React from 'react'
import AsyncComponent from '../js/AsyncComponent'
import DoorSystem from './module/DoorSystem'
const option = [
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
        <Link to="Account/Login">Account</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: '/Account',
    children: [
      {
        index: true,
        element: AsyncComponent(() => import('@/views/Account/Login.js'))
      },
      {
        path: 'Login',
        element: AsyncComponent(() => import('@/views/Account/Login.js'))
      }
    ],
  },
  {
    element: AsyncComponent(() => import('@/views/Layout/index.js')),
    children: [
      DoorSystem,
      {
        path: '/Home',
        element: AsyncComponent(() => import('@/views/Account/Login.js'))
      },
    ]
  },
  {
    path: '*',
    element: (<div> 404 not found</div>)
  }
]

export default option