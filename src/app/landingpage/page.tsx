import About from '@/components/Dashboard/about';
import Dashboard2 from '@/components/Dashboard/dashboard2'
import Showcase from '@/components/Dashboard/showcase';
import Event from '@/components/Dashboard/event';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Home",
}

export default function LandingPage() {
  return (
    <>
        <Dashboard2/>
        <About/>
        <Showcase/>
        <Event/>
        </>
  )
}
