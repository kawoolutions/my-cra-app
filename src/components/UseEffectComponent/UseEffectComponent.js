import './UseEffectComponent.css'
import React, { useState, useEffect } from "react";

export default function UseEffectComponent() {
    console.log("UseEffectComponent");

    const [state1, setState1] = useState(1);
    const [state2, setState2] = useState(2);

    function handleState1(e) {
        setState1(e.target.value);
    }

    function handleState2(e) {
        setState2(e.target.value);
    }
    useEffect(() => {
        console.log("ChuckNorrisComponent useEffect - once");

        // const interval = setInterval(() => {
        //     console.log("timer...");
        // }, 1000);
        // clearInterval(interval);

        return () => {
            console.log("ChuckNorrisComponent useEffect - cleanup once");
        };
    }, []);

    useEffect(() => {
        console.log("ChuckNorrisComponent useEffect - always");

        return () => {
            console.log("ChuckNorrisComponent useEffect - cleanup always");
        };
    });

    return (
        <>
            <div>
                <p>UseEffectComponent works</p>
            </div>
        </>
    );
}
