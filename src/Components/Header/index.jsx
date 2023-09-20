import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from "@material-ui/core/styles";
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
  const WhiteTextTypography = withStyles({
    root: {
      color: "#2563EB",
      fontWeight: '700',
      fontSize: 16,
      zIndex: 1,
      cursor: 'pointer'
    }
  })(Typography);
  return (
    <AppBar position="static" color={'white'}>
      <Toolbar style={{ alignItems: 'center' }} >
        <div style={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between', marginLeft: 400 }}>
          <WhiteTextTypography variant="h6" component="div" sx={{ marginRight: 1, color: '#2563EB', fontFamily: 'DM Sans' }}>
            Debts
          </WhiteTextTypography>
          <WhiteTextTypography variant="h6" component="div" sx={{ marginRight: 1, color: '#2563EB' }}>
            Projects
          </WhiteTextTypography>
          <WhiteTextTypography variant="h6" component="div" sx={{ marginRight: 1, color: '#2563EB' }}>
            Governance
          </WhiteTextTypography>
          <WhiteTextTypography variant="h6" component="div" sx={{ marginRight: 1, color: '#2563EB' }}>
            Internal Documents
          </WhiteTextTypography>
          {/* <IconButton color="inherit" aria-label="Notifications">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Profile">
            <AccountCircleIcon />
          </IconButton> */}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
