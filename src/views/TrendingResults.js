import { useEffect, useState } from "react";
import { fetchTrendingGifsRequest } from "../Api";
import SearchResults from "../components/searchResult/SearchResults";

const TrendingResults = () => {
    const [trendingGIFs, updateGIFs] = useState([])

    useEffect(() => {
        fetchTrendingGifs()
    }, [])

    const fetchTrendingGifs = () => {
        fetchTrendingGifsRequest().then(res => {
            updateGIFs(res.data)
        })
    }

    return <SearchResults results={trendingGIFs}></SearchResults>
}

export default TrendingResults;