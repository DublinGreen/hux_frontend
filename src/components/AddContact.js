import React from "react";

class AddContact extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.firstName === "" || this.state.lastName === "" || this.state.phone === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ firstName: "", lastName: "", phone: ""});
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="text"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={(e) => this.setState({ firstName: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="email"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={(e) => this.setState({ lastName: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
