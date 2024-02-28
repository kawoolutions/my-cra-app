import './UseStateComponent.css'
import React, {useState} from "react";

export default function UseStateComponent() {
    const [state1, setState1] = useState(1);
    const [state2, setState2] = useState(2);

    const [user, setUser] = useState({ name: "John", age: 30 });

    function handleState1(e) {
        setState1(e.target.value);

        setState1(e.target.value + ".");
        setState1(e.target.value + "..");
        setState1(e.target.value + "..."); /* das passiert */
    }

    function handleState2(e) {
        setState2((prevState) => {
            console.log("prevState", prevState);
            return e.target.value + ".";
        });

        setState2((prevState) => {
            console.log("prevState", prevState);
            return e.target.value + "..";
        });

        setState2((prevState) => {
            console.log("prevState", prevState);
            return e.target.value + "...";
        });
    }

    function handleUser(e) {
        setUser((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value}
        })
    };

    return (
        <>
            <div>
                <p>UseStateComponent</p>
                <p>
                    Name: <input type="text" value={user.name} name="name" onInput={handleUser}/> (
                    {user.name})
                </p>
                <p>
                    Age: <input type="text" value={user.age} name="age" onInput={handleUser}/> (
                    {user.age})
                </p>
                <p>
                    State1: <input type="text" value={state1} onInput={handleState1}></input> ({state1})
                </p>
                <p>
                    State2: <input type="text" value={state2} onInput={handleState2}></input> ({state2})
                </p>
            </div>
        </>
    );
}
