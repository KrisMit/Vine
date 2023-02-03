import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'gatsby';

import Seo from '../components/seo';
import VineLayout from '../components/vineLayout';
import { fontWeight } from '@mui/system';

const TosPage = () => (
  <VineLayout>
    <Seo title="Terms of Services" />
    <Box style={styles.wrapper}>
      <Typography style={styles.titlemain}>TERMS OF SERVICE</Typography>
      <Typography style={styles.title}>Last Updated: April 29, 2022</Typography>
      <Typography style={styles.title}>1. Introduction</Typography>
      <Typography style={styles.ordtext}>
        Welcome to DVLP (www.dvlpnft.io) (the “Site”), owned and operated by Vine Digital d/b/a DVLP (“DVLP” “we,” “us”,
        or “our”).
      </Typography>
      <Typography style={styles.ordtext}>
        These Terms of Service (“Terms”) are a legally binding agreement between you and DVLP and set forth the terms
        for your access to and use of the Site (however accessed, whether via web, mobile or otherwise) and the limited
        services made available through the Site as described herein; including without limitation using our services to
        view, explore, and purchase, sell, or transfer NFTs (“Originating Rights Owner NFTs”) originally minted by our
        third party partners (“Originating Rights Owners” ) on public blockchains (collectively, the Site and services
        collectively the “Services”). “NFT” in these Terms means a non-fungible token or similar digital item
        implemented on a blockchain (such as the Ethereum blockchain), which uses smart contracts to link to or
        otherwise be associated with certain content or data.
      </Typography>
      <Typography style={styles.ordtext}>
        For purposes of these Terms, “user”, “you”, and “your” means you as the user of the Services.
      </Typography>
    </Box>
    <Typography style={styles.title}>2. Accepting these Terms</Typography>
    <Typography style={styles.ordtext}>
      PLEASE READ THESE TERMS CAREFULLY BEFORE USING OUR SERVICES. THESE TERMS GOVERN YOUR USE OF THE SITE AND SERVICES,
      UNLESS WE HAVE EXECUTED A SEPARATE WRITTEN AGREEMENT OR PROVIDED SPECIFIC TERMS TO YOU FOR THAT PURPOSE. THEY
      CONTAIN IMPORTANT INFORMATION AND AFFECT YOUR LEGAL RIGHTS. BY ACCESSING THE SITE AND/OR SERVICES, CLICKING TO
      ACCEPT, AND/OR COMPLETING THE REGISTRATION PROCESS FOR AN ACCOUNT, (A) YOU AGREE TO BE BOUND BY THESE TERMS, OUR
      PRIVACY POLICY AND ALL OF THE TERMS INCORPORATED HEREIN BY REFERENCE; AND (B) YOU REPRESENT AND WARRANT THAT: (I)
      YOU ARE AT LEAST 18 YEARS OF AGE; (II) YOU HAVE NOT PREVIOUSLY BEEN SUSPENDED OR REMOVED FROM THE SITE OR THE
      SERVICES; AND (III) YOUR USE OF THE SITE AND THE SERVICES IS IN COMPLIANCE WITH ALL APPLICABLE LAWS AND
      REGULATIONS. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE SERVICES.
    </Typography>
    <Typography style={styles.ordtext}>
      ARBITRATION NOTICE AND CLASS ACTION WAIVER: EXCEPT FOR CERTAIN TYPES OF DISPUTES DESCRIBED IN SECTION 15 BELOW,
      YOU AGREE THAT DISPUTES BETWEEN YOU AND DVLP WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION AND YOU WAIVE
      YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.
    </Typography>
    <Typography style={styles.ordtext}>
      DVLP reserves the right to change or modify these Terms of Use at any time and in our sole discretion. You agree
      and understand that by logging into your account, accessing or using the Services following any change to these
      Terms of Use, you agree to the revised Terms of Use and all of the terms incorporated therein by reference. We
      encourage you to review the Terms of Use from time to time to ensure that you understand the terms and conditions
      that apply when you access or use the Services. If we make material changes to these Terms, we will use reasonable
      efforts to provide notice of such changes, such as by providing notice through the Site or updating the “Last
      Updated” date at the beginning of these Terms.
    </Typography>
    <Typography style={styles.title}>3. Your DVLP account</Typography>
    <Typography style={styles.ordtext}>
      You will need to create an account with DVLP to use certain of the Services, for example to purchase an
      Originating Rights Owner NFT. We require all users to be at least 18 years old. If you are at least 13 years old
      but under 18 years old, you may only use DVLP through a parent or guardian's Account and with their approval and
      oversight. That account holder is responsible for your actions using the Account. It is prohibited to use our
      Services if you are under 13 years old.
    </Typography>
    <Typography style={styles.ordtext}>
      When you create an account, we will ask you for some information about yourself, including your name and email
      address. We may also require additional information and/or documents. If you do not provide complete and accurate
      information and/or documents in response to such a request, we may refuse to provide you with the Services.
    </Typography>
    <Typography style={styles.ordtext}>
      When registering, you will be asked to create a username and password. You are solely responsible for maintaining
      the confidentiality of your password and account and for any and all statements made and acts or omissions that
      occur through the use of your password and account. You agree to use a strong password and to keep it
      confidential. Our personnel will never ask you for your password. You may not transfer or share your account with
      anyone, and we reserve the right to immediately terminate your account in the event of any unauthorized transfer
      or sharing of your account. You agree to notify us immediately if your account has been compromised.
    </Typography>
    <Typography style={styles.title}>4. Purchasing and Selling Originating Rights Owner NFTs</Typography>
    <Typography style={styles.ordtextbold}>Originating Rights Owner Drops:</Typography>
    <Typography style={styles.ordtext}>
      a) Descriptions of each drop of Originating Rights Owner NFTs may be made available on the Site, and may include
      Frequently Asked Questions (“FAQs”) (such descriptions and FAQs collectively, “Initial Drop Terms”). Any such
      Initial Drop Terms are incorporated by reference into these Terms and will govern your participation in the
      applicable drop in addition to these Terms. You are responsible for reviewing such information.
    </Typography>
    <Typography style={styles.ordtext}>
      b) Drops of Originating Rights Owner NFTs may be a 'blind drop', which means that each buyer will receive a random
      Originating Rights Owner NFT from the collection that will be revealed upon the end of the minting period as
      described in the Initial Drop Terms.
    </Typography>
    <Typography style={styles.ordtextbold}>Third-Party Vendors:</Typography>
    <Typography style={styles.ordtext}>
      a) Transactions; Wallets. All transactions made through the Services are managed and confirmed on the Ethereum
      blockchain or other blockchains as we may support (“Blockchain”) and as specified in the Initial Drop Terms. DVLP
      is not an electronic wallet provider and to use our Services, you will need to set up and use a third-party
      electronic wallet, for example Metamask (provided by ConsenSys Software Inc.) or other electronic wallet-provider
      that we may from time-to-time support, which allows you to engage in transactions on blockchains (“Wallet
      Provider”). By using your wallet in connection with the Services, you agree that you are using that wallet under
      the terms and conditions of the applicable Wallet Provider.
    </Typography>
    <Typography style={styles.ordtext}>
      b) Third Party Marketplace: Some transactions may be processed on and by third-party marketplaces (“Marketplace”),
      rather than by DVLP. For such transactions processed by Third Party Marketplaces for example, in order to purchase
      the applicable Originating Rights Owner NFT, and to display, store, trade and sell your Originating Rights Owner
      NFT, you may need to set up, an account with the Third Party Marketplace, for example the OpenSea marketplace
      (Ozone Networks, Inc.), as well as an electronic wallet.
    </Typography>
    <Typography style={styles.ordtext}>
      c) Third Party Payment Processors: If we allow you to make payment using a credit card, we will use a third party
      payment processor (the “Payment Processor”) to process payments in connection with your purchase of an Originating
      Rights Owner NFT on the Site.
    </Typography>
    <Typography style={styles.ordtext}>
      d) By using the Services to do any of the foregoing, you agree to the terms of service, and, where applicable, the
      privacy policies of any such third-party vendors, including without limitation Wallet Providers, Marketplaces and
      Payment Processors (collectively, “Third-Party Vendors”). Except as expressly set forth herein, those Third-Party
      Vendor terms govern the transaction that is effectuated on the Ethereum blockchain when you purchase any
      Originating Rights Owner NFT on a Third Party Marketplace, including any related decentralized technologies (e.g.,
      Ethereum), websites, services, tools, applications, smart contracts, and APIs which are provided by such
      Third-Party Vendors.
    </Typography>
    <Typography style={styles.ordtext}>
      e) You hereby expressly grant DVLP the right, power, and authority to transmit your information to such
      Third-Party Vendors as reasonably necessary for DVLP to provide the Services to you. DVLP has no affiliation with
      any Third-Party Vendors. Because DVLP has no control over Third-Party Vendors, or their websites or mobile
      applications, you acknowledge and agree DVLP is not responsible for the availability of such external websites,
      mobile applications or resources accessible from those Third-Party Vendors, and does not endorse and is not
      responsible or liable for any content, advertising, products, services, or other materials available from such
      websites or mobile applications, nor does DVLP endorse any such websites, mobile applications or resources, or the
      products or services assessable on such websites or mobile applications.
    </Typography>
    <Typography style={styles.ordtextbold}>Purchase Terms:</Typography>
    <Typography style={styles.ordtext}>
      a) All purchases effectuated through the Site are final and non-refundable. Purchases may be made by using one or
      more cryptocurrencies that we may elect to accept from time to time. We retain the right in our discretion to
      limit the dollar (or equivalent in other currencies) amount and number of any transactions on the Site. DVLP is
      under no obligation to accept cryptocurrencies and we retain the right in our sole discretion to determine what
      currencies or payment option to accept at any time. You acknowledge and agree that all transactions made and/or
      effectuated through the Site are publicly visible on the Blockchain on which the Originating Rights Owner NFT is
      minted, when made.
    </Typography>
    <Typography style={styles.ordtextbold}>Fees and Taxes:</Typography>
    <Typography style={styles.ordtext}>
      a) We will charge a transaction fee on any and all sales effectuated on our Site, including initial sales between
      the Originating Rights Owner and a buyer and all subsequent sales.
    </Typography>
    <Typography style={styles.ordtext}>
      b) You are responsible for all payments, fees and costs when engaging in any transactions involving Originating
      Rights Owner NFTs, including, without limitation, the purchase price, transaction fees (e.g., “gas” fees) and all
      other fees associated with your use of the Services or the services of Third-Party Vendors, including but not
      limited to purchasing, trading, transferring and/or “burning” an Originating Rights Owner NFT. You also are solely
      responsible for payment of all national, federal, state, local or other taxes of any jurisdiction, of whatever
      nature whether now in effect or imposed in the future by any national federal, state, local, international or any
      other governmental authority or taxing jurisdiction, including, without limitation, any income, sales, use,
      value-added (VAT), goods and services and other taxes and duties associated with your use of the Services, the
      services of Third-Party Vendors, and your purchase of Originating Rights Owner NFTs from any party. You are solely
      responsible for any tax reporting for transactions in which you may be a seller of Originating Rights Owner NFTs.
    </Typography>
    <Typography style={styles.ordtextbold}>License Agreement:</Typography>
    <Typography style={styles.ordtext}>
      You acknowledge and agree that the Originating Rights Owner which issues the Originating Rights Owner NFT's, or
      its licensor(s) as applicable, may own all rights, title and interest in and to any artwork, designs, drawings,
      photographs, labels, logos, insignia, trademarks, trade dress, copyright, recipes, formulas, content, audio-visual
      content, interactive experience and other creative materials that may be linked to or associated with any
      Originating Rights Owner NFT that you own (collectively, “Content”), and all intellectual property rights therein.
      The rights that you have in and to the Content are limited to those expressly stated in the license for an
      Originating Rights Owner NFT granted to you if you purchase such Originating Rights Owner NFT (each a “Limited
      License”) .
    </Typography>
    <Typography style={styles.ordtextbold}>Secondary sales:</Typography>
    <Typography style={styles.ordtext}>
      a) Some Originating Rights Owner NFTs are sold with a requirement that a continuing royalty be paid to the
      Originating Rights Owner upon subsequent sales, and that you, if you are the seller, may be responsible for paying
      such royalty.
    </Typography>
    <Typography style={styles.ordtext}>
      b) You may have the limited right to sell or transfer your Originating Rights Owner NFTs on a Third Party
      Marketplace. We do not monitor or control any Third Party Marketplace, or any other activity beyond that on the
      Site.
    </Typography>
    <Typography style={styles.ordtext}>
      c) If you agree to make any resale or secondary sale of the Originating Rights Owner NFTs either on the Site or a
      Third Party Marketplace (“Resale”), such Resale shall be subject to the Limited License.
    </Typography>
    <Typography style={styles.ordtextbold}>General:</Typography>
    <Typography style={styles.ordtext}>
      In connection with your purchase of any Originating Rights Owner NFT, you acknowledge and agree that:
    </Typography>
    <Typography style={styles.ordtext}>
      a) DVLP is not party to any agreement between any users and DVLP is not the owner or seller of any Originating
      Rights Owner NFT, but rather acts to facilitate the sale of Originating Rights Owner NFTs by other sellers; the
      contract of sale for any Originating Rights Owner NFT will be between you and the seller/Originating Rights Owner;
    </Typography>
    <Typography style={styles.ordtext}>
      b) We make no claims about the identity, legitimacy, functionality, or authenticity of users visible on the
      Services.
    </Typography>
    <Typography style={styles.ordtext}>
      c) Neither Originating Rights Owner nor DVLP are liable for any inability for you to access any media file
      containing, embodying or incorporating a digital copy of the Content (“Digital File”) for any reason, including as
      a result of any downtime, failure, obsolescence, removal, termination or other disruption relating to the servers
      upon which the Digital File is stored;
    </Typography>
    <Typography style={styles.ordtext}>
      d) the ownership, possession or control of an Originating Rights Owner NFT by you does not provide you any
      ownership, title or similar interest in any Content or the Digital File, unless otherwise and only to the extent
      specified in the applicable License Agreement;
    </Typography>
    <Typography style={styles.ordtext}>
      e) you are solely responsible for determining what, if any, taxes apply to your purchase;
    </Typography>
    <Typography style={styles.ordtext}>
      f) DVLP does not control the public blockchains with which you are interacting and we do not control certain smart
      contracts and protocols that may be integral to your ability to complete transactions on these public blockchains.
      Additionally, blockchain transactions are irreversible and DVLP has no ability to reverse any transactions on the
      blockchain.
    </Typography>
    <Typography style={styles.ordtext}>
      g) If you have a dispute with one or more users, YOU RELEASE US FROM CLAIMS, DEMANDS, AND DAMAGES OF EVERY KIND
      AND NATURE, KNOWN AND UNKNOWN, ARISING OUT OF OR IN ANY WAY CONNECTED WITH SUCH DISPUTES. IN ENTERING INTO THIS
      RELEASE YOU EXPRESSLY WAIVE ANY PROTECTIONS (WHETHER STATUTORY OR OTHERWISE) THAT WOULD OTHERWISE LIMIT THE
      COVERAGE OF THIS RELEASE TO INCLUDE THOSE CLAIMS WHICH YOU MAY KNOW OR SUSPECT TO EXIST IN YOUR FAVOR AT THE TIME
      OF AGREEING TO THIS RELEASE.
    </Typography>
    <Typography style={styles.title}>5. Additional Services.</Typography>
    <Typography style={styles.ordtext}>
      Because we have a growing number of services, we sometimes need to provide additional terms for specific services
      (and such services are deemed part of the “Services” hereunder and shall also be subject to these Terms). Those
      additional terms and conditions, which are available with the relevant service, then become part of your agreement
      with us if you use those services. In the event of a conflict between these Terms and any additional applicable
      terms we may provide for a specific service, such additional terms shall control for that specific service.
    </Typography>
    <Typography style={styles.title}>6. Non-Custodial and Custodial Services.</Typography>
    <Typography style={styles.ordtext}>
      If you are using our Services solely through, or your account is linked to a Third-Party Wallet, neither DVLP or
      the Site are custodians of the contents of your wallet, your NFTs held in such wallet, cryptocurrency or other
      funds, and you acknowledge that the operation of the Site does not give DVLP or the Site custody, possession,
      title or control of or to your NFTs, cryptocurrency or other funds.
    </Typography>
    <Typography style={styles.ordtext}>
      We may offer an option for us to hold your Originating Rights Owner NFTs sold to you on the Site. If you choose
      this option for us, we will hold such Originating Rights Owner NFTs to support and help facilitate transactions
      involving your Originating Rights Owner NFTs. For clarity, in doing so neither we nor the Site are custodians of
      the contents of any third-party wallets, non-Originating Rights Owner NFTs you may own, cryptocurrency or other
      funds. Further, to the extent it does so, DVLP (i) takes no ownership or title to your Originating Rights Owner
      NFTs, cryptocurrency or other funds; and (ii) to the extent permitted by law, shall not have any liability to, and
      shall be held harmless by, you for any losses, damages, claims, or liabilities of any kind to the extent arising
      out of the holding of such NFTs, cryptocurrency or other funds. You will be able to transfer your Originating
      Rights Owner NFTs held by DVLP to a third party wallet at any time.
    </Typography>
    <Typography style={styles.title}>7. Ownership</Typography>
    <Typography style={styles.ordtext}>
      The Site. The Site, including its “look and feel” (e.g., text, graphics, images, logos, page headers, button
      icons, and scripts), proprietary content, information and other materials, and all content and other materials
      contained therein, including, without limitation, the DVLP logo and all designs, text, graphics, pictures, data,
      software, sound files, other files, and the selection and arrangement thereof are the proprietary property of DVLP
      or our affiliates, licensors, or users, as applicable, and you agree not to take any action(s) inconsistent with
      such ownership interests. We and our affiliates, licensors, and users, as applicable, reserve all rights in
      connection with the Site and its content, including, without limitation, the exclusive right to create derivative
      works.
    </Typography>
    <Typography style={styles.ordtext}>
      DVLP Trademarks. DVLP's name, logo, trademarks, and any DVLP product or service names, designs, logos, and slogans
      are the intellectual property of DVLP or our affiliates or licensors and may not be copied, imitated or used, in
      whole or in part, without our prior written permission in each instance. You may not use any metatags or other
      “hidden text” utilizing “DVLP” or any other name, trademark or product or service name of DVLP or our affiliates
      or licensors without our prior written permission. In addition, the “look and feel” of the Site constitutes the
      service mark, trademark or trade dress of DVLP and may not be copied, imitated or used, in whole or in part,
      without our prior written permission.
    </Typography>
    <Typography style={styles.ordtext}>
      Third Party Trademarks. All other third-party trademarks, registered trademarks, and product names mentioned on
      the Site or contained in the Content linked to or associated with any Originating Rights Owner NFTs displayed on
      the Site are the property of their respective owners and may not be copied, imitated or used, in whole or in part,
      without the permission of the applicable intellectual property rights holder or as subject to the terms of the
      Limited License.
    </Typography>
    <Typography style={styles.title}>8. Feedback</Typography>
    <Typography style={styles.ordtext}>
      We welcome feedback, comments, and suggestions for improvements to the Site (“Feedback”). You acknowledge and
      expressly agree that any contribution of Feedback does not and will not give or grant you any right, title, or
      interest in the Services or in any such Feedback. You agree that DVLP may use and disclose Feedback in any manner
      and for any purpose whatsoever without further notice or compensation to you and without retention by you of any
      proprietary or other right or claim. You hereby assign to DVLP any and all right, title, and interest (including,
      but not limited to, any patent, copyright, trade secret, trademark, show-how, know-how, moral rights and any and
      all other intellectual property right) that you may have in and to any and all Feedback.
    </Typography>
    <Typography style={styles.title}>9. User Conduct</Typography>
    <Typography style={styles.ordtext}>
      By using the Services and/or posting sale information, you agree not to:
    </Typography>
    <Typography style={styles.ordtext}>
      a) use the Content in violation of the terms of the applicable License Agreement;
    </Typography>
    <Typography style={styles.ordtext}>
      b) transfer any NFT to a user and receive payment outside and separate to the act of transfer in order to bypass
      the royalty mechanism;
    </Typography>
    <Typography style={styles.ordtext}>
      c) use the Site or the Services for unlawful purposes, in violation of any applicable local, state, national or
      international law, or to promote any unlawful activities (including, without limit, engaging in any intellectual
      property infringement);
    </Typography>
    <Typography style={styles.ordtext}>
      d) impersonate another person, misrepresent your affiliation with another person or entity, or make any
      representation to us or any third party under false pretenses;
    </Typography>
    <Typography style={styles.ordtext}>
      e) upload or post any sale Information that infringes, misappropriates, or encourages infringement or
      misappropriation of the intellectual property, confidentiality or privacy rights of others or that is obscene,
      defamatory, harmful, abusive, threatening or false;
    </Typography>
    <Typography style={styles.ordtext}>
      f) post, reproduce, publicly display or otherwise make accessible any content, which we, in our sole judgment and
      discretion, consider illegal, offensive or objectionable including without limitation content that harasses,
      discriminates, demeans, threatens or disparages any individual or class of individuals;
    </Typography>
    <Typography style={styles.ordtext}>
      g) remove or modify any copyright, trademark or other intellectual property notices that appear in the Services or
      on any images or other content made available on the Site;
    </Typography>
    <Typography style={styles.ordtext}>
      h) upload invalid data, viruses, worms or other software agents to the Services;
    </Typography>
    <Typography style={styles.ordtext}>
      i) scrape or copy any data from the Site for any reason other than to carry out one or more Services;
    </Typography>
    <Typography style={styles.ordtext}>
      j) reproduce, modify, distribute, display or otherwise provide access to, create derivative works from, decompile,
      disassemble or reverse engineer any portion of the Services;
    </Typography>
    <Typography style={styles.ordtext}>
      k) distribute or post spam or other unsolicited messages, chain letters, pyramid schemes or similar communications
      through the Services;
    </Typography>
    <Typography style={styles.ordtext}>
      l) interfere with, or compromise the system integrity or security of the Services, or otherwise bypass any
      measures we may use to prevent or restrict access to the Services;
    </Typography>
    <Typography style={styles.ordtext}>
      m) conduct automated queries through the Site (including screen and database scraping, spiders, robots, crawlers,
      bypassing “captcha” or similar precautions or any other automated activity) with the purpose of obtaining data or
      other information from the Services;
    </Typography>
    <Typography style={styles.ordtext}>
      n) take any action that imposes an unreasonable or disproportionately large load on DVLP's infrastructure;
    </Typography>
    <Typography style={styles.ordtext}>
      o) access or use any of the Services to develop competitive products or services;
    </Typography>
    <Typography style={styles.ordtext}>
      p) alter or interfere with the operation of any smart contract used in connection with the Site or Services; or
    </Typography>
    <Typography style={styles.ordtext}>
      q) attempt to, or permit or encourage any third party to, do any of the above.
    </Typography>
    <Typography style={styles.ordtext}>
      Users who violate systems or network security may incur criminal or civil liability. You agree that we may at any
      time, and at our sole discretion, terminate your access to the Site without prior notice to you for violating any
      of the above provisions. In addition, you acknowledge that we will cooperate fully with investigations of
      violations of systems or network security at other sites, including cooperating with law enforcement authorities
      in investigating suspected criminal violations.
    </Typography>
    <Typography style={styles.title}>10. Intellectual Property Rights</Typography>
    <Typography style={styles.ordtext}>
      You are solely responsible for your use of the Site and for any information you provide, including compliance with
      applicable laws, rules, and regulations, as well as these Terms, including the User Conduct requirements outlined
      above.
    </Typography>
    <Typography style={styles.ordtext}>
      You represent and warrant that you have, or have obtained, all rights, licenses, consents, permissions, power
      and/or authority necessary to grant the rights granted herein for any content that you create, submit, post,
      promote, or display on or through the Site. You represent and warrant that such content does not contain material
      subject to copyright, trademark, publicity rights, or other intellectual property rights, unless you have
      necessary permission or are otherwise legally entitled to post the material and to grant DVLP the license
      described above, and that the content does not violate any laws.
    </Typography>
    <Typography style={styles.ordtext}>
      DVLP respects the intellectual property of others, and we ask you to do the same. If you believe that your
      copyright has been infringed, you should notify our Designated Agent (as identified below) immediately. To be
      effective, the notification must include:
    </Typography>
    <Typography style={styles.ordtext}>
      a) A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright
      interest;
    </Typography>
    <Typography style={styles.ordtext}>
      b) Identification of the copyrighted work claimed to have been infringed;
    </Typography>
    <Typography style={styles.ordtext}>
      c) Information reasonably sufficient to permit us to contact the complaining party, such as address, telephone
      number and, if available, an electronic mail address;
    </Typography>
    <Typography style={styles.ordtext}>
      d) Identification of the material that is allegedly infringing and a description of where the allegedly infringing
      material is located on the Site;
    </Typography>
    <Typography style={styles.ordtext}>
      e) A statement that the complaining party has a good faith belief that use of the material in the manner
      complained of is not authorized by the copyright owner, agent or the law; and
    </Typography>
    <Typography style={styles.ordtext}>
      f) A statement, under penalty of perjury, that the information in the notification is accurate and that the
      complaining party is the copyright owner or authorized to act on behalf of the copyright.
    </Typography>
    <Typography style={styles.ordtext}>
      Pursuant to the Digital Millennium Copyright Act, 17 U.S.C.A. Sec. 512(c), (“DMCA”), you can send your
      notification to our Designated Agent:
    </Typography>
    <Typography style={styles.ordtext}>Designated Agent for Copyright Infringement notifications:</Typography>
    <Typography style={styles.ordtext}>Attention: Designated Agent for Copyright Infringement</Typography>
    <Typography style={styles.ordtext}>Vine Digital</Typography>
    <Typography style={styles.ordtext}>810 7th Ave. Suite 802</Typography>
    <Typography style={styles.ordtext}>NY, NY 10019</Typography>
    <Typography style={styles.ordtext}>USA</Typography>
    <Typography style={styles.ordtext}>dvlpinfo@dvlp.io</Typography>
    <Typography style={styles.title}>11. Indemnification</Typography>
    <Typography style={styles.ordtext}>
      You agree to defend, indemnify and hold us and our affiliates harmless from all liabilities, claims and expenses,
      including legal expenses such as attorney's fees, that arise from your use or misuse of the Site and/or the
      Services or breach of this Agreement. We reserve the right, at our own expense, to assume the exclusive defense
      and control of any matter otherwise subject to indemnification by you, in which event you will cooperate with us
      in asserting any available defenses.
    </Typography>
    <Typography style={styles.ordtext}>
      THIS INDEMNITY IS IN ADDITION TO, AND NOT IN LIEU OF, ANY OTHER INDEMNITIES SET FORTH IN A WRITTEN AGREEMENT
      BETWEEN YOU AND DVLP.
    </Typography>
    <Typography style={styles.title}>12. Disclaimers</Typography>
    <Typography style={styles.ordtext}>
      IF YOU CHOOSE TO USE THE SITE OR SERVICES, YOU DO SO VOLUNTARILY AND AT YOUR SOLE RISK. THE SITE AND SERVICES ARE
      PROVIDED “AS IS” AND TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAWS, WE DISCLAIM ALL WARRANTIES OR OTHER
      TERMS OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OR TERMS OF SATISFACTORY
      QUALITY, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. WE DO NOT WARRANT: THAT THE SITE OR SERVICES, OR ANY
      OF THEIR FUNCTIONS, WILL BE UNINTERRUPTED OR ERROR-FREE; THAT DEFECTS WILL BE CORRECTED; THAT ANY PART OF THE SITE
      OR SERVICES, OR THE SERVERS THAT MAKE THEM AVAILABLE, ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE DO NOT
      WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OR THE RESULTS OF THE USE OF THE SITE OR SERVICES WITH
      REGARD TO CORRECTNESS, ACCURACY, TIMELINESS, RELIABILITY, APPROPRIATENESS FOR ANY PURPOSE, OR OTHERWISE. DUE TO
      THE NATURE OF THE INTERNET, DVLP CANNOT GUARANTEE THE CONTINUOUS AND UNINTERRUPTED AVAILABILITY AND ACCESSIBILITY
      OF THE SITE OR SERVICES. TIME MAY RESTRICT THE AVAILABILITY OF THE SITE OR SERVICES OR CERTAIN AREAS OR FEATURES
      IF NECESSARY, IN VIEW OF CAPACITY LIMITS, THE SECURITY OR INTEGRITY OF ITS SERVERS, OR TO CARRY OUT MAINTENANCE
      MEASURES THAT ASSIST IN THE PROPER OR IMPROVED FUNCTIONING OF THE SITE OR SERVICES. IF YOU ARE DISSATISFIED WITH
      ANY OF THE MATERIALS CONTAINED IN THE SITE OR SERVICES, OR WITH ANY OF THESE TERMS, YOUR SOLE AND EXCLUSIVE REMEDY
      IS TO DISCONTINUE USE OF OUR SITE OR SERVICES.
    </Typography>
    <Typography style={styles.ordtext}>
      Some jurisdictions do not allow the exclusion of implied warranties in contracts with consumers, so the above
      exclusion may not apply to you. You agree that the Originating Rights Owner NFTs are not and shall not be based
      upon or redeemable for any tangible or physical item, fractionalized, or capable of use as a coupon, investment,
      security or other financial instrument or knowingly marketed in any other manner that would cause transactions to
      be governed by any applicable securities laws, including but not limited to the Securities Act of 1933, and are
      not convertible virtual currencies.
    </Typography>
    <Typography style={styles.ordtext}>
      Assumption of Risks. You acknowledge and agree that the characterization and regulatory scheme governing NFTs,
      cryptocurrencies, and blockchain technology is uncertain and continually evolving, and is accompanied by inherent
      risks, including risks related to faulty or insufficient hardware, software, or internet connections; introduction
      or intrusion of malicious code or software; hacking or unauthorized access to your digital wallet or information
      stored therein, or of theft or diversion of funds therefrom; volatility and unstable or unfavorable exchange
      rates; and the risk of unfavorable regulatory intervention and/or tax treatment in relation to transaction in
      cryptocurrency. You further acknowledge and agree that digital assets are highly experimental, risky, and
      volatile, and your use of the Site and Services to purchase digital assets may carry substantial financial risk,
      including the risk of loss in trading digital assets. By using the Site or Services, you represent that you have
      sufficient knowledge, sophistication, and experience with respect to NFTs, cryptocurrency, and blockchain
      technology, to make your own evaluation of the merits and risks of any transaction conducted via the Site or
      Services or any digital asset associated with such transaction. Under no circumstances will the operation of all
      or any portion of the Site or Services by DVLP be deemed to create a relationship that includes the provision or
      tendering of investment advice.
    </Typography>
    <Typography style={styles.title}>13. Limitation of Liability</Typography>
    <Typography style={styles.ordtext}>
      IN NO EVENT SHALL WE OR OUR AFFILIATES BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY SPECIAL, PUNITIVE, INCIDENTAL,
      INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, THOSE
      RESULTING FROM LOSS OF USE, LOSS OR CORRUPTION OF DATA, ANY DIRECT OR INDIRECT LOSS OF SAVINGS, REVENUE OR PROFITS
      OR ANY DIRECT OR INDIRECT LOSS OF BUSINESS OPPORTUNITY, GOODWILL OR REPUTATION, WHETHER OR NOT WE HAVE BEEN
      ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, AND ON ANY THEORY OF LIABILITY, ARISING OUT OF OR IN CONNECTION WITH
      THE USE OF THE SITE OR SERVICES OR OF ANY WEBSITE REFERENCED OR LINKED THROUGH THE SITE. FURTHER, WE SHALL NOT BE
      LIABLE IN ANY WAY FOR THIRD PARTY GOODS AND SERVICES LINKED THROUGH THE SITE. SOME JURISDICTIONS PROHIBIT THE
      EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE LIMITATIONS MAY NOT
      APPLY TO YOU.
    </Typography>
    <Typography style={styles.title}>14. Privacy Policy</Typography>
    Please refer to our Privacy Policy for information about how we collect, use, and share personal data about you. By
    submitting personal data through our Site you agree to the terms of our Privacy Policy and you expressly consent to
    the collection, use, and disclosure of your personal data in accordance with the Privacy Policy.
    <Typography style={styles.title}>15. Governing Law; Dispute Resolution; Arbitration</Typography>
    <Typography style={styles.ordtext}>
      Governing Law. These Terms shall be governed by and construed in accordance with the laws of the State of New York
      without application of conflict of laws rules, except that these Arbitration provisions shall be governed by the
      Federal Arbitration Act. Resolution of Any Dispute. In the event a dispute arises between you and DVLP
      (“Dispute”), we want to provide you with an efficient, neutral and cost-effective means of resolving the dispute.
      Most customer concerns can be resolved quickly and to the customer's satisfaction by contacting us by writing to
      Vine Digital d/b/a DVLP 810 7th Ave. Suite 802 NY, NY 10019, USA with a copy to dvlpinfo@dvlp.io. If, however, the
      Dispute cannot be resolved by the personnel directly involved, the parties shall first attempt in good faith to
      resolve the Dispute promptly by negotiation between duly appointed executive officers or other representatives of
      such parties, with full authority to negotiate and settle the Dispute. If a Dispute has not been resolved by
      negotiations within 90 days as provided hereinabove, such Dispute shall be submitted to JAMS, or its successor
      (collectively, “JAMS”), for mediation as provided hereinbelow. Any party involved in the Dispute may commence
      mediation by providing to JAMS and each other party involved in the Dispute a written request for mediation,
      setting forth the subject of the Dispute and the relief requested. The parties will cooperate with JAMS and with
      one another in selecting a mediator from JAMS' panel of neutrals and in scheduling the mediation proceedings. The
      parties covenant that they will participate in the mediation in good faith, and that they will share equally in
      its costs. All offers, promises, conduct and statements, whether oral or written, made in the course of the
      mediation by any of the parties, their agents, employees, experts and attorneys, and by the mediator and any JAMS
      employees, are confidential, privileged and inadmissible for any purpose, including impeachment, in any litigation
      or other proceeding involving the parties; provided, however, that evidence that is otherwise admissible or
      discoverable shall not be rendered inadmissible or non-discoverable as a result of its use in the mediation. None
      of the parties may commence arbitration or a civil action with respect to the matters submitted to mediation until
      after the completion of the initial mediation session, or 30 business days after the date of filing the written
      request for mediation, whichever occurs first. Mediation may continue after the commencement of arbitration or a
      civil action, if the parties so desire.
    </Typography>
    <Typography style={styles.ordtext}>
      Limitation of Legal Remedies. If there is a Dispute that remains unresolved after mediation, INSTEAD OF SUING IN
      COURT, YOU AND DVLP EACH AGREE TO THE FULLEST EXTENT PERMITTED BY LAW TO ARBITRATE DISPUTES THROUGH BINDING
      ARBITRATION PURSUANT TO THE JAMS ARBITRATION RULES AND PROCEDURES, ON AN INDIVIDUAL BASIS, WITHOUT CLASS RELIEF,
      EXCEPT FOR DISPUTES PERTAINING TO DVLP'S INTELLECTUAL PROPERTY RIGHTS AND STATUTORY CLAIMS THAT PURSUANT TO LAW
      ARE NOT ARBITRABLE. This agreement to arbitrate is intended to be broadly interpreted. It includes claims based in
      contract, tort, statute, fraud, misrepresentation or any other legal theory (“Claim(s)”). The arbitrator's
      decision and award are final and binding, with some exceptions under the Federal Arbitration Act, 9 U.S.C. 1, et
      seq., and judgment on the award may be entered in any court with jurisdiction.
    </Typography>
    <Typography style={styles.ordtext}>
      Jury Trial Waiver. YOU AND DVLP EACH VOLUNTARILY WAIVE THE RIGHT TO A TRIAL BY JURY IN RESOLVING ANY DISPUTE
      BETWEEN US ARISING OUT OF THESE TERMS OR THE SITE OR SERVICES.
    </Typography>
    <Typography style={styles.ordtext}>
      Class Action Waiver. YOU AND DVLP EACH AGREE THAT CLAIMS AGAINST THE OTHER MAY ONLY BE BROUGHT IN AN INDIVIDUAL
      CAPACITY AND NOT IN A CLASS ACTION OR REPRESENTATIVE PROCEEDING. All arbitrations under these Terms must be
      conducted on an individual (and not a class-wide) basis, and an arbitrator will have no authority to award
      class-wide relief. You acknowledge and agree that these Terms specifically prohibit you from commencing any legal
      proceedings as a representative of others, participating in a class, representative, or collective action as a
      class representative, class member or an opt-in party, acting as a private attorney general, or joining or
      consolidating Claims with claims or proceedings brought by any other person ("Class Action Waiver").
    </Typography>
    <Typography style={styles.ordtext}>
      Arbitration Procedures. A party who intends to seek arbitration must first send to the other a written Notice of
      Dispute describing the nature and basis of the Claim and setting forth the specific relief sought ("Notice"). All
      Notices to DVLP must be sent to the following address: Vine Digital d/b/a DVLP 810 7th Ave. Suite 802 NY, NY
      10019, USA with a copy to dvlpinfo@dvlp.io. Our notice to you will be sent to you based on the most recent contact
      information that you provide us but if no such information exists or if such information is not current, then we
      have no obligation under this Section. Upon receipt of such Notice, the receiving party will have a 60-day period
      in which it may satisfy the Claim against it by fully curing the Claim, providing all the relief requested in the
      Notice, or entering into a settlement to resolve the Claim to the mutual satisfaction of the parties. After the
      expiration of such 60-day cure period, you or DVLP may commence an arbitration proceeding. Unless otherwise agreed
      to by you and DVLP in writing, the arbitration will be governed and conducted by JAMS before a single arbitrator
      with substantial experience in the internet industry and shall follow substantive law in adjudicating the Dispute.
      This Section shall be construed as a written agreement to arbitrate pursuant to the Federal Arbitration Act
      (“FAA”). You and DVLP agree that this Section satisfies the writing requirement of the FAA. The arbitration of any
      claim will be conducted in the State of New York, and for any non-frivolous claim that does not exceed $5,000.00,
      you shall have the choice as to whether the hearing is conducted in person or by telephone. Each party will pay
      the fees and costs of its own counsel, experts and witnesses. The JAMS rules are available on its website at
      www.jamsadr.com. To the extent that this dispute resolution Section conflicts with JAMS minimum standards for
      procedural fairness, the JAMS rules and/or minimum standards for arbitration procedures in that regard shall
      control. Neither party shall sue the other party other than as provided herein or for enforcement of this clause
      or for the arbitrator's award; and any such suit may be brought only in Federal District Court or, if any such
      court lacks jurisdiction, in any state court that has jurisdiction. The arbitrator, and not any federal, state, or
      local court, shall have exclusive authority to resolve any Dispute relating to the interpretation, applicability,
      unconscionability, arbitrability, or enforceability of these Terms including any claim that all or any part of
      these Terms are void or voidable. However, the preceding sentence shall not apply to the clause entitled “Class
      Action Waiver”.
    </Typography>
    <Typography style={styles.ordtext}>
      Exception to Arbitration. Only disputes or actions pertaining to DVLP's intellectual property rights, or statutory
      claims that pursuant to law are not arbitrable, are exempt from arbitration.
    </Typography>
    <Typography style={styles.ordtext}>
      Survival. This arbitration provision shall survive termination of these Terms.
    </Typography>
    <Typography style={styles.ordtext}>
      Severability. If any provision of this Section is declared or found by a court of competent jurisdiction or
      arbitrator to be unlawful, unenforceable or void, such provision will be ineffective only to the extent that it is
      found unlawful, unenforceable or void, and the remainder of the provision and all other provisions will remain
      fully enforceable, except that if the Class Action Waiver for any Claim cannot be enforced, then the provision to
      arbitrate will not apply.
    </Typography>
    <Typography style={styles.title}>16. Termination</Typography>
    <Typography style={styles.ordtext}>
      If you breach any of the provisions of these Terms, all licenses granted by DVLP will terminate automatically.
      Additionally, notwithstanding anything contained in these Terms, we reserve the right, with or without notice and
      in our sole discretion, to suspend, disable, terminate, or delete your Account and/or your ability to access or
      use the Services (or any part of the foregoing) at any time and for any or no reason, and you acknowledge and
      agree that we shall have no liability or obligation to you in such event and that you will not be entitled to a
      refund of any amounts that you have already paid to us.
    </Typography>
    <Typography style={styles.title}>17. California Residents</Typography>
    <Typography style={styles.ordtext}>
      If you are a California resident, in accordance with Cal. Civ. Code § 1789.3, you may report complaints to the
      Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by
      contacting them in writing at 1625 North Market Blvd., Suite N 112 Sacramento, CA 95834, or by telephone at (800)
      952-5210.
    </Typography>
    <Typography style={styles.title}>18. Miscellaneous</Typography>
    <Typography style={styles.ordtext}>
      If any part of these Terms of Use is held invalid or unenforceable, that portion shall be construed in a manner
      consistent with applicable law to reflect, as nearly as possible, the original intentions of the parties, and the
      remaining portions shall remain in full force and effect. Any failure by us to enforce or exercise any provision
      of these Terms of Use or related rights shall not constitute a waiver of that right or provision.
    </Typography>
    <Typography style={styles.ordtext}>
      These Terms constitute the entire agreement between you and DVLP relating to your access to and use of the Site.
      These Terms, and any rights and licenses granted hereunder, may not be transferred or assigned by you without the
      prior written consent of DVLP. The section headings used herein are for reference only and shall not be read to
      have any legal effect.
    </Typography>
    <Typography style={styles.ordtext}>
      The Site is operated by us in the United States. Those who choose to access the Services from locations outside
      the United States do so at their own initiative and are responsible for compliance with applicable local laws. You
      and DVLP agree that the United Nations Convention on Contracts for the International Sale of Goods will not apply
      to the interpretation or construction of these Terms.
    </Typography>
    <Typography style={styles.ordtext}>
      Except as otherwise provided herein, these Terms are intended solely for the benefit of the parties and are not
      intended to confer third-party beneficiary rights upon any other person or entity.
    </Typography>
  </VineLayout>
);

