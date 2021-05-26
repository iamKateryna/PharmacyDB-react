import React from "react";
import "./InfoQueries.css";
import FunctionButton from "./FunctionButton";
import DrugTable from "./DrugTable";
import Table from "./Table";

export default class GetInfoQueries extends React.Component {
    state = {
        current_table: null
    }

    updateHandler = (arg) => {
        this.setState({current_table: arg});
    }


    getTableForRequest() {
        switch (this.state.current_table) {
            case "request1":
                return (<Table apiUrl={"http://localhost:8080/orders/not-picked-up"} withDrug = {true} drugList={true}/>)
            case "request2":
                return (<Table apiUrl={"http://localhost:8080/orders/pending"} withDrug = {true} drugList={true}/>)
            case "request3":
                return (<Table apiUrl={"http://localhost:8080/storage/critical"} withDrug = {true}/>)
            case "request4":
                return (<Table apiUrl={"http://localhost:8080/storage/minimal"} withDrug = {true}/>)
            case "request5":
                return (<Table apiUrl={"http://localhost:8080/prescriptions"} withDrug = {true}/>)
            case "request6":
                return (<Table apiUrl={"http://localhost:8080/technology"}/>)
            case "request7":
                return (<DrugTable apiUrl={"http://localhost:8080/drugs"}/>)
            case "request8":
                return (<Table apiUrl={"http://localhost:8080/storage"} withDrug = {true}/>)
        }
    }

    render() {
        return (
            <div className={"info_queries_field"}>
                <div className={"info_queries"}>
                    <FunctionButton name_="request1" message={"Get info about orders that weren't picked up"} //getNotPickedUpOrders()
                                    updateHandler={this.updateHandler.bind(this)}/>
                    <FunctionButton name_="request2"
                                    message={"Get info about customers who are waiting for orders because of lack of ingredients"} //getPendingOrders()
                                    updateHandler={this.updateHandler.bind(this)}/>
                    <FunctionButton name_="request3"
                                    message={"Get info about critical components"} //getCriticalComponents()
                                    updateHandler={this.updateHandler}/>
                    <FunctionButton name_="request4"
                                    message={"Get info about components that are little in stock"} //getMinimalComponents()
                                    updateHandler={this.updateHandler}/>
                    <FunctionButton name_="request5" message={"Prescriptions"}  //showPrescription()
                                    updateHandler={this.updateHandler}/>
                    <FunctionButton name_="request6" message={"Technologies"} //showTechnologies()
                                    updateHandler={this.updateHandler}/>
                    <FunctionButton name_="request7" message={"Drugs"} apiUrl={"http://localhost:8080/drugs"} //showDrugs()
                                    updateHandler={this.updateHandler}/>
                    <FunctionButton name_="request8" message={"Storage"} //showStorage()
                                    updateHandler={this.updateHandler}/>

                </div>
                {this.getTableForRequest()}
            </div>
        );
    }
}