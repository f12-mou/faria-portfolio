import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Faria Binta';

export const lastName = 'Awal';

export const description =
	'Hello! I’m a Level 4 Term II Computer Science and Engineering student at Bangladesh University of Engineering and Technology (BUET). My journey in computer science has been an incredible adventure filled with passion, learning, and growth. Along the way, I’ve actively participated in extracurricular activities such as competitive programming and hackathons. Each project and competition shown here reflects my enthusiasm for learning new things. Hope to learn more in future. Thanks for visiting my portfolio.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/f12-mou' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/faria-mou-26225b342/'
	},
	{
		platform: Platform.Email,
		link: 'fariaNOSPACE12NOSPACEmouATgoogleDOTcom'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com/@fariamou-d3e'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com/profile.php?id=100015497264049'
	}
];

export const skills = getSkills('js', 'css', 'html', 'svelte', 'ts');
