import React from "react";
import { useState } from "react";
import SearchBox from "./SearchBox";
import "./Demo.css";
import "tachyons";
import Demolist from "./Demolist";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      query: "",
      filteredList: [],
    };
  }
  componentDidMount() {

    console.log("component redered");
  }
  componentWillMount() {
    this.setState({
        list: [
          { id: 0, name: "Abdullah", post: "CEO", email: "amir@gmail.com" },
          { id: 1, name: "Khuram", post: "GM", email: "am7r@gmail.com" },
          { id: 2, name: "Naeem", post: "PM", email: "ami3r@gmail.com" },
          { id: 3, name: "Sameer", post: "TM", email: "am4r@gmail.com" },
        ],
      });
    console.log("componet rendered successfully");
  }
  
  search = (e) => {
    let query = e.target.value;
    let regex = new RegExp(query, "i");
    this.setState({
      query: query,
    });

    let filteredList = this.state.list.filter((listItems) =>
      listItems.name.toLowerCase().includes(query.toLowerCase())
    );
    console.log("Filter result array ", filteredList);

    this.setState(
      {
        filteredList: filteredList,
      },
      () => {
        console.log("state filter list", this.state);
      }
    );
  };

  render() {
    return (
      <div className="main">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
        </nav>

        <h1>WELL COME TO KHURAM OFFICE</h1>

        <input
          className="main ma4 bg-light-blue dib pa1"
          value={this.state.query}
          onChange={this.search}
          type="text"
          placeholder="search person"
        />
        <div>
          {console.log("filterlist array in div ", this.state.filteredList)}
          {this.state.filteredList.length == 0
            ? this.state.list.map((post) => (
                <Demolist
                  key={post.id}
                  id={post.id}
                  name={post.name}
                  work={post.post}
                  email={post.email}
                />
              ))
            : this.state.filteredList.map((post) => (
                <Demolist
                  key={post.id}
                  id={post.id}
                  name={post.name}
                  work={post.post}
                  email={post.email}
                />
              ))}
        </div>

        <button>Subscribe</button>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}


export default Demo;
