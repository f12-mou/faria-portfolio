
import { items, research } from '@data/projects';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		// Try to find the project in both arrays
		const project =
			items.find((item) => item.slug === params.slug) ||
			research.find((item) => item.slug === params.slug);

		return { project };
	}
}

// import { items } from '@data/projects';

// export function load({ params }: { params: Record<string, string> }) {
// 	if (params.slug) {
// 		const project = items.find((item) => {
// 			return item.slug === params.slug;
// 		});

// 		return { project };
// 	}
// }
