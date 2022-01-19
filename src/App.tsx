import React from 'react';
import {Welcome} from './components/Welcome'
import {Button} from './components/Button'
import {Button2} from './components/Button2'


const handleClick = () => {
  console.log('Clicked button :)')
}

const handleClick2 = () => {
  console.log('Clicked button 2 :)')
}
function App() {
  return (
    <div>
      <Welcome name="Coder" title="Mr"></Welcome>
      <p>Release it</p>
      <Button value="This is button" onClick={handleClick} />
      <Button2 value="This is button 2" onClick={handleClick2} />
    </div>
  );
}

export default App;
