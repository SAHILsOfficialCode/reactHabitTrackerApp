import React from "react";
import { Link } from "react-router-dom";
import Calendar from "../components/Calendar";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const HabitDetails = () => {
  let habitsState = useSelector((state) => state["habitTacker"]);

  let habit = {};
  for (let i = 0; i < habitsState.length; i++) {
    if (habitsState[i].habitId === parseInt(localStorage.getItem("id"))) {
      habit = habitsState[i];
    }
  }
  return (
    <>
      <h1
        className="text-center"
        style={{
          textTransform: "capitalize",
          backgroundColor: "#DCDCDC",
          fontSize: "100px",
        }}
      >
        {habit.name}
      </h1>
      <div
        style={{
          display: "flex",
          backgroundColor: "#2F4F4F",
          padding: "10px 0px 10px 0px",
        }}
      >
        {habit.weekLog?.map((day, index) => (
          <Calendar day={day} key={index} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <Button type="checkbox" style={{ backgroundColor: "#191970" }}>
            Back to Detail View
          </Button>
        </Link>
      </div>
    </>
  );
};

export default HabitDetails;
