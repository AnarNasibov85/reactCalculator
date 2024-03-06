import styles from './Button.module.css'; 

function Button({symbol,color,handleClick}) {
    const buttonStyle={
        backgroundColor:color
    }
  return <div onClick={()=>handleClick(symbol)} className={styles ['button-wrapper']} style={buttonStyle}>{symbol}</div>; 
}

export default Button;
