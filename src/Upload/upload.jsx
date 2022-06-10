import React from "react";
import { Button } from "@material-ui/core";

export default function Upload({ onUpload }) {
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={onUpload}>
        Upload
      </Button>
    </div>
  );
}
