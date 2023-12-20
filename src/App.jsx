import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Increment, Decrement, IncrementByAmount } from './features/counter/counterSlice'

function App() {

  const { value } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(IncrementByAmount(+inputVal.current.value))

  }

  const inputVal = useRef()

  return (
    <div className='container'>
      <h1>{value}</h1>
      <div className='buttons'>
        <button onClick={() => dispatch(Increment())}>Increment</button>
        <button onClick={() => dispatch(Decrement())}>Decrement</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input ref={inputVal} type="number" />
        <button className='left'>Add</button>
      </form>
    </div>
  )
}

export default App