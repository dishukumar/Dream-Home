import React from 'react';
import './Exterior_design.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function Exterior_design(props) {
    return (
        <div>
           <div className="exterior_design_head">
            <img src="/img/exterior design/ed (1).jpg" alt="" />
            <div className="exterior_design_heading">
                <h1>EXTERIOR DESIGN</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi, alias quo, esse accusantium quos maiores sequi eos harum ad impedit delectus? Alias ab similique in dolores eaque nostrum modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veritatis amet cum natus, quo, temporibus eaque nam dolorem sit consequatur ullam vel qui laboriosam architecto ex ipsam. Necessitatibus, porro sint.
                Provident, quo? Tenetur eos saepe veritatis error amet asperiores, ab minus nesciunt numquam eum quaerat quisquam repudiandae. Ea, molestias eos! Natus optio rem aliquam ullam magnam unde officiis, perspiciatis ipsum!
                Magni id perferendis ratione. Sed, quasi. Exercitationem ex autem nam. Officiis magnam sint vero reprehenderit iste, dolor est nam nulla ad, architecto animi nesciunt ea! Excepturi facilis deserunt nulla laboriosam.</p>
            </div>
           </div>
           <div className="exterior_design_tab">
            <h2>Our Work Samples....</h2>
            <div className="container">
           <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 my-3" 
    >
      <Tab eventKey="home" title="House">
        {/* <h1>house</h1> */}
        <div className="row">
            <div className="ed_cols col-lg-4">
                <img src="/img/exterior design/edh (1).jpg" alt=""  width='100%' />
            </div>
            <div className="ed_cols col-lg-4">
                <img src="/img/exterior design/edh (2).jpg" alt=""  width='100%' />
            </div>
            <div className="ed_cols col-lg-4">
                <img src="/img/exterior design/edh (3).jpg" alt=""  width='100%' />
            </div>
            <div className="ed_cols col-lg-4">
                <img src="/img/exterior design/edh (4).jpg" alt=""  width='100%' />
            </div>
            <div className="ed_cols col-lg-4">
                <img src="/img/exterior design/edh (5).jpg" alt=""  width='100%' />
            </div>
            <div className="ed_cols col-lg-4">
                <img src="/img/exterior design/edh (6).jpg" alt=""  width='100%' />
            </div>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Building">
        {/* <h1>Building</h1> */}
        <div className="row">
            <div className="ed_cols col-lg-4">
                <img src="/img/exterior design/edb (1).jpg" alt=""  width='100%' />
            </div>
            <div className="ed_cols col-lg-4">
                <img src="/img/exterior design/edb (2).jpg" alt=""  width='100%' />
            </div>
            <div className="ed_cols col-lg-4">
                <img src="/img/exterior design/edb (3).jpg" alt=""  width='100%' />
            </div>
            <div className="ed_cols col-lg-4">
                <img src="/img/exterior design/edb (4).jpg" alt=""  width='100%' />
            </div>
            <div className="ed_cols col-lg-4">
                <img src="/img/exterior design/edb (1).jpg" alt=""  width='100%' />
            </div>
            <div className="ed_cols col-lg-4">
                <img src="/img/exterior design/edb (4).jpg" alt=""  width='100%' />
            </div>
        </div>
      </Tab>
      <Tab eventKey="contact" title="Shop" >
        {/* <h1>Shop</h1> */}
        
            <div className="shop_ed">
            <div className="row">
            <div className="ed_cols col-lg-4">
                <img src="/img/exterior design/eds (1).jpg" alt="" width='100%' />
            </div>
            <div className="ed_cols col-lg-4">
                <img src="/img/exterior design/eds (2).jpg" alt="" width='100%' />
            </div>
            <div className="ed_cols col-lg-4">
                <img src="/img/exterior design/eds (3).jpg" alt="" width='100%' />
            </div>
            <div className="ed_cols col-lg-4">
                <img src="/img/exterior design/eds (2).jpg" alt="" width='100%' />
            </div>
            <div className="ed_cols col-lg-4">
                <img src="/img/exterior design/eds (3).jpg" alt="" width='100%' />
            </div>
            <div className="ed_cols col-lg-4">
                <img src="/img/exterior design/eds (1).jpg" alt="" width='100%' />
            </div>
            </div>
        </div>
      </Tab>
    </Tabs>
    </div>
           </div>
        </div>
    );
}

export default Exterior_design;