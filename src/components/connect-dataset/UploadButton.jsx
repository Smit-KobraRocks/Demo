import React, { useRef } from 'react';

const UploadButton = ({ onUpload }) => {
  const inputRef = useRef(null);

  const handleTriggerClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      onUpload(file);
    }
    // Allow the same file to be uploaded consecutively by resetting the input
    if (event.target.value) {
      event.target.value = '';
    }
  };

  return (
    <div className="upload-button">
      <button type="button" className="upload-button__trigger" onClick={handleTriggerClick}>
        + Upload dataset
      </button>
      <input
        ref={inputRef}
        className="sr-only"
        type="file"
        accept=".csv,.xlsx,.xls,.pdf"
        onChange={handleFileChange}
      />
      <span className="upload-button__hint">CSV, XLSX, or PDF</span>
    </div>
  );
};

export default UploadButton;
