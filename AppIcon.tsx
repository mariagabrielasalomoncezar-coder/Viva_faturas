import React from "react";
type Name = "dashboard"|"users"|"calendar"|"file"|"upload"|"settings"|"logout"|"bell"|"search"|"arrow"|"arrowRight"|"mail"|"clock"|"check"|"alert"|"chart"|"shield"|"sparkles"|"filter"|"phone"|"plus"|"briefcase"|"chevron"|"copy"|"activity"|"menu";
const paths: Record<Name, React.ReactNode> = {
 dashboard:<><rect x="3" y="3" width="8" height="8" rx="1.7"/><rect x="13" y="3" width="8" height="5" rx="1.7"/><rect x="13" y="10" width="8" height="11" rx="1.7"/><rect x="3" y="13" width="8" height="8" rx="1.7"/></>,
 users:<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
 calendar:<><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
 file:<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/></>,
 upload:<><path d="M12 16V4m-5 5 5-5 5 5"/><path d="M4 16v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/></>,
 settings:<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a2 2 0 0 0 .4 2.2l-1.8 1.8a2 2 0 0 0-2.2-.4l-1 2.2h-2.6l-1-2.2a2 2 0 0 0-2.2.4l-1.8-1.8a2 2 0 0 0 .4-2.2l-2.2-1v-2.6l2.2-1a2 2 0 0 0-.4-2.2l1.8-1.8a2 2 0 0 0 2.2.4l1-2.2h2.6l1 2.2a2 2 0 0 0 2.2-.4l1.8 1.8a2 2 0 0 0-.4 2.2l2.2 1V14z"/></>,
 logout:<><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></>,
 bell:<><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></>,
 search:<><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
 arrow:<><path d="m14 7-5 5 5 5"/></>,arrowRight:<><path d="M5 12h14m-6-6 6 6-6 6"/></>,
 mail:<><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 6 9 7 9-7"/></>,
 clock:<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
 check:<><path d="m4 12 5 5L20 6"/></>,
 alert:<><path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5M12 17v.5"/></>,
 chart:<><path d="M3 3v18h18"/><path d="m7 16 4-5 4 3 5-8"/></>,
 shield:<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
 sparkles:<><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 17l.8 2.2L22 20l-2.2.8L19 23l-.8-2.2L16 20l2.2-.8L19 17Z"/></>,
 filter:<><path d="M4 5h16M7 12h10M10 19h4"/></>,
 phone:<><path d="M21 16.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 2.5 5.2 2 2 0 0 1 4.5 3h3A2 2 0 0 1 9.5 5l.5 2a2 2 0 0 1-.5 1.8L8 10a13 13 0 0 0 6 6l1.2-1.5a2 2 0 0 1 1.8-.5l2 .5a2 2 0 0 1 2 2Z"/></>,
 plus:<><path d="M12 5v14M5 12h14"/></>,
 briefcase:<><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/></>,
 chevron:<><path d="m9 18 6-6-6-6"/></>,
 copy:<><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></>,
 activity:<><path d="M3 12h4l3-8 4 16 3-8h4"/></>,
 menu:<><path d="M4 6h16M4 12h16M4 18h16"/></>
};
export default function AppIcon({name,size=20,className=""}:{name:Name;size?:number;className?:string}){return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">{paths[name]}</svg>}
