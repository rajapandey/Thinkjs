import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

const Detail = () => {

    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      const apiUrl = `https://fakestoreapi.com/products/${id}`;
  
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [id]);
  

  
  return (
    <MDBContainer fluid className="my-5 bg-secondary pb-4">
      <MDBRow className="">
        <MDBCol md="12" md="6" className="mb-4 mb-lg-0 mt-4">
          <MDBCard>
            <MDBCardImage
              src={product ? product.image : 'placeholder-image-url'}
              position="top"
              alt={product ? product.name : 'Product'}
              height="500rem"
            />
      
          </MDBCard>
        </MDBCol>
        <MDBCol md="12" lg="6" className="mb-4 mb-lg-0 mt-4 pt-4">
          <MDBCard>
           
            <MDBCardBody>
              <div className="d-flex justify-content-between align-items-center">
                <p className="small">
                  <a href="#" className="text-muted">
                    {product ? product.category : 'Category'}
                  </a>
                </p>
                <p className="small text-danger">
                  <s style={{textDecoration: 'line-through'}}><del>${product ? Math.ceil([(product.price)*0.1+(product.price)]) : 'Original Price'}</del></s>
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">{product ? product.title : 'Product Name'}</h5>
                <h5 className="text-dark mb-0">${product ? product.price : 'Price'}</h5>
              </div>
              <div className="d-flex justify-content-between pb-3">
                <p className="mb-0">{product ? product.description : 'Product Description'}{product ? product.description : 'Product Description'}</p>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <p className="text-muted mb-0">
                  rating: <span className="fw-bold">{product ? product.rating.rate : 'Quantity'}</span>
                </p>
                <p className="text-muted mb-0">
                  No of reviews: <span className="fw-bold">{product ? product.rating.count : 'Quantity'}</span>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Detail;
