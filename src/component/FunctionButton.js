import React from "react";
import "./FunctionButton.css";
import MedicineTypeDropdown from "./MedicineTypeDropdown";

export default class FunctionButton extends React.Component{
    constructor(props) {
        super(props);

        this.state ={
            input:"0"
        };

        this.updateInput = this.updateInput.bind(this)
    }

    updateInput(event){
        this.setState({input : event.target.value})
        console.log(this.state.input);
    }

    render() {
        let updateHandler = this.props.updateHandler;

        return(
            <div class={"button"} onClick={() => {updateHandler(this.props.name_);}}>
                <p>{this.props.message}</p>
                {
                    this.props.withInput ?(<input type={"text"} onChange={this.updateInput}/>): null
                }
            </div>
        );
    }
};