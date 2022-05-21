export const ACTION_DELETE_TODO = "ACTION_DELETE_TODO";
export const ACTION_STATUS_CHANGE = "ACTION_STATUS_CHANGE";
export const ACTION_ADD_TODO = "ACTION_ADD_TODO";

export const deleteTodo = (id) => ({
  type: ACTION_DELETE_TODO,
  id,
});

export const changeStatus = (payload) => ({
  type: ACTION_STATUS_CHANGE,
  payload,
});

export const addTodo = (payload) => ({
  type: ACTION_ADD_TODO,
  payload,
});
