import React, {  useEffect, useState } from 'react'

const List = ({len,form,setForm,index}) => {
    const [value,setValue] = useState("string");
    const [name,setName] = useState("");
    const [req,setReq] = useState(true);
    const [value1,setValue1] = useState([{name:"",type:""}])

    const handleChange=(e)=>{
        setValue(e.target.value);
    }

    const toggleRequire = ()=>{
        setReq(!req);
    }
    const handleNameChange=(e)=>{
        setName(e.target.value);
    }

    const handleObjectAdd=()=>{
        setValue1([...value1,{name:"",type:" "}]);
    }

    const handleDelete = ()=>{
        let data = [...form];
        data.splice(index,1);
        setForm(data);
        console.log(data);
    }

    useEffect(()=>{
        let data = [...form];
        data[index].name = name;
        data[index].type = value;
        data[index].required = !req;
        data[index].children = value1;
        setForm(data);
    },[name,value,req,value1])

  return (
    <div className='flex flex-col justify-around mt-2'>
        <div className='flex'>
            <h3>{len}</h3>
            <input type='text' value={name} onChange={handleNameChange} className='border-2 mx-1'/>
            <select onChange={handleChange} className='border-2 mx-1'>
                <option value="string">String</option>
                <option value="number">Number</option>
                <option value="object">Object</option>
                <option value="boolean">Boolean</option>
            </select>
            <label className='ml-2'>Required: </label>
            <input type='checkbox' onChange={toggleRequire}/>
            <button className='mx-2' onClick={handleDelete}>Delete</button>
            {
                value==="object"?<button onClick={handleObjectAdd} className='border-2'>Add</button>:null
            }
        </div>
        <div className='ml-40 mt-1'>
            {
                value==="object"?
                value1.map((val,i)=><List form={value1} setForm={setValue1} index={value1.length-1} key={i} />):null
            }
        </div>
    </div>
  )
}

export default List