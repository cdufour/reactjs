import React, {useState} from 'react';
import { render } from 'react-dom';
import Players from './Players';


function Test(props) {
    return (
        <div>
            {/* <h1>Test</h1> */}
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

function MyApp() {

    //let title = "Simple titre";
    let list = <ul>
        <li>Element 1</li>
        <li>Element 2</li>
        <li>Element 3</li>
    </ul>;

    const [title, setTitle] = useState("Titre principal");

    return (
        <div>
            {/* <button onClick={() => title = "coucou"}>Click</button> */}
            <button onClick={() => setTitle("Coucou")}>Click</button>
            <div>{title}</div>
            {list}
            <Test title="Titre" content="Contenu de mon composant" />
            {/* <Player name="Chris" /> */}
            <Players />
        </div>
    )
}

export default MyApp;