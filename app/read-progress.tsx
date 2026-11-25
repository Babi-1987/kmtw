'use client';
import {useEffect,useState} from 'react';
const KEY='kmtw-read-pages';
function load():string[]{try{const v=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(v)?v.filter((x):x is string=>typeof x==='string'):[]}catch{return[]}}
export function ReadMark({href}:{href:string}){
 const [read,setRead]=useState(false);
 useEffect(()=>{const check=()=>setRead(load().includes(href));check();window.addEventListener('kmtw-read-changed',check);return ()=>window.removeEventListener('kmtw-read-changed',check);},[href]);
 if(!read) return null;
 return <span className="read-mark" aria-label="Sudah dibaca">✓</span>;
}
export function ReadToggle({slug}:{slug:string}){
 const [read,setRead]=useState(false);
 useEffect(()=>{const check=()=>setRead(load().includes(slug));check();window.addEventListener('kmtw-read-changed',check);return ()=>window.removeEventListener('kmtw-read-changed',check);},[slug]);
 function toggle(){const list=load();const next=list.includes(slug)?list.filter(x=>x!==slug):[...list,slug];try{localStorage.setItem(KEY,JSON.stringify(next));}catch{}setRead(!read);window.dispatchEvent(new Event('kmtw-read-changed'));}
 return <div className="read-toggle-wrap"><button type="button" className="read-toggle" aria-pressed={read} onClick={toggle}>{read?'✓ Sudah dibaca — tandai belum dibaca':'Tandai sudah dibaca'}</button><p>Progres lo kesimpen di browser ini aja.</p></div>;
}
export function SidebarReadToggle({slug}:{slug:string}){
 const [read,setRead]=useState(false);
 useEffect(()=>{const check=()=>setRead(load().includes(slug));check();window.addEventListener('kmtw-read-changed',check);return ()=>window.removeEventListener('kmtw-read-changed',check);},[slug]);
 function toggle(){const list=load();const next=list.includes(slug)?list.filter(x=>x!==slug):[...list,slug];try{localStorage.setItem(KEY,JSON.stringify(next));}catch{}setRead(!read);window.dispatchEvent(new Event('kmtw-read-changed'));}
 return <button type="button" className="read-toggle sidebar-toggle" aria-pressed={read} onClick={toggle}>{read?'✓ Sudah dibaca':'Tandai sudah dibaca'}</button>;
}
