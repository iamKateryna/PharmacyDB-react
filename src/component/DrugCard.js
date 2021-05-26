import React from "react";
import "./DrugCard.css";
import {Card, CardImg} from "react-bootstrap";

export default class DrugCard extends React.Component {
    render() {
        return (
            <Card className={"drug_card"}>
                <div className={"drug_card_image_container"}>
                    <Card.Img className={"drug_card_image"} variant={"top"} src={this.props.link}/>
                </div>
                <Card.Title className={"drug_card_title"}>
                    {this.props.title}
                </Card.Title>
                <Card.Text className={"drug_card_text"}>
                    {this.props.text.split(",").map(item => <p>{item}</p>)}
                </Card.Text>
            </Card>
        );
    }
}