// src/routes/[project]/+page.ts
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { projectList } from '$lib/projectList';

export const load: PageLoad = ({ params }) => {
	const project = projectList.find((p) => p.slug === params.project);

	if (!project) {
		error(404, 'Project not found');
	}

	return { project };
};
