import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import CreateExercise from "./components/create-exercises.component";
import EditExercises from "./components/edit-exercises.components";
import ExerciseList from "./components/exercises-list.components";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<ExerciseList />} />
          <Route path="/edit/:id" element={<EditExercises />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;