import React from "react";

class Services extends React.Component {

  constructor () {

    super();

    this.state = {
      
    };

  }
  
  
  render () {
    return (
      <form>
      
    <h1> Servicess </h1>
        <label> Headshots </label>
        <p> The portrait session will include: A half hour session 
           5-10 edited photos All photos will be delivery 
           electronically to be downloaded and/or printed  </p>
      
        <input type="submit" value="Select" />
        <br/>
        <label> Portraits </label>
       <p> The portrait session will include: An hour photo session 
           30-35 (or more) edited photos All photos will be delivery 
           electronically to be downloaded and/or printed  </p>
      
        <input type="submit" value="Select" />
    
       <br/>
       <label> Maternity  
       </label>
       <p>The maternity session will include: An hour photo session, 
           30-35 (or more) edited photos. All photos will be delivery 
           electronically to be downloaded and/or printed. </p>
       <input type="submit" value="Select" /> 
       <br/>
       <label> Just for funsies </label>
        <p> Some collabs or whatever</p>
       <input type="submit" value="Select" />
        
      </form>
    );
  }
}
  


export default Services;