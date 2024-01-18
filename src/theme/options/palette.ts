declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    yellow: string;
  }

  interface Palette {
    support: {
      main: string;
      light: string;
      dark: string;
      darker: string;
    };
  }
}

const palette = {
  primary: {
    main: "#fff",
    contrastText: "#fff",
  },
  error: {
    main: "#f75851d6",
    contrastText: "#fff",
  },
  mode: "dark" as "dark" | "light",
};

export default palette;
