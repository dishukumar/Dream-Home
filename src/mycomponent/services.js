import React from 'react';
import './services.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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
                                    <Card.Img variant="top" src="/img/services/service.jpg" />
                                    <Card.Body>
                                        <Card.Title>architect</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>

                                    <Card.Body>
                                        <Card.Link href="#">Card Link</Card.Link>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service_block_services">

                                <Card >
                                    <Card.Img variant="top" src="/img/services/service.jpg" />
                                    <Card.Body>
                                        <Card.Title>exterior desing</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>

                                    <Card.Body>
                                        <Card.Link href="#">Card Link</Card.Link>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service_block_services">

                                <Card >
                                    <Card.Img variant="top" src="/img/services/service.jpg" />
                                    <Card.Body>
                                        <Card.Title>layout plan</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>

                                    <Card.Body>
                                        <Card.Link href="#">Card Link</Card.Link>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service_block_services">

                                <Card >
                                    <Card.Img variant="top" src="/img/services/service.jpg" />
                                    <Card.Body>
                                        <Card.Title>Buildin plan approval</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>

                                    <Card.Body>
                                        <Card.Link href="#">layout plan</Card.Link>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service_block_services">

                                <Card >
                                    <Card.Img variant="top" src="/img/services/service.jpg" />
                                    <Card.Body>
                                        <Card.Title>interior Design</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>

                                    <Card.Body>
                                        <Card.Link href="#">Exterior Design</Card.Link>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="col-lg-4">
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
                                        <Card.Link href="#">Card Link</Card.Link>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service_block_services">

                                <Card >
                                    <Card.Img variant="top" src='/img/value/v7.jpg'height="135px" />
                                    <Card.Body>
                                        <Card.Title>valuer</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>

                                    <Card.Body>
                                        <Card.Link href="/valuer">Card Link</Card.Link>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="col-lg-4">
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
                                        <Card.Link href="#">Card Link</Card.Link>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="col-lg-4">
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
                                        <Card.Link href="#">Card Link</Card.Link>

                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default services;