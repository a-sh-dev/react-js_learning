import React, { useState, useEffect } from "react";
import List from "./components/List";
import Alert from "./components/Alert";
import { getLocalStorage } from "utils/localStorage";

function App() {
  // Grocery list states
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  // Handle editing item
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  // Modals alert
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      // display alert - can't be empty value
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      // handle editing
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      // clear input
      setName("");
      setEditId(null);
      setIsEditing(false);
      // show alert
      showAlert(true, "success", "edit success");
    } else {
      // display alert
      showAlert(true, "success", `${name} is added`);
      // add new item
      const newItem = {
        id: new Date().getTime().toString(),
        title: name
      };
      // update list array with newItem
      setList([...list, newItem]);
      // clear input field
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "grocery list is cleared");
    setList([]);
  };

  const removeItem = (id) => {
    const removed = list.find((item) => item.id === id);
    showAlert(true, "danger", `${removed.title} is removed`);
    // display remaining items in the list
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  };

  // LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("groceryList", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-form">
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>
          <span role="img" aria-label="plant" style={{ marginRight: "0.25em" }}>
            🪴
          </span>
          grocery list
        </h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn" type="submit">
            {isEditing ? "edit" : "add"}
          </button>
        </div>
      </form>
      {/* GROCERY LIST */}
      {list.length > 0 && (
        <section className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </section>
      )}
    </section>
  );
}

export default App;
