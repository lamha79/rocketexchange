// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract NFTSwap {
    address private _owner;
    mapping(address => uint256) private _tokenPools;

    struct NFTSwapInfo {
        address swappedTokenType;
        uint256 amount;
        bool isActive;
    }

    struct NFTCollectionInfo {
        address swapTokenType;
        uint256 amount;
    }

    mapping(address => mapping(uint256 => NFTSwapInfo)) private _userNFTSwaps;
    mapping(uint256 => address) private _nftOwners;
    mapping(address => NFTCollectionInfo) private _nftCollection;

    constructor() {
        _owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == _owner, "Only the contract owner can call this function");
        _;
    }

    function setOwner(address newOwner) external onlyOwner {
        require(newOwner != address(0), "Invalid owner address");
        _owner = newOwner;
    }

    function swapNFTToToken(uint256 tokenId, address inputToken, address priceFeedAddress) external {
        require(_nftOwners[tokenId] == address(0), "NFT already deposited");
        require(priceFeedAddress != address(0), "Invalid price feed address");

        uint256 swapPrice = getLatestTokenPrice(priceFeedAddress);
        // TODO: get amount from the collection
        uint256 amount = 1 //getSwapAmount(_nftCollection[inputToken].swapTokenType, tokenId); // Retrieve amount from NFT token contract

        require(amount <= swapPrice, "Invalid amount");

        _userNFTSwaps[msg.sender][tokenId] = NFTSwapInfo(inputToken, amount, true);
        _nftOwners[tokenId] = msg.sender;

        ERC721(msg.sender).transferFrom(msg.sender, address(this), tokenId);
        IERC20(inputToken).transferFrom(msg.sender, address(this), amount);
        _tokenPools[inputToken] += amount; // Update token pool
    }

    function swapTokenToNFT(uint256 tokenId) external payable {
        require(_nftOwners[tokenId] == msg.sender, "You don't own this NFT");

        NFTSwapInfo storage swapInfo = _userNFTSwaps[msg.sender][tokenId];
        require(swapInfo.isActive, "NFT is not active");

        uint256 amount = swapInfo.amount;
        address nftOwner = _nftOwners[tokenId];
        address inputToken = swapInfo.swappedTokenType;

        require(msg.value == amount, "Incorrect token amount sent");
        require(inputToken == ERC721(msg.sender).ownerOf(tokenId), "Invalid token type");

        delete _nftOwners[tokenId];
        delete _userNFTSwaps[msg.sender][tokenId];

        ERC721(msg.sender).transferFrom(address(this), msg.sender, tokenId);
        payable(nftOwner).transfer(amount);
        _tokenPools[inputToken] -= amount; // Update token pool
    }

    function getSwapInfo(address user, uint256 tokenId) external view returns (address swappedTokenType, uint256 amount, bool isActive) {
        NFTSwapInfo storage swapInfo = _userNFTSwaps[user][tokenId];
        return (swapInfo.swappedTokenType, swapInfo.amount, swapInfo.isActive);
    }

    function getTokenPool(address token) external view returns (uint256) {
        return _tokenPools[token];
    }

    function getLatestTokenPrice(address priceFeedAddress) internal view returns (uint256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(priceFeedAddress);
        (, int256 price, , , ) = priceFeed.latestRoundData();
        require(price > 0, "Invalid token price");
        return uint256(price);
    }

    function getNFTMinter(uint256 tokenId) external view returns (address) {
        return ERC721(msg.sender).creatorOf(tokenId);
    }
}