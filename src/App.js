import { useState } from 'react';
import './App.css';
import CreateStudent from './Components/Create-student/CreateStudent';
import EditStudent from './Components/Edit-student/EditStudent';
import ViewStudent from './Components/View-students-data/ViewStudent';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import SignUp from './Components/SignUp/SignUp';
import LogIn from './Components/LogIn/LogIn';

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<ViewStudent />}></Route>
        <Route path='/createstudent' element={<CreateStudent />}></Route>
        <Route path='/editstudent' element={<EditStudent />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
      </Routes>
    </>
  );
}

export default App;
