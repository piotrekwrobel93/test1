import React from 'react';
import {Welcome} from './components/Welcome'
import {Button} from './components/Button'


const handleClick = () => {
  console.log('Clicked button :)')
}
function App() {
  return (
    <div>
      <Welcome name="Coder" title="Mr"></Welcome>
      <p>Release it</p>
      <Button value="This is button" onClick={handleClick} />
    </div>
  );
}

export default App;
