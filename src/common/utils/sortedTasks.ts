import type { Task } from "../../types/Task";

export const getPreparedTasks = (tasks: Task[], filter: string): Task[] =>
  tasks
    .slice()
    .sort((a, b) => {
      if (a.completed === b.completed) {
        return b.dateCreated - a.dateCreated;
      }

      return a.completed ? 1 : -1;
    })
    .filter(
      ({ completed }) =>
        filter === "ALL" ||
        (filter === "COMPLETED" && completed) ||
        (filter === "ACTIVE" && !completed)
    );
