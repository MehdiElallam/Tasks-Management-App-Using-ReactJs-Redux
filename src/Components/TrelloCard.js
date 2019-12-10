import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function TrelloCard({ card, id, index }) {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Card style={styles.card}>
            <CardContent style={styles.cardContent}>
              <Typography gutterBottom>{card.title}</Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
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

export default TrelloCard;
