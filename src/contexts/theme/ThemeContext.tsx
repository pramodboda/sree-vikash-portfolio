import React, {
  createContext,
  useState,
  ReactNode,
  useMemo,
  useCallback,
} from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { deepPurple, blueGrey } from "@mui/material/colors";

// Define the shape of the context's data
interface ThemeContextProps {
  primaryColor: string;
  primaryFont: string;
  setPrimaryColor: (color: string) => void;
  setPrimaryFont: (font: string) => void;
}

// Create the context with default values
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// ThemeProvider component to provide context to children
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [primaryColor, setPrimaryColor] = useState<string>(deepPurple[500]);
  const [primaryFont, setPrimaryFont] = useState<string>(
    "Plus Jakarta Sans, Roboto, Helvetica, Arial, sans-serif"
  );

  const handleSetPrimaryColor = useCallback((color: string) => {
    setPrimaryColor(color);
  }, []);

  const handleSetPrimaryFont = useCallback((font: string) => {
    setPrimaryFont(font);
  }, []);

  // Global overrides
  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif', // optional: your preferred UI font
          h1: {
            fontSize: "3rem", // 48px
            fontWeight: 700,
            lineHeight: 1.2,
          },
          h2: {
            fontSize: "2.25rem", // 36px
            fontWeight: 600,
            lineHeight: 1.3,
          },
          h3: {
            fontSize: "1.75rem", // 28px
            fontWeight: 600,
          },
          h4: {
            fontSize: "1.5rem", // 24px
          },
          h5: {
            fontSize: "1.25rem", // 20px
          },
          h6: {
            fontSize: "1rem", // 16px
          },
          subtitle1: {
            fontSize: "0.875rem", // 14px
          },
          subtitle2: {
            fontSize: "0.75rem", // 12px
          },
          body1: {
            fontSize: "1rem", // 16px
          },
          body2: {
            fontSize: "0.875rem", // 14px
          },
          button: {
            fontSize: "0.875rem", // 14px
            fontWeight: 500,
            textTransform: "none", // optional: if you don’t want uppercase
          },
          caption: {
            fontSize: "0.75rem", // 12px
          },
          overline: {
            fontSize: "0.625rem", // 10px
            textTransform: "uppercase",
          },
        },
        palette: {
          primary: {
            main: primaryColor, // Dynamically change the primary color
          },
        },
        components: {
          // Name of the component
          // MuiTypography: {
          //   styleOverrides: {
          //     root: {
          //       fontSize: "1rem", // Ensures all Typography components default to 14px
          //     },
          //   },
          // },
          MuiButtonBase: {
            defaultProps: {
              // The props to change the default for.
              disableRipple: true, // No more ripple, on the whole application 💣!
            },
          },

          MuiBackdrop: {
            styleOverrides: {
              root: {
                // backgroundColor: "transparent", // Remove backdrop background color
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                boxShadow: "none", // Remove shadow on focus
                outline: "none", // Remove outline on focus
                "&:hover": {
                  boxShadow: "none", // Remove shadow on focus
                  outline: "none", // Remove outline on focus
                },
                "&:focus": {
                  boxShadow: "none", // Remove shadow on focus
                  outline: "none", // Remove outline on focus
                },
                "&:active": {
                  boxShadow: "none", // Remove shadow when button is active
                },
              },
            },
          },
          MuiDrawer: {
            styleOverrides: {
              paper: {
                // boxShadow:
                //   // "0px 4px 16px rgba(0, 0, 0, 0.2), 0px 8px 32px rgba(0, 0, 0, 0.12)", // Beautiful shadow
                //   "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                // You can adjust the shadow for a more beautiful or custom effect
              },
            },
          },
        },
      }),
    [primaryColor, primaryFont]
  );

  return (
    <ThemeContext.Provider
      value={{
        primaryColor,
        setPrimaryColor: handleSetPrimaryColor,
        primaryFont,
        setPrimaryFont: handleSetPrimaryFont,
      }}
    >
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
