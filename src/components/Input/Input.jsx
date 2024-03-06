import styles from './Input.module.css';

function Input({text,result}) {
  return (
    <div className={styles['input-wrapper']}>
        <div className={styles.result}>
            <h1>{text}</h1>
           
        </div>
        <div className={styles.text}>
            <h3>{result}</h3>
            
        </div>
    </div>
  );
}

export default Input;
