import { Button } from "@material-ui/core";
import { useState } from "react";
import Upload from "../../Upload/upload";
import Attachment from "../Attachment/Attachment";
import FileList from "../fileList/fileList";
import "./filePicker.css";
import axios from "axios";
import React from "react";

export default function FilePicker() {
  const [files, setFile] = useState([]);

  const handleChange = (e) => {
    setFile([...files, e.target.files[0]]);
  };

  const removeFiles = (name) => {
    const filess = files.filter((file) => file.name !== name);
    setFile(filess);
  };

  const handleUpload = () => {
    const data = new FormData();
    for (var x = 0; x < files.length; x++) {
      data.append("file", files[x]);
    }
    console.log(data);
    axios
      .post("http://localhost:5000/upload", data)
      .then((res) => {
        console.log("upload success");
      })
      .catch((err) => {
        console.log("upload fail");
      });
  };

  return (
    <div>
      <h3>Upload your Files</h3>
      <div className="buttonContainer">
        <Button variant="outlined" color="primary">
          Connect to Google Drive
        </Button>
        <Attachment handleChange={handleChange} />
      </div>

      <p>Selected Files...</p>
      <FileList files={files} removeFiles={removeFiles} />

      <Upload onUpload={handleUpload} />
    </div>
  );
}
