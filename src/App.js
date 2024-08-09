import "./App.css";
import { Route, Routes } from "react-router-dom";
import Container from "./components/Container/Container";
import Menu from "./components/Menu/Menu";
import QuestionType from "./components/QuestionType/QuestionType";
import QuestionDetails from "./components/QuestionType/QuestionDetails/QuestionDetails";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/Exam-practice-app" element={<Menu />} />
          <Route path="/Exam-practice-app/:year" element={<QuestionType />}>
            <Route path=":type" element={<QuestionDetails />} />
          </Route>
          <Route path="*" element={<Menu />} />
        </Routes>
      </BrowserRouter>{" "}
    </Container>
  );
}

export default App;
