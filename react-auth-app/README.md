# React Routing & Firebase Authentication

Course: Tools & Technologies for Internet Programming

A small React app demonstrating **React Router**, **Firebase Authentication**
(email/password) and **Protected Routes**.

## Pages

| Page      | Route        | Access    |
|-----------|--------------|-----------|
| Home      | `/`          | Public    |
| Login     | `/login`     | Public    |
| Register  | `/register`  | Public    |
| Dashboard | `/dashboard` | Protected |
| Profile   | `/profile`   | Protected |

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Links change based on login state
│   └── ProtectedRoute.jsx  # Redirects guests to /login
├── context/
│   └── AuthContext.jsx     # Auth state + register/login/logout (useContext)
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   └── Profile.jsx
├── App.jsx                 # Route definitions
├── firebase.js             # initializeApp + getAuth
├── index.css
└── main.jsx                # BrowserRouter + AuthProvider
```

## Setup

1. Create a project at https://console.firebase.google.com
2. **Build -> Authentication -> Get started -> Sign-in method -> enable Email/Password**
3. **Project settings -> Your apps -> Add Web app** and copy the config values
4. Copy `.env.example` to `.env` and paste the values in
5. Install and run:

```bash
npm install
npm run dev
```

Open http://localhost:5173

## How It Works

- **Routing:** `BrowserRouter` (main.jsx) wraps the app; `Routes`/`Route` (App.jsx) map URLs to pages; `Link` and `useNavigate` handle navigation.
- **Authentication:** `createUserWithEmailAndPassword`, `signInWithEmailAndPassword` and `signOut` are wrapped in `AuthContext`.
- **Persistence:** `onAuthStateChanged` restores the session on refresh.
- **Protected routes:** `ProtectedRoute` checks `user`; if null it returns `<Navigate to="/login" />`.

## Submission

- GitHub repository: _add your link here_
- Screenshots: _see the `screenshots/` folder / lab report_
