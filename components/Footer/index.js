import styles from './footer.module.scss';
import {Box, Grid} from '@mui/material';
import Image from 'next/image';
/**
 * footer returns
 * @return {React.Component} The footer.
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Grid container alignItems={'center'}>
        <Grid item xs={6}>
          <a
            href="https://github.com/mertvural/Job-Tracking"
            target='_blank' rel="noreferrer">
            <Box sx={{display: 'flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '14px'}}>
              <Image
                src="/icon-git.png"
                width={25}
                height={25}
                alt="Logo"
              />
          Repository
            </Box>
          </a>
        </Grid>
        <Grid item xs={6} sx={{fontSize: '14px', textAlign: 'right'}}>
          © 2023 Mert Vural
        </Grid>
      </Grid>
    </footer>
  );
}
