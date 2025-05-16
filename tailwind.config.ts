import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'playfair': ['"Playfair Display"', 'serif'],
				'poppins': ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom light theme colors
				'primary-light': '#F5F7EE',
				'secondary-light': '#E8EDDA',
				'tertiary-light': '#D4DDB9',
				'highlight-light': '#B7CFBF',
				'highlight-dark': '#A0B8A9',
				'text-primary-light': '#2F554D',
				'text-secondary-light': '#40593D',
				'accent-blue-light': '#40593D',
				'accent-purple-light': '#617B5A',
				// Custom dark theme colors
				'primary-dark': '#1B2211',
				'secondary-dark': '#283618',
				'tertiary-dark': '#3A4A2A',
				'highlight-light-dark': '#4A5E39',
				'highlight-dark-dark': '#617B5A',
				'text-primary-dark': '#E8EDDA',
				'text-secondary-dark': '#B7CFBF',
				'accent-blue-dark': '#B7CFBF',
				'accent-purple-dark': '#A0B8A9',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '30px',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in-up': {
					from: { opacity: '0', transform: 'translateY(30px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out-down': {
					from: { opacity: '1', transform: 'translateY(0)' },
					to: { opacity: '0', transform: 'translateY(30px)' }
				},
				'fade-in-left': {
					from: { opacity: '0', transform: 'translateX(-30px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-right': {
					from: { opacity: '0', transform: 'translateX(30px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'slideInFromRight': {
					from: { right: '-100%', transform: 'translateY(-50%)', opacity: '0' },
					to: { right: '50%', transform: 'translate(50%, -50%)', opacity: '1' }
				},
				'slideOutToRight': {
					from: { right: '50%', transform: 'translate(50%, -50%)', opacity: '1' },
					to: { right: '-100%', transform: 'translateY(-50%)', opacity: '0' }
				},
				'zoom-in': {
					from: { opacity: '0', transform: 'scale(0.9)' },
					to: { opacity: '1', transform: 'scale(1)' }
				},
				'flip-in': {
					from: { opacity: '0', transform: 'perspective(400px) rotateY(15deg)' },
					to: { opacity: '1', transform: 'perspective(400px) rotateY(0)' }
				},
				'petal-animation': {
					'0%': { transform: 'scale(0.85) rotate(0deg)', opacity: '0.7' },
					'50%': { transform: 'scale(1) rotate(5deg)', opacity: '0.9' },
					'100%': { transform: 'scale(0.9) rotate(-5deg)', opacity: '0.8' }
				},
				'pulse-center': {
					'0%': { transform: 'scale(0.9)' },
					'100%': { transform: 'scale(1.1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
				'fade-out-down': 'fade-out-down 0.4s ease-in forwards',
				'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.6s ease-out forwards',
				'slideInFromRight': 'slideInFromRight 0.6s ease-out forwards',
				'slideOutToRight': 'slideOutToRight 0.6s ease-in forwards',
				'zoom-in': 'zoom-in 0.6s ease-out forwards',
				'flip-in': 'flip-in 0.6s ease-out forwards',
				'petal-animation': 'petal-animation 6s infinite alternate ease-in-out',
				'pulse-center': 'pulse-center 3s infinite alternate ease-in-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
