import React from 'react';

export default class Dice extends React.Component{
    state = {
        randomInteger : Math.floor(Math.random() * 6 + 1)
    }

    anotherOne = () => {
        this.setState ({
            randomInteger : Math.floor(Math.random() * 6 + 1)
        })
    }

    coloredDice = () => {
        if (this.state.randomInteger === 1) {
            return "green"
        }
        else if (this.state.randomInteger === 6) {
            return "red"
        }

        else{
            return ""
        }
    }



    render() {
        return(
            <div onClick = {this.anotherOne} style = {{
                backgroundColor : this.coloredDice()
            }}>
                {this.state.randomInteger}
            </div>
        )
    }
}