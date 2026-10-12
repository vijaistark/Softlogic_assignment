const Product = () => {
  let isAvailable = false

  return (
    <h2>
      {isAvailable ? "Product In Stock" : "Out of Stock"}
    </h2>
  )
}

export default Product
