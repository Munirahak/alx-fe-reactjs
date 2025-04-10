// src/__tests__/TodoList.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  // Initial Render Test
  test("renders initial todos", () => {
    render(<TodoList />);

    // Check if demo todos are rendered
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  // Test Adding Todos
  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add Todo");

    // Simulate typing and adding
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    // Check if new todo is displayed
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  // Test Toggling Todos
  test("toggles a todo completion status", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");

    // Initially should not have line-through
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");

    // Click to toggle
    fireEvent.click(todoItem);

    // Now should have line-through
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  // Test Deleting Todos
  test("deletes a todo", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");
    const deleteButton = todoItem.nextSibling; // Button is next to span

    // Delete the todo
    fireEvent.click(deleteButton);

    // It should not exist anymore
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
