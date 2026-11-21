# React Routing & Firebase Authentication
**Course:** Tools & Technologies for Internet Programming  
**Student Name:** Fatema Tuz Zohra  
**Student ID:** C243407

A small React application that demonstrates **React Router**, **Firebase Authentication** (Email/Password) and **Protected Routes**.
## Features

* Five pages with client-side routing
* Register, login and logout with Firebase Authentication
* Protected Dashboard and Profile pages (guests are redirected to Login)
* Navbar that changes with the login state
* User stays logged in after a page refresh

## Pages
| Page      | Route        | Access    |
|-----------|--------------|-----------|
| Home      | /          | Public    |
| Login     | /login     | Public    |
| Register  | /register  | Public    |
| Dashboard | /dashboard | Protected |
| Profile   | /profile   | Protected |
## Technologies

* React 19
* Vite 8
* React Router DOM v7
* Firebase Authentication (Firebase 13)
* Context API
* Plain CSS

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx          # Links change based on login state
│   └── ProtectedRoute.jsx  # Redirects guests to /login
├── context/
│   └── AuthContext.jsx     # Auth state + register/login/logout
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   └── Profile.jsx
├── App.jsx                 # Route definitions
├── firebase.js             # Firebase initialization
├── index.css
└── main.jsx                # BrowserRouter + AuthProvider
```
## How to Run

1. Install Node.js (LTS version).
2. Create a project in the Firebase Console.
3. Go to **Build → Authentication → Get started → Sign-in method** and enable **Email/Password**.
4. Go to **Project settings → Your apps → Web app** and copy the config values.
5. Install the packages:

npm install

6. Create the environment file and fill in your Firebase values:

cp .env.example .env
On Windows Command Prompt use copy .env.example .env.

7. Start the app:

npm run dev

8. Open the link shown in the terminal, usually http://localhost:5173

## How It Works

* **Routing:** BrowserRouter wraps the app in main.jsx. Routes and Route in App.jsx map URLs to pages. Link and useNavigate handle navigation.
* **Authentication:** createUserWithEmailAndPassword, signInWithEmailAndPassword and signOut are wrapped in AuthContext.
* **Session persistence:** onAuthStateChanged restores the logged-in user after a refresh.
* **Protected routes:** ProtectedRoute checks the user. While Firebase is loading it shows "Loading...", and if there is no user it redirects to /login.

## Note on Security
The Firebase keys are stored in a local .env file, which is listed in .gitignore and is not uploaded. .env.example shows the required variables without the secret values. Route protection works in the browser only and does not secure server data.
## Submission

* GitHub repository: https://github.com/fatema-t-zohra/react-auth
* Lab report: submitted separately as a PDF on Google Classroom..pkay?
