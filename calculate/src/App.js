import "./App.css";
import {useState} from 'react'
function App() 
{
 //making state
const [amount,setAmount] = useState('')
const [perc,setPerc] = useState('')
const [result,setResult] = useState(0)

//Logic

let calc = (e) =>
{
  e.preventDefault();
  if(amount===0 || perc ===0)
  {
    alert("Please enter a valid Amount and Percentage")
  }
  else
  {
    let result=(amount*(perc/100))
    setResult(result)
  }

}

//reload
let reload= () =>
{
  window.location.reload()
}




  return (
    <div className="App">
      <div className="container">
        <h2 className="heading"> Percentage Claculator</h2>
        <form onSubmit={calc}>
          <div>
            <input type="text" placeholder="Enter amount" value={amount} onChange={(e)=> setAmount(e.target.value)}
            />
          </div>

          <div>
            <input type="text" placeholder="Enter percentage" value={perc} onChange={(e)=> setPerc(e.target.value)}/>
          </div>

          <div>
            <button className="btn" type="submit" >
              Claculate
            </button>
            <button className="reload" onClick={reload} type="submit">
              Reload
            </button>
          </div>

          <div className="center">
           <p> <h2>Result :</h2>{result}</p>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
