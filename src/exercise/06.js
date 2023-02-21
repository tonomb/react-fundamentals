// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { useRef, useState } from 'react'

function UsernameForm({ onSubmitUsername }) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  const [errorState, setErrorState] = useState(false)


  const usernameInput = useRef(null);

  function onChangeHandler(e) {
    let value = e.target.value;

    if (value !== value.toLowerCase()) {
      setErrorState(true)
    } else {
      setErrorState(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const name = usernameInput.current.value
    onSubmitUsername(name)
  }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label >Username:</label>
        <input type="text" name='username' ref={usernameInput} onChange={onChangeHandler} />
        {errorState && <p style={{ color: "red" }}>Username must ve valid</p>}
      </div>
      <button type="submit" disabled={errorState} >Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
