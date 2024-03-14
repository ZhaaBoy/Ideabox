import About from '@/components/Dashboard/about'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import Layout2 from '@/components/Layouts/Layout2'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "About",
};

export default function page() {
  return (
    <>
    <Layout2>
        <About/>
    </Layout2>
    </>
  )
}
