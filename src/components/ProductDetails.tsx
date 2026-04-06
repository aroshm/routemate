import { useParams } from "react-router";

const ProductDetails = () => {
  const params = useParams();
  console.log(params.id);

  return <div className="component">Product: {params.id}</div>;
};

export default ProductDetails;
