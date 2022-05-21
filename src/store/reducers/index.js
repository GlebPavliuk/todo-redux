import { ACTION_DELETE_TODO, ACTION_STATUS_CHANGE, ACTION_ADD_TODO } from "../actions";

const INITIAL_STATE = {
  todos: [
    {
      id: "14",
      title: "Сделать утреннюю зарядку",
      completed: true,
    },
    {
      id: "16",
      title: "Купить продукты",
      completed: false,
    },
    {
      id: "18",
      title: "Сделать домашнее задание",
      completed: false,
    },
    {
      id: "19",
      title: "Сходить в кино",
      completed: true,
    },
    {
      id: "20",
      title: "Позвонить другу",
      completed: true,
    },
    {
      id: "55",
      title: "После разговора с другом покакать",
      completed: false,
    },
  ],
};

export default function reducer(state = INITIAL_STATE, { type, payload, id }) {
  switch (type) {
    case ACTION_DELETE_TODO:
      const updatedList = state.todos.filter((item) => item.id !== id);
      return { todos: updatedList };
    case ACTION_STATUS_CHANGE:
      const statusChanged = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo,
      );
      return { todos: statusChanged };
    case ACTION_ADD_TODO:
      const newArrayTodo = [...state.todos];
      newArrayTodo.push(payload);
      return { todos: newArrayTodo };
    default:
      return state;
  }
}
