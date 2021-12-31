import { nodeResolve } from "@rollup/plugin-node-resolve";

const scriptConfig = (name) => ({
  input: `dist/${name}.js`,
  output: {
    file: `bin/${name}.js`,
  },
  plugins: [nodeResolve()],
});

export default ["bootstrap", "index"].map(scriptConfig);
