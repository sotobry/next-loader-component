const Paragraph = props => {
  const { className, content, numToDisplay, withDecimalPlaces } = props;

  // let dropShadowSize = '';

  // if (elevation === 'high') dropShadowSize = 'lg';
  // else if (elevation === 'medium') dropShadowSize = 'md';

  // const dropShadow = dropShadowSize && `drop-shadow-${dropShadowSize}`;
  return (
    <p className={`${className} text-blue-600 rounded`}>
      {content} hard-coded text
      {numToDisplay === 'one' && 1}
      {numToDisplay === 'two' && 2}
      {numToDisplay === 'three' && 3}
      {numToDisplay !== 'none' && withDecimalPlaces === 'yes' && '.00'}
      hard-coded text hard-coded text
    </p>
  );
};
export default Paragraph;