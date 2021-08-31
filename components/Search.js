import React, {useState} from "react";
import styles from './Search.module.css'
import Link from 'next/link'
import { getTickerName } from "../lib/stocksTicker";

function SearchBar({ placeholder}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [TickerData, setTickerData] = useState([]);
  let arrData = []

  const dataTicker = async () => {
    console.log('CHAMADO')
    const datas = await getTickerName()
    for(let i=0; i<datas.length; i++){
      arrData.push(datas[i]['ticker'])
    }
    setTickerData(arrData)
  }
  
  const handleFilter = (event) => {
    if(TickerData.length == 0){
      console.log('entrei')
      dataTicker()
    }
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = TickerData.filter((value) => {
      return value.toUpperCase().includes(searchWord.toUpperCase());
    });


    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  

  return (
    <div className={styles.search}>
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <button className="button green" onClick={clearInput}>X</button>
        <button className="button green" onClick={dataTicker}>getTickerName</button>
      </div>
      {filteredData.length != 0 && (
        <div className={styles.dataResult}>
          {filteredData.slice(0, 5).map((value, key) => {
            return (
              <Link className={styles.dataItem} href={`/stocks/${value}`} target="_blank" key={value}>
                <p>{value}</p>  
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;