import React, { Component } from "react";
import {Jumbotron, Container} from "react-bootstrap";

export default class Entete extends Component {
  render() {
    var today = new Date();
    var dd = today.getDate();
    
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm=== 1) 
    {
        mm='January';
    } 
    if(mm=== 2) 
    {
        mm='February';
    } 
    if(mm=== 3) 
    {
        mm='March';
    } 
    if(mm=== 4) 
    {
        mm='April';
    } 
    if(mm=== 5) 
    {
        mm='May';
    } 
    if(mm=== 6) 
    {
        mm='June';
    } 
    if(mm=== 7) 
    {
        mm='July';
    } 
    if(mm=== 8) 
    {
        mm='August';
    } 
    if(mm=== 9) 
    {
        mm='September';
    } 
    if(mm=== 10) 
    {
        mm='October';
    } 
    if(mm=== 11) 
    {
        mm='November';
    } 
    if(mm=== 12) 
    {
        mm='December';
    } 
    today = dd+'/'+mm+'/'+yyyy;
    console.log(today);
    return (
      <Jumbotron fluid style={{background:"#f8d332"}}>
        <Container>
          <h1 style={{color:"white", fontSize:"50px"}}>TODO List</h1>
          <div style={{display:"flex"}}>
            <h1 style={{fontSize:"80px", margin:"0px", marginBottom:"10px", paddingRight:"10px"}}>{dd}</h1>          
            <div >
                <h3 style={{color:"white",fontSize:"30px", margin:"10px"}}>{mm}</h3>
                <h3 style={{color:"white",fontSize:"30px", margin:"10px"}}>{yyyy}</h3>
            </div>
          </div>
        </Container>
      </Jumbotron>
    );
  }
}
