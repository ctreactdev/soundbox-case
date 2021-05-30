import styles from '../styles/Home.module.css'
import { Card } from '../src/_components/atoms'

export default function Products() {
  return (
    <div className={styles.container}>

      <h1 >products</h1>
      <Card
        title={"box2"}
      />
    </div>
  )
}
