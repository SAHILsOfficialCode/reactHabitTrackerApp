import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import { useDispatch } from "react-redux";
import { addHabit } from "../redux/slice/habitSlice";

const TopBar = () => {
  const [habitName, setHabitName] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    e.preventDefault();
    if (habitName.trim() !== "") {
      dispatch(addHabit(habitName));
    } else {
      alert("Please enter a habit");
    }

    setHabitName("");
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/" style={{ fontSize: "83px" }}>
            Track Your Habits
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Form onSubmit={handleInput}>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Habit Tracker</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <input
                placeholder="enter your habit"
                autoComplete="off"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
              ></input>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="primary"
                type="submit"
                style={{ backgroundColor: "#191970" }}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Form>
      </div>
    </div>
  );
};

export default TopBar;