export default TosPage;

const styles = {
  ordtext: {
    display: 'flex',
    textAlign: 'left',
    paddingLeft: 12,
    marginTop: 20,
    color: 'rgb(0, 24, 48)',
    fontFamily: 'Montserrat',
    alignItems: 'left',
    justifyContent: 'left',
  },
  ordtextbold: {
    display: 'flex',
    textAlign: 'left',
    paddingLeft: 12,
    marginTop: 20,
    marginBottom: 5,
    color: 'rgb(0, 24, 48)',
    fontFamily: 'Montserrat',
    alignItems: 'left',
    justifyContent: 'left',
    fontWeight: 'bold',
  },
  title: {
    display: 'flex',
    textAlign: 'center',
    paddingLeft: 16,
    fontFamily: 'Montserrat',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    color: 'rgb(0, 24, 48)',
    fontSize: { xs: 24, sm: 24, md: 30, lg: 32, xl: 34 },
    fontWeight: 'bold',
  },
  titlemain: {
    display: 'flex',
    textAlign: 'center',
    paddingLeft: 16,
    fontFamily: 'Montserrat',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
    color: 'rgb(0, 24, 48)',
    fontSize: { xs: 28, sm: 28, md: 34, lg: 36, xl: 38 },
    fontWeight: 'bold',
  },
  wrapper: {
    display: 'flex',
    marginTop: '65px',
    flexDirection: 'column',
  },
};
