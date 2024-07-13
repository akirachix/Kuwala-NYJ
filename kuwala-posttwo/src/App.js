
import React from 'react';
import './App.css'; 
import Podcast from './Podcast';
import Button from './Videos'; 
import Blog from './Research '

function App() {
  const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; 
  return (
    <div className="App">
      <Blog/>
      <Podcast />
      <Button /> 
      <Button videoUrl={videoUrl} /> {}

    </div>
  );
}

export default App;
