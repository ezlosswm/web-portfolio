// src/routes/[project]/+page.ts
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

const validProjects = ['suggestbox'];

export const load: PageLoad = ({ params }) => {
	if (validProjects.includes(params.project)) {
		return {
			slug: params.project
		};
	}

	error(404, 'Project not found');
};
