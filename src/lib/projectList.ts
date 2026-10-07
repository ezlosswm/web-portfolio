export const projectList: ProjectMetaData[] = [
	{
		slug: 'linkinbio',
		name: 'Link In Bio',
		description:
			'Simple and fast Link in Bio page for sharing your important links with the world.',
		summary: [
			'Built a responsive, mobile-first landing page for sharing personal and professional links.',
			'Focused on accessibility, responsive layouts, fast performance, and subtle micro-interactions.',
			'Optimized the interface for a seamless experience across desktop and mobile devices.'
		],
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
				'For this practice project, I wanted to build a simple Link in Bio page similar to platforms like Linktree, but without the unnecessary complexity that many existing solutions include. Many Link in Bio tools come with excessive features, heavy scripts, or branding that takes away from the simplicity of sharing important links. My goal was to create a lightweight, fast-loading page that focused on the core experience: presenting a profile and a collection of useful links. I also wanted to use the project as an opportunity to practice building a clean, responsive interface while paying close attention to performance and accessibility.',
			solution:
				'I built the project using SvelteKit and Tailwind CSS. SvelteKit provided a lightweight framework for building the interface, while Tailwind CSS allowed me to quickly design and iterate on the layout while maintaining consistent styling. The page features a profile section with an avatar, short bio, and customizable links directing visitors to different platforms and resources. I designed the experience with a mobile-first approach, recognizing that most users access Link in Bio pages through social media apps on their phones. By keeping the scope intentionally focused, I was able to concentrate on creating a polished, functional experience while strengthening my understanding of component-based development, responsive design, and utility-first CSS.'
		},
		technicalHighlights: {
			performance: '95',
			efficiency: '74'
		},
		url: 'https://ezlos.vercel.app'
	},
	{
		slug: 'suggestbox',
		name: 'SuggestBox',
		description:
			'A simple platform for collecting, organizing, and acting on suggestions from teams, customers, and communities.',

		summary: [
			'Developed an anonymous feedback platform with secure, sign-up-free link sharing.',
			'Integrated Supabase for data storage and real-time backend functionality.',
			'Designed a clean, responsive interface focused on simplicity and ease of use.'
		],
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
				'SuggestBox solves this by providing a clean, accessible space for anyone to post and view on ideas without any technical hurdles. By allowing community members to upvote suggestions, the platform naturally highlights the most important improvements, while clear status labels keep everyone informed on progress. It replaces chaotic communication channels with a single, transparent, and democratic system that helps organizers focus on what their audience truly wants, all while maintaining the simplicity of a digital suggestion box.'
		},
		technicalHighlights: {
			performance: '98',
			efficiency: '111'
		},
		url: 'https://suggestionsbox.vercel.app/'
	},
	{
		slug: 'markit',
		name: 'MarkIt',
		description:
			'The playful bookmark manager for organized minds. Save links, images, and snippets in one beautiful place.',
		summary: [
			'Built a full-stack bookmarking platform using Sveltekit, Convex and TypeScript.',
			'Implemented Google OAuth authentication with secure user sessions',
			'Developed bookmark collections with tag-based filtering and favorites.',
			'Designed a fully responsive dashboard with TailwindCSS'
		],
		projectDetails: [
			{ title: 'Year', description: '2026' },
			{ title: 'Role', description: 'Frontend Developer' },
			{ title: 'Tech', description: 'Sveltekit, Convex' }
		],
		imageMetaData: {
			src: './assets/markit.webp',
			alt: 'MarkIt hero page'
		},
		caseStudy: {
			challenge:
				'Managing valuable links, articles, and online resources often leads to cluttered browser tabs, scattered bookmarks, and links saved across different chats or note-taking applications. Traditional browser bookmarking tools provide basic storage but often lack the organization and flexibility needed to manage a growing collection of resources. As bookmarks accumulate, finding a specific link becomes increasingly difficult, creating unnecessary friction in research, learning, and daily workflows.',

			solution:
				'MarkIt provides a centralized and visually organized space for saving and managing bookmarks. Users can securely create accounts, save links, organize them using tags, and mark important resources as favorites for quick access. The dashboard was designed to make browsing and filtering saved content intuitive while maintaining a clean and distraction-free interface. Built with SvelteKit, Convex, and TypeScript, the application demonstrates how a modern full-stack architecture can support authentication, real-time data management, and a responsive user experience.'
		},
		technicalHighlights: {
			performance: '97',
			efficiency: '74'
		},
		url: 'https://mark-it-mu.vercel.app/'
	},
	{
		slug: 'houseofdipp',
		name: 'House of Dipp',
		description:
			'Sveltekit menu site for House of Dipp - categories, full menu, hours and WhatsApp contact.',
		summary: [
			'Designed and developed a fast, mobile-first interactive menu and ordering web app for House of Dipp.',
			'Built a clean TypeScript data architecture to easily manage menu categories and item variations.',
			"Integrated smooth carousel flows and micro-interactions that elevate the brand's visual identity.",
			'Optimized UI responsiveness across all screen sizes to boost customer engagement and steamline online browsing.'
		],
		projectDetails: [
			{ title: 'Year', description: '2026' },
			{ title: 'Role', description: 'Frontend Developer & Designer' },
			{ title: 'Tech', description: 'Sveltekit' }
		],
		imageMetaData: {
			src: './assets/houseofdipp.webp',
			alt: 'House of Dipp hero page'
		},
		caseStudy: {
			challenge:
				'House of Dipp needed a modern, highly responsive digital menu that could handle dynamic categories and custom item options without clunky load times or generic layout templates.',

			solution:
				'Built a lightweight, mobile-optimized web application using Svelte 5, TypeScript and Tailwind. Formatted an organized data structure for rapid menu updates while crafting interactive UI components and microinteractions to elevate user engagement and simplify online browsing.'
		},
		technicalHighlights: {
			performance: '97',
			efficiency: '74'
		},
		url: 'https://house-of-dipp.vercel.app/'
	},
	{
		slug: 'stride',
		name: 'Stride',
		description:
			'The playful bookmark manager for organized minds. Save links, images, and snippets in one beautiful place.',
		summary: [
			'Built a sneaker price comparison platform using Sveltekit, Convex and TypeScript.',
			'Integrated a third party sneaker API to ccompare prices across StockX and GOAT.',
			'Developed search, filtering, sizing and sorting functionality to help users find relevant sneakers.',
			'Designed a responsive, minimalist interface focused on making sneaker purchasing decisions easier and faster.'
		],
		projectDetails: [
			{ title: 'Year', description: '2026' },
			{ title: 'Role', description: 'Frontend Developer' },
			{ title: 'Tech', description: 'Sveltekit' }
		],
		imageMetaData: {
			src: './assets/stride.webp',
			alt: 'Stride hero page'
		},
		caseStudy: {
			challenge:
				'Sneaker shoppers often have to manually checck multiple marketplaces to find the best price for a sneaker they want. Comparing StockX and GOAT involves opening multiple tabs, searching for the same sneaker repeatedly, and accounting for differences in pricing and availability. This fragmented process makes it difficult to quickly determine where a sneaker is available and which marketplace offers the better deal.',
			solution:
				'Stride simplifies sneaker shopping by bringing marketplace comparisons into one focused experience. Users can search for sneakers, browse available pairs, filter by size, and compare prices across StockX and GOAT. The platform highlights where each sneaker is available and identifies potential savings, helping users make faster and more informed purchasing decisions without manually checking multiple websites.'
		},
		technicalHighlights: {
			performance: '99',
			efficiency: '74'
		},
		url: 'https://stride-seven-beta.vercel.app/'
	}
];
