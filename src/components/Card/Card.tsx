import { useState } from 'react'
import styled from 'styled-components'

type Spacing = {
    inline: string,
    block: string
}

type Props = {
    children: React.ReactNode,
    background: string,
    maxWidth: number | string,
    maxHeight: number | string,
    spacing: Spacing,
    borderRadius: number | string
}

const CardNode = styled.div`
`
export const Card = ({
        children, 
        background="#fff",
        maxWidth,
        maxHeight,
        spacing,
        borderRadius
    } :Props) => {

        const [_spacing, ] = useState<Spacing>({block: '0', inline: '0'})
    return (
        <CardNode style={{
            background,
            maxWidth,
            maxHeight,
            paddingBlock: spacing.block ? spacing.block : _spacing.block,
            paddingInline: spacing.inline ? spacing.inline : _spacing.inline,
            borderRadius: borderRadius + "px"
        }}>
            {children}
        </CardNode>
    )
}
