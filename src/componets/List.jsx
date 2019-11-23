import React, { Component } from "react";
import { loadData } from "../utils/loadData";
import { Link } from "react-router-dom";

class List extends Component {
  state = {
    list: []
  };
  async componentDidMount() {
    const data = await loadData(
      `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
    );
    const datalist = data.splice(0, 25);
    const test = [];
    for (let i = 0; i < datalist.length; i++) {
      let datatwo = await loadData(
        `https://hacker-news.firebaseio.com/v0/item/${datalist[i]}.json?print=pretty`
      );
      test.push(datatwo);
    }

    this.setState({
      list: test
    });
  }
  render() {
    const { list } = this.state;
    return (
      <div>
        <ul>
          {list.map((list, id) => (
            <div key={list.id}>
              <Link to={`/list/${list.kids}`}>The Post</Link>
              <p>{list.title}</p>
              <p>{list.url}</p>
              <p>{list.src}</p>
              <p>{list.by}</p>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
