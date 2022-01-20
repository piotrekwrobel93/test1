type ReturnProps = {
    handleClick: () => void

}


const Logic = ():ReturnProps => {
    const handleClick = () => console.log('cliked button :)')

    return {
        handleClick
    }
}

export default Logic