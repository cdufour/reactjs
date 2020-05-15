import React from 'react';
import { addTeam } from '../services/Team.service';

class TeamForm extends React.Component
{
    constructor(props) {
        super(props);
        this.teamName = React.createRef();
    }

    onSave() {
        addTeam(this.teamName.current.value)
            .then(res => res.json())
            .then(res => console.log(res))
    }

    render() {
        return(
            <>
                <h2>Enregistrer une équipe</h2>
                <input placeholder="Nom de l'équipe" type="text" ref={this.teamName} />
                <button onClick={() => this.onSave()}>Enregistrer</button>
            </>
        )
    }

}

export default TeamForm;
