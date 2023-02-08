import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/container.module.css'

export default function About() {
  return (
    <>
      <Layout>
        <div className={styles.container}>
        <p className={styles.text1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin quam non iaculis ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin quam non iaculis ornare. Nam eget orci vel est lobortis mattis. Pellentesque a elementum turpis. Morbi euismod nisl vel varius sollicitudin. Proin vitae elementum turpis, et varius urna. </p>
          <Image
            className={styles.imagen}
            src="/images/Imagen2.png"
            height={200} // Desired size with correct aspect ratio
            width={200} // Desired size with correct aspect ratio
            alt=""
          />
          <p className={styles.text1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin quam non iaculis ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin quam non iaculis ornare. Nam eget orci vel est lobortis mattis. Pellentesque a elementum turpis. Morbi euismod nisl vel varius sollicitudin. Proin vitae elementum turpis, et varius urna. </p>
        </div>

      </Layout>
    </>
  )
}