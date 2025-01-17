/**
 * Constants
 */

import { Deployment, SupportedChainIds } from "./types";
import { deployments } from "@hypercerts-org/contracts";

const DEFAULT_GRAPH_BASE_URL = "https://api.thegraph.com/subgraphs/name/hypercerts-admin";

// The APIs we expose

const APIS: { [key: string]: string } = {
  metadata: "https://hypercerts-api.vercel.app/api/v1/web3up/metadata",
  allowlist: "https://hypercerts-api.vercel.app/api/v1/web3up/allowlist",
};

// These are the deployments we manage
const DEPLOYMENTS: { [key in SupportedChainIds]: Partial<Deployment> } = {
  10: {
    addresses: deployments[10],
    graphName: "hypercerts-optimism-mainnet",
    graphUrl: `${DEFAULT_GRAPH_BASE_URL}/hypercerts-optimism-mainnet`,
  } as const,
  42220: {
    addresses: deployments[42220],
    graphName: "hypercerts-celo",
    graphUrl: `${DEFAULT_GRAPH_BASE_URL}/hypercerts-celo`,
  },
  11155111: {
    addresses: deployments[11155111],
    graphName: "hypercerts-sepolia",
    graphUrl: `${DEFAULT_GRAPH_BASE_URL}/hypercerts-sepolia`,
  } as const,
};

// Example schema on Sepolia
// https://sepolia.easscan.org/schema/view/0xe542f797c9407ccb56e539d14c83718bf35c1d0f3c768bc2623aca56badfde51
const EAS_SCHEMAS = {
  sepolia: {
    duplicate: {
      uid: "0xe542f797c9407ccb56e539d14c83718bf35c1d0f3c768bc2623aca56badfde51",
      schema: "uint256 chainId, address contract, uint256 claimId",
    },
    contentHash: {
      uid: "0xdf4c41ea0f6263c72aa385580124f41f2898d3613e86c50519fc3cfd7ff13ad4",
      schema: "bytes32 contentHash",
    },
  },
} as const;

export { APIS, DEPLOYMENTS, EAS_SCHEMAS };
