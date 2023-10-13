import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

const Card = (props) => {
  return (
        <MDBCol className="mb-4">
          <MDBCard>
            <Link to={`/detail/${props.id}`}><MDBCardImage
              src={props.imgsrc}
              position="top"
              alt="Laptop"
              height="400rem"
            /> </Link>
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#" className="text-muted">
                    {props.category}
                  </a>
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">{props.title}</h5>
                <h5 className="text-dark mb-0">{props.price}</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">
                  rating: <span class="fw-bold">{props.rate} </span>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
  );
}

export default Card;