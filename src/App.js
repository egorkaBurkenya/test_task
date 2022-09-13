import './App.css';
import {useState, useEffect} from 'react';
import Header from './Components/Header'
import Table from './Components/Table'
import Pagination from './Components/Pagination';
import SerchFillterComponent from './Components/SerchFillterComponent';

import axios from 'axios';

function App() {

  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState(products);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLen] = useState(15);
  const [serchValue, setSerchValue] = useState("");
  const [serchParametr, setSerchParametr] = useState("title");
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    const _useSortType = () => {
      if (sortType === "price in ascending order") {
        setFilteredData([...filteredData.sort((a, b) => b.price - a.price)]) 
      } else if (sortType === "price in descending order") {
        setFilteredData([...filteredData.sort((a, b) => a.price - b.price)]) 
      } else if (sortType === "rating in descending order") {
        setFilteredData([...filteredData.sort((a, b) => a.rating - b.rating)]) 
      } else if (sortType === "rating in ascending order") {
        setFilteredData([...filteredData.sort((a, b) => b.rating - a.rating)]) 
      } else {
        setFilteredData(filteredData)
      }
    }

    _useSortType();
  }, [sortType])

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const resp = await axios.get('https://dummyjson.com/products');
      setProducts(resp.data.products);
      setFilteredData(resp.data.products)
      setLoading(false);
    }

    getProducts();
  }, [])

  useEffect(() => {
        setFilteredData(
          products.filter((i) => {
            return i[serchParametr].toLowerCase().includes(serchValue.toLowerCase())}))
  }, [serchValue])

  const lastPI = currentPage * pageLen;
  const firstPI = lastPI - pageLen; 

  const setPage = number => setCurrentPage(number);

  return (
    <div className="App">
      <Header />
      <SerchFillterComponent 
        value={serchValue} 
        onChange={setSerchValue} 
        serchParametr={serchParametr} 
        setSerchParametr={setSerchParametr}
        sortType={sortType}
        setSortType={setSortType} />
      <Table products={filteredData.slice(firstPI, lastPI)} loading={loading} />
      <Pagination pageLen={pageLen} allPL={filteredData.length} setPage={setPage} />
    </div>
  );
}

export default App;
