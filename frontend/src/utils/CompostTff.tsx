import { createTheme } from '@mui/material';
import CompostRegular from '../assets/fonts/Comspot-Regular.ttf';

export const theme = createTheme({
  typography: {
    fontFamily: 'Compost Regular'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
                font-fontFamily: 'Compost Regular';
                src: local('Compost Regular'), local('Compost-Regular'), url(${CompostRegular} format('ttf));
            },
        }
        `
    }
  }
});
