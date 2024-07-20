# squibix_todo

# TODOS

This is a Todo App where the user will log into the website and he/she can first enter the task to be accomplised and after that he/she can choose the category of his choice ,coming next they can choose the date of doing the task and after that they can choose the from and to time to accomplish the task and after that they can add the todo , they can filter based on category and status(Active or Completed). Also this website includes theme switcher(dark and light modes) and on refreshing the page the todos will not vanish as they are stored in local storage. 

## Tech Stack

**Frontend** - React js, Tailwind css, Font-Awesome icons


## Screenshots

**Laptop Screen(Light mode)**
![image](https://github.com/user-attachments/assets/796b28c7-356d-461d-9c6c-c126142eb9d4)

**Laptop Screen(Dark mode)**
![image](https://github.com/user-attachments/assets/e5c5fbda-68c9-4f0b-a99d-f079ec780ef1)

**Mobile Screen(Light mode)**
![image](https://github.com/user-attachments/assets/b0925a92-2e5b-4290-a83a-3267c22714dd)

**Mobile Screen(Dark mode)**
![image](https://github.com/user-attachments/assets/a789c3b2-0c0c-415d-9b56-60a2bb7b0e77)


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


