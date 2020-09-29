import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert,InsertEmoticon,Mic } from "@material-ui/icons";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name </h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Haq</span>
          this is message chat
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className=" chat__message chat__reciever">
          <span className="chat__name">Haq</span>
          this is message chat
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
            <input type="text" placeholder="type a message" />
            <button type="submit">Send Message</button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
