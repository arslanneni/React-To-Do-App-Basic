import React, { useState } from "react";
import { toast } from "react-toastify";

const AddToDo = () => {
  //States
  const [todo, setToDo] = useState("");
  const [addToDo, setAddToDo] = useState([]);

  // 🖊️ Helper Function: Handles changes in the input field
  // Updates the `todo` state with the current value from the input
  const handleInputChange = (e) => {
    setToDo(e.target.value);
  };

  // ➕ Helper Function: Adds a new to-do to the list
  // Appends the current `todo` to the `addToDo` array
  // Then clears the input field for the next entry
  const handleAddTodo = () => {
    if (todo !== "") {
      setAddToDo([...addToDo, todo]);
      setToDo("");
    } else {
      return toast.error("Please Add To Do");
    }
  };

  // ❌ Helper Function: Deletes a to-do by index
  // Removes the item at the specified index from the `addToDo` list
  const handleDeleteTodo = (indexToDelete) => {
    const updatedToDos = addToDo.filter((_, index) => index !== indexToDelete);
    setAddToDo(updatedToDos);
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center">To-Do App</h1>
        <div className="row justify-content-center mt-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a new to-do"
              value={todo}
              onChange={handleInputChange}
            />
          </div>

          <div className="col-md-12 text-center mt-3">
            <button className="btn btn-primary" onClick={handleAddTodo}>
              Add To-Do
            </button>
          </div>
        </div>
      </div>
      {addToDo.length > 0 ? (
        <div className="mt-4">
          <h3>Your To-Dos:</h3>
          <ul className="list-group">
            {addToDo.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteTodo(index)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AddToDo;
