import React, {useState} from 'react';
import { render } from 'react-dom';
import Players from './components/player/Players';
import PasswordReset from './components/PasswordReset';
import PlayerManager from './components/player/PlayerManager';
import { LangProvider } from './contexts/LangContext';
import LangSwitcher from './components/LangSwitcher';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import TeamForm from './components/TeamForm';

function Test(props) {
    return (
        <div>
            {/* <h1>Test</h1> */}
            <h1>{props.title}</h1>
            <p>{props.content}</p>

            {props.children}
        </div>
    )
}

function SubTest(props) {
    return (<div>SubTest Fonctional Component</div>)
}

// Composant racine
function MyApp() {

    //let title = "Simple titre";

    // variable contenant un template JSX
    let list = <ul>
        <li>Element 1</li>
        <li>Element 2</li>
        <li>Element 3</li>
    </ul>;

    // useState permet d'utiliser de donner un state local au composants fonctionnels
    // alors que les composants Classe ont un state d'emblée (this.state)
    // ici title fera office de getter (lecture) et setTitle de setter (écriture)
    const [title, setTitle] = useState("Titre principal");

    return (


        <LangProvider value="fr">

            <div>
                {/* <button onClick={() => title = "coucou"}>Click</button> 
                <button onClick={() => setTitle("Coucou")}>Click</button>
                <div>{title}</div>
                {list}
                <Test title="Titre" content="Contenu de mon composant" />
                <Player name="Chris" />
                <Players />
                <PasswordReset />
                <PlayerForm /> */}
                {/* <Test title="Titre" content="Contenu de mon composant">
                    <SubTest />
                </Test> */}
                {/* <LangSwitcher />
                <PlayerManager /> */}

                <Router>
                    <LangSwitcher />
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/test">Test</Link>
                                </li>
                                <li>
                                    <Link to="/subtest">Subtest</Link>
                                </li>
                                <li>
                                    <Link to="/team/form">Add a team</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <Switch>
                        <Route path="/team/form">
                            <TeamForm />
                        </Route>
                        <Route path="/passwordreset">
                            <PasswordReset />
                        </Route>
                        <Route path="/player/:id">
                            <SubTest />
                        </Route>
                        <Route path="/subtest">
                            <SubTest />
                        </Route>
                        <Route path="/test">
                            <Test title="Titre" content="Contenu de mon composant">
                                <SubTest />
                            </Test>
                        </Route>
                        <Route path="/">
                            <PlayerManager />
                        </Route>
                    </Switch>
                </Router>

            </div>

        </LangProvider>
        
    )
}

export default MyApp;