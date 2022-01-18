import React, { useEffect } from 'react'

interface IProps {
    title: string,
    name: string
}

export const Welcome :React.FC<IProps>= ({ title, name }: IProps) => {

    useEffect(() => {
        console.log('effect')
    }, [])
    return(
        <div>
            <p>Welcome
            </p>
            { title && <p>{title}</p>}
            { name && <p>{name}</p>}
        </div>
    )
}