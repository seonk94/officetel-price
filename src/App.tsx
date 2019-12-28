import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Link } from "react-router-dom";
import AppBar from "../node_modules/@material-ui/core/AppBar";
import CssBaseline from "../node_modules/@material-ui/core/CssBaseline";
import Drawer from "../node_modules/@material-ui/core/Drawer";
import Hidden from "../node_modules/@material-ui/core/Hidden";
import IconButton from "../node_modules/@material-ui/core/IconButton";
import List from "../node_modules/@material-ui/core/List";
import ListItem from "../node_modules/@material-ui/core/ListItem";
import ListItemText from "../node_modules/@material-ui/core/ListItemText";
import HomeIcon from "../node_modules/@material-ui/icons/Home";
import Toolbar from "../node_modules/@material-ui/core/Toolbar";
import Typography from "../node_modules/@material-ui/core/Typography";
import { makeStyles, useTheme, Theme, createStyles } from "../node_modules/@material-ui/core/styles";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import bannerLogo from "./assets/logos/facebook_cover_photo_1.png";

const colorTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#393e46"
    },
    secondary: {
      main: "#56E7A5"
    }
  }
});

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
      },
      background: "#eee",
      borderBottom: "1px solid #495057"
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none"
      }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      background: "#393e46",
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      background: "#eee",
      height: "100vh"
    },
    logoImg: {
      width: "100%",
      height: "64px"
    },
    linkBtn: {
      textDecoration: "none",
      color: "#fff"
    }
  })
);

interface ResponsiveDrawerProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container?: Element;
}
export default function App(props: ResponsiveDrawerProps) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const routerList = [{ url: "/", text: "메인화면" }];

  const drawer = (
    <div>
      <div className={classes.toolbar}>{/* <img src={bannerLogo} alt="logo" className={classes.logoImg} /> */}</div>
      <List>
        {routerList.map((list, index) => (
          <Link to={list.url} className={classes.linkBtn}>
            <ListItem button key={list.url}>
              <ListItemText primary={list.text}></ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={colorTheme}>
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" elevation={0} className={classes.appBar}>
            <Toolbar>
              <IconButton color="primary" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} className={classes.menuButton}>
                <HomeIcon />
              </IconButton>
              <Typography variant="h6" noWrap></Typography>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === "rtl" ? "right" : "left"}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper
                }}
                ModalProps={{
                  keepMounted: true // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Router></Router>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
/* 
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ResponsiveDrawer/>
      </div>
    </ThemeProvider>
  );
} */
