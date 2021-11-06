
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';

import SectionHeader from 'components/UI/SectionHeader';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const Roadmap = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
});
  
  return (
    <div id='roadmap' className={clsx(classes.root, className)} {...rest}>
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
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: theme.palette.text.hoverText }}>
                  Variety of specs
                  <br />
                </span>
                <span style={{ color: theme.palette.text.primary, fontSize: 18, fontWeight: 'normal', textAlign: 'center', lineHeight: 1.8 }}>
                  CryptoRigs consist of different components, each of which has its own rarity.
                  <br />
                  (First % for Ultra/Golden, Second % for Normal)
                  <br />
                  <br />
                </span>
              </div>
            }
            
            align={'center'}
            disableGutter
            titleVariant="h3"
          />
        </Grid>
        <Grid
            item
            container
            // alignItems="center"
            xs={6}
            md={4}
            data-aos={'fade-up'}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', borderRadius: '20px', border: '#cecfd7 solid 2px', margin: '10px', padding: '20px' }}>
              <div style={{ color: theme.palette.text.primary, textAlign: 'center' }}>
                <h1>CASE</h1>
                Big Tower<br />
                Mid Tower<br />
                Mini Tower<br />
              </div>
            </div>
        </Grid>

        <Grid
            item
            container
            // alignItems="center"
            xs={6}
            md={4}
            data-aos={'fade-up'}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', borderRadius: '20px', border: '#cecfd7 solid 2px', margin: '10px', padding: '20px' }}>
              <div style={{ color: theme.palette.text.primary, textAlign: 'center' }}>
                <h1>GPU</h1>
                RTX 3090<br />
                RTX 3080<br/>
                RTX 3070<br/>
                RTX 3060<br/>
                RX 6900-XT<br/>
                RX 6800-XT<br/>
                RX 6700-XT<br/>
                Radeon-VII<br/>
              </div>
            </div>
        </Grid>

        <Grid
            item
            container
            // alignItems="center"
            xs={6}
            md={4}
            data-aos={'fade-up'}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', borderRadius: '20px', border: '#cecfd7 solid 2px', margin: '10px', padding: '20px' }}>
              <div style={{ color: theme.palette.text.primary, textAlign: 'center' }}>
                <h1>CPU</h1>
                W-3375<br/>
                TR-3990X<br/>
                11900K<br/>
                11700K<br/>
                11600K<br/>
                11500<br/>
                5950X<br/>
                5900X<br/>
                5800X<br/>
                5600X<br/>
              </div>
            </div>
        </Grid>

        <Grid
            item
            container
            // alignItems="center"
            xs={6}
            md={4}
            data-aos={'fade-up'}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', borderRadius: '20px', border: '#cecfd7 solid 2px', margin: '10px', padding: '20px' }}>
              <div style={{ color: theme.palette.text.primary, textAlign: 'center' }}>
                <h1>RAM (16GB/32GB)</h1>
                5333 MHz<br/>
                4600 MHz<br/>
                3800 MHz<br/>
                3200 MHz<br/>
                2666 MHz<br/>
              </div>
            </div>
        </Grid>

        <Grid
            item
            container
            // alignItems="center"
            xs={6}
            md={4}
            data-aos={'fade-up'}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', borderRadius: '20px', border: '#cecfd7 solid 2px', margin: '10px', padding: '20px' }}>
              <div style={{ color: theme.palette.text.primary, textAlign: 'center' }}>
                <h1>PSU</h1>
                5000W<br/>
                800W<br/>
                500W<br/>
                300W<br/>
              </div>
            </div>
        </Grid>

        <Grid
            item
            container
            // alignItems="center"
            xs={6}
            md={4}
            data-aos={'fade-up'}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', borderRadius: '20px', border: '#cecfd7 solid 2px', margin: '10px', padding: '20px' }}>
              <div style={{ color: theme.palette.text.primary, textAlign: 'center' }}>
              <h1>DRIVE</h1>
              nVME<br/>
              SSD <br />
              HDD <br />
              Floppy 
              </div>
            </div>
        </Grid>
        
      </Grid>
    </div>
  );
};

Roadmap.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Roadmap;
