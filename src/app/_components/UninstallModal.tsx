interface UninstallModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

export function UninstallModal({ onClose, onConfirm }: UninstallModalProps) {
  return (
      <div className="uninstall-modal">
          <p>Are you sure you want to uninstall this package?</p>
          <button onClick={onConfirm}>Uninstall</button>
          <button onClick={onClose}>Cancel</button>
      </div>
  );
}
