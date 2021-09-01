import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -mt-48 md:-mt-48 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image, rating }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price * 68}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        ))}
      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image, rating }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price * 68}
              description={description}
              category={category}
              image={image}
              rating={rating}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image, rating }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price * 68}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        ))}
      {products.map(
        ({ id, title, price, description, category, image, rating }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price * 68}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        )
      )}
      <div className="md:col-span-2">
        {products
          .slice(8, 9)
          .map(({ id, title, price, description, category, image, rating }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price * 68}
              description={description}
              category={category}
              image={image}
              rating={rating}
            />
          ))}
      </div>
      {products.map(
        ({ id, title, price, description, category, image, rating }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price * 68}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        )
      )}
    </div>
  );
}

export default ProductFeed;
