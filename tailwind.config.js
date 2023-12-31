/** @type {import('tailwindcss').Config} */

huePrim = 218;
var sScr = "360";
var lScr = "1080";
function TypoSize(minFontSize, maxFontSize, n = 1) {
  size = `(${minFontSize}px + (${maxFontSize} - ${minFontSize}) * (100vw - ${sScr}px) / (${lScr} - ${sScr}))`;
  return `calc(${n} * ${size})`;
}

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        vw: "5vw",
      },
      colors: {
        prim: `hsla(${huePrim}, 80%, 40%, 1)`,
        primDark: `hsla(${huePrim}, 80%, 20%, 1)`,

        prim2: `hsla(${huePrim}, 80%, 60%, 1)`,
        prim3: `hsla(${huePrim}, 80%, 80%, 1)`,

        accent: `hsla(${huePrim - 150}, 89%, 55%, 1)`,
        dev: `hsla(45,100%,50%,.7)`,

        w: `hsla(0,0%,100%,1)`,
        gray1: `hsla(0,0%,90%,1)`,
        gray2: `hsla(0,0%,75%,1)`,
        gray3: `hsla(0,0%,60%,1)`,
        gray4: `hsla(0,0%,45%,1)`,
        gray5: `hsla(0,0%,30%,1)`,
        key: `hsla(0,0%,15%,1)`,

        link: `hsla(185, 100%, 50%, 1)`,
        linkb: `hsla(200, 80%, 40%, 1)`,
      },
    },

    fontSize: {
      Tlg: TypoSize(30, 40),
      TmdPlus: TypoSize(26, 32),
      Tmd: TypoSize(18, 26),
      Tnm: TypoSize(12, 18),
      Tsm: TypoSize(12, 14),

      xxl: TypoSize(30, 40),
      xl: TypoSize(26, 32),
      l: TypoSize(18, 26),
      m: TypoSize(12, 18),
      sm: TypoSize(12, 14),
    },
  },
  plugins: [],
};
