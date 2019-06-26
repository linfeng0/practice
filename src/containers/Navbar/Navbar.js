import React from 'react';
import './Navbar.css';

class Nav extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      engName : "ChrisLi R(GI52)",
      imgAddr : "logo.png"
    }
  }


  render(){
    return (
      <div id="header">
        <nav id="nav">  
          <h1 className="title">Time Card - {this.state.engName}</h1>
          <a className="right" href="https://www.grapecity.com/" target="_blank"><img src={this.state.imgAddr} alt="grapecity"></img></a>
        </nav>
      </div>
    );
  }
}

export default Nav;
