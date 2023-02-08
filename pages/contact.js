import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/container.module.css'


export default function Contact() {
    return (
      <>
        <Layout>
        <div className={styles.container}>
          <Image
            src="/images/Imagen3.png"
            height={200} // Desired size with correct aspect ratio
            width={400} // Desired size with correct aspect ratio
            alt=""
          />
          <p className={styles.text1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin quam non iaculis ornare. Nam eget orci vel est lobortis mattis. Pellentesque a elementum turpis. Morbi euismod nisl vel varius sollicitudin. Proin vitae elementum turpis, et varius urna. Aenean ac consequat enim, sed laoreet elit. In eget erat hendrerit, commodo tellus id, euismod massa. Nulla varius volutpat augue facilisis aliquet. Praesent pretium volutpat purus, id dictum tortor tempor in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce vulputate sodales velit vel egestas.</p>
        </div>
          
        </Layout>
      </>
    )
  }