import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --font-family-logo: 'Nunito', sans-serif;
  --font-family: 'Inter', 'Pretendard', sans-serif;

  --font-size-sm: calc(var(--font-size-md) - 2px);
  --font-size-md: 15px;
  --font-size-lg: calc(var(--font-size-md) + 2px);
  --font-size-xl: calc(var(--font-size-md) + 4px);;

  --color-black-0: #fff;
  --color-black-50: #fcfcfc;
  --color-black-100: #f5f5f5;
  --color-black-150: #efefef;
  /* --color-black-700: #444; */
  --color-black-700: #47505e;
  --color-black-750: #393E46;
  --color-black-780: #2c343f;
  --color-black-800: #222831;

  --color-beige-700: #dcaa87;
  --color-beige-800: #cd936a;

  --color-red-600: #C02739;
  --color-red-700: #A81E2E;

  --duration: 0.3s;
  --transition: var(--duration) ease;

  --line-h-sm: calc(var(--line-h-md) - .2);
  --line-h-md: 1.6;
  --line-h-lg: calc(var(--line-h-md) + .2);
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a:link,
a:visited,
a:hover,
a:active {
  color: inherit;
  text-decoration: none;
}

ol,
ul,
li {
  list-style: none;
}

button {
  color: inherit;
  font: inherit;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font: inherit;
}

body {
  color: var(--color-black-50);
  font-size: var(--font-size-md);
  font-family: var(--font-family);
  line-height: 1;
  background-color: var(--color-black-800);
}
`;

export default GlobalStyles;
