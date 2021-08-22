import {
  Container,
  Heading,
  Link,
  List,
  ListItem,
  OrderedList,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { Layout } from "../../components/Layout";
import Title from "../../components/Title";

export default function Privacy() {
  return (
    <>
      <Title title="Privacy Policy" />
      <Layout>
        <Container my={8}>
          <Heading as="h2" size="2xl" mb={4}>
            Privacy Policy
          </Heading>
          <Text>Welcome to Midspace's privacy policy.</Text>
          <Text>
            Midspace respects your privacy and is committed to protecting your
            personal data. This privacy policy will inform you as to how we look
            after your personal data when you visit our website (regardless of
            where you visit it from) and tell you about your privacy rights and
            how the law protects you.
          </Text>
          <Text>
            <strong>Purpose of this privacy policy</strong>
          </Text>
          <Text>
            This privacy policy aims to give you information on how Midspace
            collects and processes your personal data through your use of this
            website, including any data you may provide through your use of the
            website.
          </Text>
          <Text>
            It is important that you read this privacy policy together with any
            other privacy policy or fair processing policy we may provide on
            specific occasions when we are collecting or processing personal
            data about you so that you are fully aware of how and why we are
            using your data. This privacy policy supplements other notices and
            privacy policies and is not intended to override them. We do not
            knowingly collect data about children.
          </Text>
          <Text>
            <strong>Controller</strong>
          </Text>
          <Text>
            Clowdr CIC is the controller and responsible for your personal data
            (collectively referred to as "Midspace", "we", "us" or "our" in this
            privacy policy).
          </Text>
          <Text>
            <strong>Contact details</strong>
          </Text>
          <Text>
            If you have any questions about this privacy policy or our privacy
            practices, please contact us in the following ways:
          </Text>
          <Text>
            Email address:{" "}
            <Link as="a" href="mailto:welcome@midspace.app">
              welcome@midspace.app
            </Link>
          </Text>
          <Text>
            You have the right to make a complaint at any time to the
            Information Commissioner's Office (ICO), the UK supervisory
            authority for data protection issues (www.ico.org.uk). We would,
            however, appreciate the chance to deal with your concerns before you
            approach the ICO so please contact us in the first instance.
          </Text>
          <Text>
            <strong>
              Changes to the privacy policy and your duty to inform us of
              changes
            </strong>
          </Text>
          <Text>
            We keep our privacy policy under regular review. This version was
            last updated on 5<sup>th</sup> July 2021.
          </Text>
          <Text>
            It is important that the personal data we hold about you is accurate
            and current. Please keep us informed if your personal data changes
            during your relationship with us.
          </Text>
          <Text>
            <strong>Third-party links</strong>
          </Text>
          <Text>
            The website may include links to third-party websites, plug-ins and
            applications. Clicking on those links or enabling those connections
            may allow third parties to collect or share data about you. We do
            not control these third-party websites and are not responsible for
            their privacy statements. When you leave our website, we encourage
            you to read the privacy policy of every website you visit.
          </Text>
          <Heading as="h3">1. The data we collect about you</Heading>
          <Text>
            Personal data, or personal information, means any information about
            an individual from which that person can be identified. It does not
            include data where the identity has been removed (anonymous data).
          </Text>
          <Text>
            We may collect, use, store and transfer different kinds of personal
            data about you which we have grouped together as follows:
          </Text>
          <Text>
            <strong>Identity Data</strong> includes first name, last name,
            username or similar identifier, title and in some cases video or
            photographic data.
          </Text>
          <Text>
            <strong>Contact Data</strong> includes billing address, home
            address, email address and telephone numbers.
          </Text>
          <Text>
            <strong>Financial Data</strong> includes bank account and payment
            card details.
          </Text>
          <Text>
            <strong>Transaction Data</strong> includes details about payments to
            and from you and other details of products and services you have
            purchased from us.
          </Text>
          <Text>
            <strong>Technical Data</strong> includes internet protocol (IP)
            address, your login data, browser type and version, time zone
            setting and location, browser plug-in types and versions, operating
            system and platform, and other technology on the devices you use to
            access this website.
          </Text>
          <Text>
            <strong>Profile Data </strong>includes your username and password,
            purchases made by you, your preferences, feedback and survey
            responses.
          </Text>
          <Text>
            <strong>Usage Data</strong> includes information about how you use
            our website and services.
          </Text>
          <Text>
            <strong>Marketing and Communications Data </strong>includes your
            preferences in receiving marketing from us and our third parties and
            your communication preferences.
          </Text>
          <Text>
            We also collect, use and share <strong>Aggregated Data</strong> such
            as statistical or demographic data for any purpose. Aggregated Data
            could be derived from your personal data but is not considered
            personal data in law as this data will <strong>not</strong> directly
            or indirectly reveal your identity. For example, we may aggregate
            your Usage Data to calculate the percentage of users accessing a
            specific website feature. However, if we combine or connect
            Aggregated Data with your personal data so that it can directly or
            indirectly identify you, we treat the combined data as personal data
            which will be used in accordance with this privacy policy.
          </Text>
          <Text>
            We do not collect any{" "}
            <strong>Special Categories of Personal Data</strong> about you (this
            includes details about your race or ethnicity, religious or
            philosophical beliefs, sex life, sexual orientation, political
            opinions, trade union membership, information about your health).
            Nor do we collect any information about criminal convictions and
            offences.
          </Text>
          <Text>
            <strong>If you fail to provide personal data</strong>
          </Text>
          <Text>
            Where we need to collect personal data by law, or under the terms of
            a contract we have with you, and you fail to provide that data when
            requested, we may not be able to perform the contract we have or are
            trying to enter into with you. In this case, we may be unable to
            provide the services, or have to cancel a service you have with us.
            But we will notify you if this is the case at the time.
          </Text>
          <Heading as="h3">2. How is your personal data collected?</Heading>
          <Text>
            We use different methods to collect data from and about you
            including through:
          </Text>
          <Text>
            <strong>Direct interactions.</strong> You may give us your Identity,
            Contact and Financial Data by filling in online forms or by
            corresponding with us by post, phone, email or otherwise. This
            includes personal data you provide when you:
          </Text>
          <List styleType="disc">
            <ListItem>create an account on our website;</ListItem>

            <ListItem>
              subscribe to any other service or publication we offer;
            </ListItem>

            <ListItem>request marketing to be sent to you;</ListItem>

            <ListItem>enter a promotion or survey; or</ListItem>

            <ListItem>
              participate in a virtual conference such as a live stream; or
            </ListItem>

            <ListItem>give us feedback or contact us.</ListItem>
          </List>
          <Text>
            <strong>Automated technologies or interactions.</strong> As you
            interact with our website, we will automatically collect Technical
            Data about your equipment, browsing actions and patterns. We collect
            this personal data by using cookies and other similar technologies.
          </Text>
          <Text>
            <strong>Third parties or publicly available sources.</strong> We
            will receive personal data about you from various third parties and
            public sources as set out below:
          </Text>
          <List styleType="disc">
            <ListItem>
              Contact, Financial and Transaction Data from providers of
              technical and payment services
            </ListItem>

            <ListItem>
              Identity and Contact Data from data brokers or aggregators{" "}
            </ListItem>
          </List>

          <Heading as="h3">3. How we use your personal data</Heading>
          <Text>
            We will only use your personal data when the law allows us to. Most
            commonly, we will use your personal data in the following
            circumstances:
          </Text>
          <List styleType="disc">
            <ListItem>
              Where we need to perform the contract we are about to enter into
              or have entered into with you.
            </ListItem>

            <ListItem>
              Where you give your consent to use certain personal data.
            </ListItem>

            <ListItem>
              Where it is necessary for our legitimate interests (or those of a
              third party) and your interests and fundamental rights do not
              override those interests.
            </ListItem>

            <ListItem>
              Where we need to comply with a legal obligation.
            </ListItem>
          </List>
          <Text>
            We will get your consent before sending third party direct marketing
            communications to you via email or text message. You have the right
            to withdraw consent to marketing at any time by contacting us.
          </Text>
          <Text>
            <strong>YouTube</strong>
          </Text>
          <Text>
            We will also require your consent to participate in a virtual
            conference which intends to export videos or recordings to YouTube
            which, where possible, will be obtained by consent form. The consent
            form will include the requirement for you to agree to{" "}
            <Link href="https://policies.google.com/privacy">
              Google’s Privacy Terms
            </Link>{" "}
            which can be found at{" "}
            <Link href="https://policies.google.com/privacy">
              https://policies.google.com/privacy
            </Link>
            . If you have not signed a consent form but wish to take part in a
            live-streamed event you will be agreeing to comply with{" "}
            <Link href="https://policies.google.com/privacy">
              Google’s Privacy Policy
            </Link>
            .
          </Text>
          <Text>
            In order to create or submit a YouTube video via our export system
            you will have to agree to{" "}
            <Link href="https://security.google.com/settings/security/permissions">
              Google’s Security Settings
            </Link>{" "}
            which can be found at{" "}
            <Link href="https://security.google.com/settings/security/permissions">
              https://security.google.com/settings/security/permissions
            </Link>
            .
          </Text>
          <Text>
            <strong>Purposes for which we will use your personal data</strong>
          </Text>
          <Text>
            We have set out below, in a table format, a description of all the
            ways we plan to use your personal data, and which of the legal bases
            we rely on to do so. We have also identified what our legitimate
            interests are where appropriate.
          </Text>
          <Text>
            Here is a glossary of some of the legal terms we use in relation to
            the purposes for which we use your personal data:
          </Text>
          <Text>
            <strong>
              <em>
                Legitimate Interest means the interest of our business in
                conducting and managing our business to enable us to give you
                the best services/products and the best and most secure
                experience. We make sure we consider and balance any potential
                impact on you (both positive and negative) and your rights
                before we process your personal data for our legitimate
                interests. We do not use your personal data for activities where
                our interests are overridden by the impact on you (unless we
                have your consent or are otherwise required or permitted to by
                law). You can obtain further information about how we assess our
                legitimate interests against any potential impact on you in
                respect of specific activities by contacting us.
              </em>
            </strong>
          </Text>
          <Text>
            <strong>
              <em>
                Performance of Contract means processing your data where it is
                necessary for the performance of a contract to which you are a
                party or to take steps at your request before entering into such
                a contract.
              </em>
            </strong>
          </Text>
          <Text>
            <strong>
              <em>
                Comply with a legal obligation means processing your personal
                data where it is necessary for compliance with a legal
                obligation that we are subject to.
              </em>
            </strong>
          </Text>
          <Text>
            Note that we may process your personal data for more than one lawful
            ground depending on the specific purpose for which we are using your
            data. Please contact us if you need details about the specific legal
            ground we are relying on to process your personal data where more
            than one ground has been set out in the table below.
          </Text>

          <Table>
            <Thead>
              <Tr>
                <Th>Purpose/Activity</Th>
                <Th>Type of data</Th>
                <Th>
                  Lawful basis for processing including basis of legitimate
                  interest
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>To register you as an account holder</Td>
                <Td>
                  <OrderedList type="a">
                    <ListItem>Identity</ListItem>
                    <ListItem>Contact</ListItem>
                  </OrderedList>
                </Td>
                <Td>Performance of a contract with you</Td>
              </Tr>
              <Tr>
                <Td>
                  To process and deliver your order including:
                  <OrderedList type="a">
                    <ListItem>Manage payments, fees and charges</ListItem>
                    <ListItem>Collect and recover money owed to us</ListItem>
                  </OrderedList>
                </Td>
                <Td>
                  <OrderedList type="a">
                    <ListItem>Identity</ListItem>
                    <ListItem>Contact</ListItem>
                    <ListItem>Financial</ListItem>
                    <ListItem>Transaction</ListItem>
                    <ListItem>Marketing and Communications</ListItem>
                  </OrderedList>
                </Td>
                <Td>
                  <OrderedList type="a">
                    <ListItem>Performance of a contract with you</ListItem>
                    <ListItem>
                      Necessary for our legitimate interests (to recover debts
                      due to us)
                    </ListItem>
                  </OrderedList>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  To manage our relationship with you which will include:
                  <OrderedList type="a">
                    <ListItem>
                      Notifying you about changes to our terms or privacy policy
                    </ListItem>
                    <ListItem>
                      Asking you to leave a review or take a survey
                    </ListItem>
                  </OrderedList>
                </Td>
                <Td>
                  <OrderedList type="a">
                    <ListItem>Identity</ListItem>
                    <ListItem>Contact</ListItem>
                    <ListItem>Profile</ListItem>
                    <ListItem>Marketing and Communications</ListItem>
                  </OrderedList>
                </Td>
                <Td>
                  <OrderedList type="a">
                    <ListItem>Performance of a contract with you</ListItem>
                    <ListItem>
                      Necessary to comply with a legal obligation
                    </ListItem>
                    <ListItem>
                      Necessary for our legitimate interests (to keep our
                      records updated and to study how customers use our
                      products/services)
                    </ListItem>
                  </OrderedList>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  To enable you to partake in a promotion or complete a survey
                </Td>
                <Td>
                  <OrderedList type="a">
                    <ListItem>Identity</ListItem>
                    <ListItem>Contact</ListItem>
                    <ListItem>Profile</ListItem>
                    <ListItem>Usage</ListItem>
                    <ListItem>Marketing and Communications</ListItem>
                  </OrderedList>
                </Td>
                <Td>
                  <OrderedList type="a">
                    <ListItem>Performance of a contract with you</ListItem>
                    <ListItem>
                      Necessary for our legitimate interests (to study how
                      customers use our products/services, to develop them and
                      grow our business)
                    </ListItem>
                  </OrderedList>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  To administer and protect our business and this website
                  (including troubleshooting, data analysis, testing, system
                  maintenance, support, reporting and hosting of data)
                </Td>
                <Td>
                  <OrderedList type="a">
                    <ListItem>Identity</ListItem>
                    <ListItem>Contact</ListItem>
                    <ListItem>Technical</ListItem>
                  </OrderedList>
                </Td>
                <Td>
                  <OrderedList type="a">
                    <ListItem>
                      Necessary for our legitimate interests (for running our
                      business, provision of administration and IT services,
                      network security, to prevent fraud and in the context of a
                      business reorganisation or group restructuring exercise)
                    </ListItem>
                    <ListItem>
                      Necessary to comply with a legal obligation
                    </ListItem>
                  </OrderedList>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  To use data analytics to improve our website,
                  products/services, marketing, customer relationships and
                  experiences
                </Td>
                <Td>
                  <OrderedList type="a">
                    <ListItem>Technical</ListItem>
                    <ListItem>Usage</ListItem>
                  </OrderedList>
                </Td>
                <Td>
                  Necessary for our legitimate interests (to define types of
                  customers for our products and services, to keep our website
                  updated and relevant, to develop our business and to inform
                  our marketing strategy)
                </Td>
              </Tr>
              <Tr>
                <Td>
                  To enable you to take part in a virtual conference either by
                  submitting a video via YouTube or by taking part in live
                  streamed video.
                </Td>
                <Td>
                  <OrderedList type="a">
                    <ListItem>Identity</ListItem>
                    <ListItem>Profile</ListItem>
                    <ListItem>Technical</ListItem>
                  </OrderedList>
                </Td>
                <Td>
                  <OrderedList type="a">
                    <ListItem>
                      Consent in the form of signature of a consent form.
                    </ListItem>
                    <ListItem>
                      Necessary for our legitimate interests where you request
                      to take part in a live streamed video and it is not
                      practical to obtain your written consent.
                    </ListItem>
                  </OrderedList>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Text>
            <strong>Marketing </strong>
          </Text>
          <Text>
            We strive to provide you with choices regarding certain personal
            data uses, particularly around marketing and advertising.
          </Text>
          <Text>
            <strong>Promotional offers from us </strong>
          </Text>
          <Text>
            We may use your Identity, Contact, Technical, Usage and Profile Data
            to form a view on what we think you may want or need, or what may be
            of interest to you. This is how we decide which products, services
            and offers may be relevant for you.
          </Text>
          <Text>
            You will receive marketing communications from us if you have
            requested information from us <strong>or</strong> opted in to
            receive marketing communications <strong>or</strong> obtained
            services from us and you have not subsequently opted out of
            receiving that marketing.
          </Text>
          <Text>
            <strong>Third-party marketing </strong>
          </Text>
          <Text>
            We will get your express opt-in consent before we share your
            personal data with any third party for marketing purposes.
          </Text>
          <Text>
            <strong>Opting out</strong>
          </Text>
          <Text>
            You can ask us or third parties to stop sending you marketing
            messages at any time by logging into the website and checking or
            unchecking relevant boxes to adjust your marketing preferences{" "}
            <strong>or</strong> by following the opt-out links on any marketing
            message sent to you <strong>or</strong> by contacting us at any time
            on{" "}
            <Link href="mailto:stop-emails@midspace.app">
              stop-emails@midspace.app
            </Link>
            .
          </Text>
          <Text>
            <strong>Change of purpose </strong>
          </Text>
          <Text>
            We will only use your personal data for the purposes for which we
            collected it, unless we reasonably consider that we need to use it
            for another reason and that reason is compatible with the original
            purpose. If you wish to get an explanation as to how the processing
            for the new purpose is compatible with the original purpose, please
            contact us.
          </Text>
          <Text>
            If we need to use your personal data for an unrelated purpose, we
            will notify you and we will explain the legal basis which allows us
            to do so.
          </Text>
          <Text>
            Please note that we may process your personal data without your
            knowledge or consent, in compliance with the above rules, where this
            is required or permitted by law.
          </Text>
          <Heading as="h3">4. Disclosures of your personal data</Heading>
          <Text>
            We may share your personal data with the parties set out below for
            the purposes set out in the table above.
          </Text>
          <List styleType="disc">
            <ListItem>
              Service Providers that we use to help with certain aspects of our
              operations, for example for website hosting or payment services.{" "}
            </ListItem>

            <ListItem>
              Partners, being third parties such as academic institutions,
              associates and other potential business partners.{" "}
            </ListItem>

            <ListItem>
              Professional advisers including lawyers, bankers, auditors and
              insurers who provide consultancy, banking, legal, insurance and
              accounting services.
            </ListItem>

            <ListItem>
              Industry regulators and other authorities based in the United
              Kingdom.
            </ListItem>
          </List>
          <Text>
            We require all third parties to respect the security of your
            personal data and to treat it in accordance with the law. We do not
            allow our third-party service providers to use your personal data
            for their own purposes and only permit them to process your personal
            data for specified purposes and in accordance with our instructions.
          </Text>
          <Heading as="h3">5. International transfers</Heading>
          <Text>
            Some of our external third parties are based outside the EEA so
            their processing of your personal data will involve a transfer of
            data outside the EEA. By using our services you agree to such
            transfers, however you may remove your consent to international
            transfers at any time.
          </Text>
          <Text>
            Whenever we transfer your personal data out of the EEA, we ensure a
            similar degree of protection is afforded to it under applicable UK
            and EU law by ensuring at least one of the following safeguards is
            implemented:
          </Text>
          <List styleType="disc">
            <ListItem>
              We will only transfer your personal data to countries that have
              been deemed to provide an adequate level of protection for
              personal data by the European Commission. For further details, see
              European Commission: Adequacy of the protection of personal data
              in non-EU countries.
            </ListItem>

            <ListItem>
              Where we use certain service providers, we may use specific
              contracts approved by the European Commission which give personal
              data the same protection it has in Europe.{" "}
            </ListItem>
          </List>
          <Text>
            Please contact us if you want further information on the specific
            mechanism used by us when transferring your personal data out of the
            EEA or if you want to remove your consent for international
            transfers. Consent is not a condition of our service provision
            however some of our services require the use of third party services
            based outside the EEA and we will not be able to provide those
            services without the processing of personal data outside of the EEA.
          </Text>
          <Heading as="h3">6. Data security</Heading>
          <Text>
            We have put in place appropriate security measures to prevent your
            personal data from being accidentally lost, used or accessed in an
            unauthorised way, altered or disclosed. In addition, we limit access
            to your personal data to those employees, agents, contractors and
            other third parties who have a business need to know. They will only
            process your personal data on our instructions and they are subject
            to a duty of confidentiality.
          </Text>
          <Text>
            We have put in place procedures to deal with any suspected personal
            data breach and will notify you and any applicable regulator of a
            breach where we are legally required to do so.
          </Text>
          <Heading as="h3">7. Data retention</Heading>
          <Text>
            <strong>How long will you use my personal data for?</strong>
          </Text>
          <Text>
            We will only retain your personal data for as long as reasonably
            necessary to fulfil the purposes we collected it for, including for
            the purposes of satisfying any legal, regulatory, tax, accounting or
            reporting requirements. We may retain your personal data for a
            longer period in the event of a complaint or if we reasonably
            believe there is a prospect of litigation in respect to our
            relationship with you.
          </Text>
          <Text>
            To determine the appropriate retention period for personal data, we
            consider the amount, nature and sensitivity of the personal data,
            the potential risk of harm from unauthorised use or disclosure of
            your personal data, the purposes for which we process your personal
            data and whether we can achieve those purposes through other means,
            and the applicable legal, regulatory, tax, accounting or other
            requirements.
          </Text>
          <Text>
            By law we have to keep basic information about our customers
            (including Contact, Identity, Financial and Transaction Data) for
            six years after they cease being customers for tax purposes.
          </Text>
          <Text>
            In some circumstances you can ask us to delete your data: see “
            <em>your legal rights”</em> below for further information.
          </Text>
          <Text>
            In some circumstances we will anonymise your personal data (so that
            it can no longer be associated with you) for research or statistical
            purposes, in which case we may use this information indefinitely
            without further notice to you.
          </Text>
          <Heading as="h3">8. Your legal rights</Heading>
          <Text>
            Under certain circumstances, you have rights under data protection
            laws in relation to your personal data.
          </Text>
          <Text>You have the right to:</Text>
          <Text>
            <strong>Request access </strong>to your personal data (commonly
            known as a "data subject access request"). This enables you to
            receive a copy of the personal data we hold about you and to check
            that we are lawfully processing it.
          </Text>
          <Text>
            <strong>Request correction </strong>of the personal data that we
            hold about you. This enables you to have any incomplete or
            inaccurate data we hold about you corrected, though we may need to
            verify the accuracy of the new data you provide to us.
          </Text>
          <Text>
            <strong>Request erasure </strong>of your personal data. This enables
            you to ask us to delete or remove personal data where there is no
            good reason for us continuing to process it. You also have the right
            to ask us to delete or remove your personal data where you have
            successfully exercised your right to object to processing (see
            below), where we may have processed your information unlawfully or
            where we are required to erase your personal data to comply with
            local law. Note, however, that we may not always be able to comply
            with your request of erasure for specific legal reasons which will
            be notified to you, if applicable, at the time of your request.
          </Text>
          <Text>
            <strong>Object to processing </strong>of your personal data where we
            are relying on a legitimate interest (or those of a third party) and
            there is something about your particular situation which makes you
            want to object to processing on this ground as you feel it impacts
            on your fundamental rights and freedoms. You also have the right to
            object where we are processing your personal data for direct
            marketing purposes. In some cases, we may demonstrate that we have
            compelling legitimate grounds to process your information which
            override your rights and freedoms.
          </Text>
          <Text>
            <strong>Request restriction of processing </strong>of your personal
            data. This enables you to ask us to suspend the processing of your
            personal data in the following scenarios:
          </Text>
          <List styleType="disc">
            <ListItem>
              If you want us to establish the data's accuracy.
            </ListItem>

            <ListItem>
              Where our use of the data is unlawful but you do not want us to
              erase it.
            </ListItem>

            <ListItem>
              Where you need us to hold the data even if we no longer require it
              as you need it to establish, exercise or defend legal claims.{" "}
            </ListItem>

            <ListItem>
              You have objected to our use of your data but we need to verify
              whether we have overriding legitimate grounds to use it.
            </ListItem>
          </List>
          <Text>
            <strong>Request the transfer </strong>of your personal data to you
            or to a third party. We will provide to you, or a third party you
            have chosen, your personal data in a structured, commonly used,
            machine-readable format. Note that this right only applies to
            automated information which you initially provided consent for us to
            use or where we used the information to perform a contract with you.
          </Text>
          <Text>
            <strong>Withdraw consent at any time </strong>where we are relying
            on consent to process your personal data. However, this will not
            affect the lawfulness of any processing carried out before you
            withdraw your consent. If you withdraw your consent, we may not be
            able to provide certain products or services to you. We will advise
            you if this is the case at the time you withdraw your consent.
          </Text>
          <Text>
            If you wish to exercise any of the rights set out above, please
            contact us.
          </Text>
          <Text>
            <strong>No fee usually required</strong>
          </Text>
          <Text>
            You will not have to pay a fee to access your personal data (or to
            exercise any of the other rights). However, we may charge a
            reasonable fee if your request is clearly unfounded, repetitive or
            excessive. Alternatively, we could refuse to comply with your
            request in these circumstances.
          </Text>
          <Text>
            <strong>What we may need from you</strong>
          </Text>
          <Text>
            We may need to request specific information from you to help us
            confirm your identity and ensure your right to access your personal
            data (or to exercise any of your other rights). This is a security
            measure to ensure that personal data is not disclosed to any person
            who has no right to receive it. We may also contact you to ask you
            for further information in relation to your request to speed up our
            response.
          </Text>
          <Text>
            <strong>Time limit to respond</strong>
          </Text>
          <Text>
            We try to respond to all legitimate requests within one month.
            Occasionally it could take us longer than a month if your request is
            particularly complex or you have made a number of requests. In this
            case, we will notify you and keep you updated.
          </Text>
        </Container>
      </Layout>
    </>
  );
}
