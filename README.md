# ETHOnlineHackathon23

## set up localy:

Init Submodules

```git submodule update --init --recursive```


## B. set up Tableland Hardhat:

Instead of hardhat you can spin up a Tableland node version which gives you access to a web3-native database
``` yarn chainTL ```

In the same directory open your second terminal and deploy your contracts on the local chain
``` yarn deployTL --reset```

## start Frontend
Still in root open your third terminal and start your frontend with: 
``` yarn start ```



# Tokenbound Character Sheet

## A Character Sheet that turns every NFT into a RPG character

The idea is, that every NFT can mint its own Character Sheet into its tokenbound account. This allows character to interact with game contracts, like Tournaments to earn experience points, which are secured by ApeCoin. The character can use these XPs to improve its skill-tree, or equip higher level in-game items (which are NFTs hold by token in its tokenbound account).
The rewards for these games should not be play to earn, but more of a nice to have in case you want to reset your character to zero. The contract stakes ApeCoins by default to generate new XP rewards for players, but other mechanisms like lending or Compoind are also possible.

The games characters are playing would be decentral in nature, as anyone can create one. Only good security measures should be thought of to make the rewards fair and fun


## Technical Implementation

 This project uses Scaffold-ETH-2 as foundation. I've installed Tablelands Hardhat extension to utilise the database tables contract. Then I created all the smart contracts needed for a proof of concept. You will find a generic ERC-721, an "ApeCoin" and an ApeCoin Staking contract in this project. 

Also part of this system is the ERC-6551 implementation, with Registry, Proxy and Implementation.

Lastly we have the Character Sheet ERC-721 contract, which creates a table on Tableland and updates the content accordingly to inputs (for example game contracts) .

In the end an ERC-721 token owns an Tokenbound account, which holds a Character Sheet, which writes data into Tableland database.


# 🏗 Scaffold-ETH 2

🧪 This project uses Scaffold-ETH 2 as foundation. An open-source, up-to-date toolkit for building decentralized applications (dapps) on the Ethereum blockchain. It's designed to make it easier for developers to create and deploy smart contracts and build user interfaces that interact with those contracts.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, and Typescript.

- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.

To learn more visit: https://scaffoldeth.io/