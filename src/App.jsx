import "./App.css";
import ContactComponent from "./components/ContactComponent/ContactComponent";
import AddContactModal from "./components/AddContactModal/AddContactModal";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
        <b>
          <p style={{ fontSize: "30px", margin: 0 }}>CONTACT BOOK</p>
        </b>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "auto",
            padding: "5px 10px",
            borderRadius: "50%",
            backgroundColor: "green",
            color: "white",
            fontSize: "18px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleOpenModal}
        >
          +
        </button>
        {isModalOpen && (
          <AddContactModal onClose={handleCloseModal}/>
        )}
      </div>
      <SearchComponent/>
      <ContactComponent/>
      <ContactComponent/>
      <ContactComponent/>
    </>
  );
}

export default App;
