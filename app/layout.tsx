import type { Metadata } from 'next';
import './globals.css';
import MusicPlayer from './music-player';
export const metadata: Metadata = {title:'kmtw — Belajar Web3',description:'Belajar NFT, memecoin, wallet, dan keamanan Web3 dengan bahasa Indonesia yang sederhana.',icons:{icon:'/favicon.svg'}};
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="id"><body>{children}<MusicPlayer/></body></html> }