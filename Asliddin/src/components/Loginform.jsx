import React, { Component } from "react";
import "react-toastify/dist/ReactToastify.css";

export default class Loginform extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "" };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmit() {
    this.props.handleSubmit(this.state);
  }

  render() {
    return (
<div className="max-w-[600px] shadow-md bg-white p-10 rounded-lg relative">
        <h1 className="text-3xl text-center font-bold text-green-500 mb-8">Login</h1>
        <div className="m-4 flex flex-col">
  <label htmlFor="username" className="mb-2 font-bold">Username:</label>
  <input
    id="username"
    type="text"
    className="bg-gray-300 p-4 rounded-md"
    value={this.state.username}
    onChange={this.handleChange}
    name="username"
  />
</div>
<div className="m-4 flex flex-col">
  <label htmlFor="email" className="mb-2 font-bold">Email:</label>
  <input
    id="email"
    type="text"
    className="bg-gray-300 p-4 rounded-md"
    value={this.state.email}
    onChange={this.handleChange}
    name="email"
  />
</div>
        <div className="m-4 flex flex-row justify-center">
        <button
            onClick={this.onSubmit}
            className="p-4 bg-blue-500 text-white rounded-full w-[200px] font-bold"
            style={{ marginTop: "16px" }}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
