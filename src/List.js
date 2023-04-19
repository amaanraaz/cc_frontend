import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addName, addReq, addType, deleteField } from './utils/fieldSlice';
import Child from './Child';

const List = ({len,index}) => {
    const dispatch = useDispatch();
    const [childNumber,setChildNumber] = useState(1);
    const fields = useSelector((store)=>store.field.items);
    const {name,type,required,children} = fields[index];

    const handleNameChange = (e)=>{
        let curr_name = e.target.value;
        dispatch(addName({index,curr_name}))
    }
    const handleTypeChange = (e)=>{
        let curr_type = e.target.value;
        dispatch(addType({index,curr_type}))
    }
    const handleReqChange = (e)=>{
        dispatch(addReq({index}));
    }
    const handleDelete = ()=>{
        dispatch(deleteField({index}))
    }
    const handleChild = ()=>{
        setChildNumber(childNumber+1);
    }

  return (
    <div className='flex flex-col justify-around mt-2'>
        <div className='flex'>
            <h3>{len}</h3>
            <input type='text' className='border-2 mx-1' onChange={handleNameChange} value={name}/>
            <select  className='border-2 mx-1' onChange={handleTypeChange} value={type}>
                <option value="string">String</option>
                <option value="number">Number</option>
                <option value="object">Object</option>
                <option value="boolean">Boolean</option>
            </select>
            <label className='ml-2' >Required: </label>
            <input type='checkbox' onChange={handleReqChange} value={required}/>
            <button className='mx-2' onClick={handleDelete}>Delete</button>
            {
                type==="object"?<button className='border-2' onClick={handleChild}>Add</button>:null
            }
        </div>
        {
            type==="object"?
            [...Array(childNumber)].map((n,i)=> <Child key={i} index={index} childNumber={childNumber}/>)       
            :null
        }
    </div>
)
}

export default List;