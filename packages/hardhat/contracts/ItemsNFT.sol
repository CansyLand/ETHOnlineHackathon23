// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";


contract ItemsNFT is 
	ERC721, 
	ERC721URIStorage,
    ERC721Enumerable
    {
    uint256 public _nextTokenId = 0;

    constructor()
        ERC721("items", "IT")
    {}

    function _baseURI() internal pure override returns (string memory) {
        return "http://localhost:3000/nftsItems/";
    }

    function mintSix(address to) public {
        for (uint i = 1; i <= 6; i++) {
            uint256 tokenId = _nextTokenId++;
            _safeMint(to, tokenId);
            _setTokenURI(tokenId, Strings.toString(tokenId));
        }
    }

    // The following functions are overrides required by Solidity ERC721URIStorage.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        uint256 imageId = tokenId % 12;
        string memory uri = super.tokenURI(imageId);
        return string(abi.encodePacked(uri, ".png"));
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);

    }
}