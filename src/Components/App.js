import React from "react";
import TrelloList from "./trelloList";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const { lists } = this.props;
    console.log(lists);
    return (
      <div className="App">
        <h1>HHoho</h1>
        {lists.map(list => (
          <TrelloList key={list.id} title={list.title} cards={list.cards} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    lists: state.lists
  };
};
export default connect(mapStateToProps, null)(App);
