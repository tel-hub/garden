export const makeRetinaSrc = (url) => {
  const url2x = url.replace(/(\.\w+$)/, "@2x$1");
  const url3x = url.replace(/(\.\w+$)/, "@3x$1");

  return {src: url, srcSet: `${url2x} 2x, ${url3x} 3x`, loading: "lazy"};
};
