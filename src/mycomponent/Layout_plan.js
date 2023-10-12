import React from 'react';
import './Layout_plan.css'

function Layout_plan(props) {
    return (
        <div>
            <div className="layout_plan_heading">
                <h1>LAYOUT PLAN</h1>
            </div>
            <div className="layout_plan_content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/img/layout plan/lp.jpg" alt="" width='100%' />
                        </div>
                        <div className="col-lg-6">
                            <div className="layout_plan_content_heading">
                                <h2>What is Layout Plan ?</h2>
                            </div>
                            <div className="layout_plan_content_data">
                                <p> <font size="4">Layout planning is deciding on the best physical arrangement of all resources that consume space within a facility. 
                                    These resources might include a desk, a work center, a cabinet, a person, an entire office, or even a department. 
                                    Decisions about the arrangement of resources in a business are not made only when a new facility is being designed; 
                                    they are made any time there is a change in the arrangement of resources, such as a new worker being added, a machine being moved, or a change in procedure being implemented.
                                     Also, layout planning is performed any time there is an expansion in the facility or a space reduction.</font></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="lp_flip_card_heading">
                    <h2>PLAN SAMPLES MADE BY US...</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 my-2">
                        <div className="maincontainer">
                            <div className="thecard">
                                <div className="thefront">
                                    <img src="/img/layout plan/60x40.jpg" alt="" height='100%' width='100%' />
                                </div>

                                <div className="theback">
                                    <h1>Details</h1>
                                    <h3><b>Size:</b>60*40</h3>
                                    <h3><b>Price:</b>15000</h3>
                                    <h3>4bhk with all facilites</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 my-2">
                        <div className="maincontainer">
                            <div className="thecard">
                                <div className="thefront">
                                    <img src="/img/layout plan/50x40.jpg" alt="" height='100%' width='100%' />
                                </div>

                                <div className="theback">
                                    <h1>Details</h1>
                                    <h3><b>Size:</b>50*40</h3>
                                    <h3><b>Price:</b>12000</h3>
                                    <h3>4bhk with all facilites</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 my-2">
                        <div className="maincontainer">
                            <div className="thecard">
                                <div className="thefront">
                                    <img src="/img/layout plan/30x20.jpg" alt="" height='100%' width='100%' />
                                </div>

                                <div className="theback">
                                    <h1>Details</h1>
                                    <h3><b>Size:</b>30*20</h3>
                                    <h3><b>Price:</b>9000</h3>
                                    <h3>1bhk with all facilites</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 my-2">
                        <div className="maincontainer">
                            <div className="thecard">
                                <div className="thefront">
                                    <img src="/img/layout plan/40x30.jpg" alt="" height='100%' width='100%' />
                                </div>

                                <div className="theback">
                                    <h1>Details</h1>
                                    <h3><b>Size:</b>40*30</h3>
                                    <h3><b>Price:</b>11000</h3>
                                    <h3>2bhk with all facilites</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 my-2">
                        <div className="maincontainer">
                            <div className="thecard">
                                <div className="thefront">
                                    <img src="/img/layout plan/30x30.jpg" alt="" height='100%' width='100%' />
                                </div>

                                <div className="theback">
                                    <h1>Details</h1>
                                    <h3><b>Size:</b>30*30</h3>
                                    <h3><b>Price:</b>10000</h3>
                                    <h3>2bhk with all facilites</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 my-2">
                        <div className="maincontainer">
                            <div className="thecard">
                                <div className="thefront">
                                    <img src="/img/layout plan/30x15.jpg" alt="" height='100%' width='100%' />
                                </div>

                                <div className="theback">
                                    <h1>Details</h1>
                                    <h3><b>Size:</b>30*15</h3>
                                    <h3><b>Price:</b>7000</h3>
                                    <h3>2bhk with all facilites</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Layout_plan;