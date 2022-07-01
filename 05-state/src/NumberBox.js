import React from 'react'

export default class NumberBox extends React.Component {

    state = {
        count: 0
    }

    positive = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    negative = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <React.Fragment>
                <div style={{
                    border: "2px solid red"
                }}>
                    {this.state.count}

                </div>

                <div onClick={this.positive} style={{
                    border: "2px solid green"
                }}>
                    +++
                </div>

                <div onClick={this.negative}>---</div>

            </React.Fragment>

        )
    }
}