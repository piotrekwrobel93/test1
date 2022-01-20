import React from "react";
import styled from 'styled-components'
import Logic from './CanvasLogic'
// types
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode,
    background: string
}


// styled
const CanvasNode = styled.div`
    width: 100%;
    height: 100%;
`


// JSX
export const Canvas: React.FunctionComponent<IProps> = ({ children, background, ...rest}:IProps) => {
    const {handleClick} = Logic()
    return (
        <CanvasNode onClick={handleClick} {...rest} style={{ background }}>
            {children}
        </CanvasNode>
    )
}