import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function TrelloCart({ card }) {
  return (
    <Card style={styles.card}>
      <CardContent style={styles.cardContent}>
        <Typography gutterBottom>{card.title}</Typography>
      </CardContent>
    </Card>
  );
}

const styles = {
  card: {
    marginBottom: 10
  },
  cardContent: {
    padding: 10,
    color: "#172b4d"
  }
};

export default TrelloCart;
