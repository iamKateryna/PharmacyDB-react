import React from "react";
import "./SubmitForm.css";
import axios from "axios";

export default class SubmitForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
        this.handleTextInputChange = this.handleTextInputChange.bind(this);
        this.handleBoolInputChange = this.handleBoolInputChange.bind(this);
        this.handleIntInputChange = this.handleIntInputChange.bind(this);
        this.handleListIntInputChange = this.handleListIntInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleBoolInputChange(event) {
        const target = event.target;
        const value = Boolean(target.value);
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleIntInputChange(event) {
        const target = event.target;
        const value = parseInt(target.value);
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleListIntInputChange(event) {
        const target = event.target;
        const value = target.value.split(',').map(val => Number(val));
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    sendRequest(data) {
        data.createOrderDate = Date.now().toString();
        console.log(data);
        axios.post(this.props.apiUrl, data)
            .then(response => response.data)
            .then(data => this.setState({information: data}));
    }

    handleSubmit(event) {
        let data = this.state;
        this.sendRequest(data);
    }

    orderForm(){
        return (
            <form className={"submit_form"}>
                <label className={"title"}>{this.props.title}</label>
                <fieldset>
                    <div className={"form_question"}>
                        <label>Patient's name</label>
                        <input name={"patient"} type="text" onChange={this.handleTextInputChange}/>
                    </div>
                    <div className={"form_question"}>
                        <label>Patient's phone number</label>
                        <input name={"phoneNumber"} type="text" onChange={this.handleTextInputChange}/>
                    </div>
                    <div className={"form_question"}>
                        <label>Patient's address</label>
                        <input name={"adress"} type="text" onChange={this.handleTextInputChange}/>
                    </div>
                    <div className={"form_question"}>
                        <label>Drugs</label>
                        <input name={"drugId"} type="text" onChange={this.handleListIntInputChange}/>
                    </div>
                    <div className={"form_question"}>
                        <label>Available?</label>
                        <input name={"available"} type="text" onChange={this.handleBoolInputChange}/>
                    </div>
                    <div className={"form_question"}>
                        <label>Amount</label>
                        <input name={"amount"} type="text" onChange={this.handleIntInputChange}/>
                    </div>

                    <input type="submit" value="Post" onClick={this.handleSubmit}/>
                </fieldset>
            </form>
        );
    }

    prescriptionForm(){
        return (
            <form className={"submit_form"}>
                <label className={"title"}>{this.props.title}</label>
                <fieldset>
                    <div className={"form_question"}>
                        <label>Doctor's name</label>
                        <input name={"doctor"} type="text" onChange={this.handleTextInputChange}/>
                    </div>
                    <div className={"form_question"}>
                        <label>Signature</label>
                        <input name={"signature"} type="text" onChange={this.handleTextInputChange}/>
                    </div>
                    <div className={"form_question"}>
                        <label>Stamp</label>
                        <input name={"stamp"} type="text" onChange={this.handleIntInputChange}/>
                    </div>
                    <div className={"form_question"}>
                        <label>Patient's name</label>
                        <input name={"patient"} type="text" onChange={this.handleTextInputChange}/>
                    </div>
                    <div className={"form_question"}>
                        <label>Patient's age</label>
                        <input name={"age"} type="text" onChange={this.handleIntInputChange}/>
                    </div>
                    <div className={"form_question"}>
                        <label>Diagnosis</label>
                        <input name={"diagnosis"} type="text" onChange={this.handleTextInputChange}/>
                    </div>
                    <div className={"form_question"}>
                        <label>Drug</label>
                        <input name={"drugId"} type="text" onChange={this.handleIntInputChange}/>
                    </div>
                    <div className={"form_question"}>
                        <label>Amount</label>
                        <input name={"amount"} type="text" onChange={this.handleIntInputChange}/>
                    </div>

                    <input type="submit" value="Post" onClick={this.handleSubmit}/>
                </fieldset>
            </form>
        );
    }

    render() {
        if(this.props.form === "order") {
           return this.orderForm();
        }

        if(this.props.form === "prescription") {
            return this.prescriptionForm();
        }
    }
}
