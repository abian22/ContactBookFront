import "./App.css";
import ContactComponent from "./components/ContactComponent/ContactComponent";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import { getContacts } from "./services/contact";
import FilterCategoryComponent from "./components/FilterCategoryComponent/FilterCategoryComponent";
import ReactPaginate from "react-paginate";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactData, setContactData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage] = useState(5);

  /*function to filter by name and category*/
  const filteredContacts = contactData.filter((contact) => {
    const matchesName = contact.name
      ? contact.name.toLowerCase().includes(searchText.toLowerCase())
      : false; // If contact.name exists, it checks if it includes searchText; if it doesn't exist, it doesn't match.
    const matchesCategory = categoryFilter
      ? contact.category &&
        contact.category.toLowerCase() === categoryFilter.toLowerCase()
      : true; // If categoryFilter exists and matches contact.category, it applies the filter; if not, all categories are included.

    return matchesName && matchesCategory;
  });

  const indexOfLastContact = currentPage * contactsPerPage; // Calculate the index of the last contact on the current page
  const indexOfFirstContact = indexOfLastContact - contactsPerPage; // Calculate the index of the first contact on the current page
  const currentContacts = filteredContacts.slice(
    // Slice the filteredContacts array to get only the contacts for the current page
    indexOfFirstContact,
    indexOfLastContact
  );

  useEffect(() => {
    handleContactData();
  }, [currentContacts]);

  const handleContactData = async () => {
    const result = await getContacts();
    setContactData(result);
  };

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <>
      <div className="header-center">
        <Header
          isModalOpen={isModalOpen}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
        />
      </div>
      <SearchComponent searchText={searchText} setSearchText={setSearchText} />{" "}
      <FilterCategoryComponent categoryFilter={categoryFilter}  setCategoryFilter={setCategoryFilter}/>
      {currentContacts.map((d) => (
        <ContactComponent
          key={d.userId}
          id={d.userId}
          name={d.name}
          lastName={d.lastName}
          number={d.phoneNumber}
          category={d.category}
          email={d.email}
        />
      ))}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={Math.ceil(filteredContacts.length / contactsPerPage)}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </>
  );
}

export default App;
