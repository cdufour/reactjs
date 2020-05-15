import React from 'react';
import { getTeams } from '../../services/Team.service';
import LangContext from '../../contexts/LangContext'


class PlayerForm extends React.Component
{
    static contextType = LangContext

    constructor(props) {
        super(props);
        this.state = { name: '', team: '0', teams: null }
        this.onHandleChange = this.onHandleChange.bind(this); //  this rebinding
        
        this.numInput = React.createRef();
        this.myDiv = React.createRef();
    }

    componentDidMount() {
        getTeams()
            .then(res => res.json())
            .then(res => {
                this.setState({teams: res})
            })

        //console.log(this.numInput); // accès prématuré createREf() est asynchrone
        console.log(this.myDiv);
    }

    onSave(playerData) {
        console.log(this.numInput);
        //console.log('onSave PlayerForm Component');
        this.props.onSave(playerData);
        this.numInput.current.value = "TOTO";
        this.myDiv.current.style.fontSize = "5rem";
    }

    onHandleChange(e) {
        if (e.target.name == "playerName") {
            this.setState({name: e.target.value})
        } else if (e.target.name == "teamName") {
            this.setState({team: e.target.value})
        }
    }

    moveDiv() {
        this.myDiv.current.style.fontSize = "5rem";
    }

    render() {

        
        if (!this.state.teams) return (<div>Loading...</div>);

        let teams = this.state.teams.map(team => <option key={team}>{team}</option>);

        return (
            <>
                <h2>Form Component</h2>
                <div ref={this.myDiv}>myDiv</div>
                <button onClick={() => this.moveDiv()}>Move Div</button>
                <input type="text" ref={this.numInput} />

                <input
                    onChange={this.onHandleChange}
                    type="text"
                    name="playerName"
                    placeholder="nom" 
                    value={this.state.name} />
                <select name="teamName" value={this.state.team} onChange={this.onHandleChange}>
                    <option value="0">Choisir une équipe</option>
                    {teams}
                </select>
                <button onClick={() => this.onSave(this.state)}>Enregistrer</button>
            </>
        )
    }
}

export default PlayerForm;