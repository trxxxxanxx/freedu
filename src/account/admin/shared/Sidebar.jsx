import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, IconButton, useTheme } from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import logo from '../../../data/img/logo.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import ClassRoundedIcon from '@mui/icons-material/ClassRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import { tokens } from "../../../theme";
import Topbar from './Topbar';
import { styles } from '../../../style';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  border: 'none',
  // padding: theme.spacing(0, 2), //sidebar padding
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  border: 'none',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  // padding: theme.spacing(0, 0), //logo padding
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export default function MiniDrawer() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const classes = styles(colors);

  const [selected, setSelected] = useState("Dashboard");
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [menuStates, setMenuStates] = React.useState({
    communicate: false,
    configurations: false,
    enrollment: false,
    account: false,
    financial: false,
    curriculum: false,
    reports: false,
  });

  const handleMenuClick = (menu) => {
    setMenuStates((prev) => ({
      ...Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === menu ? !prev[key] : false;
        return acc;
      }, {}),
    }));
  };

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />

      <AppBar position="fixed" open={open} style={{ backgroundColor: colors.freeduAccent[1200],boxShadow: 'none'}}>
        <Toolbar style={{ backgroundColor: colors.freeduAccent[1200], boxShadow: 'none'}}>
          <IconButton
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              backgroundColor: colors.freeduAccent[100],
              borderRadius: 0,
              px: 2.8,
              py: 3,
              ml: '-24px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box flexGrow={1}>
            <Topbar />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>

        <DrawerHeader>
          <Box display="flex" padding= '20px'>
            <img src={logo} logo="icon" style={{ width: '100%', height: 'auto', }} />
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <MenuIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>

        <List>
          
          <ListItemButton onClick={() => handleMenuClick('dashboard')} to="/admin/dashboard">
            <ListItemIcon> <DashboardIcon /> </ListItemIcon>
            <ListItemText primary="Dashboard"/>
          </ListItemButton>

          
          <ListItemButton onClick={() => handleMenuClick('communicate')}>
            <ListItemIcon> <QuestionAnswerRoundedIcon /> </ListItemIcon>
            <ListItemText primary="Communicate" />
          </ListItemButton>

          <Collapse in={menuStates.communicate} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} to="/admin/communicate/school-news"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ListItemText primary="School News" /> </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} to="/admin/communicate/smartsend-pro"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ListItemText primary="SmartSend Pro" /></ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => handleMenuClick('configurations')}>
            <ListItemIcon> <WidgetsRoundedIcon /> </ListItemIcon>
            <ListItemText primary="Configurations" />
          </ListItemButton>

          <Collapse in={menuStates.configurations} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} to="/admin/configurations/school-year"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ListItemText primary="School Year" /> </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} to="/admin/configurations/school-profile"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ListItemText primary="School Profile" /> </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} to="/admin/configurations/category-levels"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ListItemText primary="Category Levels" /> </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} to="/admin/configurations/levels"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ListItemText primary="Levels" /> </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => handleMenuClick('enrollment')}>
            <ListItemIcon> <AccountBalanceRoundedIcon /> </ListItemIcon>
            <ListItemText primary="Enrollment" />
          </ListItemButton>

          <Collapse in={menuStates.enrollment} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} to="/admin/enrollment/import"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ListItemText primary="Import" /> </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} to="/admin/enrollment/reports"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ListItemText primary="Reports" /> </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} to="/admin/enrollment/promote"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ListItemText primary="Promote" /> </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} to="/admin/enrollment/prospects"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ListItemText primary="Prospects" /> </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => handleMenuClick('account')}>
            <ListItemIcon> <PeopleRoundedIcon /> </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItemButton>

          <Collapse in={menuStates.account} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} to="/admin/account/teacher"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ListItemText primary="Teacher" /> </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} to="/admin/account/student"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ListItemText primary="Student" /> </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} to="/admin/account/parent"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ListItemText primary="Parent" /> </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => handleMenuClick('financial')}>
            <ListItemIcon> <AccountBalanceWalletRoundedIcon /> </ListItemIcon>
            <ListItemText primary="Financial" />
          </ListItemButton>

          <Collapse in={menuStates.financial} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} to="/admin/financial/ledger"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ListItemText primary="Ledger" /> </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} to="/admin/financial/contract"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ListItemText primary="Contracts" /> </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} to="/admin/financial/payments"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ListItemText primary="Payments" /> </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} to="/admin/financial/reports"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ListItemText primary="Reports" /> </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => handleMenuClick('curriculum')}>
            <ListItemIcon> <ClassRoundedIcon /> </ListItemIcon>
            <ListItemText primary="Curriculum" />
          </ListItemButton>

          <Collapse in={menuStates.curriculum} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} to="/admin/curriculum/library"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ListItemText primary="Library" /> </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} to="/admin/curriculum/subject"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ListItemText primary="Subject" /> </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => handleMenuClick('reports')}>
            <ListItemIcon> <AssessmentRoundedIcon /> </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>

          <Collapse in={menuStates.reports} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} to="/admin/reports/administrator"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ListItemText primary="Administrator" /> </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} to="/admin/reports/teacher"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <ListItemText primary="Teacher" /> </ListItemButton>
            </List>
          </Collapse>

        </List>

      </Drawer>

    </Box>
  );
}