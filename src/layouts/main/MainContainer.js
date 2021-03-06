import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/styles/useTheme';

import { SidebarContainer, TopbarContainer } from './components';
import { FooterContainer } from '../';
import styles from './Styles';

const MainContainer = ({ children }) => {
  const classes = styles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div className={clsx({ [classes.root]: true, [classes.shiftContent]: isDesktop })}>
      <div>
        <TopbarContainer onSidebarOpen={handleSidebarOpen} />
        <SidebarContainer onClose={handleSidebarClose} open={shouldOpenSidebar} variant={isDesktop ? 'persistent' : 'temporary'} />
        <main className={classes.content}>{children}</main>
      </div>
      <FooterContainer />
    </div>
  );
};

MainContainer.propTypes = {
  children: PropTypes.node,
};

export default MainContainer;
