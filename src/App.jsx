import "./App.css";
import ContactComponent from "./components/ContactComponent/ContactComponent";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import {getContacts} from "./services/contact";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactData, setContactData] = useState([])

  useEffect(()=> {
    handleContactData()
  }, [contactData])

  const handleContactData = async() => {
    const result = await getContacts();
    setContactData(result)
  }
 
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  console.log(contactData)
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
      {contactData.map((d) =>(
        <ContactComponent key={d.userId} id={d.userId} name={d.name} lastName={d.lastName} number={d.phoneNumber} category={d.category} email={d.email}/>
      ))}
    </>
  );
}

export default App;
