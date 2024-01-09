import { useState } from "react";
import { useTheme } from "@mui/material";
import { Button, Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from "@mui/material";
import { tokens } from "../../../theme";
import { styles } from "../../../style";
import "../../../index.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; 
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
// Icons
import { IoIosAdd } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";

// ... (previous imports)



function TodoList() {
  const [todos, setTodos] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const classes = styles(colors);

  function addTodo(title) {
    let maxId = 0;
    for (let todo of todos) {
      maxId = Math.max(maxId, todo.id);
    }
    setTodos([...todos, { id: maxId + 1, title: title, completed: false }]);
  }

  function setTodoCompleted(id, completed) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const numTodos = todos.length;
  const numCompletedTodos = todos.filter((todo) => todo.completed).length;
  const numIncompleteTodos = numTodos - numCompletedTodos;

  const [newTitle, setNewTitle] = useState("");

  return (
    <div className="Todo__Container">
      <div
        className="App__Main"
        style={{
          height: "100%",
          paddingTop: "10px",
          // paddingInline: "20px",
          width: "100%",
        }}
      >
        <form
          className="Todo__Add_Form"
          onSubmit={(event) => {
            event.preventDefault();
            addTodo(newTitle);
            setNewTitle("");
          }}
        >
          <TextField
            type="text"
            label="Add Today Task"
            variant="standard"
            value={newTitle}
            sx={{ width: "75%" }}
            onChange={(event) => setNewTitle(event.target.value)}
            required // Add the required attribute here
          />
          <Button
            type="submit"
            sx={{ ...classes.addButton, paddingX: "20px" }}
            disabled={todos.length >= 5}
          >
            <IoIosAdd />
            Add
          </Button>
        </form>

        <List className="Todo__TodoList">
          {todos.slice(0, 5).map((todo) => (
            <ListItem
                
              key={todo.id}
              //   DELETE TODO
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="comments"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <RiDeleteBin5Fill />
                </IconButton>
              }
              disablePadding={true}
            >
              <ListItemButton>
                <ListItemIcon>
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon />}
                    checked={todo.completed}
                    onChange={(event) =>
                      setTodoCompleted(todo.id, event.target.checked)
                    }
                    style={{
                      color: todo.completed ? "#60B527" : undefined,
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <div
                      className={
                        todo.completed ? "Todo__TodoItemText--Completed" : ""
                      }
                    >
                      {(todo.completed ? "" : "") + todo.title}
                    </div>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

export default TodoList;
