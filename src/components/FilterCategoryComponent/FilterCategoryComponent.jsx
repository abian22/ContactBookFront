import "./FilterCategoryComponent.css"

function FilterCategoryComponent({categoryFilter, setCategoryFilter}) {
  return (
<div className="filter-container">
  <label htmlFor="categoryFilter" className="filter-label">Filter by category:</label>
  <select
    id="categoryFilter"
    value={categoryFilter}
    onChange={(e) => setCategoryFilter(e.target.value)}
    className="filter-select"
  >
    <option value="">All Categories</option>
    <option value="Work">Work</option>
    <option value="Family">Family</option>
    <option value="Friend">Friend</option>
    <option value="Other">Other</option>
  </select>
</div>
  )
}

export default FilterCategoryComponent