import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import SearchResults from "../components/searchResult/SearchResults"
import "./LandingPage.css";
import Button from "../components/Button";
import { searchGifRequest } from "../Api";


const LandingPage = () => {
  const inputRef = useRef(null);
  const [searchResults, updateSearchResult] = useState([]);
  const [isSearch, toggleIsSearch] = useState(false);

  const onGifSearchHandler = () => {
    if (inputRef.current) {
      console.log(inputRef.current.value);
      searchGifRequest(inputRef.current.value).then((res) => {
        toggleIsSearch(true);
        if (res && res.data && res.data.length) {
            updateSearchResult(res.data);
        }
      });
    }
  };

  return (
    <>
      <div
        className={!isSearch ? "container-box-search" : "container-box-result"}
      >
        <div>
          <input ref={inputRef} className="search-input" type={"text"}></input>
        </div>
        <div>
          <Button onClick={onGifSearchHandler}>Search GIF!</Button>
          <Link to="trending">Trending GIFs!</Link>
        </div>
      </div>
      {isSearch ? (searchResults.length ? (<SearchResults results={searchResults}></SearchResults>) : (<><h1>No Results!</h1></>)) : <></>}
    </>
  );
};

export default LandingPage;
