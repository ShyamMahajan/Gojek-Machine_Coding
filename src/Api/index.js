import axios from "axios";

console.log("@@@",process.env)

const BaseUrl = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_APIKEY


export const searchGifRequest = (searchTerm) => {
    if(searchTerm){
        return axios.get(`https://${BaseUrl}/search?api_key=${apiKey}&q=${searchTerm}&limit=20`).then(res => {
            console.log(res)    
            return res.data
        }).catch(err => {
            console.log("Search Error",err)
        })
    }else{
        console.log("invalid-input")
    }
}

export const fetchTrendingGifsRequest = () => {
    return axios.get(`https://${BaseUrl}/trending?api_key=${apiKey}&limit=25`).then(res => {
            console.log(res)   
            if(res && res.data){
                return res.data
            } 
        }).catch(err => {
            console.log("Search Error",err)
        })
}
