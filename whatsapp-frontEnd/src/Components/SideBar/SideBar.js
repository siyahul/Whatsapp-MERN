import React from 'react'
import './SideBar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import {Avatar,IconButton} from '@material-ui/core'
import SidebarChat from './SidebarChat/SidebarChat'

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="" />
                <div className="sidebar__header__right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chat">
                <SidebarChat />
            </div>
        </div>
    )
}

export default SideBar
