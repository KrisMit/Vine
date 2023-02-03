import React, { useEffect, useState } from 'react';
import { useMarketplaceNFTs } from '../../../hooks/useMarketplaceNFTs';
import { useMetaMaskConnect } from '../../../hooks/useMetaMaskConnect';
import NFTLicenseAgreementView from '../../../views/license-view';
import { object } from 'prop-types';

const LicenseAgreementPage = ({ tokenId, contractAddress }) => {
  const [getData, getMyNFTs, getNFTDetails, myNFTDetails] = useMarketplaceNFTs();
  const [connect, state, isDisabled, accounts] = useMetaMaskConnect();
  const [nftData, setNftData] = useState({});
  const [loading, setLoading] = useState(false);

  if (state === 'Connect') connect();

  useEffect(() => {
    if (accounts.length > 0 && !loading) {
      setLoading(true);
      getNFTDetails(tokenId, contractAddress, accounts[0]).then(data => setNftData(data));
    }
  }, [accounts]);

  return <NFTLicenseAgreementView nft={nftData} />;
};

export default LicenseAgreementPage;
