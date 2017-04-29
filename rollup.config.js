import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import uglify from "rollup-plugin-uglify";
import livereload from "rollup-plugin-livereload";
import filesize from "rollup-plugin-filesize";
import progress from "rollup-plugin-progress";

const NODE_ENV = process.env.NODE_ENV || "development";
const PROD     = (NODE_ENV === "production");
const WATCH    = (process.env.WATCH === "1" || false)

console.log("PROD : ", PROD);
console.log("WATCH: ", WATCH);
console.log();

export default {
    entry: "src/main.jsx",
    dest: "dist/main.bundle.js",
    format: "iife",
    sourceMap: PROD ? false : "inline",
    plugins: [
        progress(),
        resolve({
            jsnext: true,
            browser: true,
            main: true
        }),
        commonjs(),
        replace({ 
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV) 
        }),
        babel({
            babelrc: false,
            plugins: ["transform-react-jsx"],
            presets: ["es2015-rollup"]
        }),
        (PROD && uglify()),
        (WATCH && livereload()),
        (filesize()),
    ]
}