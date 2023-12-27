import React from "react";
import { useDispatch } from "react-redux";
import { habitDone, habitNotDone, habitNil } from "../redux/slice/habitSlice";

const DayView = ({ day }) => {
  const dispatch = useDispatch();

  const markToDone = () => {
    dispatch(habitDone(day));
  };

  const markToUnDone = () => {
    dispatch(habitNotDone(day));
  };

  const markToNone = () => {
    dispatch(habitNil(day));
  };

  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto",
        marginRight: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#F5F5F5",
      }}
    >
      <h5>{day.day}</h5>
      <p>
        {day.dd}/{day.mm + 1}/{day.yyyy}
      </p>
      <div style={{ color: "#F5F5F5" }}>
        <input
          type="radio"
          name={day.id}
          value="choice-1"
          checked={day.isDone === true ? true : false}
          onChange={markToDone}
        />
        <label htmlFor={day.id}>Done</label>{" "}
        <input
          type="radio"
          name={day.id}
          value="choice-2"
          checked={day.isDone === false ? true : false}
          onChange={markToUnDone}
        />
        <label htmlFor={day.id}>Not Done</label>{" "}
        <input
          type="radio"
          name={day.id}
          value="choice-3"
          checked={day.isDone === "" ? true : false}
          onChange={markToNone}
        />
        <label htmlFor={day.id}>Nil</label>
      </div>
    </div>
  );
};

export default DayView;
