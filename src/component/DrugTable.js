import React from "react";
import axios from "axios";
import "./DrugTable.css";
import "./DrugCard";
import DrugCard from "./DrugCard";


export default class DrugTable extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        drugs: []
    }

    sendRequest() {
        axios.get(this.props.apiUrl)
            .then(response => response.data)
            .then(drug_list => this.setState({drugs: drug_list}))
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if (prevProps.apiUrl === this.props.apiUrl)
            return;
        this.sendRequest();
    }

    componentDidMount() {
        this.sendRequest();
    }

    parseDict(dict) {
        let text = "";

        for (const [key, value] of Object.entries(dict)) {
            if (key === "name" || key === "imgLink")
                continue;

            if(key === "technology"){
                text += `${key} : ${value.id},`;
                continue;
            }
            text +=  `${key} : ${value},`;
        }

        return text;
    }

    render() {
        return (
            <div className={"drug_table"}>
                {
                    this.state.drugs.map(drug => <DrugCard title={drug.name} text={this.parseDict(drug)}
                                                           link={drug.imgLink}/>)
                }
            </div>
        );
    }
}