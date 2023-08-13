import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
    width: 400px;
    padding: 15px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
};

button {
    margin: 0 10px;
    display: inline-block;
};


code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
};
`;