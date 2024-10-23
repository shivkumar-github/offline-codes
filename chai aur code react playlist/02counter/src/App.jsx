import { useState } from 'react' /* imports the hooks */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// hooks help us to update state of variables in whole webpage whereever it is used

function App() {

    let [counter, setCounter] = useState(5)/* default value and it returns an array with two values first is the variable value and second a function which is responsible for updating the value of variable through the whole webpage*/

    // let counter = 5

    const addValue = () => {
        if(counter+1<=20)
        counter += 1
        setCounter(counter) // setCounter(counter+1)
        /*
        React doesn't updates data quickly instead it sends data in batches, when you call setCounter(counter + 1) four times in a row, React is using the same value of counter for each call because counter hasn’t been updated yet between the calls. So, all four updates are using the same counter value.
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
        // to do this properly we do (as when we do it in function component it ensures that after each call the value is updated.)
        setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);
        */


    }
    const reduceValue = () => {
        if(counter-1>=0) // when value needs in between 0 to 20
        counter -= 1
        setCounter(counter)
    }
    return (
        <>
            <h1>Chai aur react</h1>
            <h2>Counter value: {counter}</h2>

            <button onClick={addValue}>Add Value</button>
            <br /> {/* we can not write <br> as the rules of jsx */}
            <button onClick={reduceValue}>Reduce Value</button>
        </>
    )
}

export default App
