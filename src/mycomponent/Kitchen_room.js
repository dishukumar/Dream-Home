import React from 'react';
import Card from "react-bootstrap/Card";
import "./bed_room.css";
import Button from "react-bootstrap/Button";

function Kitchen_room(props) {
    return (
        <div>
        <div className="container">
        <div className="container-heading">
       <h2>Kitchen </h2>
       <div className="row">
         <div className="col-lg-6 container-text">
           <h3>Are you looking for unique bedroom designs and styles?</h3>
           <p>
             Then, you have arrived at the very right place to know about it.
             The Bed Room designs must be in a pristine combination of
             allurance and mesmerizing impact. Only then the functionality of
             a particular bed area style would serve you perfectly. However,
             the major query regarding artistics includes various parameters
             and measurements of several horizons. For instance, the
             affordability factor, style, additions to adorne and utilize
             space in an useful manner is the need of designing bed areas.
             Additionally , home decor must work to add on the beauty to the
             specified bedding section.
             <br />
             <br />
             Now, if you want some considerations which would provide useful
             options to you. Then, let’s have a quick observation on the
             further mentioned guide.
           </p>
         </div>
         <div className="col-lg-6">
           <div className="img">
             <img src="/img/interior/bed-1920.jpg" alt=""></img>
           </div>
         </div>
       </div>
     </div>
     <div className="button">
       <a href="/contact">
         <Button variant="success" className="button">
           
           Book Now
         </Button>
       </a>
     </div>
     <div className="container-design">
       <h1>Kitchen Design</h1>
       <div className="row">
         <div className="col-lg-4">
         <Card>
             <Card.Img variant="top" src="/img/BedRoom/bed room (1).jpg" />
             
           </Card>
         </div>
         <div className="col-lg-4">
         <Card>
             <Card.Img variant="top" src="/img/BedRoom/bed room (2).jpg" />
             
           </Card>
         </div>
         <div className="col-lg-4">
         <Card>
             <Card.Img variant="top" src="/img/BedRoom/bed room (3).jpg" />
             
           </Card>
         </div>
         <div className="col-lg-4">
         <Card>
             <Card.Img variant="top" src="/img/BedRoom/bed room (4).jpg" />
             
           </Card>
         </div>
         <div className="col-lg-4">
         <Card>
             <Card.Img variant="top" src="/img/BedRoom/bed room (5).jpg" />
             
           </Card>
         </div>
         <div className="col-lg-4">
         <Card>
             <Card.Img variant="top" src="/img/BedRoom/bed room (6).jpg" />
             
           </Card>
         </div>
       </div>
       </div>
        </div>
     </div>
    );
}

export default Kitchen_room;