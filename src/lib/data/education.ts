import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Computer Science and Engineering',
		description: 'CGPA(till now): 3.96/4.00',
		location: 'Dhaka, Bangladesh',
		logo: Assets.Unknown,
		name: '',
		organization: 'Bangladesh University of Engineering and Technology (BUET)',
		period: { from: new Date(2020, 2, 22), to: new Date(2025, 1, 10) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['DSA', 'Database', 'Web Development', 'SWE', 'Machine Learning', 'Compiler', 'Concrete Math', 'Discrete Math', 'Programming Languages', 'OOP', 'Network and Security', 'CGPA(till now): 3.96/4.00']
	},
	{
		degree: 'Higher Secondary School Certificate',
		description: 'GPA: 5.00/5.00',
		location: 'Dhaka, Bangladesh',
		logo: Assets.Unknown,
		name: '',
		organization: 'Holy Cross College',
		period: { from: new Date(2017, 7, 1), to: new Date(2019, 7, 12) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Science', 'GPA: 5.00/5.00']
	},
	{
		degree: 'Secondary School Certificate',
		description: 'GPA: 5.00/5.00',
		location: 'Manikganj, Bangladesh',
		logo: Assets.Unknown,
		name: '',
		organization: 'S. K. Govt. Girls High School, Manikganj',
		period: { from: new Date(2009, 1, 1), , to: new Date(2017, 5, 10)
	},
	shortDescription: '',
	slug: 'dummy-education-item-2',
	subjects: ['Science', 'GPA: 5.00/5.00']
	}

];

export const title = 'Educational Background';
