import React from 'react'

interface IProps {
    onClick: () => void,
    value: string
}

export const Button2 :React.FC<IProps>= ({ onClick, value }: IProps) => {

    return(
        <button className="buton2" onClick={onClick}>{value}</button>
    )
}