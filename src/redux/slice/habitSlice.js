import { createSlice } from "@reduxjs/toolkit";

let habitId = 1;
const habitSlice = createSlice({
  name: "habitTracker",
  initialState: [],
  reducers: {
    addHabit: (state, action) => {
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      const weekLog = [];
      for (let index = 6; index >= 0; index--) {
        const date = new Date();

        const prevDay = date.setDate(date.getDate() - index);
        const newDate = new Date(prevDay);
        const todayIndex = newDate.getDay();

        weekLog.push({
          id: index,
          day: daysOfWeek[todayIndex],
          dd: newDate.getDate(),
          mm: newDate.getMonth(),
          yyyy: newDate.getFullYear(),
          isDone: "",
        });
      }

      const newHabits = {
        habitId: habitId++,
        name: action.payload,
        weekLog,
      };

      const updatedHabits = [...state, newHabits];
      console.log("Updated habits", updatedHabits.length);
      return updatedHabits;
    },
    habitDone: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i].habitId === Number(localStorage.getItem("id"))) {
          for (let j = 0; j < state[i].weekLog.length; j++) {
            if (state[i].weekLog[j].id === action.payload.id) {
              state[i].weekLog[j].isDone = true;
            }
          }
        }
      }
      return state;
    },
    habitNotDone: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i].habitId === Number(localStorage.getItem("id"))) {
          for (let j = 0; j < state[i].weekLog.length; j++) {
            if (state[i].weekLog[j].id === action.payload.id) {
              state[i].weekLog[j].isDone = false;
            }
          }
        }
      }
      return state;
    },
    habitNil: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i].habitId === Number(localStorage.getItem("id"))) {
          for (let j = 0; j < state[i].weekLog.length; j++) {
            if (state[i].weekLog[j].id === action.payload.id) {
              state[i].weekLog[j].isDone = "";
            }
          }
        }
      }
      return state;
    },
  },
});

export const { addHabit, habitDone, habitNotDone, habitNil } =
  habitSlice.actions;

export default habitSlice.reducer;
