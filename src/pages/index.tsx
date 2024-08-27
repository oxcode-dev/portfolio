'use client'
import { HomeHero, HomeAbout, HomeProjects, HomeContact, HomeTech } from '@/components';
import Layout from '../layout'

export default function Home() {
  return (
      <Layout>
        Hello World
        <HomeHero />
        <HomeAbout />
        <HomeProjects />
        <HomeTech />
        <HomeContact />
      </Layout>
  );
}