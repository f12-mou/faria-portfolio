import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: '',
		description: 'Rank - 24, Team Name - BUET_Harmonica',
		contract: ContractType.Ptype,
		type: 'Software Development',
		location: 'Daffodil International University, Dhaka',
		period: { from: new Date() },
		skills: [],
		name: 'ICPC Asia Dhaka Regional Contest 2024',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Rank - 24, Team Name - BUET_Harmonica'
	},
	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Rank - Champion, Team Name - BUET _Pirates',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: [],
		name: 'National Girls’ Programming Contest 2022',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Rank - Champion, Team Name - BUET _Pirates'
	},
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Rank - 2nd Runner Up, Dhaka Division, Team Name- Luminal Caliber',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: [],
		name: 'NASA SPACE APPS CHALLENGE 2021',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Rank - 2nd Runner Up, Dhaka Division, Team Name- Luminal Caliber'
	},
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Rank - Selected in Preliminary Contest, Team Name- BUET _Code _Chronicles',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: [],
		name: 'ICPC Asia Dhaka Regional Contest 2023',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Rank - Selected in Preliminary Contest, Team Name- BUET _Code _Chronicles'
	},
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Rank - 14, Team Name- BUET _error _404',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: [],
		name: 'Ada Lovelace National Girls Programming Contest 2022',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Rank - 14, Team Name- BUET _error _404'
	},
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Rank - 15, Team Name- BUET _Trumpet',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: [],
		name: 'BUET INTER UNIVERSITY PROGRAMMING CONTEST 2023',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Rank - 15, Team Name- BUET _Trumpet'
	},
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Rank - 80, Team Name- BUET _Qwerty',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: [],
		name: 'BUET INTER UNIVERSITY PROGRAMMING CONTEST 2022',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Rank - 80, Team Name- BUET _Qwerty'
	},
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Rank - 100, Team Name- BUET _Team _7',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: [],
		name: 'National Collegiate Programming Contest 2023',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Rank - 100, Team Name- BUET _Team _7'
	},
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Rank - Selected for main round, Team Name- BUET _HackForce',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: [],
		name: 'BUET Inter University Hackathon 2023',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Rank - Selected for main round, Team Name- BUET _HackForce'
	}

];

export const title = 'Experience';
