import {useState} from 'react'

function UnControlledForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [formData, setFormData] = useState("");
    const [showDialog, setShowDialog] = useState(false);
  
    function handleFormSubmit(e) {
      e.preventDefault();
      setFormData(firstName + " " + lastName);
      setShowDialog(true);
      setFirstName("");
      setLastName("");
    }
  
    function handleFirstName(event) {
      setFirstName(event.target.value);
    }
  
    function handleLastName(event) {
      setLastName(event.target.value);
    }
  
    function handleCloseDialog() {
      setShowDialog(false);
    }
  
    return (
      <div>
        <form onSubmit={handleFormSubmit}style={formStyle}>
          <input type="text" value={firstName} onChange={handleFirstName} placeholder="First Name" />
          <input type="text" value={lastName} onChange={handleLastName} placeholder="Last Name" />
          <button type="submit">Submit</button>
        </form>
        
        {showDialog && (
          <dialog open>
            <p>Hello, {formData}!</p>
            <button onClick={handleCloseDialog}>Close</button>
          </dialog>
        )}
      </div>
    );
  }
  
export const formStyle={
  backgroundColor:"skyblue",
  fontSize:"20px",
  marginTop:"20px",
  margin:"auto",
  padding:"20px",
  alignItems:"center",
  justifyContent:"center",
  width:"50%",
  top:"50px",
}
export default UnControlledForm