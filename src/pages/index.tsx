'use client'
import { HomeHero, HomeAbout, HomeProjects, HomeContact } from '@/components';
import Layout from '../layout'

export default function Home() {
  return (
      <Layout>
        <HomeHero />
        <HomeAbout />
        <HomeProjects />
        <HomeContact />
      </Layout>
  );
}
