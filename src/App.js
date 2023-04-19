import './App.css';
import { useState } from 'react';
import List from './List';
import { useDispatch } from 'react-redux';
import { addItem } from './utils/fieldSlice';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const fields = useSelector((store)=>store.field.items)
  const handleClick = ()=>{
    dispatch(addItem({
      name: "",
      type: "string",
      required : false,
      children : []
    }))
  }
  const handleSubmit =()=>{
    console.log(fields);
  }

  return (
    <div className="flex flex-col items-center bg-red-100 w-[100vw] h-[100vh]">
      <div className='flex justify-around'>
        <h1 className='font-mono text-xl font-semibold'>Field name and type</h1>
        <h2 onClick={handleClick} className='font-mono text-xl font-semibold mx-4 border-2 rounded-full cursor-pointer'>+</h2>
      </div>
      <div className='flex justify-around flex-col'>
      {
        fields.map((field,index)=>(
          <List len={index+1} index={index} key={index}/>
        ))
      }
      </div>
      <div>
        <button onClick={handleSubmit} className='p-1 bg-slate-300 rounded-lg font-serif text-sm'>submit</button>
      </div>
    </div>
  );
}

export default App;
