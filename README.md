# MuslimBalance

A retro-styled Next.js application to track daily productivity in key aspects of Islamic life: Quran, Arabic, Dunya (worldly affairs), and Sport/Exercise.

![Muslim Balance Screenshot](https://via.placeholder.com/800x400.png?text=Muslim+Balance)

## Features

- Track daily progress in four aspects: Quran, Arabic, Dunya, and Sport/Exercise
- Set and monitor daily goals for each aspect
- Visually appealing retro design with nostalgic 80s/90s aesthetics
- Responsive layout for both desktop and mobile devices
- Streak tracking to encourage daily consistency
- Celebratory alerts upon completing all daily goals

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) for icons

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/fauzanlbs/muslimbalance.git
   cd islamic-productivity-app
   ```

2. Install dependencies:

   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

- Use the '+' and '-' buttons to increment or decrement your progress for each aspect.
- Set your daily goals by modifying the `goals` state in the `MuslimBalance` component.
- Your streak for each aspect will automatically update when you complete the daily goal.
- Receive a celebratory message when you complete all your daily goals.

## Customization

- Modify the `aspects` and `colors` arrays in the `MuslimBalance` component to change the tracked categories or color scheme.
- Adjust the styling in the Tailwind classes to fit your preferred aesthetic.
- Update the font in the `<style>` tag or in your global CSS file to change the overall look.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Font "Press Start 2P" by CodeMan38, available on [Google Fonts](https://fonts.google.com/specimen/Press+Start+2P)
- Icons provided by [Lucide](https://lucide.dev/)

---

Made with ❤️ and ☕ by Fauzan Lubis
