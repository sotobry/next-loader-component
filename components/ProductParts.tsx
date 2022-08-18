import { createContext, useContext } from 'react';
import { useFetchProductData } from '../utils';

const ProductContext = createContext(undefined);

function ProductProvider({ slug, children }: { slug: string, children: ReactNode }) {
  const data = useFetchProductData(slug);
  return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>;
}

function ProductTitle({ className }: { className?: string }) {
  const product = useContext(ProductContext);

  // Use a default string in case this component is used outside of ProductContext
  const title = product?.title ?? 'Product Title';

  return <div className={className}>{title}</div>;
}

function ProductPrice({ className }: { className?: string }) {
  const product = useContext(ProductContext);
  const price = product?.price ?? 100;
  return <div {...{ className }}>{formatCurrency(price)}</div>
}