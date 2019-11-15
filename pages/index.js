import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

import { getUser } from '../api/users/requests'
import client from "../utils/api/client";

const Home = ({userContent}) => (
  <div>
    <Head title='Home' />
    <Nav />

    <div className='hero'>
      <h1 className='title'>Welcome {userContent.name}</h1>
      <p className='description'>
        Username: {userContent.username}
      </p>
    </div>
  </div>
)

Home.getInitialProps = async () => {
  const userContent = await getUser(1)

  return { userContent }
}

export default Home
