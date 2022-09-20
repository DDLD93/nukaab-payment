import type { NextPage } from 'next'
import Layout from '../components/Layout'
import useStore from '../store'
import NButton from '../components/NButton'
import {NavbarPublic} from "../components/navbar/index"
import LandingPage from './LandingPage/landPage'



const Home: NextPage = () => {
  return (
   <Layout>
    <NavbarPublic/>
    <LandingPage/>
   </Layout>
  )
}

export default Home
