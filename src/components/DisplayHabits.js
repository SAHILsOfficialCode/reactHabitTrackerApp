import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DisplayHabits = () => {
  let habitState = useSelector((state) => state["habitTacker"]);

  const handleWeekView = (habitId) => {
    localStorage.setItem("id", habitId);
  };
  return (
    <div
      style={{
        display: "block",
        position: "initial",
        marginLeft: "37%",
        marginTop: "20px",
      }}
    >
      {habitState?.map((habit) => (
        <Card
          style={{ width: "31.2rem", marginBottom: "5px" }}
          key={habit.habitId}
        >
          <Card.Body>
            <Card.Title>{habit.name}</Card.Title>
            <Link to="/habitDetails">
              <Button
                style={{ backgroundColor: "#191970" }}
                onClick={() => handleWeekView(habit.habitId)}
              >
                Week
              </Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default DisplayHabits;
