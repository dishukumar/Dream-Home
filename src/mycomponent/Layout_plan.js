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
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque animi iusto, tempora sapiente consequatur beatae commodi optio quos accusantium voluptatibus nisi recusandae placeat culpa magnam nihil! Alias est tempore sit!
                                    Distinctio temporibus voluptate ex dolor? Neque dolorem officiis perspiciatis laboriosam id repellendus non totam beatae, doloremque quos! Ipsa repellendus, vitae voluptates cupiditate, magni distinctio libero deserunt, in id eligendi pariatur.
                                    Id dignissimos qui ipsum minima voluptatibus perspiciatis culpa libero earum ipsam optio corporis magni fuga cupiditate nostrum ab quasi, pariatur adipisci enim? A earum, vel dolorum molestiae officia labore? Odit.
                                    Fugiat, aspernatur. Obcaecati totam explicabo deleniti unde repellendus voluptatem! Enim, ex! Distinctio, placeat ex perspiciatis ab exercitationem, pariatur nam, omnis nostrum </p>
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