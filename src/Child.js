import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addChild } from './utils/fieldSlice';

const Child = (index,childNumber) => {
    console.log(index);
    const [value,setValue] = useState({
        name:"",
        type:"string",
        required:"false",
        children:""
    });
    const [name,setName] = useState("");
    const [req,setReq] = useState(false);
    const dispatch = useDispatch();

    const handleChildName = (e)=>{
        console.log(e.target.value);
        setName(e.target.value);
    }
    const handleChildRequire=()=>{
        setReq(!req)
    }
    useEffect(()=>{
        console.log(name,req);
        setValue({name,req})
    },[name,req])

    useEffect(()=>{
        console.log(value);
        dispatch(addChild({index,value,childNumber}));
    },[value])

  return (
    <div className='ml-40 mt-1'>
        <input type='text' className='border-2 mx-1' onChange={handleChildName} value={name}/>
        <select  className='border-2 mx-1'>
            <option value="string">String</option>
            <option value="number">Number</option>
            <option value="object">Object</option>
            <option value="boolean">Boolean</option>
        </select>
        <label className='ml-2' >Required: </label>
        <input type='checkbox' onClick={handleChildRequire} value={req}/>
        <button className='mx-2'>Delete</button>
     </div>
  )
}

export default Child