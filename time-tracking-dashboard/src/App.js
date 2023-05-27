
import './App.css';
import ProfileCard from './ProfileCard';
import Card from './Card';
import data from './data.json'
import { useState } from 'react';

function App() {
  const [timeframe, setTimeframe] = useState("daily")

  const hundleClick= (t)=> {
    setTimeframe(t)
    console.log(timeframe);
  }
  return (
    <div className="App">
      <div className="container" id='cnt'>
        <ProfileCard hundleClick={hundleClick}/>
        <div className="cards">
          {data.map((e) => {
            return <Card elm={e} timeframe={timeframe}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
