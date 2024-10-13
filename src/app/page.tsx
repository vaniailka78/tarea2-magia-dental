'use client'

import {Header} from '@/app/components/Header';
import {Opinions} from '@/app/components/Opinions';
import {Footer} from '@/app/components/Footer';
import {Services} from "@/app/components/Services";
import {Hero} from "@/app/components/Hero";

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <Services/>
            <Opinions />
            <Footer />
        </>
    );
}