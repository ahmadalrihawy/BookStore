
import { useProduct } from "../Context/ProductContext"

import styles from "../components/Products/Products.module.css"
import SectionHeading from "../components/SectionHeading"
import AllProduct from "./Allproduct"
function AllProducts() {
  const {fullData} = useProduct()
  return (
    <div className={styles.preview}>
      {<SectionHeading title="CHAPTERS PREVIEW" desc="Read some chapter free" />}
      <div className={styles.container}>
        {fullData.map((books) => (
          <AllProduct bookObj={books} key={books.id} />
        ))}
      </div>
    </div>
  )
}

export default AllProducts
