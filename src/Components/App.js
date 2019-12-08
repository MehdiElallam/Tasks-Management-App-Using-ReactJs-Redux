import React from "react";
import TrelloList from "./trelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import Header from "./Header";

class App extends React.Component {
  render() {
    const { lists } = this.props;
    //console.log(lists);
    return (
      <div className="App">
        <Header />
        <div style={styles.listContainer}>
          {lists.map(list => (
            <TrelloList
              listID={list.id}
              key={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <TrelloActionButton list />
        </div>
      </div>
    );
  }
}
const styles = {
  listContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "0 20px"
  }
};
const mapStateToProps = state => {
  return {
    lists: state.lists
  };
};
export default connect(mapStateToProps, null)(App);
