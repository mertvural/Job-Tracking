import Lists from '../Lists';
import Search from '../Search';
import styles from './list.module.scss';
/**
 * List area returns
 * @return {React.Component} The List.
 */
function List() {
  return (
    <section>
      <h3>Job List</h3>
      <div className="job-list-wrapper">
        <header className={styles.header}>
          <Search />
        </header>
        <main>
          <Lists />
        </main>
      </div>
    </section>
  );
}

export default List;
