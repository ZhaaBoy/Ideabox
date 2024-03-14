import Event from '@/components/Dashboard/showcase'
import Layout2 from '@/components/Layouts/Layout2'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Event",
  };

export default function page() {
  return (
    <>
    <Layout2>
        <Event/>
    </Layout2>
    </>
  )
}
