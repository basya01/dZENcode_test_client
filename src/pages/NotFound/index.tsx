import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <p className={styles.notFound__cat}>😿</p>
      <div className="text-center">
        <h1 className="h1">404</h1>
        <p className="h4">Страница не найдена</p>
      </div>
    </div>
  );
};

export default NotFound;
