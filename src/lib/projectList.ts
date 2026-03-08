export const projectList: ProjectMetaData[] = [
	{
		slug: 'linkinbio',
		name: 'Link In Bio',
		description:
			'The simplest way to collect, manage, and act on suggestions from your team or customers. No more messy spreadsheets or lost emails.',
		projectDetails: [
			{ title: 'Year', description: '2024' },
			{ title: 'Role', description: 'Web Designer / Frontend Developer' },
			{ title: 'Tech', description: 'Sveltekit' }
		],
		imageMetaData: {
			src: './assets/linkinbio.webp',
			alt: 'Link in bio'
		},
		caseStudy: {
			challenge:
				'For this practice project, I wanted to build a simple Link in Bio page similar to tools like Linktree, but without the extra complexity that many of those platforms include. Most existing solutions come with unnecessary features, heavy scripts, or branding that takes away from the simplicity of what should be a lightweight page for sharing links. My goal was to create a minimal, fast-loading page that focuses purely on the core functionality: displaying a profile and a list of important links. I also wanted to use this project as an opportunity to practice building a clean interface while keeping performance and responsiveness in mind.',
			solution:
				'I built the project using Svelte and Tailwind CSS. I chose Svelte because it compiles components into optimized JavaScript, which helps keep the application lightweight and fast. Tailwind allowed me to quickly design and iterate on the layout while maintaining a consistent visual style. The page includes a simple profile section with an avatar, a short bio, and a list of customizable links that direct users to different platforms or resources. I designed the layout with a mobile-first approach, since most users typically access Link in Bio pages from social media apps on their phones. Since this was a practice project, I kept the scope intentionally small and focused on building something clean and efficient. The project helped me reinforce my understanding of component-based development in Svelte and utility-first styling with Tailwind, while also demonstrating how a simple idea can be turned into a polished and functional interface.'
		},
		technicalHighlights: {
			performance: '90',
			efficiency: '74'
		},
		url: 'https://ezlos.vercel.app'
	},
	{
		slug: 'suggestbox',
		name: 'SuggestBox',
		description:
			'The simplest way to collect, manage, and act on suggestions from your team or customers. No more messy spreadsheets or lost emails.',
		projectDetails: [
			{ title: 'Year', description: '2026' },
			{ title: 'Role', description: 'Web Developer' },
			{ title: 'Tech', description: 'Sveltekit, Supabase' }
		],
		imageMetaData: {
			src: './assets/suggestbox.webp',
			alt: 'SuggestBox hero page'
		},
		caseStudy: {
			challenge:
				"Collecting feedback from a community, customer base, or club often turns into a disorganized mess of emails, social media comments, and forgotten sticky notes. Without a central hub, the best ideas get lost in the noise, participants feel like their voices aren't being heard, and managers struggle to figure out which issues actually matter. The process is usually either too informal to be useful or too complex for the average person to navigate, leaving everyone frustrated by the lack of transparency.",
			solution:
				'SuggestionsBox solves this by providing a clean, accessible space for anyone to post and view on ideas without any technical hurdles. By allowing community members to upvote suggestions, the platform naturally highlights the most important improvements, while clear status labels keep everyone informed on progress. It replaces chaotic communication channels with a single, transparent, and democratic system that helps organizers focus on what their audience truly wants, all while maintaining the simplicity of a digital suggestion box.'
		},
		technicalHighlights: {
			performance: '99',
			efficiency: '111'
		},
		url: 'https://suggestionsbox.vercel.app/'
	}
];
