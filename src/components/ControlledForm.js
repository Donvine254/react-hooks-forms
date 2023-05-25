import React from "react";
import { formStyle } from "./UnControlledForm";
const modifiedStyle={
  ...formStyle,
  backgroundColor:"purple",
}

function Form({handleSubmit, handleFirstName, handleLastName, firstName, lastName}) {
return (
    <form onSubmit={handleSubmit} style={modifiedStyle}>
      <input type="text" value={firstName} onChange={handleFirstName} />
      <input type="text" value={lastName} onChange={handleLastName} />
      <button type="submit">Submit</button>
    </form>
    
  );
}

export default Form;
