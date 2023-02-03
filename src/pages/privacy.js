import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'gatsby';
import Seo from '../components/seo';
import VineLayout from '../components/vineLayout';

const PrivacyPage = () => (
  <VineLayout>
    <Seo title="PRIVACY POLICY" />
    <Box style={styles.wrapper}>
      <Typography style={styles.titlemain}>DVLP</Typography>
      <Typography style={styles.titlemain}>Privacy Policy</Typography>
      <Typography style={styles.title}>Date last updated: April 29, 2022</Typography>
      <Typography style={styles.titlemain}>1. General Privacy Policy Matters</Typography>
      <Typography style={styles.ordtext}>
        At DVLP, we take the privacy of our users very seriously and are committed to protecting your privacy. This
        Privacy Policy is a part of our Terms of Service and it describes our policies on the collection, use, and
        disclosure of information about you in connection with your use of our services through our website, software
        and emails (collectively, the “Service”). The terms “we”, “us”, “our” and “DVLP” refer to Vine Digital d/b/a
        DVLP , which operates the DVLP website atwww.dvlpnft.io (“Site”). When you use the Service, you consent to our
        collection, use, and disclosure of information about you, including information that may be considered Personal
        Data (defined below), as described in this Privacy Policy. “NFT” in this Privacy Policy means a non-fungible
        token or similar digital item implemented on a blockchain (such as the Ethereum blockchain), which uses smart
        contracts to link to or otherwise be associated with certain content or data.
      </Typography>
      <Typography style={styles.titlemain}>1. Information We Collect</Typography>
      <Typography style={styles.ordtext}>
        “Personal Data” means data that allows someone to identify you individually, including, for example, your name,
        email address, as well as any other non-public information about you that is associated with or linked to any of
        the foregoing. “Anonymous Data” means data, including aggregated and de-identified data, that is not associated
        with or linked to your Personal Data; Anonymous Data does not, by itself, permit the identification of
        individual persons. We collect Personal Data and Anonymous Data as follows: :
      </Typography>
      <Typography style={styles.ordtext}>
        (a) when you directly provide Personal Data to us. This happens when you:
      </Typography>
      <Typography style={styles.ordtext}>
        (i) register or create an account (e.g., your fist and last name, email address, user name and other information
        that you provide.). We may also collect your blockchain address, which may become associated with Personal Data
        when you use our Service;
      </Typography>
      <Typography style={styles.ordtext}>
        (ii) contact us, provide feedback, sign up for newsletters or request other information, (e.g., your name and
        email address); or
      </Typography>
      <Typography style={styles.ordtext}>
        (iii) otherwise participate in activities we promote that require information about you.
      </Typography>
      <Typography style={styles.ordtext}>
        (b) automatically, when you use and interact with the Service. As you navigate through and interact with our
        Service, we may use automatic data collection technologies to collect certain information about your equipment,
        browsing actions, and patterns, so that we may provide our Service and make it more useful and tailored to you,
        including:
      </Typography>
      <Typography style={styles.ordtext}>
        (i) your general activity on the Service (e.g., your viewing history and search activity, including the date and
        time the Service was used);
      </Typography>
      <Typography style={styles.ordtext}>(ii) identifiers such as an anonymized session identifier;</Typography>
      <Typography style={styles.ordtext}>
        (iii) your geographic location. We use this data to provide you with location-based services (such as
        advertising and personalized content). Most mobile devices allow you to control or disable the use of location
        services for applications in the device’s settings;
      </Typography>
      <Typography style={styles.ordtext}>
        (iv) website traffic volume, frequency of visits, and type and time of transactions you initiate through the
        Service;
      </Typography>
      <Typography style={styles.ordtext}>
        (v) information regarding your interaction with email messages (e.g., whether you opened, clicked on, or
        forwarded an email message);
      </Typography>
      <Typography style={styles.ordtext}>(vi) your Internet Protocol (IP) address;</Typography>
      <Typography style={styles.ordtext}>
        (vii) the type and settings of the device, operating system, and browser used to access the Service;
      </Typography>
      <Typography style={styles.ordtext}>(viii) websites you visit before and after using the Services; and</Typography>
      <Typography style={styles.ordtext}>
        (ix) other information gathered through cookies and similar technologies, which are discussed further in the
        fourth section of this Privacy Policy, entitled “Cookies and Similar Technologies”.
      </Typography>
      <Typography style={styles.ordtext}>
        (c) From other sources. We may also receive Personal and/or Anonymous Data about you from (a) companies that
        offer their products and/or services for use in conjunction with our Service or whose products and/or services
        may be linked from our Service; or (b) our service providers, including companies that assist with payment
        processing, analytics, data processing and management, and other services we may use to personalize your Service
        experience. For example, third-party wallet providers provide us with your blockchain address and certain other
        information you choose to share with those wallets providers. We may add this to the data we have already
        collected from or about you through our Service.
      </Typography>
      <Typography style={styles.ordtext}>
        (d) Public Information Observed from Blockchains. We collect data from activity that is publicly visible and/or
        accessible on blockchains. This may include blockchain addresses and information regarding purchases, sales, or
        transfers of NFTs, which may then be associated with other data you have provided to us.
      </Typography>
      <Typography style={styles.titlemain}>2. How We Use Your Personal Data</Typography>
      <Typography style={styles.ordtext}>
        We use your Personal Data to run our business, provide the Service, personalize your experience on the Service
        and to improve the Service, including but not limited to:
      </Typography>
      <Typography style={styles.ordtext}>(a) operate, maintain, and optimize the Service and your account;</Typography>
      <Typography style={styles.ordtext}>
        (b) provide you with our Service, including but not limited to, helping you view, explore and, at your own
        discretion, purchase, sell or transfer NFTs on public blockchains;
      </Typography>
      <Typography style={styles.ordtext}>
        (c) improve the quality and types of services that we deliver and the quality of experience when you interact
        with our Service;;
      </Typography>
      <Typography style={styles.ordtext}>
        (d) diagnose problems with and identify any security risks, errors, or needed enhancements to the Service;
      </Typography>
      <Typography style={styles.ordtext}>
        (e) investigate and address potential violations of our Terms and Services;
      </Typography>
      <Typography style={styles.ordtext}>
        (f) send you emails and notifications in connection with the use of the Service, including but not limited to:
      </Typography>
      <Typography style={styles.ordtext}>
        (i) send you a welcome email to verify ownership of the email address provided when you created your account;
      </Typography>
      <Typography style={styles.ordtext}>
        (ii) send you administrative notifications, such as security, support and maintenance advisories;
      </Typography>
      <Typography style={styles.ordtext}>
        (iii) send you notifications related to actions on the Site that relate to you, including notifications of
        offers on your NFTs;
      </Typography>
      <Typography style={styles.ordtext}>
        (g) respond to questions, comments or other requests and provide you with technical support;
      </Typography>
      <Typography style={styles.ordtext}>
        (h) to provide you with information regarding our services, including to send you our newsletters if you have
        signed up for this service, promotional materials and other notices related to our Service;
      </Typography>
      <Typography style={styles.ordtext}>
        (i) understand and analyze how you use the Service and what services are most relevant to you;
      </Typography>
      <Typography style={styles.ordtext}>(j) collect aggregate statistics about your use of the Service;</Typography>
      <Typography style={styles.ordtext}>(k) analyze and develop our marketing strategy; and</Typography>
      <Typography style={styles.ordtext}>
        (l) to provide data and analytics to research companies and marketers, as described in Section 5 of this Privacy
        Policy.
      </Typography>
      <Typography style={styles.ordtext}>
        1.1 We may create Anonymous Data records from Personal Data. We use this Anonymous Data to analyze request and
        usage patterns so that we may improve our Service and enhance navigation on our Site. We reserve the right to
        use Anonymous Data for any purpose and to disclose Anonymous Data to third parties without restriction.
      </Typography>
      <Typography style={styles.titlemain}>2. Cookies and other tracking technologies</Typography>
      <Typography style={styles.ordtext}>
        We and trusted third parties use cookies and similar technologies on the website to collect and procees personal
        information. This section explains what “cookies” are and how this website uses cookies and other tracking
        technologies to improve our Site and deliver a better, and more personalized, service. Our Cookie Policy applies
        to all users of this website. By continuing to browse the site, you are agreeing to our use of cookies and other
        tracking technologies.
      </Typography>
      <Typography style={styles.ordtext}>(a) What are Cookies?</Typography>
      <Typography style={styles.ordtext}>
        Cookies are small text files that are placed on your computer by websites that you visit. These text files can
        be read by these websites and help to identify you when you return to a website. Cookies can be “persistent” or
        “session” cookies. Persistent cookies remain on your computer when you have gone offline, while session cookies
        are deleted as soon as you close your web browser. To find out more about cookies, including how to see what
        cookies have been set and how to block and delete cookies, please visit http://www.aboutcookies.org/.
      </Typography>
      <Typography style={styles.ordtext}>(b) What sorts of Cookies are there?</Typography>
      <Typography style={styles.ordtext}>
        (i) Strictly necessary cookies. These cookies are essential to the functioning of a site, enabling you to move
        around the site and allowing the site to provide the services that you ask for. For example, a strictly
        necessary cookie might be used to log into secure areas of a site or to recognise the region you are in, thereby
        allowing the site operator to tailor the site accordingly. Strictly necessary cookies do not gather any
        information that could be used for marketing purposes and they do not retain information beyond the end of your
        visit.
      </Typography>
      <Typography style={styles.ordtext}>
        (ii) Analytical/performance cookies. These cookies collect information about how visitors use a website. They
        allow the site operator to recognise and count the number of visitors and to see how visitors move around the
        site when they are using it. This helps the site operator to improve the way the website works, for example, by
        ensuring that users are finding what they are looking for easily. All information collected by these cookies is
        aggregated and therefore cannot be used to identify individual visitors. The information is only used to improve
        how a website works.
      </Typography>
      <Typography style={styles.ordtext}>
        (iii) Functionality cookies. These cookies allow a website to remember choices that a user makes and provide
        enhanced, more personalised features. For example, such cookies enable you to stay signed into the website and
        recognise you when you arrive. The information these cookies collect may be anonymised and they cannot track
        browsing activity on other websites.
      </Typography>
      <Typography style={styles.ordtext}>
        (iv) Targeting cookies. These cookies record users' visits to a website, the pages they have visited and the
        links they have followed. They are also used to ensure that users are presented with adverts, which are relevant
        to their interests, to limit the number of times a particular advert is displayed and to help measure the
        effectiveness of an advertising campaign. The information is often shared with other organisations, such as
        advertisers.
      </Typography>
      <Typography style={styles.ordtext}>(a) Managing Cookies: Enabling and Disabling</Typography>
      <Typography style={styles.ordtext}>
        (i) You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access
        cookies. If you disable or refuse cookies, please note that some parts of this website or the Services may
        become inaccessible or not function properly. Each browser is different, so check the 'Help' menu of your
        particular browser (or your mobile phone's handset manual) to learn how to change your cookie preferences. You
        can also manually delete previously stored cookies at any time.
      </Typography>
      <Typography style={styles.ordtext}>
        (ii) Please note that cookie-based opt-outs are not effective on mobile applications. However, on many mobile
        devices, application users may opt out of certain mobile ads via their device settings.
      </Typography>
      <Typography style={styles.ordtext}>(b) What Cookies and other technologies do we use?</Typography>
      <Typography style={styles.ordtext}>
        (i) We use cookies and similar technologies (such as action tags, also known as beacons, or pixels tags) for a
        number of purposes, including to remember preferences, track conversions, conduct marketing and promotional
        efforts, analyze site traffic and trends, and generally understand the online behaviors and interests of people
        who interact with our Service.
      </Typography>
      <Typography style={styles.ordtext}>
        (ii) We may also use third-party advertising companies to serve advertisements on our behalf. These companies
        may use a cookie or an action tag to tailor the advertisements you see on this website and other sites, to track
        your response to their advertisement, to determine whether advertising has been served and to measure the
        effectiveness of their advertising.
      </Typography>
      <Typography style={styles.ordtext}>
        (iii) We use third-party analytics service providers to assist us in collecting and understanding website usage
        information. We use information from these services to help us improve our website and the services we provide
        to our users. We may also utilize Google Analytics for certain web analytics. You can opt out of your website
        usage data being included in our Google Analytics reports by visiting https://tools.google.com/dlpage/gaoptout.
      </Typography>
      <Typography style={styles.titlemain}>2. Sharing</Typography>
      <Typography style={styles.ordtext}>
        We may share information about you with the following third parties:
      </Typography>
      <Typography style={styles.ordtext}>
        (a) Service providers: We may share your personal data as necessary for any third party to provide services
        associated with the Service, including to provide measurement and analytic services, and/or to provide other
        support to us and to the Site.
      </Typography>
      <Typography style={styles.ordtext}>
        (b) Advertisers: We may allow advertisers and associated third parties to collect and use information they need
        to confirm that their ads are properly served and to measure the success of their campaigns on websites and
        apps. These advertising partners may use this information (and similar information collected from other
        websites) for purposes of delivering targeted advertisements to you when you visit non-DVLP related websites
        within their networks. This practice is commonly referred to as “interest-based advertising” or “online
        behavioral advertising”. If you prefer that we do not share your personal data with third-party advertising
        partners, you may opt-out of such sharing at no cost by following the instructions in Section 7 below.
      </Typography>
      <Typography style={styles.ordtext}>
        (c) Corporate Affiliates: We may share your Personal Data with our corporate affiliates, parents and/or
        subsidiaries, in which case we will require them to honor this Privacy Policy.
      </Typography>
      <Typography style={styles.ordtext}>
        (d) Others With Your Consent: We may ask for your explicit consent to share certain Personal Data with third
        parties.
      </Typography>
      <Typography style={styles.ordtext}>We may also share information about you in the following contexts:</Typography>
      <Typography style={styles.ordtext}>
        (e) Pursuant to an investigation: We may investigate and disclose information from or about you if we have a
        good faith belief that such investigation or disclosure (a) is reasonably necessary to comply with legal process
        and law enforcement instructions and orders, such as a search warrant, subpoena, statute, judicial proceeding,
        or other legal process served on us; (b) is helpful to prevent, investigate, or identify possible wrongdoing in
        connection with the Service; or (c) protects our rights, reputation, property, or that of our users, affiliates,
        or the public.
      </Typography>
      <Typography style={styles.ordtext}>
        (f) Pursuant to a business transfer: If another company acquires DVLP or all or substantially all of our assets,
        that company will possess the same information, and will assume the rights and obligations with respect to that
        information as described in this Privacy Policy.
      </Typography>
      <Typography style={styles.ordtext}>
        (g) As Anonymized Data: We may use Anonymized Data in order to create statistical information regarding the
        Service and its use, which we may then share with third parties.
      </Typography>
      <Typography style={styles.titlemain}>3. “Do Not Track” Signals</Typography>
      <Typography style={styles.ordtext}>
        Please note that your browser settings may allow you to automatically transmit a “Do Not Track” signal to
        websites and online services you visit. The Service does not alter its practices when it receives a “Do Not
        Track” from a visitor’s browser.
      </Typography>
      <Typography style={styles.titlemain}>4. Third-Party Websites and Wallets</Typography>
      <Typography style={styles.ordtext}>
        Our Site may contain links to third-party websites. When you click on a link to any other website or location,
        you will leave our Site and go to another site, and another entity may collect Personal Data from you. We have
        no control over, do not review, and cannot be responsible for these third-party websites or their content.
        Please be aware that the terms of this Privacy Policy do not apply to these third-party websites or their
        content, or to any collection of your Personal Data after you click on links to such third-party websites. We
        encourage you to read the privacy policies of every website you visit. Any links to third-party websites or
        locations are for your convenience and do not signify our endorsement of such third parties or their products,
        content, or websites.
      </Typography>
      <Typography style={styles.ordtext}>
        Third-Party Wallets. To purchase an NFT on our Site, you may be required to use a third-party electronic wallet
        which allows you to engage in transactions on public blockchains. Your interactions with any third-party
        electronic wallet provider are governed by the applicable terms of service and privacy policy of that third
        party.
      </Typography>
      <Typography style={styles.titlemain}>
        5. Controlling your Personal Data; Data Retention and Account Termination
      </Typography>
      <Typography style={styles.ordtext}>
        Consent. In order to process your Personal Data, we rely on your consent or our legitimate interests to process
        your Personal Data. You may withdraw your consent or object to the use of your Personal Data at any time, but
        you may no longer be able to access the Service. If you wish to withdraw your consent, please contact us at
        dvlpinfo@dvlp.io.
      </Typography>
      <Typography style={styles.ordtext}>
        Data Retention. We may retain your Personal Data as long as you continue to use the Site, have an account with
        us, or for as long as is necessary to fulfill the purposes outlined in this Privacy Policy. We may continue to
        retain your Personal Data even after you deactivate your account and/or cease to use the Site if such retention
        is reasonably necessary to comply with our legal obligations, to resolve disputes, prevent fraud and abuse,
        enforce our Terms or other agreements, and/or protect our legitimate interests. Where your Personal Data is no
        longer required for these purposes, we will delete it. We may maintain Anonymized Data after you delete your
        account for analytics purposes.
      </Typography>
      <Typography style={styles.ordtext}>
        Privacy Settings. You can adjust your privacy settings by following the appropriate links on our Service, where
        available, or by contacting us. If you receive a marketing email from us or if you have agreed to receive
        marketing, you can always unsubscribe at any time by following the instructions provided within those emails.
      </Typography>
      <Typography style={styles.ordtext}>
        Account termination. You can close your account by contacting us at dvlpinfo@dvlp.io.
      </Typography>
      <Typography style={styles.ordtext}>
        Cookie Policy. Please see our Cookie Policy on how to control cookies.
      </Typography>
      <Typography style={styles.ordtext}>
        Access, amend and delete Personal Data. You can update or correct personal information (e.g., your email
        address) by accessing your account. You can also access or rectify your information by reaching out to us at
        dvlpinfo@dvlp.io. You can delete your information by sending an email to dvlpinfo@dvlp.io with your first name,
        last name, and the respective email addresses you would like for us to delete. Please note that we have the
        right to reject deletion requests that are unduly burdensome or repetitive or that cannot be honored in light of
        legal obligations or ongoing disputes, or where retention is necessary to enforce our agreements or protect our
        or another party’s rights, property, safety, or security.
      </Typography>
      <Typography style={styles.ordtext}>
        Information on blockchains. Please note that we cannot edit or delete any information that is stored on a
        blockchain, for example the Ethereum blockchain, as we do not have custody or control over any blockchains. The
        information stored on the blockchain may include purchases, sales, and transfers related to your blockchain
        address and NFTs held at that address.
      </Typography>
      <Typography style={styles.titlemain}>6. EEA and UK Users</Typography>
      <Typography style={styles.ordtext}>
        DVLP endeavors to be fully compliant with the GDPR. DVLP may act, depending on the circumstances, as either or
        both a Controller and a Processor of personal data (as these terms are defined in the GDPR). We act as the
        Controller of information that we ask you to provide to create an account, to sign up to our newsletter and
        information that we automatically collect when you use the Service. We act as the Processor of user-generated
        content and information provided to us by third parties or other websites.
      </Typography>
      <Typography style={styles.ordtext}>EEA and UK users have the following rights:</Typography>
      <Typography style={styles.ordtext}>
        (a) Right to request copies of your personal data. We may charge you a small fee for this service.
      </Typography>
      <Typography style={styles.ordtext}>
        (b) Right to object to our processing of your personal data, under certain conditions. However, we may be
        entitled to continue processing your information based on our legitimate interests or where this is relevant to
        legal claims. You also have the right to object where we are processing your personal information for direct
        marketing purposes.
      </Typography>
      <Typography style={styles.ordtext}>(c) You can also request that we:</Typography>
      <Typography style={styles.ordtext}>
        (i) correct any information you believe is inaccurate or complete any information you believe is incomplete;
      </Typography>
      <Typography style={styles.ordtext}>(ii) Delete your personal data, under certain conditions.</Typography>
      <Typography style={styles.ordtext}>
        (iii) Restrict the processing of your personal data, under certain conditions. In certain circumstances we may
        not be able to do this or may not be required to do this. For example, if the information is relevant to legal
        claims.
      </Typography>
      <Typography style={styles.ordtext}>
        (iv) Transfer the data that we have collected to another organization, or directly to you under certain
        conditions.
      </Typography>
      <Typography style={styles.ordtext}>
        Some of these rights will only apply in certain circumstances. If you would like to exercise, or discuss, any of
        these rights, please contact us at dvlpinfo@dvlp.io. We may ask you to verify your identity, or ask for more
        information about your request. We will consider and act upon any request in accordance with applicable law. We
        will not discriminate against you for exercising any of these rights.
      </Typography>
      <Typography style={styles.ordtext}>
        You also have a right to lodge a complaint with a supervisory authority, in particular in the Member State in
        the European Union where you are habitually resident where we are based or where an alleged infringement of data
        protection law has taken place. In the UK you can make a complaint to the Information Commissioner's Office
        (Tel: 0303 123 1113 or at www.ico.org.uk).
      </Typography>
      <Typography style={styles.titlemain}>7. Your California Privacy Rights</Typography>
      <Typography style={styles.ordtext}>
        We recognize the need to provide further privacy protections with respect to Personal Data we may collect from
        California residents. For California residents, we will employ different data practices as necessary to comply
        with applicable law.
      </Typography>
      <Typography style={styles.ordtext}>
        If you are a California resident, you have certain rights under the California Consumer Privacy Act (“CCPA”).
        These include the right to (i) request access to, details regarding, and a copy of the personal information we
        have collected about you and/or shared with third parties; (ii) request deletion of the personal information
        that we have collected about you; and (iii) the right to opt-out of sale of your personal information. As the
        terms are defined under the CCPA, we do not “sell” your “personal information.”
      </Typography>
      <Typography style={styles.ordtext}>
        If you would like to exercise, or discuss, any of these rights, please contact us at [insert email]. We may ask
        you to verify your identity, or ask for more information about your request. We will consider and act upon any
        request in accordance with applicable law. We will not discriminate against you for exercising any of these
        rights.
      </Typography>
      <Typography style={styles.titlemain}>8. Children</Typography>
      <Typography style={styles.ordtext}>
        The Service is not directed to children under 18 and children under 18 are not permitted to use the Service.
        Minors who are at least 13 years old but are under 18 years old may use a parent or guardian’s DVLP account, but
        only with the involvement of the account holder. If a child under 13 submits Personal Data to DVLP and we learn
        that the Personal Data is the information of a child under 13, we will attempt to delete the information as soon
        as possible. If you believe that we might have any Personal Data from a child under 13, please contact us by
        using the “Submit a request” at the address indicated in Section 13 below.
      </Typography>
      <Typography style={styles.titlemain}>9. Security</Typography>
      <Typography style={styles.ordtext}>
        We use commercially reasonable efforts to follow generally accepted industry standards to protect the personal
        data submitted to us, both during transmission and once we receive it. However, no method of transmission over
        the Internet or via mobile device, or method of electronic storage, is 100% secure. Therefore, while we strive
        to use commercially acceptable means to protect information about you, we cannot guarantee its absolute
        security.
      </Typography>
      <Typography style={styles.ordtext}>
        You are responsible for the security of your digital wallet, and we urge you to take steps to ensure it is and
        remains secure. If you discover an issue related to your wallet, please contact your wallet provider.
      </Typography>
      <Typography style={styles.titlemain}>10. Location of Data and Transfers of Information</Typography>
      <Typography style={styles.ordtext}>
        The Site is owned and operated by DVLP, which is located in the United States. If you are a non-U.S. user of the
        Site, by visiting the Site and providing us with data, you acknowledge and agree that your Personal Data may be
        processed for the purposes identified in the Privacy Policy. In addition, your Personal Data may be processed in
        the country in which it was collected and in other countries, including the United States, where laws regarding
        processing of Personal Data may be less stringent than the laws in your country. By providing your Personal
        Data, you consent to such transfer.
      </Typography>
      <Typography style={styles.titlemain}>11. Modifications to this Privacy Policy</Typography>
      <Typography style={styles.ordtext}>
        We may occasionally update this Privacy Policy. You can see when it was last updated by looking at the effective
        date at the bottom of this page. If we make any significant changes we'll post them prominently on our website
        and notify you by other means as required by law. Your continued use of the website after a revision to the
        Privacy Policy indicates your acceptance and agreement to the current Privacy Policy. We recommend that you
        periodically review the Privacy Policy to make sure you understand and are up-to-date on how we're keeping your
        information safe.
      </Typography>
      <Typography style={styles.titlemain}>12. Contact Information</Typography>
      <Typography style={styles.ordtext}>
        If you have any further questions regarding our privacy practices or information about you, please feel free to
        contact us by email at dvlpinfo@dvlp.io
      </Typography>
      <Typography style={styles.titlemain}>13. Effective Date of this Privacy Policy: April 29, 2022</Typography>
    </Box>
  </VineLayout>
);

export default PrivacyPage;

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
