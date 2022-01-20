import styled from "styled-components"
import { IItem } from "../../types"

type Props = {
    children: React.ReactNode,
    item: IItem
}

const DraggableNode = styled.div`
    border: 1px solid green;
    position: absolute;
`



export const Draggable = ({children, item}:Props) => {
    const {width, height, x, y} = item
    return(
        <DraggableNode style={{
            width,
            height,
            top: y,
            left: x
        }}>
            {children}
        </DraggableNode>
    )
}