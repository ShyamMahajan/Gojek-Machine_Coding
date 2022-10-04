import "./SearchResults.css"

const SearchResults = ({results}) => {
    return <div className="search-grid">
        {
            results.map(item => {
                return <video autoplay loop key={item.id} src={item.images.fixed_width.mp4}></video>
            })
        }
    </div>
}

export default SearchResults;