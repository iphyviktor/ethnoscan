import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>
        <h1 className='text-gray-400 text-5xl'>Welcome Home!</h1>
        <ul>
          <li>
            <Link href={`/`}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={`/register`}>
              <a>Register</a>
            </Link>
          </li>
          <li>
            <Link href={`/login`}>
              <a>Login</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home