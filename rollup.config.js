import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from 'rollup-plugin-replace'

export default {
    entry: "src/main.jsx",
    dest: "dist/main.bundle.js",
    format: "iife",
    plugins: [
        resolve({
            jsnext: true,
            browser: true,
            main: true
        }),
        commonjs(),
        replace({ 
            'process.env.NODE_ENV': JSON.stringify('development') 
        }),
        babel({
            babelrc: false,
            plugins: ["transform-react-jsx"],
            presets: ["es2015-rollup"]
        })
    ],
    sourceMap: false
}