// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract NFTSwap {
    address private _owner;
    mapping(address => uint256) private _tokenPools;

    struct NFTSwapInfo {
        uint256 amount;
        address swappedTokenType;
        bool isExpired;
    }

    struct NFTCollectionInfo {
        uint256 amount;
        address swapTokenType;
        bool isActive;
    }

    mapping(address => mapping(bytes32 => NFTSwapInfo)) private _userNFTSwaps;

    // Mapping to track NFT owners by token ID
    mapping(uint256 => address) private _nftOwners;

    // Mapping to store information about NFT collections
    mapping(address => NFTCollectionInfo) private _nftCollection;

    // Events
    event NFTSwappedToToken(address indexed user, address indexed nftToken, uint256 indexed tokenId, address inputToken, uint256 amount);
    event TokenSwappedToNFT(address indexed user, address indexed nftToken, uint256 indexed tokenId, address inputToken, uint256 amount);
    event NFTCollectionUpdated(address indexed nftToken, uint256 amount, address swapTokenType, bool isActive);

    constructor() {
        _owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == _owner, "Only the contract owner can call this function");
        _;
    }

    // Sets a new owner for the contract
    function setOwner(address newOwner) external onlyOwner {
        require(newOwner != address(0), "Invalid owner address");
        _owner = newOwner;
    }

    // Checks if the caller is the owner of the contract
    function isOwner() external view returns (bool) {
        return msg.sender == _owner;
    }

    // Swaps an NFT for tokens
    function swapNFTToToken(uint256 tokenId, address inputToken, address tokenAddress) payable external {
        require(_nftOwners[tokenId] == address(0), "NFT already deposited");
        require(tokenAddress != address(0), "Invalid token address");

        bytes32 key = generateKey(inputToken, tokenId);

        uint256 amount = getSwapAmount(_nftCollection[inputToken].swapTokenType, tokenId);

        require(amount > 0, "Invalid swap amount");
        require(msg.value >= amount, "Invalid swap amount");

        _userNFTSwaps[msg.sender][key] = NFTSwapInfo(amount, inputToken, true);
        _nftOwners[tokenId] = msg.sender;

        ERC721(msg.sender).transferFrom(msg.sender, address(this), tokenId);
        IERC20(inputToken).transferFrom(msg.sender, address(this), amount);
        
        _tokenPools[inputToken] -= amount;

        emit NFTSwappedToToken(msg.sender, msg.sender, tokenId, inputToken, amount);
    }

    // Swaps tokens for an NFT
    function swapTokenToNFT(uint256 tokenId) external payable {
        require(_nftOwners[tokenId] == msg.sender, "You don't own this NFT");

        bytes32 key = generateKey(msg.sender, tokenId);

        NFTSwapInfo storage swapInfo = _userNFTSwaps[msg.sender][key];
        require(!swapInfo.isExpired, "The swapped NFT is expired");

        uint256 amount = swapInfo.amount;
        address nftOwner = _nftOwners[tokenId];
        address inputToken = swapInfo.swappedTokenType;

        require(msg.value == amount, "Incorrect token amount sent");
        require(inputToken == ERC721(msg.sender).ownerOf(tokenId), "Invalid token type");

        delete _nftOwners[tokenId];
        delete _userNFTSwaps[msg.sender][key];

        ERC721(msg.sender).transferFrom(address(this), msg.sender, tokenId);
        payable(nftOwner).transfer(amount);
        _tokenPools[inputToken] += amount;

        emit TokenSwappedToNFT(msg.sender, msg.sender, tokenId, inputToken, amount);
    }

    // Retrieves the swap information for a given user and token ID
    function getSwapInfo(address user, uint256 tokenId) external view returns (address swappedTokenType, uint256 amount, bool isExpired) {
        bytes32 key = generateKey(user, tokenId);

        NFTSwapInfo storage swapInfo = _userNFTSwaps[user][key];
        return (swapInfo.swappedTokenType, swapInfo.amount, swapInfo.isExpired);
    }

    // Retrieves the token pool balance for a given token
    function getTokenPool(address token) external view returns (uint256) {
        return _tokenPools[token];
    }

    // Retrieves the swap amount for a given swap token type and token ID
    function getSwapAmount(address swapTokenType, uint256 tokenId) internal view returns (uint256) {
        bytes32 key = generateKey(swapTokenType, tokenId);
        return _nftCollection[swapTokenType].amount;
    }

    // Generates a unique key by concatenating the collection address and the NFT ID
    function generateKey(address collectionAddress, uint256 tokenId) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked(collectionAddress, tokenId));
    }

    // Updates the information for an NFT collection
    function updateNFTCollection(address nftToken, uint256 amount, address swapTokenType, bool isActive) external onlyOwner {
        _nftCollection[nftToken] = NFTCollectionInfo(amount, swapTokenType, isActive);

        emit NFTCollectionUpdated(nftToken, amount, swapTokenType, isActive);
    }
}