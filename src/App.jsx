import "./App.css";
import ContactComponent from "./components/ContactComponent/ContactComponent";
import SearchComponent from "./components/SearchComponent/SearchComponent";

function App() {
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
        >
          +
        </button>
      </div>
      <SearchComponent/>
      <ContactComponent/>
    </>
  );
}

export default App;
