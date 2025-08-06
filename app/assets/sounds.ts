import { Howl } from 'howler';

export const playBackgroundMusic = () => {
	const sound = new Howl({
		src: ['/sounds/background.mp3'],
		loop: true,
		volume: 0.3,
		html5: true,
	});

	// Play after user interaction to comply with autoplay policies
	const playOnInteraction = () => {
		sound.play();
		document.removeEventListener('click', playOnInteraction);
		document.removeEventListener('keydown', playOnInteraction);
	};

	document.addEventListener('click', playOnInteraction);
	document.addEventListener('keydown', playOnInteraction);
};

export const playLaserSound = () => {
	new Howl({
		src: ['/sounds/laser.mp3'],
		volume: 0.5,
	}).play();
};

export const playExplosionSound = () => {
	new Howl({
		src: ['/sounds/explosion.mp3'],
		volume: 0.7,
	}).play();
};

export const playVictorySound = () => {
	new Howl({
		src: ['/sounds/victory.mp3'],
		volume: 0.8,
	}).play();
};
