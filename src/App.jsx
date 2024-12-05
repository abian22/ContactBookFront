import "./App.css";
import ContactComponent from "./components/ContactComponent/ContactComponent";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import { getContacts } from "./services/contact";
import FilterCategoryComponent from "./components/FilterCategoryComponent/FilterCategoryComponent";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactData, setContactData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    handleContactData();
  }, [contactData]);

  const handleContactData = async () => {
    const result = await getContacts();
    setContactData(result);
  };

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

  const filteredContacts = contactData.filter((contact) => {
    const matchesName = contact.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesCategory = categoryFilter
      ? contact.category.toLowerCase() === categoryFilter.toLowerCase()
      : true;

    return matchesName && matchesCategory;
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Header
          isModalOpen={isModalOpen}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
        />
      </div>
      <SearchComponent searchText={searchText} setSearchText={setSearchText} />{" "}
      <FilterCategoryComponent
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
      {filteredContacts.map((d) => (
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
    </>
  );
}

export default App;
