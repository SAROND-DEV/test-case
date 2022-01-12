module.exports = {
    mode: "jit",
    purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                roboto: "Roboto, sans-serif",
                marvin: "Marvin, sans-serif",
            },

            zIndex: {
                "-1": "-1",
            },

            backgroundImage: {
                "asset-1": "url('/images/asset-1.png')",
                "asset-2": "url('/images/asset-2.png')",
                "asset-3": "url('/images/asset-3.png')",
                "asset-4": "url('/images/asset-4.png')",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
