import React from "react";
import "./Table.css";
import axios from "axios";
import {forEach} from "react-bootstrap/ElementChildren";

export default class Table extends React.Component {
    state = {
        information: [],
    }

    constructor(props) {
        super(props);
    }

    sendRequest() {
        axios.get(this.props.apiUrl)
            .then(response => response.data)
            .then(data => this.setState({information: data}));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.apiUrl === this.props.apiUrl)
            return;
        this.sendRequest();
    }

    componentDidMount() {
        this.sendRequest();
    }


    createRowByDict(dict) {
        let drugList = this.props.drugList;

        function iterateElementWithDrug(element) {
            if (element[0] === "drug") {
                try {
                    return <td>{element[1].map(el => el.id.toString()).join(',')}</td>
                } catch (e) {
                    return <td>{element[1].id}</td>
                }
            }
            return (<td>{element[1].toString()}</td>);
        }

        function iterateElementWithoutDrug(element) {
            return (<td>{element[1].toString()}</td>);
        }


        if (this.props.withDrug)
            return Object.entries(dict).map(iterateElementWithDrug);
        else
            return Object.entries(dict).map(iterateElementWithoutDrug);
    };

    createTitle(dict) {
        return Object.keys(dict).map(value => value === "drug" ? <th>drugIds</th> : <th>{value.toString()}</th>);
    };


    render() {
        console.log(this.state.information);
        return (
            <table className={"table"}>
                {
                    this.state.information.slice(0, 1).map(info => <tr>{this.createTitle(info)}</tr>)
                }
                {
                    this.state.information.map(info => <tr>{this.createRowByDict(info)}</tr>)
                }
            </table>
        )
    }
}