import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'slick-portfolio-research-sunstamp',
		color: '#007acc',
		description:
			'We propose a supervised Non-negative Matrix Factorization (NMF) framework designed to integrate spatial transcriptomics with complementary molecular or imaging modalities. The project addresses a key gap in spatial omics by enabling joint modeling of gene expression and pathology-derived molecular features. It demonstrated strong predictive performance (AUC >= 0.90) in Alzheimer’s disease and high correlation with myocardial injury markers, revealing biologically interpretable spatial gene modules.',
		shortDescription:
			'Supervised Factorization to Associate Spatial Transcriptomics with Complementary Molecular Readouts',
		links: [
			{ to: 'https://www.biorxiv.org/content/10.1101/2025.09.28.679034v1.abstract', label: 'bioRxiv' },
			{ to: 'https://github.com/f12-mou/SuNSTAMP', label: 'Github' }
		],
		logo: Assets.Python,
		name: 'SuNSTAMP',
		period: {
			from: new Date(2024, 2, 1),
			to: new Date(2025, 3, 25)
		},
		skills: getSkills('python', 'numpy', 'pandas'),
		type: 'Undergraduate Thesis (Research) Project'
	},
	{
		slug: 'slick-portfolio-research-spatialomics-toolkit',
		color: '#4a90e2',
		description:
			'Worked with Dr. Md. Abul Hassan Samee to design and develop a spatial transcriptomics tutorial demonstrating analysis pipelines for MERFISH and Visium 2.1.0 datasets using the spatialdata toolkit. The tutorial established reproducible workflows for the bioinformatics research community and addressed the challenge of standardizing analyses across heterogeneous technologies. The pipeline was later used in live demonstrations at the “Workshop: Mastering Spatial Data Analysis: From Basics to Cutting-Edge Innovations” as part of the Festival of Genomics and Biodata Boston 2025.',
		shortDescription:
			'Contributed to the development of a spatial transcriptomics tutorial and unified analysis pipeline using the spatialdata toolkit under Dr. Md. Abul Hassan Samee.',
		links: [{ to: 'https://github.com/f12-mou/spatialomics-toolkit', label: 'GitHub' },
		{ to: 'https://festivalofgenomics.com/boston/2025-agenda/mastering-spatial-data-analysis-basics-cutting-edge-innovations', label: 'Workshop Details' }
		],
		logo: Assets.Python,
		name: 'spatialomics-toolkit',
		period: {
			from: new Date(2025, 5, 15),
			to: new Date(2025, 9, 15)
		},
		skills: getSkills('python', 'scikit-learn', 'matplotlib'),
		type: 'Remote Research Project'
	},

	{
		slug: 'slick-portfolio-cell',
		color: '#4a90e2',
		description:
			'Worked with Dr. Md. Abul Hassan Samee to model spatially resolved cell–cell communication networks in axolotl regeneration datasets. Designed neighborhood-based matrices and heuristic strategies to efficiently infer multi-step ligand–receptor signaling cascades. Identified spatially coherent signaling chains and candidate hubs, providing insights into regeneration-associated pathways.',
		shortDescription:
			'Modeled spatially resolved cell–cell communication in axolotl regeneration datasets under Dr. Md. Abul Hassan Samee.',
		links: [],
		logo: Assets.Python,
		name: 'Cell–Cell Communication Network Using Spatial Ligand–Receptor Correlation',
		period: {
			from: new Date(2025, 7, 15),
			to: undefined
		},
		skills: getSkills('python', 'scikit-learn', 'matplotlib'),
		type: 'Ongoing Research Project'
	},

	{
		slug: 'slick-portfolio-ngcf',
		color: '#4a90e2',
		description:
			'Working with Dr. Mohammad Saifur Rahman to develop an advanced recommendation framework by enhancing Neural Graph Collaborative Filtering(NGCF) with neighborhood - based contrastive learning and graph attention mechanisms. Evaluated on Gowalla and Amazon Books datasets, achieving improved performance in Normalized Discounted Cumulative Gain(NDCG@k) and Recall@k metrics.',
		shortDescription:
			'Working with Dr. Mohammad Saifur Rahman to develop an advanced recommendation framework by enhancing Neural Graph Collaborative Filtering(NGCF) with neighborhood - based contrastive learning and graph attention mechanisms.',
		links: [],
		logo: Assets.Python,
		name: 'Graph-Based Contrastive Recommendation System',
		period: {
			from: new Date(2024, 11, 15),
			to: undefined
		},
		skills: getSkills('python', 'scikit-learn', 'matplotlib'),
		type: 'Ongoing Research Project | Targeted Venue: NeurIPS Workshop'
	}

];

