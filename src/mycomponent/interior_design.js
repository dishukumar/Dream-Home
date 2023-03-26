import React from "react";
import "./interior.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

function interior_design(props) {
  return (
    <div>
      <div className="interior-block">
        <div className="interior-block-heading">
          <h1>Interior Design</h1>
        </div>
      </div>
      <div className="interior-block-check">
        <h1>Check For Interior Design</h1>
      </div>
      <div className="container">
        <div className="row">
          
          <div className="col-lg-4">
            <div className="interior-block-card">
              <Card>
                <Card.Img variant="top" src="/img/interior/bed-1920.jpg" />
                <Card.Body>
                  <Card.Title>Bed Room</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>

                <Card.Body>
                  <Card.Link href="/bed_room"> <Button variant="outline-primary">EXPLORE DESIGNS </Button></Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="interior-block-card">
              <Card>
                <Card.Img variant="top" src="/img/interior/drawing.jpg" />
                <Card.Body>
                  <Card.Title>Drawing Room</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>

                <Card.Body>
                  <Card.Link href="/Drawing_room"> <Button variant="outline-primary"> EXPLORE DESIGNS</Button></Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="interior-block-card">
              <Card>
                <Card.Img variant="top" src="/img/interior/home-1920.jpg" />
                <Card.Body>
                  <Card.Title>Pooja Room</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>

                <Card.Body>
                  <Card.Link href="/Pooja_room"> <Button variant="outline-primary">EXPLORE DESIGNS</Button> </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>


          <div className="col-lg-4">
            <div className="interior-block-card">
              <Card>
                <Card.Img variant="top" src="/img/interior/kitchen-1920.jpg" />
                <Card.Body>
                  <Card.Title>Kitchen</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>

                <Card.Body>
                  <Card.Link href="/Kitchen_room"> <Button variant="outline-primary"> EXPLORE DESIGNS </Button></Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="interior-block-card">
              <Card>
                <Card.Img variant="top" src="/img/interior/commercial-1920.jpg" />
                <Card.Body>
                  <Card.Title>Commercial Room</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>

                <Card.Body>
                  <Card.Link href="/Commercial_room"> <Button variant="outline-primary">EXPLORE DESIGNS </Button></Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="interior-block-card">
              <Card>
                <Card.Img variant="top" src="/img/interior/office-1920.jpg" />
                <Card.Body>
                  <Card.Title>Office Room</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>

                <Card.Body>
                  <Card.Link href="/Office_room"> <Button variant="outline-primary">EXPLORE DESIGNS</Button> </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default interior_design;
