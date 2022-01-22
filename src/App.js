import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(90);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let lgrams = grams - (burning * time);
    let promiles = 0;

    if (gender === 'male') {
      promiles = lgrams / (weight * 0.7);
    }
    else if (gender === 'female') {
      promiles = lgrams / (weight * 0.6);
    }
    if (promiles < 0) {
      promiles = 0;
    }
    setResult(promiles);
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h1>Calculating alcohol blood level</h1>
      <div>
        <div>
        <label>Weight </label>
        <input type="number" 
        value={weight} 
        onChange={e => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Bottles </label>
        <input type="number" 
        value={bottles} 
        onChange={e => setBottles(e.target.value)} />
        </div>
        <div>
          <label>Time </label>
          <input type="number" 
          value={time} 
          onChange={e => setTime(e.target.value)} />
          </div>
      <div>
        <label>Gender </label>
        <input type="radio" 
        name="gender" 
        value="male" 
        defaultChecked onChange={e => setGender(e.target.value)} />
        <label>Male </label>
        <input type="radio" 
        name="gender" value="female" 
        onChange={e => setGender(e.target.value)}/>
        <label>Female </label>
      </div>
      </div>
    <div className='promile'>
      <label>Promiles </label>
      <output> {result.toFixed(2)}</output>
    </div>
    <button>Laske</button>
    </form>
    </div>
  );
}

export default App;