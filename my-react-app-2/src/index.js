import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Apps/App";
import List from "./Apps/TodoApp";
import NavbarApp from "./Apps/NavbarApp";
import 'bootstrap/dist/css/bootstrap.min.css';
import TableDataApp from "./Apps/TableDataApp";
import ModalApp from "./Apps/ModalApp";
import MyTextArea from "./components/TextArea";
import MyForm from "./components/Form";
import { NoteForm } from "./DNoteForm";

const demo = {
  backgroundColor: "red",
  textAlign: "center",
};

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <NavbarApp />
        <NoteForm/>
        <TableDataApp />
        
        <div>
          <MyTextArea />
        </div>

        

      </div>
    );
  }
}

// setInterval(() => {
//   const myFirstElement =
//   <div>
//         <h1 className='headingStyle'>Hello React, create apppppopopopo!</h1>
//         <h2 style={demo}>This is H2</h2>
//         <h1 className='headingStyle'>{new Date().toLocaleTimeString()}</h1>
//         <App /> <List />
//     </div>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);
// }, 1000);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Clock locale="bn-BD">
    <p>I am children</p>
  </Clock>
);




// <h1 className="headingStyle">Hello React, create apppppopopopo!</h1>
        // <h2 style={demo}>This is H2</h2>
        // <h3 className="headingStyle">{this.props.children}</h3>
        // <h1 className="headingStyle">
        //   {this.state.date.toLocaleTimeString(this.props.locale)}
        // </h1>
        // <App />
        // <List />