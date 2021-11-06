
import { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Image from 'components/UI/Image';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  main: {
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 0, 0, 0)
    },
    flexGrow: 1,
    minHeight: `calc(100vh - ${theme.custom.layout.topAppBarHeight + theme.custom.layout.footerHeight}px)`,
    width: '100%',
    padding: theme.spacing(0, 0)
  },
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

const Layout = ({ children, layout, account }) => {
  const classes = useStyles({});

  return (
    <>
      <div className={classes.root}>
        <div style={{margin: '50px 0 10px 100px', width: '300px'}}>
          <Image
            src="assets/images/small logo.png"
            alt="crypto rigs"
            className={classes.image}
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </div>
        {/* <TopAppBar layout={layout} /> */}
        <main className={classes.main}>
          {children}
        </main>
      </div>
    </>
  );
};

export default memo(Layout);