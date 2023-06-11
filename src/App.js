import "./App.css";
import {useState} from "react";


function App() {


    const [inputs, setInputs]=useState("");


    const handleClick = (e) => {
        
        setInputs(inputs.concat(e.target.value));
    }


    const handleClear = (e) => {
             
        setInputs("");
    }


    const DeleteElement = (e) =>{

        setInputs(inputs.slice(0,inputs.length-1));
    }


    const handleEqual = () => {
        
        try {
            setInputs(eval(inputs).toString());

        } catch(err) {
            setInputs("Error");
        }
       
        
    }

    return (

        <div className="App">  

    <div className="calculator-wrapper" >

        <form>
            <input type="text" value={inputs} />
        </form>
      
        <div className="Row">
            <button onClick={handleClear} id="clear">Clear</button>
            <button onClick={DeleteElement}>C</button>
            <button value ="/" onClick={handleClick}>&divide;</button>
            <button value ="7" onClick={handleClick} >7</button>
            <button value ="8" onClick={handleClick}>8</button>
            <button value ="9" onClick={handleClick}>9</button>
            <button value ="*" onClick={handleClick}>x</button>
            <button value ="4" onClick={handleClick}>4</button>
            <button value ="5" onClick={handleClick}>5</button>
            <button value ="6" onClick={handleClick}>6</button>
            <button value ="-" onClick={handleClick}>-</button>
            <button value ="1" onClick={handleClick}>1</button>
            <button value ="2" onClick={handleClick}>2</button>
            <button value ="3" onClick={handleClick}>3</button>
            <button value ="+" onClick={handleClick}>+</button>
            <button value ="0" onClick={handleClick}>0</button>
            <button value ="." onClick={handleClick}>.</button>
            <button value = "=" onClick={handleEqual} id="equal">=</button>
        </div>

        </div>

        </div>
    )
}




export default App;