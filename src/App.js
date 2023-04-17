import './App.css';
import { useState } from 'react';
import List from './List';

function App() {
  const [form,setForm] = useState([{
    name: "",
    type: "",
    required : "",
    children : ""
  }]);
  const handleClick = ()=>{
    setForm([...form,{name:"",type:"  "}]);
  }
  const handleSubmit =()=>{
    console.log(form);
  }

  return (
    <div className="flex flex-col items-center bg-red-100 w-[100vw] h-[100vh]">
      <div className='flex justify-around'>
        <h1 className='font-mono text-xl font-semibold'>Field name and type</h1>
        <h2 onClick={handleClick} className='font-mono text-xl font-semibold mx-4 border-2 rounded-full cursor-pointer'>+</h2>
      </div>
      <div className='flex justify-around flex-col'>
      {
        form.map((key,index)=>(
          <List len={index+1} index={index} key={index} form={form} setForm={()=>setForm}/>
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
