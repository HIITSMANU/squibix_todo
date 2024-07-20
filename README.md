# squibix_todo

# TODOS

This is a Todo App where the user will log into the website and they can first enter the task to be accomplised and after that they can choose the category of thier choice ,coming next they can choose the date of doing the task and after that they can choose the from and to time to accomplish the task and after that they can add the todo , they can filter based on category and status(Active or Completed) and also they can search the todos using the search filter. Also this website includes theme switcher(dark and light modes) and on refreshing the page the todos will not vanish as the data is stored in local storage. 

## Tech Stack

**Frontend** - React js, Tailwind css, Font-Awesome icons

## Features

- Login Functionality
- Light/dark mode toggle
- Live preview
- Filter(Category, Status, Search)
- Marking as Completed if the task is Completed


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


