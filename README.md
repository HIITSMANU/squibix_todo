# squibix_todo

# TODOS

This Todo App enables users to log in securely, enter tasks to be accomplished, select a preferred category, choose a specific date, and set a time range for task completion. Users can then add the todo to their list. The app features advanced filtering options by category and status (Active or Completed) and includes a search function for efficient task retrieval. Additionally, it offers a theme switcher (dark and light modes) for a customized user interface. To ensure data persistence, all tasks are stored in local storage, preventing data loss upon page refresh. This app combines user-friendly task management with a technically robust framework, enhancing productivity and efficiency.

## Tech Stack

**Frontend**: Built using React for a responsive and interactive user interface.
**State Management** -  Context API for managing authentication, theme, and tasks.
**Local Storage**: Leveraged for data persistence, ensuring tasks remain available across sessions.
**Styling**: Tailwind CSS for a modern and adaptive design.
**Icons** - Font-Awesome Icons

## Features

- User Authentication
- Task Entry
- Categorization
- Date and Time Selection
- Add Task
- Filtering
- Search Functionality
- Theme Switching
- Persistent Storage


## Screenshots

**Laptop Screen(Light mode)**
![image](https://github.com/user-attachments/assets/604e47d0-7d38-4525-8d21-2aab90ea3bf3)

**Laptop Screen(Dark mode)**
![image](https://github.com/user-attachments/assets/1d15007e-12cf-41e0-95a7-391878a4c668)

**Mobile Screen(Light mode)**
![image](https://github.com/user-attachments/assets/a2ea712d-9b42-42a3-ad15-baaa3ce14041)

**Mobile Screen(Dark mode)**
![image](https://github.com/user-attachments/assets/0913614a-9b65-4e03-bb9c-9a5ab8f29f74)


## Run Locally

To create react-vite projects

```bash
  npm create vite@latest
```

Go to the project directory

```bash
  cd project-name
```
Install dependencies

```bash
  npm install
```

To run server

```bash
  npm run dev
```
Username and Password for the website

```bash
  Username : testuser
  Password : 12345
```

To add react-router-dom dependency

```bash
  npm install react-router-dom
```
To add Tailwind-css into the project

```bash
  npm install -D tailwindcss
  npx tailwindcss init
```

```javascript
/** @type {import('tailwindcss').Config} */
tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
```javascript
src/index.js
@tailwind base;
@tailwind components;
@tailwind utilities;
```


