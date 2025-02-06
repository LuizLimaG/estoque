import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		boxShadow: {
  			shadow: '0px 0px 12px 0px rgba(0,0,0,0.1)'
  		},
  		fontFamily: {
  			poppins: [
  				'var(--font-poppins)'
  			],
  			inter: [
  				'var(--font-inter)'
  			]
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
