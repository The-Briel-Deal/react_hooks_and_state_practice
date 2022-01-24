import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  let changeFields = (event) => {
    const { name, value } = event.target;
    setContact((prevValue) => {
      if (name === "fName") {
        prevValue.fName = value;
      }
      if (name === "lName") {
        prevValue.lName = value;
      }
      if (name === "email") {
        prevValue.email = value;
      }
      const { fName, lName, email } = prevValue;
      return { fName, lName, email };
    });
  };

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={contact.fName}
          onChange={changeFields}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
          onChange={changeFields}
        />
        <input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={changeFields}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
