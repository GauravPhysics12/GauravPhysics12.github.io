// Groups resources by topic rather than by type (code vs. notes), so a
// topic like "Numerical Relativity" — which has both code and notes — shows
// everything together in one place.
//
// codeSlugs reference entries in the `codes` content collection (the slug
// is the mdx filename without extension, e.g. 'QNMs' -> QNMs.mdx).
// noteCategorySlugs reference category slugs defined in src/config/notes.js.

export const topics = [
	{
		name: 'Numerical Relativity',
		slug: 'numerical-relativity',
		description: 'Simulating black holes numerically — computing the ringdown frequencies of a perturbed black hole.',
		codeSlugs: ['qnms'],
		noteCategorySlugs: [],
	},
	{
		name: 'General Relativity',
		slug: 'general-relativity',
		description: 'Notes on spacetime, gravity, and the mathematical foundations required for GR.',
		codeSlugs: [],
		noteCategorySlugs: ['general-relativity'],
	},
	{
		name: 'Astrophysics',
		slug: 'astrophysics',
		description: 'Notes on stellar interiors, radiative processes, and other topics in astrophysics.',
		codeSlugs: [],
		noteCategorySlugs: ['astrophysics'],
	},
	{
		name: 'Guest Lectures & Workshops',
		slug: 'guest-lectures',
		description: 'Slides from my guest lecture series on astrophysics and cosmology.',
		codeSlugs: [],
		noteCategorySlugs: ['workshops'],
	},
	{
		name: 'Programming Tutorials',
		slug: 'programming-tutorials',
		description: 'Beginner-friendly guides to the tools I use most for scientific computing.',
		codeSlugs: ['intro-to-python', 'intro-to-mathematica'],
		noteCategorySlugs: [],
	},
];
