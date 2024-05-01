import React, { useState } from 'react'
import './App.css';

const Bmi = () => {
    const [age,setAge]=useState('');
    const [gendertype,setGendertype]=useState('male');
    const [height,setHeight]=useState('');
    const [weight,setWeight]=useState('');
    const [result,setResult]=useState('');
    const [bmi_cat,setBmi_cat]=useState('')
    const handleCalculate=()=>{
        let a=parseInt(age);
        let h=parseInt(height);
        h=h/100;
        let w=parseInt(weight);
        let bmi,bmicategory;
        if(gendertype === 'male'){
         bmi= 0.5 * w / (h*h) +0.03 * age - 0.28;
         setResult(bmi)
        }
        else{
            bmi= 0.5 * w / (h*h) +0.03 * age - 0.02;
            setResult(bmi);
        }
        if(bmi < 18.5){
            bmicategory = 'You are Underweight,Eat healthy';
            setBmi_cat(bmicategory);
        }
        else if(bmi >= 18.5 && bmi <25){
            bmicategory = 'You are an normal weight!...';
            setBmi_cat(bmicategory)
        }
        else if(bmi >=25 && bmi <30){
            bmicategory = 'you are overweight,do some exercise and follow diet';
            setBmi_cat(bmicategory)
        }
        else{
            bmicategory='obese'
            setBmi_cat(bmicategory)
        }
        setAge('');
        setGendertype('');
        setHeight('');
        setWeight('');
    }
    //handleclear
    const handleClear=()=>{
        setAge('');
        setGendertype('');
        setHeight('');
        setWeight('');
        setResult('');
    }
  return (
    <div className='container'>
   <header>
    <h1>BMI CALCULATOR</h1>
   </header>
   <label className='label'>Age</label>
   <input type='number' placeholder='enter your age' className='input'
   value={age} onChange={(e)=>setAge(e.target.value)}></input>
   <label className='label'>Gender</label>
   <select value={gendertype} onChange={(e)=>setGendertype(e.target.value)} className='select'>
    <option value='male'>Male</option>
    <option value='female'>Female</option>
   </select>
   <label className='label'>Height</label>
   <input type='number' placeholder='enter your height' className='input'
   value={height} onChange={(e)=>setHeight(e.target.value)}></input>
   <label className='label'>Weight</label>
   <input type='number' placeholder='enter your weight' className='input'
   value={weight} onChange={(e)=>setWeight(e.target.value)}></input>
   <div style={{float:'left'}}>
   <button type='submit' onClick={handleCalculate} className='button'>Calculate</button>
   </div>
   <div style={{float:'right',marginLeft:'90px'}}>
   <button type='submit' onClick={handleClear} className='button'>Clear</button>
   </div>
   <div className='result' >
   <h3> { result && `BMI : ${result}`}</h3>
  <h3>{bmi_cat && `${bmi_cat}`}</h3>
    </div>
   </div>
  )
}

export default Bmi
