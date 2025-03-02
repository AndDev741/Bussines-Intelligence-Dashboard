import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

export default function Sidebar(){
    const [openSidebar, setOpenSidebar] = useState(false);
    const pages = [
        {name: 'Dashboard', link: '/dashboard', Icon: SpaceDashboardIcon},
        {name: 'Perfil', link: '/perfil', Icon: AccountCircleIcon},
        {name: 'Exit', link: '/', Icon: ExitToAppIcon}
    ]
    return(
        <>
            <IconButton onClick={() => setOpenSidebar(true)}
            sx={{display: {sm: 'none'}}}
            >
                <Menu/>
            </IconButton>

            {/*For Small Screens */}
            <Drawer
            variant="temporary"
            open={openSidebar}
            onClose={() => setOpenSidebar(false)}
            sx={{
                "& .MuiDrawer-paper": { width: 250 },
              }}
            >
                <Toolbar>
                    <Typography variant="h6">
                        Bussines Intelligence
                    </Typography>
                </Toolbar>
                <Divider/>
                <List>
                    {pages.map(page => (
                        <Link to={page.link}
                        key={page.name}
                        style={{textDecoration: 'none', color: 'black'}}>
                            <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 2 }}
                            >
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <page.Icon />
                                        </ListItemIcon>
                                        <ListItemText primary={page.name} />
                                    </ListItemButton>
                                </ListItem>
                            </motion.div>
                        </Link>
                    ))}
                </List>
            </Drawer>

            {/* For Big screens */}
            <Drawer 
                sx={{
                    display: { xs: "none", sm: "block" },
                    "& .MuiDrawer-paper": { width: 250, boxSizing: "border-box" },
                  }}
                open
                variant="permanent"
                anchor="left"
            >
                <Toolbar>
                    <Typography variant="h6">
                        Bussines Intelligence
                    </Typography>
                </Toolbar>
                <Divider/>
                <List>
                {pages.map(page => (
                        <Link to={page.link}
                        key={page.name}
                        style={{textDecoration: 'none', color: 'black'}}>
                            <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            >
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <page.Icon />
                                        </ListItemIcon>
                                        <ListItemText primary={page.name} />
                                    </ListItemButton>
                                </ListItem>
                            </motion.div>
                        </Link>
                    ))}
                </List>
            </Drawer>
        </>
    )
}