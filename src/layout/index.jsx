'use client'

import { NavBar } from "../components/index.js";
import Head from "next/head.js";

export default function RootLayout({children}) {
    return (
        <>
            <Head>
                <title>Samuel Osemeke</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                <link href="https://fonts.googleapis.com/css2?family=Domine:wght@400..700&family=Inter:slnt,wght@-10..0,100..900&display=swap" rel="stylesheet"></link>
            </Head>
            <div suppressHydrationWarning={true}>
                <div className="overflow-x-hidden">
                    <NavBar />
                    { children }
                </div>
            </div>
        </>
    )
}