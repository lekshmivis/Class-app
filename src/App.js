import logo from './logo.svg';
import './App.css';
import AddClass from './Components/AddClass';
import SearchClass from './Components/SearchClass';
import DeleteClass from './Components/DeleteClass';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddClass/>}/>
        <Route path='/Search' element={<SearchClass/>}/>
        <Route path='/Delete' element={<DeleteClass/>}/>
      <AddClass/>
      <SearchClass/>
      <DeleteClass/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
