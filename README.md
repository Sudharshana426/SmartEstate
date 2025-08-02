MetaRealty - Web3 Property Exchange Protocol

Real Estate NFT DApp

> A decentralized real estate marketplace built on Ethereum blockchain, enabling property transactions through NFTs with secure escrow functionality.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Solidity](https://img.shields.io/badge/Solidity-^0.8.0-blue.svg)](https://soliditylang.org/)
[![Hardhat](https://img.shields.io/badge/Hardhat-2.12.0-orange.svg)](https://hardhat.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Usage Guide](#usage-guide)
- [Smart Contracts](#smart-contracts)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

SmartEstate is a revolutionary decentralized application (DApp) that transforms real estate transactions by leveraging blockchain technology. Properties are tokenized as NFTs, enabling transparent, secure, and efficient real estate deals with built-in escrow functionality.

### Key Benefits
- **Decentralized**: No intermediaries, direct peer-to-peer transactions
- **Transparent**: All transactions recorded on blockchain
- **Secure**: Smart contract-based escrow system
- **Efficient**: Automated processes reduce transaction time
- **Global**: Access properties from anywhere in the world

## ✨ Features

### 🏡 Property Management
- **NFT Tokenization**: Each property is minted as a unique ERC-721 token
- **Metadata Storage**: Rich property information (images, attributes, location)
- **Property Listing**: Sellers can list properties with custom pricing

### 💰 Escrow System
- **Secure Transactions**: Multi-party approval system (buyer, seller, inspector, lender)
- **Earnest Deposit**: Buyers can deposit funds to show commitment
- **Inspection Process**: Inspector approval required for transaction completion
- **Automated Settlement**: Smart contract handles fund distribution

### 🔐 Role-Based Access
- **Seller**: List properties, approve sales, receive payments
- **Buyer**: Browse properties, deposit earnest money, purchase homes
- **Inspector**: Verify property conditions, approve/reject inspections
- **Lender**: Approve financing for property purchases

## 🛠 Technology Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Smart Contracts** | Solidity ^0.8.0 | Core business logic and NFT management |
| **Frontend** | React.js 18.2.0 | User interface and Web3 interactions |
| **Blockchain Integration** | Ethers.js v5 | Ethereum blockchain communication |
| **Development Framework** | Hardhat 2.12.0 | Smart contract development and testing |
| **Token Standard** | ERC-721 (OpenZeppelin) | NFT implementation |
| **Testing** | Chai & Hardhat | Smart contract testing |

## 🏗 Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React DApp    │    │  Smart Contracts │    │    Ethereum     │
│                 │    │                 │    │   Blockchain    │
│  ┌───────────┐  │    │  ┌───────────┐  │    │                 │
│  │Navigation │  │    │  │RealEstate │  │    │  ┌───────────┐  │
│  │   Home    │  │◄──►│  │  Escrow   │  │◄──►│  │   NFTs    │  │
│  │  Search   │  │    │  │           │  │    │  │Transactions│  │
│  │  Footer   │  │    │  └───────────┘  │    │  │           │  │
│  └───────────┘  │    │                 │    │  └───────────┘  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download here](https://nodejs.org/en/)
- **npm** or **yarn** package manager
- **MetaMask** browser extension for Web3 interactions
- **Git** for version control

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/sudharshana426/smartestate.git
cd smartestate
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create a `.env` file in the root directory:
```env
PRIVATE_KEY=your_private_key_here
INFURA_PROJECT_ID=your_infura_project_id
ETHERSCAN_API_KEY=your_etherscan_api_key
```

### 4. Compile Smart Contracts
```bash
npx hardhat compile
```

### 5. Run Tests
```bash
npx hardhat test
```

### 6. Start Local Blockchain
```bash
npx hardhat node
```

### 7. Deploy Contracts (New Terminal)
```bash
npx hardhat run ./scripts/deploy.js --network localhost
```

### 8. Start Frontend Application
```bash
npm run start
```

The application will be available at `http://localhost:3000`

## 📖 Usage Guide

### For Property Sellers
1. **Connect Wallet**: Use MetaMask to connect your Ethereum wallet
2. **Mint Property**: Create an NFT for your property with metadata
3. **List Property**: Set price and escrow requirements
4. **Approve Sale**: Approve transactions when ready to sell

### For Property Buyers
1. **Browse Properties**: View available properties in the marketplace
2. **Property Details**: Click on properties to view detailed information
3. **Deposit Earnest Money**: Show commitment by depositing escrow amount
4. **Complete Purchase**: Finalize purchase after all approvals

### For Inspectors
1. **Review Properties**: Inspect properties listed for sale
2. **Update Status**: Mark inspections as passed or failed
3. **Enable Transactions**: Successful inspections enable sales completion

## 📜 Smart Contracts

### RealEstate.sol
- **Purpose**: ERC-721 NFT contract for property tokenization
- **Functions**:
  - `mint()`: Create new property NFTs
  - `totalSupply()`: Get total number of properties
  - Standard ERC-721 functions for transfers and approvals

### Escrow.sol
- **Purpose**: Manages secure property transactions
- **Key Functions**:
  - `list()`: List property for sale
  - `depositEarnest()`: Buyer deposits escrow amount
  - `updateInspectionStatus()`: Inspector updates property status
  - `approveSale()`: Multi-party approval system
  - `finalizeSale()`: Complete property transfer
  - `cancelSale()`: Handle transaction cancellations

## 🧪 Testing

Run the comprehensive test suite:

```bash
# Run all tests
npx hardhat test

# Run tests with gas reporting
REPORT_GAS=true npx hardhat test

# Run specific test file
npx hardhat test test/Escrow.js
```

### Test Coverage
- ✅ Property NFT minting and metadata
- ✅ Escrow deposit and withdrawal
- ✅ Multi-party approval system
- ✅ Transaction finalization
- ✅ Error handling and edge cases

## 🚀 Deployment

### Local Development
Already covered in the setup instructions above.

### Testnet Deployment (Goerli)
```bash
npx hardhat run scripts/deploy.js --network goerli
```

### Mainnet Deployment
```bash
npx hardhat run scripts/deploy.js --network mainnet
```

**⚠️ Warning**: Ensure you have sufficient ETH for gas fees and thoroughly test on testnets before mainnet deployment.

## 📁 Project Structure

```
smartestate/
├── contracts/           # Solidity smart contracts
│   ├── RealEstate.sol
│   └── Escrow.sol
├── scripts/            # Deployment scripts
│   └── deploy.js
├── test/               # Smart contract tests
│   └── Escrow.js
├── src/                # React frontend
│   ├── components/     # React components
│   ├── abis/          # Contract ABIs
│   └── App.js         # Main application
├── metadata/           # Property metadata files
├── public/            # Static files
└── README.md          # This file
```

## 🤝 Contributing

We welcome contributions to SmartEstate! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow Solidity best practices
- Write comprehensive tests
- Use meaningful commit messages
- Update documentation for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Repository**: [GitHub](https://github.com/sudharshana426/smartestate)
- **Documentation**: [Wiki](https://github.com/sudharshana426/smartestate/wiki)
- **Issues**: [GitHub Issues](https://github.com/sudharshana426/smartestate/issues)

## 📞 Support

If you have any questions or need support:

- 📧 **Email**: [Create an issue](https://github.com/sudharshana426/smartestate/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/sudharshana426/smartestate/discussions)


ng

This README now serves as a comprehensive guide that would help both developers and users understand and interact with the SmartEstate project effectively.
