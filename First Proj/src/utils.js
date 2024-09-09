import {v4 as uuid} from "uuid";
export const initialTasks = [
    { id: uuid(), name: "brush your teeth", isDone:false, },
    { id: uuid(), name: "Take Bath", isDone: false },
    { id: uuid(), name: "Meditation", isDone: false }
]