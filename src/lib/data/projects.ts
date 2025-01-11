import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'slick-portfolio-pixelshare',
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
		slug: 'slick-portfolio-book-recommendation',
		color: '#ff3e00',
		description:
			'This project is done under the course CSE 472 - Machine Learning  Sessional. We are developing a book recommendation system enhancing the Neural Graph Collaborative Filtering(NGCF) model with neighborhood-based contrastive learning and graph attention mechanism. The experiments are done on the Gowalla and Amazon book datasets to improve the metrics ndcg@k and recall@k.',
		shortDescription:
			'This project is done under the course CSE 472 - Machine Learning  Sessional. We are developing a book recommendation system enhancing the Neural Graph Collaborative Filtering(NGCF) model with neighborhood-based contrastive learning and graph attention mechanism. The experiments are done on the Gowalla and Amazon book datasets to improve the metrics ndcg@k and recall@k.',
		links: [{ to: 'https://github.com/f12-mou/CSE-472_Book_Recommendation_System', label: 'GitHub' }],
		logo: Assets.Python,
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
		slug: 'slick-portfolio-javafx',
		color: '#5e95e3',
		description:
			'As part of the CSE 108 (Object-Oriented Programming) course, this project is a JavaFX-based football management system. It allows users to manage players across different clubs, facilitating buying, transferring, and updating player information. The program follows a server-client architecture where player data is stored on the server. Client requests trigger updates to these files, ensuring real-time synchronization of player information. This project demonstrates key object-oriented programming principles and incorporates JavaFX for a dynamic user interface.',
		shortDescription:
			'As part of the CSE 108 (Object-Oriented Programming) course, this project is a JavaFX-based football management system. It allows users to manage players across different clubs, facilitating buying, transferring, and updating player information. The program follows a server-client architecture where player data is stored on the server. Client requests trigger updates to these files, ensuring real-time synchronization of player information. This project demonstrates key object-oriented programming principles and incorporates JavaFX for a dynamic user interface.',
		links: [{ to: 'https://github.com/f12-mou/CSE108-JavaFx_Football_Project', label: 'GitHub' }, { to: 'https://www.youtube.com/watch?v=VwsDiVtn1wg', label: 'Youtube' }],
		logo: Assets.JavaScript,
		name: 'JavaFX Football Management System',
		period: {
			from: new Date(2022, 1, 5),
			to: new Date(2022, 2, 7)
		},
		skills: getSkills('js', 'css'),
		type: 'Object Oriented Programming Sessional Project'
	},
	{
		slug: 'slick-portfolio-sherlock-eye',
		color: '#5e95e3',
		description:
			'The project was under the course CSE 216: Database Sessional. It was based on the idea of detective agency where clients could request for a case to solve and the detectives could solve them according to client’s requests.From filing a case with necessary contents upto solving the case by detectives, the whole process was simulated in our project.',
		shortDescription:
			'The project was under the course CSE 216: Database Sessional. It was based on the idea of detective agency where clients could request for a case to solve and the detectives could solve them according to client’s requests.From filing a case with necessary contents upto solving the case by detectives, the whole process was simulated in our project.',
		links: [{ to: 'https://github.com/f12-mou/Sherlock-s-Eye', label: 'GitHub' }],
		logo: Assets.NodeJs,
		name: 'Sherlock Eye',
		period: {
			from: new Date(2022, 5, 5),
			to: new Date(2022, 5, 29)
		},
		skills: getSkills('js', 'css', 'html'),
		type: 'Database Project'
	},
	{
		slug: 'slick-portfolio-compiler',
		color: '#5e95e3',
		description:
			'This project, completed as part of the CSE-310 Compiler Sessional course, demonstrates the construction of a compiler through a step-by-step approach. It includes implementing a symbol table for managing identifiers, designing a lexical analyzer using Lex to tokenize input, and building parsers using Yacc for syntax and semantic validation. Additionally, the project focuses on generating intermediate code to bridge the gap between high-level language and machine-level code. Written in a combination of Yacc, C, C++, Lex, and Assembly, the project showcases a deep understanding of compiler design principles, integrating various components to create a functional and efficient compiler.',
		shortDescription:
			'This project, completed as part of the CSE-310 Compiler Sessional course, demonstrates the construction of a compiler through a step-by-step approach. It includes implementing a symbol table for managing identifiers, designing a lexical analyzer using Lex to tokenize input, and building parsers using Yacc for syntax and semantic validation. Additionally, the project focuses on generating intermediate code to bridge the gap between high-level language and machine-level code. Written in a combination of Yacc, C, C++, Lex, and Assembly, the project showcases a deep understanding of compiler design principles, integrating various components to create a functional and efficient compiler.',
		links: [{ to: 'https://github.com/f12-mou/CSE-310-Compiler_Sessional', label: 'GitHub' }],
		logo: Assets.C,
		name: 'Compiler',
		period: {
			from: new Date(2022, 11, 3),
			to: new Date(2023, 1, 21)
		},
		skills: [],
		type: 'Compiler Sessional Project'
	},
	{
		slug: 'slick-portfolio-velociraptor-analysis',
		color: '#5e95e3',
		description:
			'Velociraptor analysis was a part of the course - Security Sessional. Here we were given a digital forensic tool named velociraptor to examine. 2 custom artifacts were added and a pipeline was developed also for post - analysis of the results.',
		shortDescription:
			'Velociraptor analysis was a part of the course - Security Sessional. Here we were given a digital forensic tool named velociraptor to examine. 2 custom artifacts were added and a pipeline was developed also for post - analysis of the results.',
		links: [{ to: 'https://github.com/f12-mou/velociraptor_analysis', label: 'GitHub' }],
		logo: Assets.Python,
		name: 'Velociraptor-Analysis',
		period: {
			from: new Date(2021, 8, 3),
			to: new Date(2021, 8, 18)
		},
		skills: [],
		type: 'Computer Security Sessional Project'
	},
	{
		slug: 'slick-portfolio-pacman',
		color: '#5e95e3',
		description:
			'Developed a custom version of the classic Pacman game during my first year.I added 14 different levels with different layouts of the maze and difficulties.I also integrated the unlock system and many attractive features into the custom version.',
		shortDescription:
			'Developed a custom version of the classic Pacman game during my first year.I added 14 different levels with different layouts of the maze and difficulties.I also integrated the unlock system and many attractive features into the custom version.',
		links: [{ to: 'https://github.com/f12-mou/Pacman', label: 'GitHub' }, { to: 'https://youtu.be/Ph3G2gmhZis?si=wuXcHuT52dUQS35A', label: 'Youtube' }],
		logo: Assets.C,
		name: 'Pacman',
		period: {
			from: new Date(2020, 10, 20),
			to: new Date(2020, 11, 23)
		},
		skills: [],
		type: 'Level 1 Term I Igraphics Project'
	}

];

export const title = 'Projects';
