import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function TrelloCart({ card }) {
  return (
    <Card style={styles.card}>
      <CardContent>
        <Typography gutterBottom>{card.text}</Typography>
      </CardContent>
    </Card>
  );
}

const styles = {
  card: {
    marginBottom: 10
  }
};

export default TrelloCart;
