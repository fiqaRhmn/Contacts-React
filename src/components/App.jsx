import React from "react";
import Contactcard from "./Contactcard";
import { contacts } from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact, index) => (
        <Contactcard
          name={contacts[index].name}
          img={contacts[index].imgURL}
          tel={contacts[index].phone}
          email={contacts[index].email}
        />
      ))}
    </div>
  );
}

export default App;
