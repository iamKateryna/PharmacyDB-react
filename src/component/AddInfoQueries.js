import React from "react";
import "./InfoQueries.css";
import FunctionButton from "./FunctionButton";
import SubmitForm from "./SubmitForm";


export default class AddInfoQueries extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        current_form: null
    };

    updateHandler = (arg) => {
        this.setState(state => state.current_form = arg);
    }

    getFormForRequest() {
        switch (this.state.current_form) {
            case "request1":
                return (<SubmitForm/>)
            case "request2":
                return (<SubmitForm/>)
        }
    }

    render() {
        return (
            <div className={"info_queries_field"}>
                <SubmitForm title="Place an order" apiUrl={"http://localhost:8080/orders"} form={"order"}/>
                <SubmitForm title="Add prescription" apiUrl = {"http://localhost:8080/prescriptions"} form={"prescription"}/>
            </div>
        );
    }
}