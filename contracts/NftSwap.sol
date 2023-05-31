// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract NFTSwap {
    address private _owner;

    struct NFTSwapInfo {
        uint256 swapPrice;
        bool isActive;
    }

    mapping(address => mapping(uint256 => NFTSwapInfo)) private _userNFTSwaps;
    mapping(uint256 => address) private _nftOwners;
    mapping(address => address) private _inputTokenPriceFeeds;

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
        _userNFTSwaps[msg.sender][tokenId] = NFTSwapInfo(swapPrice, true);
        _nftOwners[tokenId] = msg.sender;
        _inputTokenPriceFeeds[inputToken] = priceFeedAddress;

        ERC721(msg.sender).transferFrom(msg.sender, address(this), tokenId);
        IERC20(inputToken).transferFrom(msg.sender, address(this), swapPrice);
    }

    function swapTokenToNFT(uint256 tokenId) external {
        require(_nftOwners[tokenId] == msg.sender, "You don't own this NFT");

        delete _nftOwners[tokenId];
        delete _userNFTSwaps[msg.sender][tokenId];

        ERC721(msg.sender).transferFrom(address(this), msg.sender, tokenId);
    }

    function getSwapInfo(address user, uint256 tokenId) external view returns (uint256 swapPrice, bool isActive) {
        NFTSwapInfo storage swapInfo = _userNFTSwaps[user][tokenId];
        return (swapInfo.swapPrice, swapInfo.isActive);
    }

    function getLatestTokenPrice(address priceFeedAddress) internal view returns (uint256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(priceFeedAddress);
        (, int256 price, , , ) = priceFeed.latestRoundData();
        require(price > 0, "Invalid token price");
        return uint256(price);
    }
}