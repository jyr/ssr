import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import axios from 'axios'

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
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/1`)
  const userContent = res.data

  return { userContent }
}

export default Home
