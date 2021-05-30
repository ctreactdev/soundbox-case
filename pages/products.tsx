import styles from '../styles/Product.module.css'
import { Card } from '../src/_components/atoms'
import { Header } from '../src/_components/organisms'
import productsData from '../src/data/products.json'

export default function Products() {
  return (
    <div>
      <Header />
      <div className={styles.marketingBar}>Lorem ipsum dolor sit amet consectetur</div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {productsData.map((product) => {
            return (
              <Card
                title={product.title}
                img={product.img}
                price={product.price}
                stickerLabel={product.stickerLabel}
                subText={product.subText}
                url={product.url}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
