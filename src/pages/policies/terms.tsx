import {
  Container,
  Heading,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { Layout } from "../../components/Layout";
import Title from "../../components/Title";

export default function Privacy() {
  return (
    <>
      <Title title="Terms and Conditions" />
      <Layout>
        <Container my={8}>
          <Heading as="h2" size="2xl" mb={4}>
            Terms and Conditions
          </Heading>
          <Text>
            PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY AS THEY CONTAIN
            IMPORTANT INFORMATION ABOUT YOUR LEGAL RIGHTS, REMEDIES AND
            OBLIGATIONS. BY REGISTERING FOR AN ACCOUNT AND USING THE CLOWDR
            PLATFORM, YOU AGREE TO COMPLY WITH AND BE BOUND BY THESE TERMS.
          </Text>
          <Text>
            <strong>Who we are and how to contact us</strong>
          </Text>
          <Text>
            clowdr.org is a site operated by Clowdr CIC ("We"). We are a UK
            Community Interest Company registered in England and Wales under
            company number 12984216 and have our registered office at Flat 40
            Quay Point, Lime Kiln Road, Bristol, BS1 5AD, United Kingdom.
          </Text>
          <Text>
            To contact us, please email{" "}
            <Link href="mailto:hello@midspace.app">hello@midspace.app</Link>.
          </Text>
          <Text>
            <strong>By using our site you accept these terms</strong>
          </Text>
          <Text>
            By using our site, you confirm that you accept these terms of use
            and that you agree to comply with them.
          </Text>
          <Text>
            If you do not agree to these terms, you must not use our site.
          </Text>
          <Text>
            We recommend that you print a copy of these terms for future
            reference.
          </Text>
          <Text>
            <strong>There are other terms that may apply to you</strong>
          </Text>
          <Text>
            These terms of use refer to the following additional terms, which
            also apply to your use of our site:
          </Text>
          <List styleType="disc">
            <ListItem>
              Our{" "}
              <Link as={GatsbyLink} to="/policies/privacy">
                Privacy Policy
              </Link>
              .{" "}
            </ListItem>

            <ListItem>
              Our{" "}
              <Link as={GatsbyLink} to="/policies/cookies">
                Cookie Policy
              </Link>
              , which sets out information about the cookies on our site.
            </ListItem>
          </List>
          <Text>
            <strong>We may make changes to these terms</strong>
          </Text>
          <Text>
            We amend these terms from time to time. Every time you wish to use
            our site, please check these terms to ensure you understand the
            terms that apply at that time. These terms were most recently
            updated on 4<sup>th</sup> March 2021.
          </Text>
          <Text>
            <strong>We may make changes to our site</strong>
          </Text>
          <Text>
            We may need to change these terms to reflect changes in law or best
            practice or to deal with additional features which we introduce.
          </Text>
          <Text>
            We will notify you of any material change to the Platform either by
            sending you an email with details of the change or notifying you of
            a change when you next access the Platform.
          </Text>
          <Text>
            If you do not accept the notified changes you may not be permitted
            to continue to use the Platform if the change relates to
            functionality or a change of law.
          </Text>
          <Text>
            <strong>We may suspend or withdraw our site</strong>
          </Text>
          <Text>Our site is made available free of charge.</Text>
          <Text>
            We do not guarantee that our site, or any content on it, will always
            be available or be uninterrupted. We may suspend or withdraw or
            restrict the availability of all or any part of our site for
            business and operational reasons. We will try to give you reasonable
            notice of any suspension or withdrawal.
          </Text>
          <Text>
            You are also responsible for ensuring that all persons who access
            our site through your internet connection are aware of these terms
            of use and other applicable terms and conditions, and that they
            comply with them.
          </Text>
          <Text>
            <strong>We may transfer this agreement to someone else</strong>
          </Text>
          <Text>
            We may transfer our rights and obligations under these terms to
            another organisation. We will always tell you in writing if this
            happens and we will ensure that the transfer will not affect your
            rights under the contract.
          </Text>
          <Text>
            <strong>You must keep your account details safe</strong>
          </Text>
          <Text>
            If you choose, or you are provided with, a user identification code,
            password or any other piece of information as part of our security
            procedures, you must treat such information as confidential. You
            must not disclose it to any third party.
          </Text>
          <Text>
            We have the right to disable any user identification code or
            password, whether chosen by you or allocated by us, at any time, if
            in our reasonable opinion you have failed to comply with any of the
            provisions of these terms of use.
          </Text>
          <Text>
            If you know or suspect that anyone other than you knows your user
            identification code or password, you must promptly notify us at{" "}
            <Link href="mailto:hello@midspace.app">hello@midspace.app</Link>.
          </Text>
          <Text>
            <strong>How you may use material on our site</strong>
          </Text>
          <Text>
            We are the owner or the licensee of all intellectual property rights
            in our site, and in the material published on it. Those works are
            protected by copyright laws and treaties around the world. All such
            rights are reserved.
          </Text>
          <Text>
            You may print off one copy, and may download extracts, of any
            page(s) from our site for your personal use and you may draw the
            attention of others within your organisation to content posted on
            our site.
          </Text>
          <Text>
            You must not modify the paper or digital copies of any materials you
            have printed off or downloaded in any way, and you must not use any
            illustrations, photographs, video or audio sequences or any graphics
            separately from any accompanying text.
          </Text>
          <Text>
            Our status (and that of any identified contributors) as the authors
            of content on our site must always be acknowledged.
          </Text>
          <Text>
            You must not use any part of the content on our site for commercial
            purposes without obtaining a licence to do so from us or our
            licensors.
          </Text>
          <Text>
            If you print off, copy or download any part of our site in breach of
            these terms of use, your right to use our site will cease
            immediately and you must, at our option, return or destroy any
            copies of the materials you have made.
          </Text>
          <Text>
            <strong>Licensed Use</strong>
          </Text>
          <Text>
            On acceptance of your Account application We grant to you a
            revocable, non-exclusive, non-transferable, limited license to use
            the Platform strictly in accordance with these terms and conditions
            and subject always to the Use Restrictions
          </Text>
          <Text>
            <strong>Use Restrictions</strong>
          </Text>
          <Text>You agree that you will:</Text>
          <List styleType="disc">
            <ListItem>
              not rent, lease, sub-license, loan, provide, or otherwise make
              available, the Platform in any form, in whole or in part to any
              person without prior written consent from us;
            </ListItem>

            <ListItem>
              not copy the Platform except as part of the normal use of the
              Platform or where it is necessary for the purpose of back-up or
              operational security;
            </ListItem>

            <ListItem>
              not translate, merge, adapt, vary, alter or modify, the whole or
              any part of the Platform nor permit the Platform or any part of it
              to be combined with, or become incorporated in, any other
              programs;
            </ListItem>

            <ListItem>
              not disassemble, de-compile, reverse engineer or create derivative
              works based on the whole or any part of the Platform nor attempt
              to do any such things, except to the extent that (by virtue of
              sections 50B and 296A of the Copyright, Designs and Patents Act
              1988) such actions cannot be prohibited because they are necessary
              to decompile the Platform to obtain the information necessary to
              create an independent program that can be operated with the
              Platform or with another program (Permitted Objective), and
              provided that the information obtained by you during such
              activities:
              <List styleType="disc">
                <ListItem>
                  is not disclosed or communicated without our prior written
                  consent to any third party to whom it is not necessary to
                  disclose or communicate it in order to achieve the Permitted
                  Objective; and
                </ListItem>

                <ListItem>is kept secure; and</ListItem>

                <ListItem>is used only for the Permitted Objective;</ListItem>
              </List>
            </ListItem>

            <ListItem>
              comply with all applicable technology control or export laws and
              regulations that apply to the technology used or supported by the
              Platform.
            </ListItem>

            <ListItem>
              not use the Platform in any unlawful manner, for any unlawful
              purpose, or in any manner inconsistent with these terms, or act
              fraudulently or maliciously, for example, by hacking into or
              inserting malicious code, such as viruses, or harmful data, into
              the Platform or any operating system;
            </ListItem>

            <ListItem>
              not infringe our intellectual property rights or those of any
              third party in relation to your use of the Platform;
            </ListItem>

            <ListItem>
              transmit any material that is defamatory, offensive or otherwise
              objectionable in relation to your use of the Platform;
            </ListItem>

            <ListItem>
              use the Platform in a way that could damage, disable, overburden,
              impair or compromise our systems or security or interfere with
              other users; and
            </ListItem>

            <ListItem>
              collect or harvest any information or data from the Platform or
              our systems or attempt to decipher any transmissions to or from
              the servers running the Platform.
            </ListItem>
          </List>
          <Text>
            <strong>Third Party Software</strong>
          </Text>
          <Text>
            Our Platform incorporates the proprietary software of Nexmo Inc,
            trading as Vonage (
            <em>
              <a href="http://www.vonage.com">www.vonage.com</a>
            </em>
            ) (the “Vonage Services”). In relation to the Vonage Services you
            agree not to : transfer, resell, lease, license, or otherwise make
            available the Vonage Services to third parties; use the Services in
            any manner that violates the Vonage Acceptable Use Policy (
            <a href="https://www.vonage.com/legal/communications-apis/acceptable-use">
              https://www.vonage.com/legal/communications-apis/acceptable-use
            </a>
            ); decipher, decompile, disassemble, reverse engineer or otherwise
            attempt to derive any source code or underlying ideas or algorithms
            of any part of the Vonage Services, except to the limited extent
            applicable laws specifically prohibit such reverse-engineering
            restrictions; or to alter, modify, translate, or otherwise create
            derivative works of any part of the Vonage Services.
          </Text>
          <Text>
            <strong>Do not rely on information on this site</strong>
          </Text>
          <Text>
            The content on our site is provided for general information only. It
            is not intended to amount to advice on which you should rely. You
            must obtain professional or specialist advice before taking, or
            refraining from, any action on the basis of the content on our site.
          </Text>
          <Text>
            <strong>No warranties</strong>
          </Text>
          <Text>
            The Platform is provided to you "AS IS" and "AS AVAILABLE" and with
            all faults and defects without warranty of any kind. To the maximum
            extent permitted under applicable law, Midspace on its own behalf
            and on behalf of its affiliates and its and their respective
            licensors and service providers, expressly disclaims all warranties,
            whether express, implied, statutory or otherwise, with respect to
            the Platform, including all implied warranties of merchantability,
            fitness for a particular purpose, title and non-infringement, and
            warranties that may arise out of course of dealing, course of
            performance, usage or trade practice. Without limitation to the
            foregoing, Midspace provides no warranty or undertaking, and makes
            no representation of any kind that the Platform will meet your
            requirements, achieve any intended results, be compatible or work
            with any other software, applications, systems or services, operate
            without interruption, meet any performance or reliability standards
            or be error free or that any errors or defects can or will be
            corrected.
          </Text>
          <Text>
            Without limiting the foregoing, We make no representation or
            warranty of any kind, express or implied: (i) as to the operation or
            availability of the Platform, or the information, content, and
            materials or products included thereon; (ii) that the Platform will
            be uninterrupted or error-free; (iii) as to the accuracy,
            reliability, or currency of any information or content provided
            through the Platform; or (iv) that the Platform, its servers, the
            content, or e-mails sent from or on behalf of Midspace are free of
            viruses, scripts, trojan horses, worms, malware, timebombs or other
            harmful components.
          </Text>
          <Text>
            <strong>We are not responsible for websites we link to</strong>
          </Text>
          <Text>
            Where our site contains links to other sites and resources provided
            by third parties, these links are provided for your information
            only. Such links should not be interpreted as approval by us of
            those linked websites or information you may obtain from them.
          </Text>
          <Text>
            We have no control over the contents of those sites or resources.
          </Text>
          <Text>
            <strong>
              Our responsibility for loss or damage suffered by you
            </strong>
          </Text>
          <List styleType="disc">
            <ListItem>
              We do not exclude or limit in any way our liability to you where
              it would be unlawful to do so. This includes liability for death
              or personal injury caused by our negligence or the negligence of
              our employees, agents or subcontractors and for fraud or
              fraudulent misrepresentation.
            </ListItem>

            <ListItem>
              We exclude all implied conditions, warranties, representations or
              other terms that may apply to our site or any content on it.
            </ListItem>

            <ListItem>
              We will not be liable to you for any loss or damage, whether in
              contract, tort (including negligence), breach of statutory duty,
              or otherwise, even if foreseeable, arising under or in connection
              with:
            </ListItem>

            <ListItem>use of, or inability to use, our site; or</ListItem>

            <ListItem>
              use of or reliance on any content displayed on our site.
            </ListItem>

            <ListItem>In particular, we will not be liable for:</ListItem>

            <ListItem>loss of profits, sales, business, or revenue;</ListItem>

            <ListItem>business interruption;</ListItem>

            <ListItem>loss of anticipated savings;</ListItem>

            <ListItem>
              loss of business opportunity, goodwill or reputation; or
            </ListItem>

            <ListItem>any indirect or consequential loss or damage.</ListItem>

            <ListItem>
              If defective digital content that we have supplied, damages a
              device or digital content belonging to you and this is caused by
              our failure to use reasonable care and skill, we will either
              repair the damage or pay you compensation. However, we will not be
              liable for damage that you could have avoided by following our
              advice to apply an update offered to you free of charge or for
              damage that was caused by you failing to correctly follow
              installation instructions or to have in place the minimum system
              requirements advised by us.
            </ListItem>
          </List>
          <Text>
            <strong>How we may use your personal information</strong>
          </Text>
          <Text>
            We will only use your personal information as set out in our{" "}
            <Link as={GatsbyLink} to="/policies/privacy">
              Privacy Policy
            </Link>
            .
          </Text>
          <Text>
            <strong>
              We are not responsible for viruses and you must not introduce them
            </strong>
          </Text>
          <Text>
            We do not guarantee that our site will be secure or free from bugs
            or viruses.
          </Text>
          <Text>
            You are responsible for configuring your information technology,
            computer programmes and platform to access our site. You should use
            your own virus protection software.
          </Text>
          <Text>
            You must not misuse our site by knowingly introducing viruses,
            trojans, worms, logic bombs or other material that is malicious or
            technologically harmful. You must not attempt to gain unauthorised
            access to our site, the server on which our site is stored or any
            server, computer or database connected to our site. You must not
            attack our site via a denial-of-service attack or a distributed
            denial-of service attack. By breaching this provision, you would
            commit a criminal offence under the Computer Misuse Act 1990. We
            will report any such breach to the relevant law enforcement
            authorities and we will co-operate with those authorities by
            disclosing your identity to them. In the event of such a breach,
            your right to use our site will cease immediately.
          </Text>
          <Text>
            <strong>Rules about linking to our site</strong>
          </Text>
          <Text>
            You may link to our site, provided you do so in a way that is fair
            and legal and does not damage our reputation or take advantage of
            it.
          </Text>
          <Text>
            You must not establish a link in such a way as to suggest any form
            of association, approval or endorsement on our part where none
            exists.
          </Text>
          <Text>Our site must not be framed on any other site.</Text>
          <Text>
            We reserve the right to withdraw linking permission without notice.
          </Text>
          <Text>
            If you wish to link to or make any use of content on our site other
            than that set out above, please contact{" "}
            <Link href="mailto:hello@midspace.app">hello@midspace.app</Link>.
          </Text>
          <Text>
            <strong>Which country's laws apply to any disputes?</strong>
          </Text>
          <Text>
            If you are a consumer, please note that these terms of use, their
            subject matter and their formation, are governed by English law. You
            and we both agree that the courts of England and Wales will have
            exclusive jurisdiction except that if you are a resident of Northern
            Ireland you may also bring proceedings in Northern Ireland, and if
            you are resident of Scotland, you may also bring proceedings in
            Scotland.
          </Text>
          <Text>
            If you are a business, these terms of use, their subject matter and
            their formation (and any non-contractual disputes or claims) are
            governed by English law. We both agree to the exclusive jurisdiction
            of the courts of England and Wales.
          </Text>
          <Text>
            <strong>Our trade marks</strong>
          </Text>
          <Text>
            Midspace is a trade mark of Clowdr CIC. You are not permitted to use
            it without our approval, unless it is part of material you are using
            as permitted under <em>How you may use material on our site</em>.
          </Text>
        </Container>
      </Layout>
    </>
  );
}
