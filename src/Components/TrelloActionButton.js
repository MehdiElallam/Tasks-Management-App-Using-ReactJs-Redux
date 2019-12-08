import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import Textarea from "react-textarea-autosize";
import Button from "@material-ui/core/Button";
import { addList } from "../Actions/listsActions";
import { addCard } from "../Actions/cardActions";

class TrelloActionButton extends Component {
  state = {
    formOpend: false,
    text: ""
  };

  openForm = () => {
    this.setState({
      formOpend: true
    });
  };
  closeForm = () => {
    this.setState({
      formOpend: false
    });
  };
  handleTextArea = e => {
    this.setState({
      text: e.target.value
    });
  };
  addList = () => {
    const { text } = this.state;
    const { dispatch } = this.props;
    if (text) {
      dispatch(addList(text));
      this.setState({
        text: ""
      });
    }

    return;
  };
  addCard = () => {
    const { text } = this.state;
    const { dispatch, listID } = this.props;
    if (text) {
      dispatch(addCard(listID, text));
      this.setState({
        text: ""
      });
    }
  };
  renderAddBtn = () => {
    const { list } = this.props;
    const buttonText = list ? "Add a new list" : "Add a new card";
    const buttonColor = list ? "#FFFFFF" : "#5e6c84";
    const buttonBackColor = list ? "hsla(0,0%,100%,.24)" : "";
    return (
      <div
        onClick={this.openForm}
        style={{
          ...styles.newButtonContainer,
          color: buttonColor,
          backgroundColor: buttonBackColor
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  renderAddCardForm = () => {
    const { list } = this.props;
    const placeholder = list
      ? "Enter list title..."
      : "Enter a title for this card";
    const addButtonText = list ? "Add list" : "Add card";
    return (
      <div>
        <Card
          style={{
            overflow: "visible",
            minHeight: 80,
            minWidth: 270,
            padding: "0 10px"
          }}
        >
          <Textarea
            placeholder={placeholder}
            autoFocus
            value={this.state.text}
            onBlur={this.closeForm}
            onChange={this.handleTextArea}
            style={{
              resize: "none",
              width: "100%",
              outline: "none",
              border: "none",
              padding: "10px 5px"
            }}
          />
        </Card>
        <div style={styles.addCardFormContainer}>
          <Button
            onMouseDown={list ? this.addList : this.addCard}
            variant="contained"
            style={{ color: "white", backgroundColor: "#5aac44" }}
          >
            {addButtonText}
          </Button>
          <Icon
            onClick={this.closeForm}
            style={{ marginLeft: 5, cursor: "pointer" }}
          >
            close
          </Icon>
        </div>
      </div>
    );
  };
  render() {
    return this.state.formOpend
      ? this.renderAddCardForm()
      : this.renderAddBtn();
  }
}

const styles = {
  newButtonContainer: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 35,
    width: 270,
    paddingLeft: 10
  },
  addCardFormContainer: {
    marginTop: 10,
    display: "flex",
    alignItems: "center"
  }
};

export default connect()(TrelloActionButton);
