const React = require("react");
// const TinaCMS = require("tinacms");

exports.wrapRootElement = ({ element }) => {
  /*window.tinacms = new TinaCMS.TinaCMS({
    enabled: undefined,
    sidebar: {
      hidden: process.env.NODE_ENV === "production",
      position: "displace",
    },
    toolbar: undefined,
  });
  return React.createElement(
    TinaCMS.TinaProvider,
    { cms: window.tinacms },
    element
  );*/
  return element;
};
