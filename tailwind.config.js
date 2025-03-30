/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        custom_img:"url('../public/wooden-table-and-blur-of-beauty-sunset-sky-and-mountains-as-background-free-photo.jpg')",
        sign_up_image:"url('../public/register-bg (1)-C-MNW3yv.jpg')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#775177",
        secondary:'#ADAEA6',
        signIn:"#818E98",
        product:"#132a13",
        productCard:"#cce3de"
      },
    },
  },
  plugins: [],
};
