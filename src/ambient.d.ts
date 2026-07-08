declare global {
	type Detail = { title: string; description: string };

	type CaseStudy = {
		challenge: string;
		solution: string;
	};

	type TechnicalHighlight = {
		performance: string;
		efficiency: string;
	};

	type ProjectMetaData = {
		slug: string;
		name: string;
		description: string;
		summary: string;
		projectDetails: Detail[];
		imageMetaData: {
			src: string;
			alt: string;
		};
		caseStudy: {
			challenge: string;
			solution: string;
		};
		technicalHighlights: {
			performance: string;
			efficiency: string;
		};
		url: string;
	};

	type Project = {
		title: string;
		stack: string;
		link: string;
	};
}

export {};
