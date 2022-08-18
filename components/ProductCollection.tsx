// One important use of code components is for fetching and using dynamic data from ayour own data store. Often, you will fetch a collection of something, and would like to repeat the slot content once for every element in the collection. For example, you might have fetched a list of products, and want to render something once per product.

// To do this, use the repeatedElement() function. This ensures and editing experience in Plasmic Studio where the user can select and make edits just the first replica of the slot contents.

import { repeatedElement } from '@plasmicapp/loader-nextjs';
import { ProductContext } from '../ProductContext.tsx';

function ProductCollection({
  collectionSlug,
  children
}: {
  collectionSlug?: string,
  children?: ReactNode
}) {
  const data = useFetchProductCollection(collectionSlug);
  return (<>
    {/* Repeat whatever is in the "children" slot, once for every product. */}
    {/* But wrap the slot content in a ProductContext.Provider, so that the slot content can look up what product it is for by reading from ProductContext */}
    {data?.productList.map((productData, i) => (
      <ProductContext.Provider value={productData} key={productData.id}>
        {repeatedElement(i, children)}
      </ProductContext.Provider>
    ))}
  </>);
}

// Since your code components are rendered on your host page, it will have access to whatever css or React contexts that exist on the host page. So if you code components require context to work, simply make sure they are provided when rendering PlasmicCanvasHost:
{
  <ThemeContext.Provider>
    <PlasmicCanvasHost />
  </ThemeContext.Provider>
}