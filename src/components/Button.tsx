import React from 'react'

interface IProps {
    onClick: () => void,
    value: string
}

export const Button :React.FC<IProps>= ({ onClick, value }: IProps) => {

    return(
        <button onClick={onClick}>{value}</button>
    )
}