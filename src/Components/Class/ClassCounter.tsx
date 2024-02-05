
import { Component } from "react";

type Counterprops = {
    message: string
}
type Counterstate = {
    count: number
}
export class ClassCounter extends Component<Counterprops, Counterstate> {
    state = {
        count: 0, 
    }

    handleClick = () => {
        this.setState((prevState) => ({count: prevState.count+1}))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}