import React, { useState } from 'react'

const Particular = () => {

    const [formData,setFormData]=useState({
        minValue:'',maxValue:'',type:''
    })
    function changeFn(e){        
        let {name,value}=e.target
        if(name=='type'){
            value=e.target.attributes.id.nodeValue
            console.log(value)
        }
        setFormData(prev=>({
            ...prev,
            [name]:value
        }))
    }
    const postData =async(formData)=>{
        // const data ={minValue,maxValue,type}
        console.log(formData)
        let res = await fetch('/api',{
            method:'post',
            headers: {
    'Content-Type': 'application/json',
  },
            body:JSON.stringify(formData)
        })
        // res=await res.json()
        console.log(res)

    }
    function submit(e){
        e.preventDefault()
        if( !formData.minValue || !formData.maxValue || !formData.type){
            alert('all field are required...')
        }
        postData(formData)
        setFormData({
            minValue:'',maxValue:'',type:''
        })
        
    }
  return (
    <div>
      <form onSubmit={submit} >
        <input type="number" name='minValue' onChange={changeFn} value={formData.minValue}/>  <br />
        <input type="number" name='maxValue'  onChange={changeFn} value={formData.maxValue}/> <br />
        <span> Type:</span> &nbsp;
        Fixed: <input type="radio" name='type' value={formData.type} checked={formData.type=='fixed'} id='fixed' onChange={changeFn}/>
        Percentage: <input type="radio"  name='type' value={formData.type} checked={formData.type=='percentage'} id='percentage' onChange={changeFn}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Particular
