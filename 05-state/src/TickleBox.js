import React from "react";

export default class TickleBox extends React.Component{
    state = {
        message : ""
    }

    hover = () => {
        this.setState(
            {
                message: "it tickles!"
            }
        )
    }

    exitHover = () => {
        this.setState(
            {
                message: ""
            }
        )
    }

    render () {
        return (
            <div onMouseEnter = {this.hover} onMouseOut = {this.exitHover} style= {{
                border : "3px solid black",
                width: "80px",
                height: "30px"
            }}>
                {this.state.message}

            </div>
            
        )
    }
}

