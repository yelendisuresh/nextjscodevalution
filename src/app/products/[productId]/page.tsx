export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h2> Prodcut details {params.productId}</h2>;
}
