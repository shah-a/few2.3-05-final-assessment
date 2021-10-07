import{j as u,a as d,r as l,R as h,b as m}from"./vendor.30bc6e54.js";const f=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};f();const e=u.exports.jsx,a=u.exports.jsxs;function p(){return e("div",{className:"Home",children:a("div",{className:"container",children:[e("h1",{children:"FEW 2.3: Final Assessment"}),e("h2",{children:"Ali Shah"})]})})}const v=async i=>{const n=await fetch(i);return n.ok?[await n.json(),null]:[null,new Error(n.statusText)]},y=async i=>{const n=await fetch(`https://swapi.dev/api/people/${i}`);if(!n.ok)return[null,new Error(n.statusText)];const t=await n.json(),[o,r]=await v(t.homeworld);return r?[null,new Error(r)]:(t.homeworld=o,[t,null])};function w({id:i,setId:n,setData:t}){return e("div",{className:"Form",children:a("form",{onSubmit:async o=>{if(o.preventDefault(),i===17)return alert("17 is invalid. Sorry!");const[r,s]=await y(i);return s?alert(s):t(r)},children:[e("h3",{children:"Enter SWAPI Character ID:"}),a("div",{className:"input",children:[e("input",{type:"number",min:"1",max:"83",value:i||1,onChange:o=>n(parseInt(o.target.value,10)||1)}),e("button",{type:"submit",children:"Submit"})]})]})})}function g({list:i,setList:n,data:t}){return a("div",{className:"Display",children:[e("h1",{children:t.name}),a("div",{className:"details",children:[e("h3",{children:`Height: ${t.height}`}),e("h3",{children:`Mass: ${t.mass}`}),e("h3",{children:`Hair Colour: ${t.hair_color}`}),e("h3",{children:`Eye Colour: ${t.eye_color}`}),e("h3",{children:`Homeworld: ${t.homeworld.name}`})]}),e("button",{type:"button",onClick:()=>{const o=d.uniqBy([...i,t],"name");n(o)},children:"Save"})]})}function x({list:i}){const n=i.map(t=>e("div",{children:e("h1",{children:t.name})},t.name));return a("div",{className:"List",children:[i.length>0&&e("h3",{children:"Character List"}),e("div",{className:"card",children:n})]})}function S(){const[i,n]=l.exports.useState(1),[t,o]=l.exports.useState([]),[r,s]=l.exports.useState(null);return a("div",{className:"StarWars container",children:[a("section",{children:[e(w,{id:i,setId:n,setData:s}),r&&e(g,{list:t,setList:o,data:r})]}),e("section",{children:e(x,{list:t})})]})}function N(){return a("div",{className:"App",children:[e(p,{}),e(S,{})]})}h.render(e(m.StrictMode,{children:e(N,{})}),document.getElementById("root"));
