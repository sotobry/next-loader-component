import { useContext } from 'react';
import { PlasmicCanvasContext } from '@plasmicapp/loader-nextjs';
// import { SomeComponent } from './SomeComponent';

function MyComponent({ className }: { className?: string }) {
  return (
    <div className={className}>
      {/* ...other stuff goes here */}
    </div>
  );
}
function MyComponentWrapper(props: { showAnimation: boolean }) {
  const inEditor = useContext(PlasmicCanvasContext);
  return (
    <MyComponent animated={!inEditor || props.showAnimation} />
  );
}
// Your code components can communicate with each other through React Contexts.
// One common pattern is for one code component to fetch and provide some data via a React Context, and for other code components to read from that Context and display a piece of that data.

