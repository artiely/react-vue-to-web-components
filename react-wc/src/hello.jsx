import React from "react"
import * as ReactDOM from "react-dom/client"
// When using React 16 and 17 import ReactDom with the commented statement below instead:
// import ReactDom from "react-dom"
import reactToWebComponent from "react-to-webcomponent"
import PropTypes from "prop-types";
const Greeting = ({ name }) => {
  return <h1>Hello, {name}</h1>
}
Greeting.propTypes = {
    name: PropTypes.string.isRequired
  };
const WebGreeting = reactToWebComponent(Greeting, React, ReactDOM)

customElements.define("web-greeting", WebGreeting)
