import React, { useState } from "react"

type ReturnProps = {
    onMouseMove: () => void,
    onMouseUp: () => void,
    onMouseDown: () => void,
}
const Logic = ():ReturnProps => {

    const [isMoving, setIsMoving] = useState<boolean>(false)
    
    const onMouseMove = () => {
        if (isMoving) {
            console.log('moving your mouse over canvas')
        }
    }
    // 
    const onMouseDown = () => {
        if (!isMoving) {
            setIsMoving(!isMoving)
        }
    }
    // 
    const onMouseUp = () => {
        if (isMoving) {
            setIsMoving(false)
        }
    }

    return {
        onMouseMove,
        onMouseDown,
        onMouseUp
    }
}

export default Logic