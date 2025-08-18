# Math Destroyer — Retro Space Shooter That Teaches Math

[![Releases](https://img.shields.io/badge/Release-download-blue?logo=github)](https://github.com/Bellarahma/math-destroyer/releases)

![Header GIF](https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif)

A retro-style arcade game that mixes fast-paced spaceship combat with on-screen math problems. Players pilot a ship, target enemy ships that display math questions, and shoot the correct answer. The game trains arithmetic skills while keeping the action intense and fun.

Badges
- [![framer-motion](https://img.shields.io/badge/framer--motion-v6-orange)]()
- [![GSAP](https://img.shields.io/badge/gsap-green)]()
- [![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E?logo=javascript&logoColor=black)]()
- [![Next.js](https://img.shields.io/badge/next.js-%23000000?logo=next.js&logoColor=white)]()
- [![TypeScript](https://img.shields.io/badge/typescript-%23007ACC?logo=typescript&logoColor=white)]()
- [![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC?logo=tailwindcss&logoColor=white)]()
- [![retro](https://img.shields.io/badge/style-retro-purple)]()
- [![web-game](https://img.shields.io/badge/web--game-ready-blue)]()
- [![webapp](https://img.shields.io/badge/webapp-%23e34c26)]()

Screenshots
- Main arcade view:  
  ![Arcade screenshot](https://upload.wikimedia.org/wikipedia/commons/3/3b/Retro_game_screenshot.png)
- Math target overlay:  
  ![Math target](https://upload.wikimedia.org/wikipedia/commons/8/8a/Space_Invaders_screenshot.png)

Key features
- Fast-paced shooter mechanics with precise controls.
- Math problems appear on enemy ships. Shoot the ship that shows the correct answer.
- Multiple math modes: addition, subtraction, multiplication, division, mixed.
- Difficulty scales with performance: enemies move faster and answers include larger numbers.
- Power-ups that change gameplay and math rules: double points, slow time, freeze enemies, hint reveal.
- Local high-scores and progress tracking.
- Built with Next.js, TypeScript, Tailwind CSS, framer-motion, and GSAP for smooth animation.
- Responsive layout for desktop and tablet. Keyboard and gamepad support.

How it plays
- Each enemy ship shows a number or expression on its hull.
- The problem appears at the top or center of the screen.
- You aim and fire at the ship whose label matches the correct answer.
- Hitting the correct ship grants points and may spawn a power-up.
- Hitting a wrong ship costs points or reduces ship health.
- Complete waves to unlock new levels and math modes.

Gameplay modes
- Arcade: Classic wave-based play with escalating difficulty.
- Time Attack: Score as many correct hits in 60 or 120 seconds.
- Practice: Set problem type and range. No damage on mistakes. Ideal for study.
- Challenge: Randomized mixed-mode with modifiers every 30 seconds.
- Two-player local mode: Split-screen cooperative or competitive.

Controls
- Desktop
  - Move: Arrow keys or WASD
  - Shoot: Space bar or left Ctrl
  - Special/Use power-up: E
  - Pause: P
- Gamepad
  - Left stick: Move
  - A / primary: Fire
  - B / secondary: Use power-up
  - Start: Pause
- Touch (mobile / tablet)
  - On-screen joystick for movement.
  - Tap to shoot.
  - Hold for charged shots.

Scoring and progression
- Correct hit: +100 points base.
- Streak multiplier: Increases every 3 correct hits.
- Fast answer bonus: Extra points when you hit the correct ship within a short window.
- Wrong hit: -50 points or lose a life, depending on mode.
- Clear a wave: Bonus points and a chance for a rare power-up.
- Milestones unlock cosmetic ship skins and new soundtracks.

Assets and audio
- Chiptune soundtrack with retro synth layers.
- Laser, explosion, and pickup SFX with low-latency playback.
- Pixel art ships and backgrounds inspired by classic arcade cabinets.
- All assets live in the assets/ folder and include open-license credits.

Download and run (Releases)
[![Download Release](https://img.shields.io/badge/Download%20Latest%20Release-%23d73a49?style=for-the-badge&logo=github)](https://github.com/Bellarahma/math-destroyer/releases)

The releases page hosts packaged builds and installer files. Download the release asset that matches your platform (zip, tar, or installer). After download, run the file to install or launch the game. Look for filenames like:
- math-destroyer-vX.Y.Z.zip
- math-destroyer-windows-setup.exe
- math-destroyer-macos.dmg

If the link does not work for you, open the Releases section on the repo and pick the latest asset: https://github.com/Bellarahma/math-destroyer/releases

Install locally (developer)
- Clone the repo:
  git clone https://github.com/Bellarahma/math-destroyer.git
- Install dependencies:
  pnpm install
- Run development server:
  pnpm dev
- Build production:
  pnpm build
- Start production locally:
  pnpm start

Project structure
- /src — TypeScript source files, React components, hooks
- /public — Static assets and sprites
- /assets — Audio, images, tilemaps
- /pages — Next.js pages and API routes
- /styles — Tailwind and global styles
- /scripts — Build and helper scripts
- /tests — Unit and integration tests

Tech stack
- Next.js — SSR and routing
- React + TypeScript — UI and logic
- Tailwind CSS — Styling
- framer-motion + GSAP — Animation and physics-like effects
- Howler.js — Audio playback
- LocalStorage — Save and load progress
- Jest + Testing Library — Unit tests
- pnpm — Fast package management

Design goals
- Focus on short play sessions with clear learning feedback.
- Favor immediate feedback over long tutorials.
- Keep controls simple and consistent.
- Make math problems part of the action, not a separate mini-game.
- Support multiple play styles: learning, practice, and arcade.

Development notes
- Components remain small and focused. Split by feature and reuse hooks.
- Use TypeScript types for game state and physics values.
- Centralize configuration in /config to tune spawn rates, difficulty curves, and math ranges.
- Keep audio triggers low-latency and non-blocking.
- Use framer-motion for UI transitions and GSAP for enemy motion timelines.

Testing and quality
- Unit test core math modules and scoring logic.
- Run visual regression tests on key components.
- Test on modern Chromium and WebKit browsers.
- Profile animations and audio for smooth frame rates.

Accessibility
- High-contrast option for HUD and labels.
- Large-font mode for players with low vision.
- Keyboard-only play supported.
- Audio cues for correct and wrong answers.

Localization
- Text content externalized to /locales.
- Support for English and one additional language by default.
- Math uses universal symbols so gameplay remains language-agnostic.

Contributing
- Fork the repo and open a feature branch.
- Write unit tests for new logic.
- Keep pull requests focused and small.
- Document API changes in the PR description.
- Use semantic commit messages where possible.

Code of conduct
Respect other contributors. Keep discussions civil. Follow repository guidelines for PRs and issues.

Changelog and releases
- See the Releases page for packaged builds and release notes:
  https://github.com/Bellarahma/math-destroyer/releases
- Each release includes a changelog entry with new features, fixes, and asset updates.

Common issues
- Audio stutters on low-memory devices: Lower sample rates in settings.
- Keyboard conflicts: Rebind keys in Settings > Controls.
- Low FPS: Toggle low-detail mode in Settings > Graphics.

Credits
- Core game design and code: Bellarahma and contributors.
- Music: Chiptune tracks from open sources and in-house composers.
- Art: Pixel assets adapted from public domain sprites and original work.
- Special thanks to early playtesters and teachers who helped tune the math difficulty.

License
- MIT License. See LICENSE file.

Contact
- Create an issue for bugs or suggestions.
- Open pull requests for code or asset contributions.
- For direct contact, use GitHub profile and linked channels.

Play demo and downloads
- Hit the Releases page to download the packaged game and installers: https://github.com/Bellarahma/math-destroyer/releases

Enjoy aiming, solving, and leveling up your math skills.