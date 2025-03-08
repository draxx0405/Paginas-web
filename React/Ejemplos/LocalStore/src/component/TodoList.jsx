import { useState } from "react";
import { Checkbox, Box, Button, Heading, Input } from "@chakra-ui/react";

export default function TodoList({ tasks, addTask, toggleTask, categories, addCategory, deleteTask, editTask, deleteCategory, editCategory }) {
  const [newCategory, setNewCategory] = useState(""); // Para agregar categorías nuevas
  const [editModeTasks, setEditModeTasks] = useState(null); // Controlar qué tarea estamos editando
  const [editTextTasks, setEditTextTasks] = useState(""); // Almacenar el nuevo texto para la tarea
  const [editModeCategory, setEditModeCategory] = useState(null); // Controlar qué categoría estamos editando
  const [editTextCategory, setEditTextCategory] = useState(""); // Almacenar el nuevo texto para la categoría

  // Maneja el evento de edición de tareas
  const handleEditTask = (task) => {
    setEditModeTasks(task.id); // Activa el modo de edición para la tarea
    setEditTextTasks(task.text); // Carga el texto de la tarea en el input
  };

  // Maneja el guardado de la tarea editada
  const handleSaveTask = () => {
    if (editTextTasks.trim()) {
      editTask(editModeTasks, editTextTasks); // Llama a la función editTask para guardar la tarea editada
      setEditModeTasks(null); // Desactiva el modo de edición
      setEditTextTasks(""); // Limpia el texto editado
    }
  };

  // Maneja el evento de edición de categorías
  const handleEditCategory = (category) => {
    setEditModeCategory(category.id); // Activa el modo de edición para la categoría
    setEditTextCategory(category.name); // Carga el nombre de la categoría en el input
  };

  // Maneja el guardado de la categoría editada
  const handleSaveCategory = () => {
    if (editTextCategory.trim()) {
      editCategory(editModeCategory, editTextCategory); // Llama a la función editCategory para guardar la categoría editada
      setEditModeCategory(null); // Desactiva el modo de edición
      setEditTextCategory(""); // Limpia el texto editado
    }
  };

  return (
    <Box width="100%">
      {/* Input para agregar categorías */}
      <Box display="flex" gap="10px" marginBottom="20px">
        <Input
          placeholder="Nueva categoría"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <Button onClick={() => { addCategory(newCategory); setNewCategory(""); }}>
          Agregar Categoría
        </Button>
      </Box>

      {/* Mostrar categorías dinámicamente */}
      {categories.map((category) => (
        <Box key={category.id} marginBottom="20px" gap="10px">
          <Box display="flex" padding={10}>
            <Heading size="md">
              {editModeCategory === category.id ? (
                <Input
                  value={editTextCategory}
                  onChange={(e) => setEditTextCategory(e.target.value)}
                />
              ) : (
                category.name
              )}
            </Heading>
            <Box display="flex" gap="10px" pl={5}>
              {/* Botón para editar y guardar categoría */}
              {editModeCategory === category.id ? (
                <Button onClick={handleSaveCategory}>Guardar</Button>
              ) : (
                <Button onClick={() => handleEditCategory(category)}>Editar</Button>
              )}
              <Button onClick={() => deleteCategory(category.id)}>Eliminar</Button>
            </Box>
          </Box>

          {/* Mostrar tareas de la categoría */}
          {tasks
            .filter((task) => task.category === category.id)
            .map((task) => (
              <Box key={task.id} display="flex" gap="10px" alignItems="center" padding={10}>
                <Checkbox
                  isChecked={task.checked}
                  onChange={() => toggleTask(task.id)}
                />
                {editModeTasks === task.id ? (
                  <Input
                    value={editTextTasks}
                    onChange={(e) => setEditTextTasks(e.target.value)}
                  />
                ) : (
                  task.text
                )}

                {/* Botón para editar y guardar tarea */}
                {editModeTasks === task.id ? (
                  <Button onClick={handleSaveTask}>Guardar</Button>
                ) : (
                  <Button onClick={() => handleEditTask(task)}>Editar</Button>
                )}

                <Button onClick={() => deleteTask(task.id)}>Eliminar</Button>
              </Box>
            ))}

          {/* Botón para agregar una nueva tarea a la categoría */}
          <Button onClick={() => addTask("Nueva tarea", category.id)}>
            Agregar tarea a {category.name}
          </Button>
        </Box>
      ))}
    </Box>
  );
}