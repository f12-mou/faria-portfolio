import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Faria Binta';

export const lastName = 'Awal';

export const description =
	'Hello! I’m Faria Binta Awal, a Lecturer in the Department of Computer Science and Engineering at BRAC University. I completed my B.Sc. in Computer Science and Engineering from Bangladesh University of Engineering and Technology (BUET), where I also served as an Adjunct Lecturer after graduation. I’m deeply passionate about research and teaching in computer science and am currently preparing to pursue a Ph.D. starting in Fall 2026.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/f12-mou' },
	{
		platform: Platform.Email,
		link: 'faria12mou@gmail.com'
	},
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
