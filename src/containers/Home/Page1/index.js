import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { ConfigProvider } from 'react-avatar';
import Image from 'components/UI/Image';
import SectionHeader from 'components/UI/SectionHeader';
import RadiusButton from 'components/RadiusButton';
import { AppContext } from 'contexts';


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
  }
}));

const Prolog = props => {
  const { setIsMintDialog } = useContext(AppContext);
  const { setIsSwapDialog, account, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const mintModal = () => {
    setIsMintDialog(true)
  };

  return (
      <div className={clsx(classes.root, className)} {...rest}>
        <Grid
          container
          justifyContent="space-between"
          spacing={4}
          direction={isMd ? 'row' : 'column-reverse'}
        >
          <Grid
            item
            container
            alignItems="flex-start"
            xs={12}
            md={6}
            data-aos={'fade-up'}
          >
            <SectionHeader
              title={
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: theme.palette.text.hoverText }}>
                    Get your digital rig!
                    <br />
                  </span>
                  <span style={{ color: theme.palette.text.primary, fontSize: 18, fontWeight: '300', textAlign: 'justify', lineHeight: 1.8 }}>
                    CryptoRigs are randomly generated images that display a digital computer with various properties. Become the owner of the legendary Ultra components!
                  </span>
                  <ConfigProvider
                    colors={['#FF2929', '#FF7A29', '#FAD02E', '#91FA49', '#36D8B7', '#3B8AFF', '#991EF9', '#FF5DCD']}>
                    <RadiusButton
                      onClick={mintModal}>
                      CLAIM
                    </RadiusButton>
                  </ConfigProvider>
                </div>
              }
              
              align={isMd ? "left" : 'center'}
              disableGutter
              titleVariant="h3"
            />
          </Grid>
          <Grid
            item
            container
            justifyContent="flex-start"
            alignItems="center"
            xs={12}
            md={6}
            data-aos={'fade-up'}
          >
            <Image
              src="assets/images/Pixelated.png"
              alt="Web3 Legal Engineering"
              className={classes.image}
              data-aos="fade-right"
              // data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
          </Grid>
        </Grid>
      </div>
  );
};

Prolog.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Prolog;
