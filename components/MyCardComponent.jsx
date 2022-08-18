import { PlasmicComponent } from '@plasmicapp/loader-nextjs';

const MyCardComponent = ({
  className,
  headingContent = 'Default title provided when defining its function component prop parameters',
  paragraphContent = 'Default paragraph provided when defining its function component prop parameters',
  children
}) => {
  return (
    <div
      className={`${className} text-blue-600`}
    // style={{ color: 'blue' }}
    >
      <h1>{headingContent}</h1>
      <p className='text-red-600'>{paragraphContent}</p>
    </div>
  );
};

export { MyCardComponent };