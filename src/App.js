import './App.css';
import HelloComponent from "./components/HelloComponent"; // index.js
import Counter from "./components/Counter";
import {useState} from "react";
import UseStateComponent from "./components/UseStateComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import ChuckNorrisComponent from "./components/ChuckNorrisComponent";
import UseRefComponent from "./components/UseRefComponent";

export default function App() {
    const users = ["John", "Jane", "Joe", "Jill"];
    const [user, setUser] = useState("John");

    return (
        <Layout>

            <UseRefComponent></UseRefComponent>
            <hr/>

            <ChuckNorrisComponent></ChuckNorrisComponent>
            <hr/>

            <UseEffectComponent></UseEffectComponent>
            <hr/>

            <UseStateComponent></UseStateComponent>
            <hr/>

            <h2>Hello user {user}!</h2>
            <p>
                <EditInput value={user} setValue={setUser} />
            </p>
            <hr/>
            <Counter></Counter>
            <hr/>
            <p>
                <button onClick={() => alert("LAAA!")}>Click here!</button>
            </p>
            <hr/>
            <HelloComponent userName="John" color="silver"></HelloComponent>
            <hr/>
            <ListOfUsers title="List of Users" users={users}></ListOfUsers>
        </Layout>
    );
}

function Layout({children}) {
    return (
        <div>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
}

function EditInput({value, setValue}) {
    return (
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
    );
}

function ListOfUsers({title = "TEST", users = ["John", "Paul", "George", "Ringo"]}) {

    function handleClick(user) {
        alert("handleClick() with user " + user);
    }

    return (
        <>
            {title && <h1>{title}</h1>}
            <ul>
                {users.map((user, index) => <li key={index}>
                    <button onClick={() => handleClick(user)}>Click!</button>
                    {user}</li>)}
            </ul>
        </>
    );
}

function Header() {
    return (
        <header className="headline">
        <h1>My React App</h1>
        </header>
    );
}

function Footer() {
    return (
        <footer>
            <p>© 2024</p>
        </footer>
    );
}