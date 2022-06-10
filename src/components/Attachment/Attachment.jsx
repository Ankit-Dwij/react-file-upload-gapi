import React, { useRef } from "react";
import AttachmentIcon from "@material-ui/icons/Attachment";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import ComputerIcon from "@material-ui/icons/Computer";
import { Button } from "@material-ui/core";

export default function Attachment({ handleChange }) {
  const hiddenFileInput = useRef(null);
  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  return (
    <div>
      <span className="attachment">
        <Button variant="outlined" color="primary">
          <AttachmentIcon />
          Add Attachment
        </Button>
        <div className="options">
          <span className="drop" onClick={handleClick}>
            <ComputerIcon />
            Browse this Computer
            <input
              type="file"
              ref={hiddenFileInput}
              style={{ display: "none" }}
              onChange={handleChange}
            ></input>
          </span>
          <span className="drop">
            <CloudQueueIcon />
            Browse Google Drive
          </span>
        </div>
      </span>
    </div>
  );
}
