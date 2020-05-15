import React from 'react';
import Player from './Player';

class Players extends React.Component
{
    players = [];

    constructor(props) {
        super(props);
        this.players = [
            { name: 'Chris', team: 'Juve' },
            { name: 'Phil', team: 'FC Grâce' },
            { name: 'Vincent', team: 'Spartak Courbevoie' }
        ]
    }

    render() {
        const players = this.players
            .map(player => <Player key={player.name} name={player.name} team={player.team} />)
        return(
            <>
                <h1>Liste des joueurs</h1>
                {players}
            </>
        )
    }
}

export default Players;
    