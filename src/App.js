import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


import User from './components/User';
let arr=[
  {id:uuidv4(),name:"Ashok",age:12},
  {id:uuidv4(),name:"yadva",age:20}
]

function App() {
  const [data,setData]=useState(arr);
  function handleData(dataObj){
    setData((Data)=>{
      return [...Data,dataObj]
    })
  }
  function addValue(a1){
    console.log(a1);
    setData([...data,{id:uuidv4(),name:a1.userName,age:a1.age}])
    
  }
  return (
    <>
    <User onAddValue={addValue} Value={data} onHandleData={handleData} />
    </>
  );
}

export default App;
