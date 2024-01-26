import { useState } from 'react';
import AdminNavbar from './AdminNavbar';
import SearchBar from './SearchBar';
import ExerciseDisplay from './ExerciseDisplay';


function AdminHomepage() {
  const [ setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className="Container">
      <div className="App">
        <h1 className="text-warning mt-4 text-center">FITFLEX HOME TRAINER 💪🏋️🏋️‍♀️ 🤼‍♂️</h1>
        <br></br>       
          <AdminNavbar />
          <ExerciseDisplay />
          <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
}
export default AdminHomepage;

