
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				portfolio: {
					primary: '#1E293B',
					secondary: '#64748B',
					accent: '#3B82F6',
					light: '#F8FAFC',
					dark: '#0F172A',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" }
				},
				"fade-out": {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" }
				},
				"slide-in-top": {
					"0%": { 
						transform: "translateY(-50px)",
						opacity: "0"
					},
					"100%": { 
						transform: "translateY(0)",
						opacity: "1"
					}
				},
				"slide-in-bottom": {
					"0%": { 
						transform: "translateY(50px)",
						opacity: "0"
					},
					"100%": { 
						transform: "translateY(0)",
						opacity: "1"
					}
				},
				"slide-in-left": {
					"0%": { 
						transform: "translateX(-50px)",
						opacity: "0"
					},
					"100%": { 
						transform: "translateX(0)",
						opacity: "1"
					}
				},
				"slide-in-right": {
					"0%": { 
						transform: "translateX(50px)",
						opacity: "0"
					},
					"100%": { 
						transform: "translateX(0)",
						opacity: "1"
					}
				},
				"zoom-in": {
					"0%": { 
						transform: "scale(0.9)",
						opacity: "0"
					},
					"100%": { 
						transform: "scale(1)",
						opacity: "1"
					}
				},
				"zoom-out": {
					"0%": { 
						transform: "scale(1.1)",
						opacity: "0"
					},
					"100%": { 
						transform: "scale(1)",
						opacity: "1"
					}
				},
				"flip": {
					"0%": { 
						transform: "perspective(400px) rotateX(90deg)",
						opacity: "0"
					},
					"40%": { 
						transform: "perspective(400px) rotateX(-10deg)",
					},
					"70%": { 
						transform: "perspective(400px) rotateX(10deg)",
					},
					"100%": { 
						transform: "perspective(400px) rotateX(0deg)",
						opacity: "1"
					}
				},
				"spin-in": {
					"0%": { 
						transform: "rotate(-200deg) scale(0)",
						opacity: "0"
					},
					"100%": { 
						transform: "rotate(0) scale(1)",
						opacity: "1"
					}
				},
				"float": {
					"0%, 100%": { 
						transform: "translateY(0)"
					},
					"50%": { 
						transform: "translateY(-10px)"
					},
				},
				"pulse-light": {
					"0%, 100%": { 
						opacity: "1"
					},
					"50%": { 
						opacity: "0.7"
					},
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.7s ease-in-out forwards",
				"fade-out": "fade-out 0.7s ease-in-out forwards",
				"slide-in-top": "slide-in-top 0.7s ease-out forwards",
				"slide-in-bottom": "slide-in-bottom 0.7s ease-out forwards",
				"slide-in-left": "slide-in-left 0.7s ease-out forwards",
				"slide-in-right": "slide-in-right 0.7s ease-out forwards",
				"zoom-in": "zoom-in 0.7s ease-out forwards",
				"zoom-out": "zoom-out 0.7s ease-out forwards",
				"flip": "flip 0.7s ease-out forwards",
				"spin-in": "spin-in 0.7s ease-out forwards",
				"float": "float 3s ease-in-out infinite",
				"pulse-light": "pulse-light 3s ease-in-out infinite"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
