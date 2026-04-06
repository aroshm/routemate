import { useParams } from "react-router";

const ProductDetails = () => {
  const params = useParams();
  console.log(params.id);

  return (
    <main>
      <div className="component">Product: {params.id}</div>
    </main>
  );
};

export default ProductDetails;
