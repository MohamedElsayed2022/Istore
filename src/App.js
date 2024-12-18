import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import ProductList from './components/ProductList';
import products from './data/Products';
import Pagination from './utils/Pagination';

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
 

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterProducts(term, null);
  };

  const handleFilter = (category) => {
    filterProducts(searchTerm, category);
  };

  const filterProducts = (term, category) => {
    let filtered = products;

    if (category && category !== 'All') {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (term) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  //pagination 
  const items = 5;
  const [current , setCurrent] = useState(3)
  const numPage = Math.ceil(products.length / items)

  const startIndex = (current - 1) * items
  const endIndex = startIndex + items

  const DataPerPage  = filteredProducts.slice(startIndex , endIndex)

  const onChange = (pageNumber) => {
    setCurrent(pageNumber);
  };
  


  return (
    <div>
      <Header />
      <div className="container">
        <SearchBar onSearch={handleSearch} />
        <Filter onFilter={handleFilter} />
        <ProductList products={DataPerPage} />
        <Pagination onChange={onChange} pageCount={numPage}/>
      </div>
    </div>
  );
};

export default App;
