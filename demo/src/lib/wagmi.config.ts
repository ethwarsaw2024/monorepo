import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { dedicatedWalletConnector } from "@magiclabs/wagmi-connector";

// Dedicated Wallet integration
const magicConnector = dedicatedWalletConnector({
	chains: [],
	options: {
		// apiKey: process.env.NEXT_PUBLIC_MAGIC_API_KEY as string,
		apiKey: 'pk_live_5AFEFBE949242697',
		isDarkMode: true,
		oauthOptions: {
			providers: ["google", "facebook", "twitter", "discord"],
		},
		magicSdkConfiguration: {
			network: {
				rpcUrl: "https://rpc.ankr.com/eth",
				chainId: 1,
			},
		},
	},
});

export const config = createConfig({
	chains: [mainnet, sepolia],
	connectors: [magicConnector],
	transports: {
		[mainnet.id]: http(),
		[sepolia.id]: http(),
	},
});
