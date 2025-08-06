/* eslint-disable @typescript-eslint/no-unused-vars */
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface MathProblem {
	equation: string;
	answer: number;
	options: number[];
}

export const generateMathProblem = (difficulty: Difficulty): MathProblem => {
	const problem: MathProblem = { equation: '', answer: 0, options: [] };

	switch (difficulty) {
		case 'easy':
			return generateEasyProblem();
		case 'medium':
			return generateMediumProblem();
		case 'hard':
			return generateHardProblem();
		default:
			return generateEasyProblem();
	}
};

const generateEasyProblem = (): MathProblem => {
	const a = Math.floor(Math.random() * 20) + 1;
	const b = Math.floor(Math.random() * 20) + 1;

	if (Math.random() > 0.5) {
		// Addition
		return {
			equation: `${a} + ${b}`,
			answer: a + b,
			options: generateOptions(a + b, 5),
		};
	} else {
		// Subtraction (ensure positive result)
		const larger = Math.max(a, b);
		const smaller = Math.min(a, b);
		return {
			equation: `${larger} - ${smaller}`,
			answer: larger - smaller,
			options: generateOptions(larger - smaller, 5),
		};
	}
};

const generateMediumProblem = (): MathProblem => {
	const a = Math.floor(Math.random() * 10) + 1;
	const b = Math.floor(Math.random() * 10) + 1;

	if (Math.random() > 0.5) {
		// Multiplication
		return {
			equation: `${a} × ${b}`,
			answer: a * b,
			options: generateOptions(a * b, 7),
		};
	} else {
		// Division (ensure integer result)
		const product = a * b;
		return {
			equation: `${product} ÷ ${a}`,
			answer: b,
			options: generateOptions(b, 7),
		};
	}
};

const generateHardProblem = (): MathProblem => {
	if (Math.random() > 0.5) {
		// Fractions
		const numerator = Math.floor(Math.random() * 5) + 1;
		const denominator = Math.floor(Math.random() * 5) + 2;
		const multiplier = Math.floor(Math.random() * 5) + 1;

		return {
			equation: `${multiplier} × (${numerator}/${denominator})`,
			answer:
				Math.round(((multiplier * numerator) / denominator) * 100) /
				100,
			options: generateOptions(
				Math.round(((multiplier * numerator) / denominator) * 100) /
					100,
				10,
				true
			),
		};
	} else {
		// Percentages
		const number = Math.floor(Math.random() * 100) + 1;
		const percentage = Math.floor(Math.random() * 50) + 10;
		const result = Math.round((number * percentage) / 100);

		return {
			equation: `${percentage}% of ${number}`,
			answer: result,
			options: generateOptions(result, 10),
		};
	}
};

const generateOptions = (
	correct: number,
	range: number,
	isDecimal = false
): number[] => {
	const options = [correct];

	// Generate 2 unique wrong options
	while (options.length < 3) {
		let wrongOption;
		if (isDecimal) {
			const offset = Math.random() * range - range / 2;
			wrongOption = Math.round((correct + offset) * 100) / 100;
		} else {
			wrongOption =
				correct +
				Math.floor(Math.random() * range) -
				Math.floor(range / 2);
		}

		// Ensure it's positive and not the correct answer
		if (wrongOption > 0 && !options.includes(wrongOption)) {
			options.push(wrongOption);
		}
	}

	// Shuffle the options
	return options.sort(() => Math.random() - 0.5);
};
