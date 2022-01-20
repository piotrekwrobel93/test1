import React from "react"

type ReturnProps = {
    onMouseMove: (event: React.MouseEvent) => void,
    onMouseUp: (event: React.MouseEvent) => void,
    onMouseDown: (event: React.MouseEvent) => void,
}
const Logic = ():ReturnProps => {

    
    const onMouseMove = (event: React.MouseEvent) => {}
    // 
    const onMouseDown = (event: React.MouseEvent) => {}
    // 
    const onMouseUp = (event: React.MouseEvent) => {}

    return {
        onMouseMove,
        onMouseDown,
        onMouseUp
    }
}

export default Logic