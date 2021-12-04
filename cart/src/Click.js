import React,{useState, useEffect} from 'react';
export default function Click() {
 //let count = 0; 
const [count, setCount] = useState(["numbers："]);
//console.log("here");

 const handleClick = function() {
    let a = count;
    a.push(Math.floor(Math.random() * 11));
    console.log(count);
    setCount([...a]);
 }
 
 const showCount = function(){
    console.log(count);
  }
  useEffect(showCount);

 return (
  <button onClick={handleClick}>{count}</button>
  

 );

}