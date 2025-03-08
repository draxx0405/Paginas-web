import { Box, Heading } from "@chakra-ui/react";
import TodoList from "./component/TodoList";
import useTasks from "./hooks/useTasks";

export default function App() {
  const { tasks, addTask, toggleTask, categories, addCategory, deleteTask, editTask,deleteCategory, editCategory } = useTasks();

  return (
    <Box padding="20px" maxWidth="600px" margin="auto">
      <Heading textAlign="center" marginBottom="20px">To-Do List</Heading>
      <TodoList 
        tasks={tasks} 
        addTask={addTask} 
        toggleTask={toggleTask} 
        categories={categories} 
        addCategory={addCategory} 
        deleteTask={deleteTask} 
        editTask={editTask} 
        deleteCategory={deleteCategory}
        editCategory={editCategory}
      />
    </Box>
  );
}
