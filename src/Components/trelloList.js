import React from "react";
import TrelloCart from "./TrelloCart";

const TrelloList = ({ title, cards }) => {
  return (
    <div style={styles.container}>
      <h3>{title}</h3>
      {cards.map(card => (
        <TrelloCart key={card.id} card={card} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#ccc",
    width: 300,
    borderRadius: 3,
    padding: 8,
    fontFamily: "Roboto"
  }
};

export default TrelloList;
