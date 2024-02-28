import './UseRefComponent.css'
import React, {useEffect, useRef} from "react";
import useFocus from "../../hooks/useFocus";

export default function UseRefComponent() {
    console.log("UseRefComponent");

    const inputRef = useFocus();
    const intervalRef = useRef();

    function handleButton() {
        console.log("handleButton");
        console.log(inputRef.current.value);
    }

    function handleStart() {
        if (intervalRef.current) {
            return;
        }

        console.log("handleStart");
        intervalRef.current = setInterval(() => {
            console.log("interval");
        }, 1000);
    }

    function handleStop() {
        console.log("handleStop");
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    useEffect(() => {
        console.log("useEffect");
        // console.log(inputRef.current);
        inputRef.current.focus();
    }, []);

    return (
        <>
            <div>
                <p>UseRefComponent</p>

                <p>
                    <input type="text" ref={inputRef}></input>
                    <button onClick={handleButton}>Save</button>
                </p>

                <p>
                    <button onClick={handleStart}> Start </button>
                    <button onClick={handleStop}> Stop </button>
                </p>
            </div>
        </>
    );
}
