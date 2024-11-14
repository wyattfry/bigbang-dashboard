import React from "react";

// components/UninstallModal.js
export default function UninstallModal({ onClose, onConfirm }) {
    return (
        <div className="uninstall-modal">
            <p>Are you sure you want to uninstall this application?</p>
            <button onClick={onConfirm}>Uninstall</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    );
}
