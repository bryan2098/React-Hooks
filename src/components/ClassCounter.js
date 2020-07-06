import React, { Component } from 'react'

export default class ClassCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`;
    }

    componentDidUpdate() {
        document.title = `Clicked ${this.state.count} times`;

        console.log("call DidUpdate");
    }

    Increase = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
                <button onClick={this.Increase}> Click {this.state.count}</button>
            </div>
        )
    }
}
