import { Button, IconButton } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NoteIcon from '@mui/icons-material/Note';
import SidebarOption from "./SidebarOption";
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button className="sidebar__compose" startIcon={<EditIcon />}>
        Compose
      </Button>
      <SidebarOption Icon={InboxIcon} title="Inbox" number={102} selected={true} />
      <SidebarOption Icon={StarIcon} title="Starred" number={5} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={2} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={50} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={102} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={3} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={""} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
            <IconButton>
                <PersonIcon/>
            </IconButton>
            <IconButton>
                <DuoIcon/>
            </IconButton>
            <IconButton>
                <PhoneIcon/>
            </IconButton>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;
