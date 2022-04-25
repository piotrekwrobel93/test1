import React, { useEffect, useState } from 'react';
import Canvas from './components/Canvas'
import styled from 'styled-components'
import Card from './components/Card';
import Draggable from './components/Draggable';
import { IItem } from './types';
import cuid from 'cuid';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import {changeBackgroundWithAction} from './redux/ducks/designer'

const CanvasWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  `

  const item:IItem = {
    width: 300,
    height: 100,
    name: 'Item 1',
    id: cuid(),
    type: 'text',
    x: 100,
    y: 50,
  }

    
  function App() {
    const backgroundColor = useAppSelector((state) => state.designer.backgroundColor)
    const dispatch = useAppDispatch()

    const [userBackground, setUserBackground] = useState<string>(backgroundColor)
    const [backgroundOptions,] = useState<{value: string}[]>([
      {value: 'red'},
      {value: 'green'},
      {value: 'yellow'},
      {value: '#444'},
      {value: '#fff'},
    ])

    const handleSelect = (event :React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(changeBackgroundWithAction(event.target.value))
      setUserBackground(event.target.value)
    }

    useEffect(() => {
      console.log('yeah now')
    }, [userBackground, setUserBackground])
  
    
  return (
      <CanvasWrapper>
        <Canvas background={backgroundColor}>
          <Draggable item={item}>
          <Card background='#fff' maxWidth="300px" maxHeight="auto" spacing={{inline: "1rem", block: "2rem"}} borderRadius={10}>
            <h1>Title?</h1>
            <select name="" id="" value={userBackground} onChange={handleSelect}>
              {backgroundOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.value}</option>
              ))}
            </select>
          </Card>
          </Draggable>
        </Canvas>
      </CanvasWrapper>
  );
}

export default App;
