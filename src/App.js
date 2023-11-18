import React,{useState} from 'react';
import './index.css'

function App() {

//state
const [weight,setWeight] = useState(0)
const [height,setHeight] = useState(0)
const [bmi,setBmi] = useState('')
const [message, setMessage]= useState('')

let imgSrc;
//show image based on bmi calculation
if (bmi<1){
  imgSrc = null
}else{
  if(bmi < 19){
    imgSrc = require('../src/assets/underweight.jpg')
  }
  else if (bmi>=19 && bmi<25){
    imgSrc = require('../src/assets/healthy.jpg')
  }
  else{
    imgSrc = require('../src/assets/overweight.jpg')
  }
}

let calcBmi = (event)=>{
  //prevent submitting
  event.preventDefault()

  if(weight==0 || height==0){
    alert('Please enter a valid weight and height')
  }
  else{
    let bmi = (weight/(height*height)*703)
    setBmi(bmi.toFixed(1))
  }
  //logic for message
  if (bmi<19){
    setMessage('You are underweight')
  }else if(bmi>=19 && bmi<25){
    setMessage('You are healthy weight')
  }else{
    setMessage('You are overweight')
  }

  }
  //reloading
let reload=()=>{
  window.location.reload()
}

  return (
    <div className="app">
     <div className='container'>
      <h2 className='center'>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
        <div>
          <label>Weight (kgs)</label>
          <input value={weight} onChange={(e)=>setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Height (in)</label>
          <input value={height} onChange={(event)=>setHeight(event.target.value)}/> 
        </div>
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
      </form>
      <div className='center'>
        <h3> Your BMI is: {bmi}</h3>
        <p>{message} </p>
      </div>
      <div className='img-container'> 
      <img src = {imgSrc} alt=''></img>
      </div>
     </div>
      
    </div>
  );
}

  

export default App;
