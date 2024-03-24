import { useState } from 'react'
import json from './MOCK_DATA.json'
function App() {

  const [serch ,setSerch]=useState('');


  return (
    <>
    <div className='max-w-container  mx-auto py-8 bg-gray-100'>
   <div className=' border-2 w-[300px] mx-auto rounded py-3 px-4  border-gray-800 bg-gray-100'>

   <input className='w-full outline-none text-lg font-serif font-semibold text-violet-700 bg-gray-100'  type='text' placeholder='search ' onChange={(e)=> setSerch(e.target.value)}/>
   </div>


{ 
  json.filter((val)=>{
    if(setSerch == ''){
      return val;
    }else if(val.last_name.toLocaleLowerCase().includes(serch.toLocaleLowerCase())){
      return val
    } 

  }).map((valu,key)=>{
   return <div className='text-center mt-3'> <p>{valu.last_name}</p></div>

  })
}
</div>
    
 
    </>
  )
}

export default App
