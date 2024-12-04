import "./App.css";
import ContactComponent from "./components/ContactComponent/ContactComponent";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import Header from "./components/Header/Header";
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
      <Header
        isModalOpen={isModalOpen}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
      </div>
      <SearchComponent/>
      <ContactComponent name="John" number={1234567890} category="developer" email="john@example.com"/>
      <ContactComponent name="John" number={1234567890} category="developer" email="john@example.com"/>
      <ContactComponent name="John" number={1234567890} category="developer" email="john@example.com"/>
    </>
  );
}

export default App;
