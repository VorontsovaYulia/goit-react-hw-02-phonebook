import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ContactForm } from "./ContactForm/ContactForm";


export class App extends Component {
  state = {
    contacts: [], 
  }

  addContact = contact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
      }
    })
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact}/>

        <GlobalStyle />
      </div>
    );
  }
};
