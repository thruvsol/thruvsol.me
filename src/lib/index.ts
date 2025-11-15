interface ThinkingAloud {
	type: string;
	link: string;
	header: string;
	content: string;
	date: Date;
}

export const THINKING_ALOUD: ThinkingAloud[] = [
	{
		type: 'github',
		content: 'A guide for setting up validators, blazingly fast.',
		date: new Date('2024-11-03'),
		header: 'Validator Jumpstart',
		link: 'https://github.com'
	},
	{
		type: 'blog',
		content: 'Voting Modifications and Validator Voting Behavior Study V 1.0',
		date: new Date('2025-04-12'),
		header: 'Voting Modifications & Voting',
		link: 'https://medium.com'
	}
].sort((a, b) => b.date.getTime() - a.date.getTime());

interface BuilderLog {
	title: string;
	content: string;
	date: Date;
	link: string;
}

export const BUILDER_LOG: BuilderLog[] = [
	{
		title: 'brewlabshq - Founder',
		content: 'Espresso for Infra - home for open-source projects.',
		date: new Date('2025-01-08'),
		link: 'https://github.com/thruvsol'
	},
	{
		title: 'dynoSOL - Core Team',
		content:
			'Stake for numbers and narratives - Stake your SOL with validators vetted by experts and on-chain performance, with over 500K SOL in AUM',
		date: new Date('2025-05-08'),
		link: 'https://www.dynosol.io/'
	},
	{
		title: 'Ice Staking + IceSOL',
		content:
			'High performance solana validator - Freeze your SOL for ice cold yields, with over 200K SOL Staked',
		date: new Date('2024-04-12'),
		link: 'https://www.icestaking.com/'
	},
	{
		title: 'Cubik - Co-Founder/CTO',
		content: 'Funding the future of @Solana, one builder at a time.',
		date: new Date('2023-02-01'),
		link: 'https://github.com'
	},
	{
		title: 'Superteam Earn - Software Engineer',
		content:
			'An open source platform connecting crypto founders with elite talent to create bounties, and accelerate project completion',
		date: new Date('2023-01-01'),
		link: 'https://github.com/SuperteamDAO/earn'
	}
].sort((a, b) => b.date.getTime() - a.date.getTime());

type Gig = {
	title: string;
	client?: string;
	role?: string;
	date: Date;
	content: string;
};

export const gigs: Gig[] = [
	{
		title: 'Staking V2 Smart Contract',
		client: 'IOnet',
		role: 'Rust / Smart Contracts',
		date: new Date('2024-11-10'),
		content:
			"IOnet staking allows users to earn rewards on their IO tokens by staking to the Ionet devices. This ensures that users can maximize their returns while contributing to the network's security and stability."
	},
	{
		title: 'Intents Smart Contract',
		client: 'Okto / CoinDCX',
		role: 'Rust / Smart Contracts',
		date: new Date('2025-01-10'),
		content:
			'Cross chain Intents allows okto users to swap any token from allow chains to any other chain, the smart contract allowed verfied solvers to come in and provide liquidity for the users to maximize their returns.'
	}
].sort((a, b) => b.date.getTime() - a.date.getTime());
