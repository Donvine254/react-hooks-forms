import React, {useState} from "react";
import Form from "./ControlledForm";
import UnControlledForm from "./UnControlledForm";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [formData, setFormData] = useState(firstName + " " + lastName);
  const [showDialog, setShowDialog] = useState(false);
  function handleFormSubmit(e) {
    e.preventDefault();
    setFormData((prevFormData) => (prevFormData = firstName + " " + lastName));
    console.log(formData);
    setShowDialog(true);
    setFirstName("");
    setLastName("");
  }
  function handleCloseDialog() {
    setShowDialog(false);
  }
  function handleFirstName(event) {
    setFirstName(event.target.value);
  }
  function handleLastName(event) {
    setLastName(event.target.value);
  }

  return (
    <>
    <Form
      handleSubmit={handleFormSubmit}
      handleFirstName={handleFirstName}
      handleLastName={handleLastName}
      lastName={lastName}
      firstName={firstName}
    />
    
    {showDialog && (
        <dialog open style={dialogStyle}>
          <p>Hello, {formData}!</p>
          <button onClick={handleCloseDialog}>Close</button>
        </dialog>
      )}

    <div>
        {/* <UnControlledForm/> */}
    </div>
    </>
  );
}
const dialogStyle={
    width:"30%",
    height:"100px",
    backgroundColor:"#ccc",
    fontSize:"20px",
    margin:"auto",
    boxSizing:"border-box",
    borderRadius:"10px",
    bottom:"50%"
}
export default App;
