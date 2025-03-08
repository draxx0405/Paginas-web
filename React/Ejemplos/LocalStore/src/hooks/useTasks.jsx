import { useState, useEffect } from "react";

export default function useTasks() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const [categories, setCategories] = useState(() => {
    return JSON.parse(localStorage.getItem("categories")) || [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  const addTask = (text, category) => {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      checked: false,
      category,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, checked: !task.checked } : task
    ));
  };

  const addCategory = (categoryName) => {
    const newCategory = {
      id: crypto.randomUUID(),
      name: categoryName,
    };
    if (!categories.some(cat => cat.name === categoryName)) {
      setCategories([...categories, newCategory]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  const deleteCategory = (id) => {
    setCategories(categories.filter(cat => cat.id !== id));
    // También elimina las tareas asociadas a esta categoría
    setTasks(tasks.filter(task => task.category !== id));
  };

  const editCategory = (id, newName) => {
    setCategories(categories.map(cat =>
      cat.id === id ? { ...cat, name: newName } : cat
    ));
  };

  return { tasks, addTask, toggleTask, categories, addCategory, deleteTask, editTask, deleteCategory, editCategory };
}