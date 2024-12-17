import mongoose from "mongoose";

interface ITask extends Document {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  status: "todo" | "in-progress" | "done"; // Статус задачи
  priority: "low" | "medium" | "high"; // Приоритет задачи
  userId: string; // Идентификатор пользователя, которому принадлежит задача
}

const taskSchema = new mongoose.Schema<ITask>({});
const Task = mongoose.model("Task", taskSchema);

export default Task;
