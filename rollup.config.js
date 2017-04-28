import babel from "rollup-plugin-babel";

export default {
    entry: "src/main.jsx",
    dest: "dist/main.bundle.js",
    format: "iife",
    plugins: [
        babel({
            babelrc: false,
            plugins: ["transform-react-jsx"],
            presets: ["es2015-rollup"]
        })
   ]
}