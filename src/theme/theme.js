// theme.js
import { extendTheme } from '@chakra-ui/react';
// // Global style overrides
// import styles from "./styles"
// // Foundational style overrides
// import borders from "./foundations/borders"
// // Component style overrides
// import Button from "./components/button"
const overrides = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        // color: "white",
        fontFamily: "'PingFang TC', 微軟正黑體, sans-serif",
      },
      activeStyle: {
        color: 'red',
      },
    },
  },
  // styles,
  // borders,
  // Other foundational style overrides go here
  components: {
    Button: {
      baseStyle: {
        fontWeight: '300', // Normally, it is "semibold"
        borderRadius: 'full',
        letterSpacing: 2,
      },
      sizes: {
        lg: {
          h: 12,
          minW: 12,
          px: 30,
        },
      },
    },
    // Other components go here
  },
};

const theme = extendTheme(overrides);
export default theme;
