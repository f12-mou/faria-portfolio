import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'contest-1',
		company: 'BUET_Harmonica',
		description: 'Rank - 24',
		contract: ContractType.Ptype,
		type: 'Programming Contest',
		location: 'Daffodil International University, Dhaka',
		period: { from: new Date(2024, 11, 5), to: new Date(2024, 11, 7) },
		skills: [],
		name: 'ICPC Asia Dhaka Regional Contest 2024',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Rank - 24'
	},
	{
		slug: 'contest-2',
		company: 'BUET _Pirates',
		description: 'Rank - Champion',
		contract: ContractType.Ptype,
		type: 'Software Development',
		location: 'Daffodil International University, Dhaka',
		period: { from: new Date(2023, 1, 25), to: new Date(2023, 1, 27) },
		skills: [],
		name: 'National Girls’ Programming Contest 2022',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Rank - Champion'
	},
	{
		slug: 'contest-3',
		company: 'Luminal Caliber',
		description: 'Rank - 2nd Runner Up, Dhaka Division',
		contract: ContractType.Htype,
		type: 'Software Development',
		location: 'Dhaka',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: [],
		name: 'NASA SPACE APPS CHALLENGE 2021',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Rank - 2nd Runner Up, Dhaka Division'
	},
	{
		slug: 'contest-4',
		company: 'BUET _Code _Chronicles',
		description: 'Rank - Selected for Onsite Contest',
		contract: ContractType.Ptype,
		type: 'Software Development',
		location: 'BUBT',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: [],
		name: 'ICPC Asia Dhaka Regional Contest 2023',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Rank - Selected for Onsite Contest'
	},
	{
		slug: 'contest-5',
		company: 'BUET _error _404',
		description: 'Rank - 14',
		contract: ContractType.Ptype,
		type: 'Software Development',
		location: 'University of Asia Pacific, Green Road, Dhaka',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: [],
		name: 'Ada Lovelace National Girls Programming Contest 2022',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Rank - 14'
	},
	{
		slug: 'contest-6',
		company: 'BUET _Trumpet',
		description: 'Rank - 15',
		contract: ContractType.Ptype,
		type: 'Software Development',
		location: 'BUET',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: [],
		name: 'BUET INTER UNIVERSITY PROGRAMMING CONTEST 2023',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Rank - 15'
	},
	{
		slug: 'contest-7',
		company: 'BUET _Qwerty',
		description: 'Rank - 80',
		contract: ContractType.Ptype,
		type: 'Software Development',
		location: 'BUET',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: [],
		name: 'BUET INTER UNIVERSITY PROGRAMMING CONTEST 2022',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Rank - 80'
	},
	{
		slug: 'contest-8',
		company: 'BUET _Team _7',
		description: 'Rank - 100',
		contract: ContractType.Ptype,
		type: 'Software Development',
		location: 'JU',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: [],
		name: 'National Collegiate Programming Contest 2023',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Rank - 100'
	},
	{
		slug: 'contest-9',
		company: 'BUET _HackForce',
		description: 'Rank - Selected for main round',
		contract: ContractType.Htype,
		type: 'Software Development',
		location: 'BUET',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: [],
		name: 'BUET Inter University Hackathon 2023',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Rank - Selected for main round'
	}

];

export const title = 'Programming Contest and Hackathon';
