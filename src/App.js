import React from "react";
import Header from "../src/pagecomponents/Header";
import Footer from "../src/pagecomponents/Footer";
import "./App.css"; // Ensure this file is included for the layout styles
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddToDo from "./pagecomponents/AddToDo";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <main className="container my-5">
        <AddToDo />
      </main>
      <Footer />
    </>
  );
};

export default App;
