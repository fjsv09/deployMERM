import { Route, Routes } from "react-router-dom";

import TasksPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import NotFound from "./pages/NotFound";
import { TaskContextProvider } from "./context/TaskContext";

import Navbar from "./components/Navbar";

import axios from "axios";
//axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.baseURL = "https://deploymerm-production.up.railway.app/";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Navbar />

      <div className="container mx-auto py-4 px-5">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
