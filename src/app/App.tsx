import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks'
import { insertDummy } from '../features/relic/relic-slice'
import RelicCard from '../features/relic/RelicCard'

function App() {

  const relics = useAppSelector((state) => state.relics.inventory)
  const dispatch = useAppDispatch()

  function handleClick() {
    dispatch(insertDummy())
  }

  return (
    <>
      <div className="flex">
        <div className="bg-gray-700 w-screen h-screen">
        {relics[0] ? RelicCard(relics[0]) : "Nothing to see here!"}
        </div>
        <div className="fixed bottom-0 w-screen h-6 flex bg-gray-900 text-white shadow-lg">
          <button onClick={handleClick}>Press me!</button>
          <p></p>
          <img src={reactLogo} />
          <img src={viteLogo} />
        </div>
      </div>
    </>
  )
}

export default App
