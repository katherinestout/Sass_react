import React from "react";

class AboutForm extends React.Component {

  constructor () {

    super();

    this.state = {
      fullname: '',
      email: '',
      inquiries: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange (evt) {


    this.setState({ [evt.target.name]: evt.target.value });
  }
  
  render () {
    return (
      <form>
      
      <label>Name</label>
      <br/>
        <input type="name" name="fullname" placeholder = "Full Name"onChange={this.handleChange} />

        <br/>

        <label>Email</label>
        <br/>
        <input type="text" name="email" placeholder="Email" onChange={this.handleChange} />
      <br/>
        <label> Inquiries/ Ideas/ Questions/ Comments </label>
        <br/>
        <input type="textarea" name="inquiries" placeholder="Type something :)" className="textarea" onChange={this.handleChange} />
        <br/>
      
        <input type="submit" value="Submit" />
        
      </form>
    );
  }
}
  


export default AboutForm;
