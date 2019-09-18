import { useContext } from 'react'

const Content1 = (state) => {
    const test = useContext(state.test)
    return <div>{test.number}</div>
}
export default Content1
