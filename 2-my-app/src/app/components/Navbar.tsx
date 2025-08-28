"use client"

import Link from "next/link";
import React from 'react'
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    //console.log(router);

    return (
        <nav>
            <ul>
                <div>
                    <h3>LOGO</h3>
                </div>
                <div>
                    <Link href="/">Home</Link>
                    <Link href="/Link1">LINK 1</Link>
                    <Link href="/Link2">LINK 2</Link>
                    <button onClick={() => router.push("/userouter")}>GO TO UseRouter Page</button>
                </div>
            </ul>
        </nav>
  )
}

export default Navbar
