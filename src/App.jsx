import { useState } from 'react'
import json from './MOCK_DATA.json'
function App() {

  const [serch ,setSerch]=useState('');


  return (
    <>
    <input type='text' placeholder='serch' onChange={(e)=> setSerch(e.target.value)}/>

    { 
      json.filter((val)=>{
        if(setSerch == ''){
          return val;
        }else if(val.last_name.toLocaleLowerCase().includes(serch.toLocaleLowerCase())){
          return val
        } 

      }).map((valu,key)=>{
       return <div> <p>{valu.last_name}</p></div>

      })
    }
    </>
  )
}

export default App
