import styles from './Card.module.css'

const Card =({title, subtitle, isActive})=> {
  return (
    <div className={styles.card}>
        <h2>{title}</h2>
          <p>{subtitle}</p>
            <button className={styles.button}
              style={{
                  backgroundColor: isActive ? '#FF6F61' : '#008080'
              }}>

              {isActive ? 'Active' : 'Inactive'}
        </button>
    </div>
  )
}

export default Card