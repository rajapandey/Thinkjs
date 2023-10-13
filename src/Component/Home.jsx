import React from 'react';
import img3 from "../asset/1.jpg";
import data from './data';
import 'bootstrap/dist/css/bootstrap.css';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';

const Home = () => {
  return (  <>
    <div className='home'>
        <img src={img3}
         alt="Graphics" />
    </div>

    <MDBContainer fluid className="my-5">
      <MDBRow className="">
        <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
          <MDBCard>

            <Link to={`/detail/${data[10].id}`}><MDBCardImage
              src={data[10].image}
              position="top"
              alt="Laptop"
              height="400rem"
            /> </Link>
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#" className="text-muted">
                    {data[10].category}
                  </a>
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">{data[10].title}</h5>
                <h5 className="text-dark mb-0">{data[10].price}</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">
                  rating: <span class="fw-bold">{data[10].rating.rate} </span>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
          <MDBCard>

            <Link to={`/detail/${data[1].id}`}><MDBCardImage
              src={data[1].image}
              position="top"
              alt="Laptop"
              height="400rem"
            /> </Link>
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#" className="text-muted">
                    {data[1].category}
                  </a>
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">{data[1].title}</h5>
                <h5 className="text-dark mb-0">{data[1].price}</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">
                  rating: <span class="fw-bold">{data[1].rating.rate} </span>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
          <MDBCard>

            <Link to={`/detail/${data[2].id}`}><MDBCardImage
              src={data[2].image}
              position="top"
              alt="Laptop"
              height="400rem"
            /> </Link>
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#" className="text-muted">
                    {data[2].category}
                  </a>
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">{data[2].title}</h5>
                <h5 className="text-dark mb-0">{data[2].price}</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">
                  rating: <span class="fw-bold">{data[2].rating.rate} </span>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
          <MDBCard>

            <Link to={`/detail/${data[13].id}`}><MDBCardImage
              src={data[13].image}
              position="top"
              alt="Laptop"
              height="400rem"
            /> </Link>
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#" className="text-muted">
                    {data[13].category}
                  </a>
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">{data[13].title}</h5>
                <h5 className="text-dark mb-0">{data[13].price}</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">
                  rating: <span class="fw-bold">{data[13].rating.rate} </span>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>


    
    <div className="home2" id="about">
        <div>
          <h1>Benefits of Shopping Here</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            officiis hic illo quos sit commodi, aut magnam odio eligendi? Totam
            quis officiis fugit sunt dolores nostrum tenetur iusto est odio
            mollitia. Dolor placeat repellendus officia aspernatur dolorum
            harum. Dolorem cumque quaerat eius qui deserunt ullam laudantium
            quia tempore. Dignissimos esse sequi numquam est ipsam nemo,
            voluptas vel recusandae iste aspernatur qui quasi, commodi, atque
            ipsa dolores tempore asperiores? Dolores soluta placeat molestiae
            aperiam, ullam officia fugiat corrupti odio, suscipit ipsum cum vel
            nemo. Ratione quo tempore fugit quaerat! Facilis beatae impedit
            similique maxime praesentium sunt unde necessitatibus voluptates
            ipsa, et, numquam reiciendis eveniet? Aliquid nemo nesciunt placeat,
            qui fuga quae repellat sunt, non natus, iure ab officia rem ipsa cum
            sed cumque corporis voluptate quibusdam nostrum quod saepe
          </p>
        </div>
      </div>
    </>
  )
}

export default Home;