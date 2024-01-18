import type { AppDispatch } from "..";
import { TasksSlice } from "../reducers/TasksSlice";
import { filterConfig } from "../../common/configs/filter";

export const addTask = (text: string) => async (displatch: AppDispatch) => {
  displatch(TasksSlice.actions.addTask(text));
};

export const editTask = (taskId: number) => async (displatch: AppDispatch) => {
  displatch(TasksSlice.actions.editTask(taskId));
};

export const deleteTask =
  (taskId: number) => async (displatch: AppDispatch) => {
    displatch(TasksSlice.actions.deleteTask(taskId));
  };

export const filterTasks =
  (variant: keyof typeof filterConfig) => async (displatch: AppDispatch) => {
    displatch(TasksSlice.actions.filterTasks(variant));
  };
