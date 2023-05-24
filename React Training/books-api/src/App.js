import Card from './Card';
import data from './books.json'
import './App.css'
import { useState } from 'react';

function App() {
  const [text, setText] = useState("")
  const fd = data.filter((elm) => {
    return elm.name.toUpperCase().includes(text.toUpperCase())
  })
  return (
    <div className="App">
      <h1 id='title'>Books Library</h1>
      <input type="text" placeholder='Find your book' value={text} onChange={(elm) => {setText(elm.target.value)}} /> 
      <div className="container">
        {fd.map((e) => {
          return <Card key = {e.id} name = {e.name} image = {e.image} author = {e.author} 
          discription = {e.discription} rating = {e.rating} price = {e.price} />
        })}
      </div>
    </div>
  );
}

export default App;
