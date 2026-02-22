📘 Favourite Student List — React JS

A modern and beautifully styled React app that allows users to mark students as favourites using React Router, useContext, and smooth UI animations.

This project demonstrates global state management, navigation without reload, and dynamic rendering with a polished pastel-themed UI.

🚀 Features
✅ Student List Page

Displays all students dynamically using map()

Each student card includes:
✓ Avatar
✓ Name
✓ Roll number
✓ Grade badge

"Add to Favourite" button for each student

Duplicate favourite prevention

⭐ Favourite Students Page

Uses global state via useContext

Shows only selected favourite students

Option to remove from favourites

🌐 React Router Navigation

Navigation without page reload

Smooth fade-in page transitions

Uses <Link> for routing

🎨 Premium Pastel UI (Peach–Mint Theme)

Modern cards with soft glass style

Animated gradients in the background

Glow effects, hover transitions

Clean typography with Inter font

🧠 Tech Stack
Category	Tools
Frontend	React JS (Functional Components)
Routing	React Router DOM
State Management	React Context API (createContext, useContext)
CSS	Custom pastel UI + animations
📂 Folder Structure
/src
│── /components
│     ├── Navbar.js
│     ├── StudentCard.js
│
│── /context
│     ├── StudentContext.js
│
│── /pages
│     ├── StudentList.js
│     ├── FavouriteStudents.js
│
│── App.js
│── index.js
│── styles.css
⚙️ Installation & Setup

Follow these steps to run the project on your system:
