'use client'
import { HomeHero, HomeAbout, HomeProjects, HomeContact, HomeTech } from '@/components';
import Layout from '../layout'
import Loader from '@/components/Loader.jsx'

export default function Home() {
  return (
      <Layout>
        <HomeHero />
        <HomeAbout />
        <HomeProjects />
        <HomeTech />
        <HomeContact />

        <Loader />

      </Layout>
  );
}