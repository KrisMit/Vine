import React, { useEffect, useState } from 'react';
import { Scrollbar } from 'react-scrollbars-custom';

import { navigate } from 'gatsby';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { Box } from '@mui/material';

import PDF from '../../../static/license.pdf';
import { Hero } from '../../components/Marketplace/Hero';
import VineLayout from '../../components/vineLayout';
import bg from '../../images/bg-1920-v2.jpg';

const goBack = (tokenId = '', contractAddress = '') => {
  navigate(`/marketplace`);
};

function License({ location }) {
  const path = location.pathname.split('/');
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [file, setFile] = useState('./license.pdf');
  const isSSR = typeof window === 'undefined';

  useEffect(() => {}, [pageNumber]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const seller = path[2];
  const tokenId = path[3];

  return (
    <VineLayout>
      <Hero />
      <Box style={styles.background}>
        <div onClick={() => goBack(tokenId, seller)}>
          <ArrowBackIcon sx={{ color: '#fff', '&:hover': { cursor: 'pointer' } }} />
        </div>
        <Typography
          color="black"
          variant="body1"
          padding={5}
          marginLeft="5"
          backgroundColor="white"
          fontSize="19!important"
          fontFamily=" Georgia"
          borderRadius={4}
          marginBottom={2}
          sx={{
            fontSize: {
              md: 20,
              sm: 15,
              xs: 11,
            },
          }}
        >
          This Non-Fungible Token (“NFT”) License Agreement (“Agreement”) is dated as of [ ], 2022 and is a legally
          binding agreement between youand Lakeshore Village Entertainment, LLC (“LVE”) that describes the rights in the
          Artwork (defined below) you may obtain when you purchase any LVE NFT (also defined below). For clarity, this
          Agreement does not otherwise govern the transaction that is effectuated on the Ethereum blockchain when you
          buy or offer to buy any LVE NFT, including through any related decentralized technologies, websites, services,
          tools, applications, smart contracts, and API’s, which are provided by third party vendors (including but not
          limited to ConsenSys Software Inc. d/b/a Metamask and Ozone Networks, Inc. d/b/a OpenSea) and governed by and
          subject to the terms of use provided by those third party vendors, unless such third party terms of use
          conflict or are inconsistent with the terms of this Agreement, in which case the terms of this Agreement shall
          prevail.
          <br />
          <br />
          1. Definitions. “Artwork” means the original artwork that was minted as a LVE NFT, a two- dimensional copy of
          which is attached hereto as Schedule “1”. "LVE NFT" means a unique Ethereum (“ETH”) blockchain-tracked,
          non-fungible token that serves as a digital collectible and was originally offered for sale by LVE. “Own” or
          “Owned” means, with respect to one or moreLVE NFT(s), one that (a) you originally purchased from LVE; or (b)
          purchased on an Approved Marketplace from a legitimate owner of that LVE NFT(s). “Approved Marketplace” means
          the OpenSea marketplace operated by Ozone Networks, Inc.
          <br />
          <br />
          2. License. Subject to your compliance with the terms of this Agreement, LVE hereby grants you a worldwide,
          personal, limited license, solely with respect to any LVE NFT(s) that you Own, to display the Artwork
          associated with such LVE NFT(s), privately or publicly, solely for personal, non-commercial purposes,
          including on social media platforms, digital galleries, or otherwise on the Internet or in association with
          your offer to sell or trade your LVE NFT(s). This license does not grant you any rights in or to the Artwork
          separate from the associated LVENFT(s), including any of the copyrights described in Section 4 below.
          <br />
          <br />
          3. Payment. You shall pay to LVE one-time fee specified in Schedule 2 (“Fee”). The Fee shall be payable upon
          execution of this Agreement. For the avoidance of any doubt, the license granted under this Agreement will not
          commence until LVE’s receipt of the Fee.
          <br />
          <br />
          4. Restrictions. You agree that you may not, and will not permit any third party todo or attempt to do any of
          the following without LVE’s express prior written consent in each case: (i) modify the Artwork associated with
          your LVE NFT(s) in any way; (ii) use the Artwork to advertise, market, or sell any product or service; (iii)
          use the Artwork in connection with malicious, harmful, offensive or obscene images, videos, or other materials
          or forms of media, including any that depict hatred, intolerance, violence, cruelty, or anything else that
          could reasonably be found to constitute hate speech or otherwise violate applicable laws or regulations or
          infringe upon the rights of others; (iv) use or incorporate the Artwork in movies, videos, video games, or any
          other forms of media for a commercial purpose; (v) sell, distribute for commercial gain, or otherwise
          commercialize merchandise that includes, contains, or consists of the Artwork; (vi) trademark, copyright, or
          seek to trademark, copyright, or otherwise acquire additional intellectual property rights in or to the
          Artwork, including any LVE name, trademark, logo, trade dress (including the red border design), or other
          source indicators contained or depicted therein; (vii) attempt to mint, tokenize, or create an additional
          cryptographic token representing the Artwork on any platform; (viii) falsify, misrepresent, or conceal the
          authorship of the Artwork or the LVE NFT(s); or (ix) otherwise commercially use or exploit any Artwork for
          your or any third party’s benefit, including by selling copies of any Artwork or selling derivative works
          embodying any Artwork.
          <br />
          <br />
          5. Ownership. You acknowledge and agree that LVE (or, as applicable, its licensors) owns all legal right,
          title and interest in and to the Artwork, and all intellectual property rights therein. The rights that you
          have in and to the Artwork are limited to those expressly described in Section 2 of this Agreement. LVE (on
          behalf of itself and, as applicable, its licensors) reserves all other rights in and to the Artwork, including
          all copyrights in and to the Artwork (e.g., the right to reproduce and make copies, to prepare derivate works,
          to distribute, sell, or transfer, to display, to perform, and to publicly display and publicly perform).
          <br />
          <br />
          6. License Term. The license granted in Section 2 applies only to the extent that you continue to Own the
          applicable LVE NFT. If at any time you sell, trade, donate, give away, or transfer your LVE NFT(s) to a new
          Owner through an Approved Marketplace, the license granted in Section 2 shall be transferred to that new
          Owner, and you will have no further rights in or to the LVE NFT or Artwork associated with that LVE NFT. If at
          any time you burn or otherwise dispose of your LVE NFT for any reason, or sell, trade, donate, give away, or
          transfer your LVE NFT other than through an Approved Marketplace, the license granted in Section 2 will
          immediately expire with respect to that LVE NFT without the requirement of notice or any further action, and
          you will have no further rights in or to the LVE NFT or Artwork associated with that LVE NFT.
          <br />
          <br />
          7. Indemnification. You shall indemnify, defend (at LVE’s request) and hold harmless LVE, its affiliates and
          licensors, and its and their respective officers, agents, directors, representatives, contractors, and
          employees, from and against any and all claims, suits, demands, actions, losses, liabilities, damages,
          judgements, penalties, fines, expenses and other costs (including reasonable attorneys’ fees) arising from
          your breach or alleged breach of this Agreement. LVE will also have the right to provide our own defense
          additionally or alternatively at our own expense.
          <br />
          <br />
          8. Limitation of Liability. In no event will LVE be liable to you for any special, incidental, exemplary,
          indirect, punitive, or consequential damages (including loss of profits) with respect to the subject matter of
          this Agreement, whether such liability arises from any claim based upon contract, warranty, tort (including
          negligence), strict liability or otherwise, and whether or not you have been advised of the possibility of
          such loss or damage. LVE’s aggregate liability under this Agreement shall not exceed the net revenues actually
          received by LVEin connection with any transaction in which You purchased or sold your LVE NFT(s). The
          foregoing limitation of liability shall only apply to the extent permitted by applicable law. In no event will
          LVE be liable for any inability for you to access the Artwork for any reason, including as a result of any
          downtime, failure, obsolescence, removal, termination or other disruption relating to (a) the servers upon
          which the Artwork is stored; (b) the [OpenSea platform]; or (c) any other NFT platform.
          <br />
          <br />
          9. Linking Your Cryptocurrency Wallet. When/if you link your cryptocurrency wallet, you understand and agree
          that you are solely responsible for maintaining the security of your wallet and your control over any
          wallet-related authentication credentials, private or public cryptocurrency keys, other non-fungible tokens or
          cryptocurrencies that are stored in or are accessible through your wallet. Any unauthorized access to your
          cryptocurrency wallet by third parties could result in the loss or theft of LVE NFT(s) and/or funds held in
          your wallet and any associated wallets, including any linked financial information such as bank account(s) or
          credit card(s). LVEis not responsible for managing and maintaining the security of your cryptocurrency wallet
          nor for any unauthorized access to or use of your cryptocurrency wallet.
          <br />
          <br />
          10. Risks The price and liquidity of blockchain assets, including LVE NFT(s), are extremely volatile and may
          be subject to large fluctuations. Fluctuations in the price of other digital assets could materially and
          adversely affect LVE NFT(s), which may also be subject to significant price volatility. Legislative and
          regulatory changes or actions at the state, federal, or international level may adversely affect the use,
          transfer, exchange, and value of LVE NFT(s). Some transactions in LVE NFT(s) shall be deemed to be made when 3
          recorded on a public ledger, which is not necessarily the date or time that you initiated the transaction. The
          value of LVE NFT(s) may be derived from the continued willingness of market participants to exchange fiat
          currency or digital assets for LVE NFT(s), which may result in the potential for permanent and total loss of
          value of a particular LVE NFT should the market for that LVE NFT disappear.
          <br />
          <br />
          11. Assignment. LVE will have the unrestricted right to assign this Agreement and to assign, subcontract,
          license and sublicense any or all of its rights and obligations hereunder. This Agreement (including, without
          limitation, the license granted hereunder) is personal to you and shall not be assigned or transferred by you,
          except to a new Owner of the LVE NFT(s) as set forth in Section 5 above. Any other attempt by you to assign,
          sub-license, or transfer your rights under this Agreement shall be null and void.
          <br />
          <br />
          12. Dispute Resolution. This Agreement will be governed by, and construed and interpreted in accordance with,
          the laws of the California, without regard to its conflicts-of-law principles. Any dispute arising out of or
          relating to this Agreement may be brought and adjudicated only in the courts, federal or state, located in the
          County of Los Angeles, State of California, and LVE and you submit to the exclusive jurisdiction of such
          courts and waive any objections based upon improper venue or inconvenient forum. Neither LVE nor you will seek
          to litigate any claims against the other on a class action or representative party basis and shall pursue any
          claims solely on an individual basis. [In the event of any disputes under or relating to the terms of this
          Agreement, or thematerial breach, validity, or legality thereof (a "Claim"), it is agreed that the Claim shall
          be submitted to arbitration to JAMS in Los Angeles, California in accordance with the JAMS rules, and judgment
          upon any award rendered by the arbitrator(s) may be entered in any court of competent jurisdiction. The
          prevailing party shall be entitled to recover any and all reasonable attorney's fees and other costs. This
          arbitration provision shall remain in full force and effect notwithstanding the nature of any Claim or defense
          hereunder.]
          <br />
          <br />
          13. Remedies. Your rights and remedies in the event of any breach of this Agreement are strictly limited to
          the right, if any, to recover damages in an action at law, and you acknowledge that your remedy of money
          damages is adequate. You will not be entitled by reason of any such breach, and you will not seek, any
          equitable relief, whether injunctive or otherwise.
          <br />
          <br />
          14. Miscellaneous Terms. This Agreement constitutes the complete understanding and agreement of you and LVE
          with respect to the Articles and supersedes any and all prior or contemporaneous written or oral agreements
          between you and LVE with respect to all Articles. Prior agreements 4 between LVEand you relating to any
          article(s) will continue to govern those prior article(s). The language of any clause or term of this
          Agreement will not be construed for or against the drafter. No right or term of this Agreement will be deemed
          waived, and no breach of this Agreement excused, unless the waiver or consent is in writing and signed by you
          and LVE. Any modification or amendment to this Agreement must be made in writing and signed by you and LVE.
        </Typography>
      </Box>
    </VineLayout>
  );
}

export default License;

const styles = {
  text: {
    fontSize: {
      xl: 14,
      lg: 14,
      md: 14,
      xs: 11,
    },
    marginLeft: { xs: 0, md: '10%' },
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
  properties: {
    fontSize: {
      md: 14,
      xs: 12,
    },
    marginLeft: { xs: 1, md: 4, xl: 0.5 },
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    textAlign: 'left',
    marginTop: 1,
  },

  hr: {
    margin: { xs: '12px', md: 'auto 40px' },
    marginLeft: { xs: 2, md: 5, xl: 9 },
  },
  hr1: {
    margin: { xs: 'none', md: 'auto 25px' },
    marginTop: { xs: 1, md: 2 },
    marginLeft: { xs: 0, md: 3, xl: 7 },
  },
  hr2: {
    margin: { xs: 'none', md: 'auto 25px' },
    marginTop: { xs: 1, md: 2 },
    marginLeft: { xs: 0, md: 3, xl: 7 },
  },
  background: {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    padding: '8%',
  },
};
