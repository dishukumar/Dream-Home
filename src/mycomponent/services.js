import React from 'react';
import './services.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'bootstrap';

function services(props) {
    return (
        <div>

            <div className="services_image">
                {/* <img src="" alt=""  width='100%' /> */}

            </div>

            <div className="services_block">
                <div className="service_block_heading">
                    <h2>Check for Services</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="service_block_services">

                                <Card >
                                    <Card.Img variant="top" src="/img/services/service.jpg" height="135px" />
                                    <Card.Body>
                                        <Card.Title>Architect</Card.Title>
                                        {/* <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text> */}
                                    </Card.Body>

                                    <Card.Body>
                                    <div className="service_block_card_button">
                                     <button> 
                                                EXPLORE
                                           
                                            </button>
                                            <a href="/about"><div className="service_card_block_hover">
                                                
                                                </div></a>
                                            
                                        </div>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service_block_services">

                                <Card >
                                    <Card.Img variant="top" src="/img/exterior design/ed (1).jpg" height="135px" />
                                    <Card.Body>
                                        <Card.Title>Exterior Design</Card.Title>
                                        {/* <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text> */}
                                    </Card.Body>

                                    <Card.Body>
                                       <div className="service_block_card_button">
                                            <button> 
                                            EXPLORE    
                                           
                                            </button>
                                            <a href="/exterior_design"><div className="service_card_block_hover">
                                                
                                                </div></a>
                                            
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service_block_services">

                                <Card >
                                    <Card.Img variant="top" src="/img/layout plan/lp.jpg" height="135px" />
                                    <Card.Body>
                                        <Card.Title>Layout Plan</Card.Title>
                                        {/* <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text> */}
                                    </Card.Body>

                                    <Card.Body>
                                       
                                        <div className="service_block_card_button">
                                            <button> 
                                            EXPLORE    
                                           
                                            </button>
                                            <a href="/layout"><div className="service_card_block_hover">
                                                
                                                </div></a>
                                            
                                        </div>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service_block_services">

                                <Card >
                                    <Card.Img variant="top" src="/img/building_plan/1920.jpg" height="135px" />
                                    <Card.Body>
                                        <Card.Title>Building Plan Approval</Card.Title>
                                        {/* <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text> */}
                                    </Card.Body>

                                    <Card.Body>
                                    <div className="service_block_card_button">
                                            <button> 
                                            EXPLORE    
                                           
                                            </button>
                                            <a href="/building_plan_approval"><div className="service_card_block_hover">
                                                
                                                </div></a>
                                            
                                        </div>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service_block_services">

                                <Card >
                                    <Card.Img variant="top" src="/img/interior/wall-1280.jpg" height="135px" />
                                    <Card.Body>
                                        <Card.Title>Interior Design</Card.Title>
                                        {/* <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text> */}
                                    </Card.Body>

                                    <Card.Body>
                                    <div className="service_block_card_button">
                                            <button> 
                                                EXPLORE
                                        </button>
                                        <a href="/interior_design"><div className="service_card_block_hover">
                                                
                                                </div></a>
                                            
                                        </div>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        {/* <div className="col-lg-4">
                            <div className="service_block_services">

                                <Card >
                                    <Card.Img variant="top" src="/img/services/service.jpg" />
                                    <Card.Body>
                                        <Card.Title>vastu consultant</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>

                                    <Card.Body>
                                       <div className="service_block_card_button">
                                            <button> 
                                            EXPLORE    
                                           
                                            </button>
                                            <a href="#"><div className="service_card_block_hover">
                                                
                                                </div></a>
                                            
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div> */}
                        <div className="col-lg-4">
                            <div className="service_block_services">

                                <Card >
                                    <Card.Img variant="top" src='/img/value/v7.jpg'height="135px" />
                                    <Card.Body>
                                        <Card.Title>Valuer</Card.Title>
                                        {/* <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text> */}
                                    </Card.Body>

                                    <Card.Body>
                                        
                                       <div className="service_block_card_button">
                                            <button> 
                                            EXPLORE    
                                           
                                            </button>
                                            <a href="/valuer"><div className="service_card_block_hover">
                                                
                                                </div></a>
                                            
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        {/* <div className="col-lg-4">
                            <div className="service_block_services">

                                <Card >
                                    <Card.Img variant="top" src="/img/services/service.jpg" />
                                    <Card.Body>
                                        <Card.Title>landscape</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>

                                    <Card.Body>
                                       <div className="service_block_card_button">
                                            <button> 
                                            EXPLORE    
                                           
                                            </button>
                                            <a href="#"><div className="service_card_block_hover">
                                                
                                                </div></a>
                                            
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-4">
                            <div className="service_block_services">

                                <Card >
                                    <Card.Img variant="top" src="/img/services/service.jpg" />
                                    <Card.Body>
                                        <Card.Title>project Contractor</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>

                                    <Card.Body>
                                       <div className="service_block_card_button">
                                            <button> 
                                            EXPLORE    
                                           
                                            </button>
                                            <a href="#"><div className="service_card_block_hover">
                                                
                                                </div></a>
                                            
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default services;