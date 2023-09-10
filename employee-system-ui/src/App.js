import './App.css';
import Navbar from './components/Navbar';
import AddNewEmployee from './components/AddNewEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';
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
    <Route path='/editEmployee/:id' element={<UpdateEmployee />} />
   </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
