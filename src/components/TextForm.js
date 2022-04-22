import React,{useState} from 'react'

export default function TextForm(props) {
    const handleClickUp=()=>{
        console.log("upeer clicked");
        let newText=text.toUpperCase();

        setText(newText);
        console.log(text.length);
        if(text.length==0){
          props.showAlert("Please Enter text First","warning")

        }
        else{
          props.showAlert("Converted to Uppercase","success")
        }
        
    }
    const handleClickDown=()=>{
        console.log("down clicked");
        let newText=text.toLowerCase();

        setText(newText);
           if(text.length==0){
          props.showAlert("Please Enter text First","warning")

        }
        else{
        props.showAlert("Converted to Lowercase","success")}
    }
    const handleChange=(event)=>{
        console.log("on change clicked");
        setText(event.target.value);
    }
    const handleClickClear=()=>{
      let newText='';
      setText(newText);
  }
  const handleClickCapitalize=()=>{
    let newText='';
    let t=text.split(' ');
    console.log(t);
    for(let i=0;i<t.length-1;i++){
      let x=t[i];
      newText+=x.charAt(0).toUpperCase() + x.slice(1)+" ";
    }
    let y=t[t.length-1];
      newText+=y.charAt(0).toUpperCase() + y.slice(1);
    setText(newText);
    
    
    props.showAlert("Capatilized","success")
}
  
    const [text,setText]=useState('');
  return (
    <div style={{color:props.mode==='light'?'#000000':'white'}}>

    
    <div className={`mb-3 container`}>
    <h1>{props.heading}</h1>
    <textarea className={`form-control text-${props.mode==='light'?'dark':'light'}`} style={{backgroundColor : props.mode==='light'?'white':'grey'}} id='mybox' onChange={handleChange}  value={text} aria-label="With textarea" rows="8" placeholder='Enter Your Text here.'></textarea>
    <button  className='btn btn-dark mt-2 mx-1' onClick={handleClickUp}>To Uppercase</button>
    <button  className='btn btn-primary mt-2 mx-1' onClick={handleClickDown}>To Lowecase</button>
    <button  className='btn btn-dark mt-2 mx-1' onClick={handleClickClear}>Clear</button>
    <button  className='btn btn-primary mt-2 mx-1' onClick={handleClickCapitalize}>Capitalize </button>
    </div>
    <div className='container'>
      <h2>Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes to Read </p>
      <h2> Preview</h2>
      <p> {text}</p>
    </div>
    </div>
  )
}
