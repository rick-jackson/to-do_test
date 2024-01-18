import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Task } from "../../types/Task";
import { filterConfig } from "../../common/configs/filter";

const initialState: { tasks: Task[]; filter: keyof typeof filterConfig } = {
  tasks: JSON.parse(localStorage.getItem("tasks") as string) || [],
  filter: "ALL",
};

export const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {
      const newTask = {
        id: new Date().getTime(),
        text: action.payload,
        completed: false,
        dateCreated: new Date().getTime(),
      };
      state.tasks = [...state.tasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    editTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.map((task: Task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    deleteTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter(
        (task: Task) => task.id !== action.payload
      );
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    filterTasks(state, action: PayloadAction<keyof typeof filterConfig>) {
      state.filter = action.payload;
    },
  },
});

export default TasksSlice.reducer;
