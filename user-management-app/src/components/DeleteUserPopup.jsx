import React from 'react';

function DeleteUserPopup({ onDelete, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Are you sure you want to delete this user?</h2>
        <div className="actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteUserPopup;
