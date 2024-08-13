import React, { useState } from 'react';
import { exportUsersToCSV } from '../utils/api.js';
import './users.css'
 


function UsersTable({ users, setSelectedUser, setShowDeletePopup }) {
  const [selectedUsers, setSelectedUsers] = useState([]);

   
  const handleSelectUser = (user) => {
    if (selectedUsers.includes(user)) {
      setSelectedUsers(selectedUsers.filter(u => u !== user));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

 

  const handleExport = async () => {
    const csv = await exportUsersToCSV(selectedUsers);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'users.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div>
<div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop:'-54px'}}>
     <button onClick={handleExport} disabled={selectedUsers.length === 0}>Export</button>
     </div>
         
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.email}>
              <td><input type="checkbox" onChange={() => handleSelectUser(user)} /></td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => {
                  setSelectedUser(user);
                  setShowDeletePopup(true);
                }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> 
     </div>
  );
}

export default UsersTable;
