import { useContext } from 'react'
const Content2 = (state) => {
    const test = useContext(state.test)
    console.log(test)

    const handleOnClick = () => {
        test.setNumber(4)
    }

    return <div onClick={handleOnClick}>{test.number}</div>
}
export default Content2
