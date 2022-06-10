import { Button } from "@material-ui/core";
import { useState } from "react";
import Attachment from "../Attachment/Attachment";
import FileList from "../fileList/fileList";
import "./filePicker.css";

export default function FilePicker() {
  const [files, setFile] = useState([]);

  const handleChange = (e) => {
    setFile([...files, e.target.files[0]]);
  };

  const removeFiles = (name) => {
    const filess = files.filter((file) => file.name !== name);
    setFile(filess);
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

      <Button variant="outlined" color="primary">
        Upload
      </Button>
    </div>
  );
}
