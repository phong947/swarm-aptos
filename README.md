
# Swarm Aptos

Swarm Aptos is a decentralized application (dApp) built on the Aptos blockchain, utilizing Next.js for a seamless and responsive frontend experience.

## Features

-   **Decentralized Transactions**: Secure and fast transactions using Aptos blockchain.
    
-   **Next.js Frontend**: Optimized performance and server-side rendering.
    
-   **Smart Contract Integration**: Interaction with Aptos smart contracts.
    
-   **User-Friendly UI**: Intuitive design for easy navigation.
    
-   **Wallet Connectivity**: Supports Aptos-compatible wallets for authentication and transactions.
    

## Prerequisites

Ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (v16+ recommended)
    
-   [Yarn](https://yarnpkg.com/) or npm
    
-   Aptos CLI
    
-   Aptos Wallet (e.g., Martian, Petra)
    

## Installation

1.  Clone the repository:
    
    ```
    git clone https://github.com/phong947/swarm-aptos.git
    cd swarm-aptos
    ```
    
2.  Install dependencies:
    
    ```
    yarn install
    ```
    
    or
    
    ```
    npm install
    ```
    

## Configuration

Create a `.env.local` file in the root directory and add the necessary environment variables:

```
NEXT_PUBLIC_APTOS_NETWORK=mainnet # or testnet\NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address
NEXT_PUBLIC_WALLET_PROVIDER=wallet_provider_url
```

## Running the Project

To start the development server:

```
yarn dev
```

OR

```
npm run dev
```

Open http://localhost:3000 in your browser.

## Building for Production

To build and start the application in production mode:

```
yarn build && yarn start
```

OR

```
npm run build && npm start
```

## Deployment

You can deploy the application to Vercel, Netlify, or any hosting platform supporting Next.js.

```
yarn deploy
```

## Contributing

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

## License

This project is licensed under the MIT License.
