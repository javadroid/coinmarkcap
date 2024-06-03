'use client'
import Header from "@/components/Header";

import CMCtable from "@/components/cmc-table/CMCtable";
import Trending from "@/components/Trending";
import Image from "next/image";



export default function Home() {
  return (
    // <MoralisProvider appId={} serverUrl={}>
      <div className="min-h-screen">
        <Header />
        <div className='mt-10' />
      <Trending />
      <div className='mt-20' />
      <CMCtable />
      </div>
    // </MoralisProvider>
  );
}
