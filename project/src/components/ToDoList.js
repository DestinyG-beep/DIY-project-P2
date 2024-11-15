import React from 'react'; // Import React

const ToDoList = ({ toDoList }) => {
  return (
    <section className="todo-list">
      <h3>Your To-Do List</h3>
      <ul>
        {toDoList.length === 0 ? (
          <p>No projects in your To-Do list.</p>
        ) : (
          toDoList.map((project) => (
            <li key={project.id}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default ToDoList;
