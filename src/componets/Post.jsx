import React, { Component } from "react";
import { loadData } from "../utils/loadData";

class Post extends Component {
  state = {
    post: []
  };
  async componentDidMount() {
    const postList = this.props.match.params.kids;
    const post = postList.split(",");
    const getIds = await this.getPost(post);

    this.setState({
      post: getIds
    });
  }
  getPost = async id => {
    const test = [];
    for (let i = 0; i < id.length; i++) {
      const data = await loadData(
        `https://hacker-news.firebaseio.com/v0/item/${id[i]}.json?print=pretty`
      );
      test.push(data);
    }
    return test;
  };
  render() {
    const { post } = this.state;
    console.log(post);
    return (
      <div>
        <li>Hello</li>
        {post.map(comments => (
          <div key={comments.id}>
            <p>{comments.by}</p>
            <p>{comments.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Post;
