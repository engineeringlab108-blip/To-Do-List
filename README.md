# To-Do List Application

[Live Demo](https://manages-tasks.netlify.app/)

Project is deployed using Netlify.

## Project Description

A simple, interactive To-Do List web application built using **Vanilla JavaScript**. This application allows users to add tasks, mark them as completed, and remove them from the list. It utilizes **browser localStorage** to persist data, ensuring that your tasks remain saved even after refreshing the page or closing the browser.

## Features

- **Add Tasks**: Users can input text to create new tasks dynamically.
- **Mark as Completed**: Tasks can be toggled between active and completed states (visualized with a strikethrough and checked icon).
- **Delete Tasks**: Users can remove individual tasks from the list permanently.
- **Data Persistence**: All tasks and their states are saved to localStorage automatically.
- **Auto-Restore**: Saved tasks are automatically retrieved and displayed when the application is reloaded.
- **Responsive Design**: The interface is styled to work well on different screen sizes.

## Tech Stack

- **HTML5**: key structural elements.
- **CSS3**: styling, layout, and custom checked-state visuals.
- **JavaScript (Vanilla)**: application logic, DOM manipulation, and event handling.
- **Browser LocalStorage**: client-side data persistence.

## How the Application Works

### Dynamic DOM Manipulation
When a user adds a task, the application dynamically creates HTML elements (`<li>` for the task and `<span>` for the delete button) using `document.createElement()` and appends them to the main list container.

### Event Delegation
Instead of adding event listeners to every single task item, the application uses **event delegation**. A single 'click' event listener is attached to the parent list container (`ul`). The application detects the clicked target (`e.target`):
*   If an `LI` element is clicked, it toggles the "checked" class.
*   If a `SPAN` (the cross icon) is clicked, it removes the parent `LI` element from the DOM.

### Data Persistence (LocalStorage)
*   **Saving Data**: Every time a task is added, checked, or deleted, the `saveData()` function is triggered. This stores the current internal HTML of the list container (`listContainer.innerHTML`) directly into the browser's localStorage under the key "data".
*   **Retrieving Data**: On page load, the `showTask()` function retrieves this HTML string and injects it back into the list container, effectively restoring the previous state.

## Project Structure

- **`index.html`**: The main HTML file containing the structure of the application (input field, button, and list container).
- **`style.css`**: Contains all styling rules, including gradients, component layouts, and the visual styles for checked/unchecked tasks.
- **`script.js`**: Handles all the logic, including event listeners, DOM updates, and interacting with localStorage.

## How to Run the Project Locally

1.  **Clone or Download**: Download the project files to your local machine.
2.  **Open Directory**: Navigate to the project folder.
3.  **Launch**: Double-click the `index.html` file to open it in your default web browser.

No build tools, package managers (npm/yarn), or external libraries are required. The project works directly in any modern browser.

## Future Improvements

- **Edit Functionality**: Allow users to edit the text of an existing task.
- **Task Filtering**: Add options to view only 'Completed' or 'Pending' tasks.
- **Due Dates**: Enable users to set deadlines for tasks.
- **Prioritization**: Add high, medium, and low priority tags to tasks.

## Learning Outcomes

By examining this project, a developer learns:
- How to select and manipulate DOM elements using JavaScript.
- The concept of **Event Delegation** for efficient event handling.
- How to use `localStorage` to save state across browser sessions.
- Basic CSS techniques for custom form controls (custom checkboxes) and layout.

## Author

**Anuruddha Pratap Singh**
