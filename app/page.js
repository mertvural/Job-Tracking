import styles from './page.module.scss';
import Create from '@/components/Create';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import List from '@/components/List';
import {Container} from '@mui/material';
/**
 * Layout page returns
 * @return {React.Component} The layout page.
 */
export default function Home() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <Header />
        <main className={styles.main}>
          <Create />
          <List />
        </main>
        <Footer />
      </Container>
    </>
  );
}
