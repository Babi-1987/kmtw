'use client';
import {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {ArrowLeft,Menu,X} from 'lucide-react';
const menuLinks=[{href:'/#materi',label:'Materi'},{href:'/kok-bisa',label:'Kok Bisa'},{href:'/marketplace',label:'Marketplace'},{href:'/tentang',label:'Tentang'}];
export function BackButton(){
 const router=useRouter();
 return <button type="button" className="mobile-back" aria-label="Kembali" onClick={()=>router.back()}><ArrowLeft size={22} aria-hidden="true"/></button>;
}
export function MobileMenu(){
 const [open,setOpen]=useState(false);
 return <div className="mobile-menu-wrap">
  <button type="button" className="mobile-menu-btn" aria-label={open?'Tutup menu':'Buka menu'} aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X size={24} aria-hidden="true"/>:<Menu size={24} aria-hidden="true"/>}</button>
  {open?<nav className="mobile-menu" aria-label="Menu">{menuLinks.map(({href,label})=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link href="/#materi" onClick={()=>setOpen(false)}>Lihat semua materi ↓</Link></nav>:null}
 </div>;
}
