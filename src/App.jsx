import { useState } from "react"

export const App = () => {

  const [count, setCount] = useState(0) //[stateVariable, setterFunction]

  const handleButtonClick = () => {
    setCount(count + 1)
}

  return <div>
    <div className="welcome">Welcome to your first React Application!</div>
    <p>This is a test</p>
    <button className="btn-secondary"onClick={handleButtonClick}>Click Me!</button>
    <div>Count: {count}</div>
  </div>
}

