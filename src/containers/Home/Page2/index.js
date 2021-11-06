import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';

// import Image from 'components/UI/Image';
import SectionHeader from 'components/UI/SectionHeader';

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
      marginBottom: 60
    },
  },
}));

const Customrig = props => {
  const { setIsSwapDialog, account, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
      defaultMatches: true,
  });
      
  return (
    <div id='Customrig' className={clsx(classes.root, className)} {...rest}>
      <Grid
          container
          justifyContent="space-between"
          spacing={0}
          direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
            item
            container
            // alignItems="center"
            xs={12}
            md={12}
            data-aos={'fade-up'}>
            <SectionHeader
              title={
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <span style={{ color: theme.palette.text.hoverText, textAlign: 'center' }}>
                    Why would I buy those NFTs?
                    <br />
                    <br />
                  </span>
                  <span style={{ color: theme.palette.text.secondary, fontSize: 18, fontWeight: '300', textAlign: 'center', lineHeight: 1.8 }}>
                    There will be a new NFT-Drop every year with new hardware. It is a fun project for people interested in computers.    
                    <br />
                    <br />
                  </span>
                </div>
              }
              
              align={isMd ? "left" : 'center'}
              disableGutter
              titleVariant="h4"
            />
        </Grid>
      </Grid>
    </div>
  );
};

Customrig.propTypes = {
    /**
     * External classes
     */
    className: PropTypes.string,
};

export default Customrig;
