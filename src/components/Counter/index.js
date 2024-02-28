import {useState} from "react";

let count = 100;

export default function Counter() {
    function increment() {
        count++;
        console.log("Incremented to ", count);
    }

    const [counter, setCounter] = useState(0);
    // console.log('Counter', counter, setCounter);

    return (
        <>
            <p>
                Counter does not work: <button onClick={increment}>{ count }</button>
            </p>
            <p>
                Counter works: <button onClick={() => setCounter(counter + 1)}>{ counter }</button>
            </p>
        </>
    );
}