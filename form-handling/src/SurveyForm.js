import React from 'react'

export default class SurveyForm extends React.Component {
    state = {
        firstName : '',
        lastName : '',
        typeOfEnquiry : '',
        country: 'singapore',
        contact: []

    }

    updateFormField = (event) => {
        let stateVariable = event.target.name;
        this.setState({
            [stateVariable] : event.target.value
        })
    }

    updateFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    updateLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    updateEnquiry = (event) => {
        this.setState({
            typeOfEnquiry: event.target.value
        })
    }

    updateCountry = (event) => {
        this.setState({
            country : event.target.value
        })
    }

    updateContact = (event) => {
        if(this.state.contact.includes(event.target.value)) {
            //clone, modify, replace
            // the user is unchecking the checkbox
            let contactIndex = this.state.contact.indexOf(event.target.value)
            let newContactArray = [...this.state.contact]
            newContactArray.splice(contactIndex, 1)
            this.setState({
                'contact' : newContactArray
            })
        }
        //clone, modify, replace
        // the user is unchecking the checkbox 
        else {
            let newContactArray = [...this.state.contact]
            newContactArray.push(event.target.value)
            this.setState({
                'contact': newContactArray
            })
        }
    }

    render() {

        // do not call setState in the render function - will end up with an infinite loop
        // derived values should go under render 
        return (
            <React.Fragment>
                <div>
                    <label>First Name:</label>
                    <input 
                    type="text" 
                    value = {this.state.firstName} 
                    onChange={this.updateFirstName}
                    name = "firstName"
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input 
                    type="text" 
                    value = {this.state.lastName}
                    onChange={this.updateLastName}
                    name = "lastName"
                    />
                </div>
                <div>
                    <label>Type of Enquiry:</label>
                    <input 
                    type = "radio"
                    name = "typeOfEnquiry"
                    value = "support"
                    onChange = {this.updateEnquiry}
                    checked = {this.state.typeOfEnquiry === "support"}
                    />
                    <label>Support</label>
                    <input 
                    type = "radio"
                    name = "typeOfEnquiry"
                    value = "sales"
                    onChange = {this.updateEnquiry}
                    checked = {this.state.typeOfEnquiry === "sales"}
                    />
                    <label>Sales</label>
                    <input 
                    type = "radio"
                    name = "typeOfEnquiry"
                    value = "marketing"
                    onChange = {this.updateEnquiry}
                    checked = {this.state.typeOfEnquiry === "marketing"}
                    />
                    <label>Marketing</label>

                </div>
                <div>
                    <label>Country</label>
                    <select name="country" className="form-control" value = {this.state.country} onChange = {this.updateCountry} >
                        <option value="singapore">Singapore</option>
                        <option value="malaysia">Malaysia</option>
                        <option value ="indonesia">Indonesia</option>
                    </select>
                </div>
                <div>
                    <label>Contact Method:</label>
                    <input type = "checkbox" name = "contact" value = "email" onChange = {this.updateContact} checked = {this.state.contact.includes('email')}/><label>Email</label>
                    <input type = "checkbox" name = "contact" value = "phone" onChange = {this.updateContact} checked = {this.state.contact.includes('phone')}/><label>Phone</label>
                    <input type = "checkbox" name = "contact" value = "snailMail" onChange = {this.updateContact} checked = {this.state.contact.includes('snailMail')}/><label>Snail Mail</label>
                </div>

            </React.Fragment>

        )
    }
}