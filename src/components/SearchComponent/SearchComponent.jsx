import "./SerachComponent.css";
function SearchComponent({ searchText, setSearchText }) {
  return (
    <div className="centerContainer">
      <div className="searchInputContainer">
        <input
          className="searchInput"
          placeholder="Search contact"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchComponent;
