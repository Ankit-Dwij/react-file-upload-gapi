import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

export default function FileList({ files, removeFiles }) {
  return (
    <div>
      {files.map((file) => (
        <div className="fileitem">
          <p> {file.name} </p>
          <DeleteIcon onClick={() => removeFiles(file.name)} />
        </div>
      ))}
    </div>
  );
}
