function plugin(args, opts) {
  console.log({ args, opts });
  const f = ({ addVariant }) => {
    addVariant(
      "dark",
      "&:where([data-mantine-color-scheme='dark'], [data-mantine-color-scheme='dark'] *)",
    );
  };
  return f;
}

plugin.__isOptionsFunction = true;

export default plugin;
