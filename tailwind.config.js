/** @type {import("tailwindcss").Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        //color settings
        colors: {
            red: {
                100: "",
                200: "",
                300: "",
                400: "#FE0000",
                500: "#4A0707D6",
            },
            white: {
                100: "#FFFFFF",
                200: "",
                300: "",
                400: "",
                500: "",
            },
            black: {
                100: "#808080",
                200: "#26282E",
                300: "",
                400: "",
                500: "#000000",
            },

            orange: {
                100: "",
                600:  "#fb923c",
            }
        },
        //  font settings
        // fontFamily:{
        // 	"bricolage":[ "Bricolage Grotesque", "sans-serif" ],
        // 	"barlow-semi-condensed":[ "Barlow Semi Condensed", "sans-serif" ],
        // },
        //breakpoints
        screenSize: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        extend: {},
    },
    plugins: [],
};
