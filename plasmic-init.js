import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import ProductCard from './components/ProductCard';
import { Slider } from 'antd';
import Paragraph from './components/Paragraph';
import 'antd/dist/antd.css';
import { MyCardComponent } from './components/MyCardComponent';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "qTVhLa1ajhVLfDaqp5DH2h",
      token: "sGUImuyArGiYnGduAzrSHO43nxUc3y8UXntzIDH6emI5VUEYucG5q7E0UU3LWoW9Y1VA6J3Gy1GiQl8yg",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

PLASMIC.registerComponent(ProductCard, {
  name: 'ProductCard',
  props: {
    // Pass in arbitrary content in the visual editing canvas
    children: 'slot',

    // You can have any number of slots.
    header: 'slot',

    // Simple scalar props
    productId: 'string',
    darkMode: 'boolean',

    // Some props can take an enum of options
    elevation: {
      type: 'choice',
      options: ['high', 'medium', 'flat']
    },

    // Some props can take an arbitrary JSON object
    config: 'object',

    // Some props can have dynamic configurations
    headerColor: {
      type: 'choice',

      // Hide the 'color' prop if no header content
      hidden: props => !props.header,

      // Offer different choices depending on if darkMode is on
      options: props => props.darkMode ? ['black', 'blue'] : ['yellow', 'green']
    },
  },
});

PLASMIC.registerComponent(Slider, {
  name: 'Slider',
  props: {
    disabled: 'boolean',
    vertical: 'boolean'
  },
  defaultStyles: {
    width: '100%',
    maxWidth: '180px'
  }
});

PLASMIC.registerComponent(Paragraph, {
  name: 'Paragraph',
  props: {
    className: 'string',
    content: {
      type: 'string',
      defaultValue: 'Default Text'
    },
    numToDisplay: {
      type: 'choice',
      options: ['none', 'one', 'two', 'three']
    },
    withDecimalPlaces: {
      type: 'choice',
      hidden: props => props.numToDisplay === undefined || props.numToDisplay === 'none',
      options: ['yes', 'no']
    }
  },
  defaultStyles: {
    color: 'red'
  },
  // classNameProp: 'text-blue-600 rounded bg-black'
});

PLASMIC.registerComponent(MyCardComponent, {
  name: 'Card',
  props: {
    className: 'string',
    headingContent: 'string',
    paragraphContent: {
      type: 'string',
      defaultValue: 'Default paragraph provided when registering the component. It overwrites the value set when defining the function component prop parameters'
    },
    children: {
      type: 'slot',
      defaultValue: [{
        type: 'heading',
        tag: 'h1',
        value: 'Enter title here...'
      }, {
        type: 'text',
        tag: 'p',
        value: 'Enter some text here...'
      }]
    }
  },
  defaultStyles: {
    width: '400px'
  }
});