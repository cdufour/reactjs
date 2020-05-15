const api = "http://localhost:3500";

function getTeams() {
    return fetch('http://localhost:3500/teams')
}

function addTeam(name) {
    let team = {team: {name}};
    const options = {
        method: 'post',
        body: JSON.stringify(team),
        headers: {
            'Content-Type':'application/json'
        }
    }
    return fetch('http://localhost:3500/teams', options);
}

export { getTeams, addTeam }