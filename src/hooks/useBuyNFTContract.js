import { ethers } from 'ethers';
import Swal from 'sweetalert2';
import { navigate } from 'gatsby';

//import VineDigitalMarketTradev3 from '../artifacts/contracts/VineDigitalMarketTradev3.sol/VineDigitalMarketTradev3.json';
import DvlpMarketplace from '../artifacts/contracts/DvlpMarketplace.sol/DvlpMarketplace.json';
import { infuraRinkeby, marketaddress, nftaddress, openSeaBaseURL } from '../nftconfig';

export const useBuyNFTContract = currentItem => {
  const buy = () => {
    //const nftaddress = '0x2Eeee605C2768C873Be6f5D5728fEb843D068D7F';
    //const marketaddress = '0x73933555Db44DE930399F05097abba4B4d20eBeE';

    const walletProvider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = walletProvider.getSigner();
    const price = currentItem.weiPrice._isBigNumber
      ? currentItem.weiPrice
      : (ethers.utils.parseUnits(currentItem.weiPrice) / 1000000000000000000).toString();

    //const marketContract = new ethers.Contract(marketaddress, VineDigitalMarketTradev3.abi, signer);
    const marketContract = new ethers.Contract(marketaddress, DvlpMarketplace.abi, signer);

    marketContract
      .buyNFT(nftaddress, currentItem.listingId, 1, {
        //gasLimit: 2000000000,
        // maxFeePerGas: 250000000000,
        // maxPriorityFeePerGas: 250000000000,
        gasLimit: 2100000,
        value: currentItem.weiPrice._isBigNumber ? String(price) : price,
      })
      .then(res => {
        console.log(res);
        Swal.fire({
          // icon: 'success',
          title:
            'Your transaction was successful but may take up to 30 minutes to process. Once processed, your purchase will appear in your passport.',
          // text: 'It can take up to 30 minutes to show your nft in your profile.',
          footer: '<a href="/myNfts">Visit Your Passport</a>',
          confirmButtonColor: 'rgb(0,200,245,5.5)',
        }).then(result => {
          if (result.isConfirmed) {
            navigate('/marketplace');
          }
        });
        setTimeout(() => {
          navigate('/marketplace');
        }, 4000);
      })
      .catch(err => {
        console.log(err);
        Swal.fire({
          title: 'This transaction was denied. Please refer to notification in your Metamask Wallet for the reason.',
          // text: err.message,
          // icon: 'error',
          confirmButtonText: 'Return to Marketplace',
          confirmButtonColor: 'rgb(0,200,245,5.5)',
          // confirmButtonText: {
          //   text:'Return to Marketplace',
          //   color: '#000',
          // },
        });
      });
  };
  return [buy];
};
