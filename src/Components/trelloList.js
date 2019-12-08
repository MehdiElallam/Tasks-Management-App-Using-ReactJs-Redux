import React from "react";
import TrelloCart from "./TrelloCart";
import TrelloActionButton from "./TrelloActionButton";

const TrelloList = ({ listID, title, cards }) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{title}</h3>
      {cards.map(card => (
        <TrelloCart key={card.id} card={card} />
      ))}
      <TrelloActionButton listID={listID} />
    </div>
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
