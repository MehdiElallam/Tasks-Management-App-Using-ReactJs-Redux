import React from "react";

export default function Header() {
  return (
    <div style={styles.header}>
      <h3 style={styles.title}>Trello</h3>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: "rgba(7, 7, 7, 0.4)",
    padding: 12,
    textAlign: "center",
    marginBottom: 40
  },
  title: {
    margin: 0,
    fontFamilly: "Roboto",
    color: "#FFF",
    letterSpacing: 1,
    fontSize: 20
  }
};
