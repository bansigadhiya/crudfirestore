import { useState } from 'react';
import './App.css';
import CreateStudent from './Components/Create-student/CreateStudent';
import EditStudent from './Components/Edit-student/EditStudent';
import ViewStudent from './Components/View-students-data/ViewStudent';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    console.log("handleeditcalled");
    setIsEdit(!isEdit);
  }
  return (
    // <div>
    //   {
    //     isEdit ? <EditStudent handleEdit={handleEdit}/> : <CreateStudent />
    //   }
    //   <ViewStudent handleEdit={handleEdit}/>
    // </div>
    <>
      <Routes>
        {
          isEdit ? <Route path='/editStudent' element={<EditStudent handleEdit={handleEdit} />} /> : <Route path='/' element={<CreateStudent />} />
        }
        <Route path='/viewstudent' element={<ViewStudent handleEdit={handleEdit} />} />
      </Routes>
    </>
  );
}

export default App;
