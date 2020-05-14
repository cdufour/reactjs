import React from 'react';

class PlayerForm extends React.Component
{

    constructor(props) {
        super(props);
        this.state = { name: '', team: '0' }
        this.onHandleChange = this.onHandleChange.bind(this); //  this rebinding
    }

    onSave(playerData) {
        //console.log('onSave PlayerForm Component');
        this.props.onSave(playerData)
    }

    onHandleChange(e) {
        if (e.target.name == "playerName") {
            this.setState({name: e.target.value})
        } else if (e.target.name == "teamName") {
            this.setState({team: e.target.value})
        }
    }

    render() {
        return (
            <>
                <h2>Form Component</h2>
                <input
                    onChange={this.onHandleChange}
                    type="text"
                    name="playerName"
                    placeholder="nom" 
                    value={this.state.name} />
                <select name="teamName" value={this.state.team} onChange={this.onHandleChange}>
                    <option value="0">Choisir une équipe</option>
                    <option>Juve</option>
                    <option>Madrid</option>
                    <option>Strasbourg</option>
                </select>
                <button onClick={() => this.onSave(this.state)}>Enregistrer</button>
            </>
        )
    }
}

export default PlayerForm;