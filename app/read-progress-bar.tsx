'use client';
import {useEffect,useState} from 'react';
export function ReadProgressBar(){
 const [progress,setProgress]=useState(0);
 useEffect(()=>{
  function onScroll(){
   const el=document.documentElement;
   const total=el.scrollHeight-el.clientHeight;
   setProgress(total>0?Math.min(100,Math.max(0,(el.scrollTop/total)*100)):0);
  }
  onScroll();
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',onScroll);
  return ()=>{window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll);};
 },[]);
 return <div className="read-progress-bar" aria-hidden="true"><span style={{width:progress+'%'}}/></div>;
}
