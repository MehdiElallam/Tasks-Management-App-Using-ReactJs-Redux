import React from "react";
import Icon from "@material-ui/core/Icon";
import { Droppable } from "react-beautiful-dnd";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";

const TrelloList = ({ listID, title, cards }) => {
  return (
    <Droppable droppableId={String(listID)}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
          <h3 style={styles.title}>{title}</h3>
          {cards.map(card => (
            <TrelloCard id={card.id} key={card.id} card={card} />
          ))}
          <TrelloActionButton listID={listID} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const styles = {
  container: {
    backgroundColor: "#ebecf0",
    width: 300,
    height: "100%",
    borderRadius: 3,
    padding: 8,
    fontFamily: "Roboto",
    marginRight: 10
  },
  title: {
    fontSize: "15px",
    color: "#172b4d",
    margin: 0,
    marginLeft: 15,
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default TrelloList;
