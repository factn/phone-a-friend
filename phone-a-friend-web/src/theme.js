import _ from "lodash";

const color = {
  purple: "#150E60",
  white: "#FFF",
  pink: "#ffefef",
};

// utils to extract style
export const extractStyle = (props, path) => {
  const extract = _.get(props, path, {});
  const transform = _.reduce(
    extract,
    (result, value, key) => {
      return `${result} ${_.kebabCase(key)}: ${value};`;
    },
    ""
  );
  return transform;
};

export default {
  themeName: "world2",
  spacing: 12,
  color: color,
  palette: {
    primary: {
      main: color.purple,
    },
  },
  typography: {
    body1: {
      color: color.purple,
      fontFamily: "Open Sans, Ariomo, Arial, sans-serif",
      fontSize: "16px",
      lineHeight: "22px",
      color: color.purple,
    },
    h2: {
      fontFamily: "Ariomo, Arial, sans-serif",
      fontWeight: "bold",
      fontSize: "22px",
      lineHeight: "24px",
      color: color.purple,
    },
    h3: {
      fontFamily: "Ariomo, Arial, sans-serif",
      fontSize: "22px",
      color: color.purple,
    },
    h4: {
      fontFamily: "Ariomo, Arial, sans-serif",
      fontWeight: "bold",
      fontSize: "14px",
      lineHeight: "16px",
      textTransform: "uppercase",
      letterSpacing: "0.01em",
      color: color.purple,
    },
    h5: {
      fontFamily: "Ariomo, Arial, sans-serif",
      fontWeight: "bold",
      fontSize: "16px",
      lineHeight: "20px",
      color: color.purple,
    },
  },
};
