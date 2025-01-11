import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'slick-portfolio-angular',
		color: '#5e95e3',
		description:
			'Integrated OpenAI CLIP Model into PixelShare, an image sharing platform, to enable advanced text-based image search capabilities. This feature allows the users to retrieve images among their groups through descriptive queries.',
		shortDescription:
			'Integrated OpenAI CLIP Model into PixelShare, an image sharing platform, to enable advanced text-based image search capabilities. This feature allows the users to retrieve images among their groups through descriptive queries.',
		links: [{ to: 'https://github.com/f12-mou/pixelshare', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'PixelShare',
		period: {
			from: new Date(2024, 1, 5),
			to: new Date(2024, 2, 7)
		},
		skills: getSkills('svelte', 'ts', 'js', 'css'),
		type: 'Level 4 Term I Software Development Project'
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'This project is done under the course CSE 472 - Machine Learning  Sessional. We are developing a book recommendation system enhancing the Neural Graph Collaborative Filtering(NGCF) model with neighborhood-based contrastive learning and graph attention mechanism. The experiments are done on the Gowalla and Amazon book datasets to improve the metrics ndcg@k and recall@k.',
		shortDescription:
			'This project is done under the course CSE 472 - Machine Learning  Sessional. We are developing a book recommendation system enhancing the Neural Graph Collaborative Filtering(NGCF) model with neighborhood-based contrastive learning and graph attention mechanism. The experiments are done on the Gowalla and Amazon book datasets to improve the metrics ndcg@k and recall@k.',
		links: [{ to: 'https://github.com/f12-mou/CSE-472_Book_Recommendation_System', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Book Recommendation System',
		period: {
			from: new Date(2024, 11, 20),
			to: new Date(2024, 12, 20)
		},
		skills: [],
		type: 'CSE 472 ML Project',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'slick-portfolio-angular',
		color: '#5e95e3',
		description:
			'As part of the CSE 108 (Object-Oriented Programming) course, this project is a JavaFX-based football management system. It allows users to manage players across different clubs, facilitating buying, transferring, and updating player information. The program follows a server-client architecture where player data is stored on the server. Client requests trigger updates to these files, ensuring real-time synchronization of player information. This project demonstrates key object-oriented programming principles and incorporates JavaFX for a dynamic user interface.',
		shortDescription:
			'As part of the CSE 108 (Object-Oriented Programming) course, this project is a JavaFX-based football management system. It allows users to manage players across different clubs, facilitating buying, transferring, and updating player information. The program follows a server-client architecture where player data is stored on the server. Client requests trigger updates to these files, ensuring real-time synchronization of player information. This project demonstrates key object-oriented programming principles and incorporates JavaFX for a dynamic user interface.',
		links: [{ to: 'https://github.com/f12-mou/CSE108-JavaFx_Football_Project', label: 'GitHub' }, { to: 'https://www.youtube.com/watch?v=VwsDiVtn1wg', label: 'Youtube' }],
		logo: Assets.Unknown,
		name: 'JavaFX Football Management System',
		period: {
			from: new Date(2022, 1, 5),
			to: new Date(2022, 2, 7)
		},
		skills: getSkills('js', 'css'),
		type: 'Object Oriented Programming Sessional Project'
	}
];

export const title = 'Projects';
