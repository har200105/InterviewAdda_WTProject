import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Opportunity from './Pages/Opportunity';
import InterviewExperience from './Pages/InterviewExperience';
import AddAQuestion from './Pages/AddAQuestion';
import Login from './Pages/Login';
import QuestionByCompanies from './Pages/QuestionByCompanies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/opportunities" element={<Opportunity />} />
      </Routes>
      <Routes>
        <Route exact path="/interviewexp" element={<InterviewExperience />} />
      </Routes>
      <Routes>
        <Route exact path="/addaQues" element={  localStorage.getItem("jwt") === null ? <Login refresh={true} /> : <AddAQuestion />} />
      </Routes>
      <Routes>
        <Route exact path="/Login" element={<Login refresh={false} />} />
      </Routes>
      <Routes>
        <Route exact path="/getComp/:name" element={<QuestionByCompanies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
