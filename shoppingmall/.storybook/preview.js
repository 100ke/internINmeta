import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
      //  date: /Date$/i,
       date: /Date$/,
      },
    },
  },
};

export default preview;