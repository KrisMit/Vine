// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DvlpMarketplace  is ReentrancyGuard, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _listingId;

    mapping(address => mapping(uint256 => NFTListing)) public NFTlistings;
    mapping(address => uint256) public balanceSold;

    struct NFTListing {
        uint256 listingId;
        uint256 tokenId;
        uint256 tokenAmmount;
        uint256 price;
        address payable seller;
        bool soldFl;
        bool saleFl;
    }

    event NFTListingAdded (
        uint256 indexed listingId,
        address indexed tokenContract,
        uint256 indexed tokenId,
        uint256 tokenAmmount,
        uint256 price,
        address payable seller,
        bool soldFl,
        bool saleFl
    );

    function addNFTListing (uint256 priceNFT , address contractNFT, uint256 tokenId, uint256 tokenAmmount ) public nonReentrant{
        ERC1155 contractToken = ERC1155(contractNFT);
        require(contractToken.balanceOf(msg.sender, tokenId)>0, "For listing caller must own the token");
        require(contractToken.isApprovedForAll(msg.sender, address(this)), "Contract must be approved");

        _listingId.increment();
        uint256 _itemId = _listingId.current();

        NFTlistings[contractNFT][_itemId] = NFTListing(_itemId, tokenId, tokenAmmount, priceNFT, payable(msg.sender), false, true);

        emit NFTListingAdded(_itemId, contractNFT, tokenId, tokenAmmount, priceNFT, payable(msg.sender), false, true);
    }

    function addNFTListingBatch (uint256[] memory _priceNFTs , address contractNFT, uint256[] memory _tokenIds, uint256[] memory _tokenAmmounts ) public nonReentrant{
        ERC1155 contractToken = ERC1155(contractNFT);
        require(contractToken.isApprovedForAll(msg.sender, address(this)), "Contract must be approved");
        require(_tokenIds.length < 21, "Maximum 20 tokens to list in batch");

        for (uint256 i = 0; i < _tokenIds.length; i++) {
            require(contractToken.balanceOf(msg.sender, _tokenIds[i])>0, "For listing caller must own the token");
            _listingId.increment();
            uint256 _itemId = _listingId.current();
            NFTlistings[contractNFT][_itemId] = NFTListing(_itemId, _tokenIds[i], _tokenAmmounts[i], _priceNFTs[i], payable(msg.sender), false, true);    
            emit NFTListingAdded(_itemId, contractNFT, _tokenIds[i], _tokenAmmounts[i], _priceNFTs[i], payable(msg.sender), false, true);
        }
    }

    function cancelNFTListing (address contractNFT, uint256 itemId) public nonReentrant{
        ERC1155 contractToken = ERC1155(contractNFT);
        NFTListing storage itemNFT = NFTlistings[contractNFT][itemId];
        uint256 tokenId = itemNFT.tokenId;
        require(contractToken.balanceOf(msg.sender, tokenId)>0, "For listing caller must own the token");
        //require(contractToken.isApprovedForAll(msg.sender, address(this)), "Contract must be approved");

        itemNFT.saleFl = false;
    }

    function changeNFTPrice (address contractNFT, uint256 itemId, uint256 priceNFT) public nonReentrant{
        ERC1155 contractToken = ERC1155(contractNFT);
        NFTListing storage itemNFT = NFTlistings[contractNFT][itemId];
        uint256 tokenId = itemNFT.tokenId;
        require(contractToken.balanceOf(msg.sender, tokenId)>0, "For listing caller must own the token");
        require(contractToken.isApprovedForAll(msg.sender, address(this)), "Contract must be approved");
        itemNFT.price = priceNFT;
    }

    function buyNFT (address contractNFT, uint256 itemId, uint256 tokenAmmount) public payable nonReentrant{
        ERC1155 contractToken = ERC1155(contractNFT);

        NFTListing storage itemNFT = NFTlistings[contractNFT][itemId];
        uint256 tokenId = itemNFT.tokenId;

        //require(contractToken.isApprovedForAll(msg.sender, address(this)), "Contract must be approved");
        require(contractToken.balanceOf(itemNFT.seller, tokenId)>0, "can not sell something that does not exists");
        require(msg.value == itemNFT.price * tokenAmmount, "please send required funds");

        itemNFT.seller.transfer(msg.value);
        contractToken.safeTransferFrom(itemNFT.seller, msg.sender, tokenId, tokenAmmount, "");

        itemNFT.soldFl = true;
        itemNFT.saleFl = false;
    }

    function withdrawToken (uint256 tokenAmmount, address payable receiverAddress) public nonReentrant{
        require(tokenAmmount <= balanceSold[msg.sender], "insufficient ammount to withdraw");

        balanceSold[msg.sender] -= tokenAmmount;
        receiverAddress.transfer(tokenAmmount);
    }

    function fetchNFTListings(address contractNFT) public view returns(NFTListing[] memory){
        uint256 nftCount = _listingId.current();
        uint256 currentIndex = 0;

        NFTListing[] memory nfts = new NFTListing[](nftCount);
        for (uint i = 0; i < nftCount+1; i++){
            if (NFTlistings[contractNFT][i].saleFl == true){
                NFTListing storage currentItem = NFTlistings[contractNFT][i];
                nfts[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return nfts;
    }
}