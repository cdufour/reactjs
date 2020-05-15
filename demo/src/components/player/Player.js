import React from 'react';

class Player extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {teamVisible: false}
    }

    toggleTeamName() {
        this.setState({teamVisible: !this.state.teamVisible});
    }

    render() {
        let teamName = (this.state.teamVisible) 
            ? <span> (Equipe: {this.props.team})</span>
            : <span></span>;

        let color = (this.props.team.length < 5) ? 'red' : 'black';
   
        return (
            <p>
                Player: <span
                    style={{color}} 
                    onDoubleClick={() => this.toggleTeamName() }>{this.props.name}</span>
                {teamName}
            </p>
        );
    }
}

export default Player;