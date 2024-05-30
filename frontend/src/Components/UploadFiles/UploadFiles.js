// src/components/UploadFiles.js

import React, { useState } from 'react';
import axios from 'axios';
import './UploadFiles.css';

const UploadFiles = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUrl, setFileUrl] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', 'n2r9qvxu'); // Configura tu preset de subida en Cloudinary

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dmmnud7ix/upload`,
        formData
      );
      const uploadedUrl = response.data.secure_url; // Obtener el enlace directo al archivo
      setFileUrl(uploadedUrl);
      if (onUpload) {
        onUpload(uploadedUrl);
      }
    } catch (error) {
      console.error('Error uploading the file', error);
    }
  };

  return (
    <div className="upload-files">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {fileUrl && (
        <p>
          File uploaded: <a href={fileUrl} target="_blank" rel="noopener noreferrer">{fileUrl}</a>
        </p>
      )}
    </div>
  );
};

export default UploadFiles;
