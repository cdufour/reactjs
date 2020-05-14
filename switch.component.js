const e = React.createElement;

class SwitchComponent extends React.Component
{
    constructor(props) {
        super(props);
        this.state = { on: true }
    }

    onClick() {
        this.setState({on: !this.state.on});
    }

    render() {
        if (this.state.on) {
            return e('button', { onClick: () => this.onClick() }, 'On')
        } else {
            return e('button', { onClick: () => this.onClick() }, 'Off')
        }
        
    }
}