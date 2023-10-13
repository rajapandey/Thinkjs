import React, { useEffect , useState } from 'react';
import Card from './Card';
import CategorySelector from './CategorySelector';
import ProductSearch from './ProductSearch';
import {
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

const Product = () => {

  const url = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const filteredData = data
    .filter((product) => !selectedCategory || product.category === selectedCategory)
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>

    <MDBContainer>
    <div className="mb-3">
    
      <CategorySelector
        categories={Array.from(new Set(data.map((product) => product.category)))}
        selectedCategory={selectedCategory}
        onCategoryChange={(e) => setSelectedCategory(e.target.value)}
        className="d-flex justify-content-around"
      />
      <ProductSearch className="d-flex justify-content-around" searchTerm={searchTerm} onSearchChange={(e) => setSearchTerm(e.target.value)} />

      </div>

      <MDBRow className="row-cols-1 row-cols-md-3 g-4" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: '-1rem' }}>
        
            {filteredData.map((dataObj, index) => {
              return (
                            <Card id={dataObj.id}  imgsrc={dataObj.image} 
                            title={dataObj.title}  price={dataObj.price}  category={dataObj.category}   rate={dataObj.rating.rate} />
                    );
                }   
              )}
      </MDBRow>
    </MDBContainer>
    </>
  )
}

export default Product;