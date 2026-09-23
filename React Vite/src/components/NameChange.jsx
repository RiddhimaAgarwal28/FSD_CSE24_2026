import React, { useState } from 'react'

function NameChange() {
    const[name,setName]=useState('Rahul');
    const[college,setCollege]=useState('ABES');
    function updateName() {
        setName("Riddhima");
    }
    function updateCollege() {
        setCollege("ABES Engineering College");
    }

  return (
    <div>
    <h2>Name : {name}</h2>
    <h2>College : {college}</h2>
    <button onClick={updateCollege}>Update College</button>
    <button onClick={updateName}>Update Name</button>
    </div>
  );
}

export default NameChange