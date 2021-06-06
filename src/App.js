import React , { useState } from 'react'
import './App.css';

function App() {

  const [result , setResult] = useState("");

  const handleClick = (e) =>{
    setResult(result.concat(e.target.name));
  }

const clear = () =>{
    setResult("");
}

const backspace = () =>{
     setResult(result.slice(0 , -1));
}

const calculate = () =>{
  try{
    setResult(eval(result).toString());
  }catch(err){
     setResult("Syntax Error");
  } 
}

  return (
    <>
      <div class="bubbles">
        <span  class="one"></span>
        <span  class="two"></span>
        <span class="three"></span>
        <span   class="four"></span>
        <span  class="five"></span>
        <span  class="six"></span>
       <span  class="seven"></span>
       <span  class="seven"></span>
   </div>

 <div class="container">
   <form action="#" name="forms">
     <input type="text" name="answer" value = {result} />
     <div  class="buttons">
       <input name = "%" onClick = {handleClick} type="button" value="%" />
       <input name = "/" onClick = {handleClick} type="button" value="/" />
       <input onClick = {clear} type = "button" value = "Clear" />
       <input onClick = {backspace} type = "button" value = "C" />
     </div>
     <div  class="buttons">
       <input name = "7" onClick = {handleClick} type="button" value="7" />
       <input name = "8" onClick = {handleClick} type="button" value="8" />
       <input name = "9" onClick = {handleClick} type="button" value="9" />
       <input name = "*" onClick = {handleClick} type="button" value="*" />
     </div>
     <div class="buttons">
       <input name = "4" onClick = {handleClick} type="button" value="4" />
       <input name = "6" onClick = {handleClick} type="button" value="5" />
       <input name = "6"onClick = {handleClick} type="button" value="6" />
       <input name = "-" onClick = {handleClick} type="button" value="-" />
     </div>
     <div  class="buttons">
       <input name = "1" onClick = {handleClick} type="button" value="1" />
       <input name = "2" onClick = {handleClick} type="button" value="2" />
       <input name = "3"onClick = {handleClick} type="button" value="3" />
       <input name = "+"onClick = {handleClick} type="button" value="+" />
     </div>
     <div  class="buttons">
       <input name = "0"onClick = {handleClick} type="button" value="0"  />
       <input name = "00"onClick = {handleClick} type="button" value="00" />
       <input name = "."onClick = {handleClick} type="button" value="." />
       <input onClick = {calculate} type="button" value="=" />
     </div>
   </form>
  </div>
    </>
  );
}

export default App;
