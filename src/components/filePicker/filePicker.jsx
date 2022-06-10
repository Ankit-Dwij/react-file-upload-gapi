import { Button } from "@material-ui/core";
import { useState } from "react";
import Upload from "../../Upload/upload";
import Attachment from "../Attachment/Attachment";
import FileList from "../fileList/fileList";
import "./filePicker.css";
import axios from "axios";
import React from "react";
import useDrivePicker from "react-google-drive-picker/dist";
import { useEffect } from "react";

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
    const formdata = new FormData();
    for (var x = 0; x < files.length; x++) {
      formdata.append("file", files[x]);
    }
    console.log(formdata);
    axios
      .post("http://localhost:5000/upload", formdata)
      .then((res) => {
        console.log("upload success");
      })
      .catch((err) => {
        console.log("upload fail");
      });
  };

  const [openPicker, data, authResponse] = useDrivePicker();
  const handleOpenPicker = () => {
    openPicker({
      clientId:
        "228458505438-7d49eeh78509mtcu9ou9nurl0tj2ukiv.apps.googleusercontent.com",
      developerKey: "AIzaSyC4-8pX90qPn9dW3lwf1t7uurhfk-FM0GE",
      //token:"##youraccesstoken##",
      showUploadView: true,
      viewId: "DOCS",
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray,
    });
  };
  useEffect(() => {
    if (data) console.log(data);
  }, [data]);
  return (
    <div>
      <h3>Upload your Files</h3>
      <div className="buttonContainer">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => handleOpenPicker()}
        >
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
