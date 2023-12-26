import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logo from '../../../data/img/logo.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import ClassRoundedIcon from '@mui/icons-material/ClassRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const handleMenuItemClick = (title) => {
    setSelected(title);
  };


  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.freeduAccent[100]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed} className="sidebar">
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.freeduAccent[500],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Box display="flex">
                  <img src={logo} logo="icon" style={{ width: '100%', height: 'auto' }} />
                </Box>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>


          <Box paddingLeft={isCollapsed ? undefined : "10%"}>

            <Item
              title="Dashboard"
              to="/admin/dashboard"
              icon={<DashboardIcon />}
              selected={selected}
              setSelected={setSelected}
              onClick={() => handleMenuItemClick("Dashboard")}
              style={{
                color: selected === "Dashboard" ? colors.freeduAccent[400] : colors.freeduAccent[300],
              }}
              />

            <SubMenu
              title="Communicate"
              icon={<QuestionAnswerRoundedIcon />}
              style={{
                color: colors.grey[100],
              }}
            >
              <MenuItem onClick={() => handleMenuItemClick("School News")}
                style={{
                  color:
                    selected === "School News" ? "#6870fa" : colors.grey[100],
                }}>
                <Link to="/admin/communicate/school-news">
                  <Typography>School News</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("School News")}
                style={{
                  color:
                    selected === "School News" ? "#6870fa" : colors.grey[100],
                }}>
                <Link to="/admin/communicate/smartsend-pro">
                  <Typography>SmartSend Pro</Typography>
                </Link>
              </MenuItem>
            </SubMenu>
            
            <SubMenu
              title="Configurations"
              icon={<WidgetsRoundedIcon />}
              style={{
                color: colors.grey[100],
              }}
            >
              <MenuItem onClick={() => handleMenuItemClick("School News")}
                style={{
                  color:
                    selected === "School News" ? "#6870fa" : colors.grey[100],
                }}>
                <Link to="/admin/configurations/school-year">
                  <Typography>School Year</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("School News")}
                style={{
                  color:
                    selected === "School News" ? "#6870fa" : colors.grey[100],
                }}>
                <Link to="/admin/configurations/school-profile">
                  <Typography>School Profile</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("School News")}
                style={{
                  color:
                    selected === "School News" ? "#6870fa" : colors.grey[100],
                }}>
                <Link to="/admin/configurations/category-levels">
                  <Typography>Category Levels</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("School News")}
                style={{
                  color:
                    selected === "School News" ? "#6870fa" : colors.grey[100],
                }}>
                <Link to="/admin/configurations/levels">
                  <Typography>Levels</Typography>
                </Link>
              </MenuItem>
            </SubMenu>

            <SubMenu
              title="Enrollment"
              icon={<AccountBalanceRoundedIcon />}
              style={{
                color: colors.grey[100],
              }}
            >
              <MenuItem onClick={() => handleMenuItemClick("School News")}
                style={{
                  color:
                    selected === "School News" ? "#6870fa" : colors.grey[100],
                }}>
                <Link to="/admin/enrollment/import">
                  <Typography>Import</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("School News")}
                style={{
                  color:
                    selected === "School News" ? "#6870fa" : colors.grey[100],
                }}>
                <Link to="/admin/enrollment/reports">
                  <Typography>Reports</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("School News")}
                style={{
                  color:
                    selected === "School News" ? "#6870fa" : colors.grey[100],
                }}>
                <Link to="/admin/enrollment/promote">
                  <Typography>Promote</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("School News")}
                style={{
                  color:
                    selected === "School News" ? "#6870fa" : colors.grey[100],
                }}>
                <Link to="/admin/enrollment/prospects">
                  <Typography>Prospects</Typography>
                </Link>
              </MenuItem>
            </SubMenu>
            
            <SubMenu
              title="Account"
              icon={<PeopleRoundedIcon />}
              style={{
                color: colors.grey[100],
              }}
            >
              <MenuItem onClick={() => handleMenuItemClick("School News")}
                style={{
                  color:
                    selected === "School News" ? "#6870fa" : colors.grey[100],
                }}>
                <Link to="/admin/account/student">
                  <Typography>Student</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("School News")}
                style={{
                  color:
                    selected === "School News" ? "#6870fa" : colors.grey[100],
                }}>
                <Link to="/admin/account/parent">
                  <Typography>Parent</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("School News")}
                style={{
                  color:
                    selected === "School News" ? "#6870fa" : colors.grey[100],
                }}>
                <Link to="/admin/account/teacher">
                  <Typography>Teacher</Typography>
                </Link>
              </MenuItem>
            </SubMenu>

            <SubMenu
              title="Financial"
              icon={<AccountBalanceWalletRoundedIcon />}
              style={{
                color: colors.grey[100],
              }}
            >
              <MenuItem onClick={() => handleMenuItemClick("School News")}
                style={{
                  color:
                    selected === "School News" ? "#6870fa" : colors.grey[100],
                }}>
                <Link to="/admin/financial/ledger">
                  <Typography>Ledger</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("School News")}
                style={{
                  color:
                    selected === "School News" ? "#6870fa" : colors.grey[100],
                }}>
                <Link to="/admin/financial/contract">
                  <Typography>Contract</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("School News")}
                style={{
                  color:
                    selected === "School News" ? "#6870fa" : colors.grey[100],
                }}>
                <Link to="/admin/inancial/payments">
                  <Typography>Payments</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("School News")}
                style={{
                  color:
                    selected === "School News" ? "#6870fa" : colors.grey[100],
                }}>
                <Link to="/admin/financial/reports">
                  <Typography>Reports</Typography>
                </Link>
              </MenuItem>
            </SubMenu>
            
            <SubMenu
              title="Curriculum"
              icon={<ClassRoundedIcon />}
              style={{
                color: colors.grey[100],
              }}
            >
              <MenuItem onClick={() => handleMenuItemClick("School News")}
                style={{
                  color:
                    selected === "School News" ? "#6870fa" : colors.grey[100],
                }}>
                <Link to="/admin/curriculum/library">
                  <Typography>Library</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("School News")}
                style={{
                  color:
                    selected === "School News" ? "#6870fa" : colors.grey[100],
                }}>
                <Link to="/admin/curriculum/subject">
                  <Typography>Subject</Typography>
                </Link>
              </MenuItem>
            </SubMenu>

            <SubMenu
              title="Reports"
              icon={<AssessmentRoundedIcon />}
              style={{
                color: colors.grey[100],
              }}
            >
              <MenuItem onClick={() => handleMenuItemClick("School News")}
                style={{
                  color:
                    selected === "School News" ? "#6870fa" : colors.grey[100],
                }}>
                <Link to="/admin/reports/administrator">
                  <Typography>Administrator</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("School News")}
                style={{
                  color:
                    selected === "School News" ? "#6870fa" : colors.grey[100],
                }}>
                <Link to="/admin/reports/teacher">
                  <Typography>Teacher</Typography>
                </Link>
              </MenuItem>
            </SubMenu>

          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;