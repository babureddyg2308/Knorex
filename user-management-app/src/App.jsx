import React, { useState } from 'react';
import UsersTable from './components/UsersTable.jsx';
import SignUpForm from './components/SignUpForm.jsx';
import DeleteUserPopup from './components/DeleteUserPopup.jsx';

function App() {
  const [users, setUsers] = useState([]);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
    setShowSignUpForm(false);
  };


  
  const handleDeleteUser = () => {
    setUsers(users.filter(user => user !== selectedUser));
    setShowDeletePopup(false);
  };

  return (
    <div className="app-container">
      
      <div style={{display: "flex", justifyContent:'space-between', alignItems: "center",marginRight:'110px' }}>  

      <h1>User Management</h1> <br />
      <button onClick={() => setShowSignUpForm(true)}>Sign Up</button></div>
       <UsersTable users={users} setSelectedUser={setSelectedUser} setShowDeletePopup={setShowDeletePopup} />
      {showSignUpForm && <SignUpForm onAddUser={handleAddUser} onClose={() => setShowSignUpForm(false)} />}
      {showDeletePopup && <DeleteUserPopup onDelete={handleDeleteUser} onClose={() => setShowDeletePopup(false)} />}
    </div>
  );
}

export default App;
