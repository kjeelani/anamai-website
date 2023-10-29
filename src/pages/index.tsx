import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import SpriteAnimator from '@/components/SpriteAnimator';
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState, ReactNode } from 'react';



/*Login*/
export default function Home() {
    return (
        <div className="App">
            <Navbar active="0"></Navbar>
            <Header></Header>
            <SpriteAnimator></SpriteAnimator>
        </div>
    )
}
