import "./App.css";
import { Route, Routes } from "react-router-dom";
import Container from "./components/Container/Container";
import Menu from "./components/Menu/Menu";
import QuestionType from "./components/QuestionType/QuestionType";
import QuestionDetails from "./components/QuestionType/QuestionDetails/QuestionDetails";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/:year" element={<QuestionType />}>
          <Route path=":type" element={<QuestionDetails />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
