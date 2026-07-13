/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Cairo"', 'system-ui', 'sans-serif'],
        display: ['"Cairo"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // ذهب خالص ملتمع وساطع (Pure 24K Gold)
      gold: {
  50: "#FFFDF8",
  100: "#FDF7E8",
  200: "#F6E6B5",
  300: "#E8CF7A",
  400: "#D9B84D",
  500: "#C9A227", // الذهبي الأساسي
  600: "#B58E1B", // الذهبي الغامق (الأزرار)
  700: "#9A7714",
  800: "#7A5F10",
  900: "#5E480B",
},
        // ذهب داكن ملكي/زيتوني معتق (Dark Royal Gold) - خالي تماماً من درجات البني
        darkGold: {
          50: '#FDFCE6',
          100: '#FAF7B3',
          200: '#F2EC66',
          300: '#E5DC22',
          400: '#CDD100', 
          500: '#B1B300', // ذهب داكن يميل للبريق الزيتوني الملكي القديم
          600: '#949600',
          700: '#787A00',
          800: '#5D5E00',
          900: '#414200',
          950: '#262600', // درجة داكنة جداً عميقة وذهبية
        },
        // الخلفيات والنصوص الفاخرة (الأسود الحالك يبرز بريق الذهب بشكل ساحر)
        ink: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#1A1A1A', // أسود كربوني
          900: '#111111', 
          950: '#050505', // أسود ملكي غامق جداً يخلي الذهب "يشع"
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'whatsapp-pulse': 'whatsappPulse 2s ease-in-out infinite',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        whatsappPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.5)' },
          '50%': { boxShadow: '0 0 0 16px rgba(37, 211, 102, 0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'arabesque': "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23D4AF37' stroke-width='0.5' opacity='0.12'%3E%3Cpath d='M40 0 L80 40 L40 80 L0 40 Z'/%3E%3Cpath d='M40 10 L70 40 L40 70 L10 40 Z'/%3E%3Ccircle cx='40' cy='40' r='8'/%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
