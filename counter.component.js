const e = React.createElement;

class CounterComponent extends React.Component
{
    constructor(props) {
        super(props);
        console.log(props);
        this.state = { count: 0 }
    }

    onClick() {
        let newCount = this.state.count + 1;
        if (newCount == 10) newCount = 0;
        this.setState({count: newCount})
        //this.props.message = "Hello";
    }

    render() {
        return e('button', { onClick: () => this.onClick() }, this.props.message + ' ' + this.state.count)
    }
}