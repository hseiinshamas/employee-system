import './App.css';
import Navbar from './components/Navbar';
import AddNewEmployee from './components/AddNewEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route index element={<EmployeeList/>} />
    <Route path='/' element={<EmployeeList/>}></Route>
    <Route path='/employeeList' element={<EmployeeList/>} />
    <Route path='/addNewEmployee' element={<AddNewEmployee/>} />
   </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
