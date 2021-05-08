import React from "react";
import "../css/MainLandingPage.css";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl } from "components/misc/Layouts";
import tw from "twin.macro";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as RadioIcon } from "feather-icons/dist/icons/radio.svg";

import doc from "../images/doc1.png";

const Row = tw.div`flex`;
const HeroRow = tw(
  Row
)`flex-col lg:flex-row justify-between items-center pt-1 pb-4 max-w-screen-2xl mx-auto flex-wrap`;

const Column = tw.div`flex-1`;

const UpdateNotice = tw(
  Column
)`w-full flex-auto mb-4 sm:mb-8 rounded px-4 py-3 sm:px-5 sm:py-4 bg-orange-100 text-orange-800 flex items-center sm:items-start md:items-center justify-center lg:justify-start border border-orange-200 text-xs sm:text-sm text-center sm:text-left md:leading-none`;
const UpdateNoticeIcon = tw(RadioIcon)`w-0 sm:w-5 sm:mr-3`;

const TextColumn = tw(
  Column
)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const Heading = tw(
  HeadingBase
)`text-center lg:text-left text-primary-500 leading-snug`;
const Description = tw(
  DescriptionBase
)`mt-4 text-center lg:text-left lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;

const FeatureList = tw.ul`mt-6 leading-loose flex flex-wrap max-w-xl mx-auto lg:mx-0`;
const Feature = tw.li`mt-2 flex items-center flex-shrink-0 w-full sm:w-1/2 justify-center lg:justify-start`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
const ImageContainer = tw.div``;
const Image = tw.img`max-w-full rounded-t sm:rounded`;

export default ({
  features = null,
  heading = "Check for Covid Resources",
  description = "In these trying times, let us support one another and help those in need. If you have any verified leads for COVID Resources, please do fill the Leads Collection Form in the Add Page. If you wish to acquire any resources then go to the Search Page and search for covid resources in your city. Stay Safe! Stay indoors!",
}) => {
  window.gtag("js", new Date());
  window.gtag("config", "UA-45799926-9");

  features = features || [
    `Beds`,
    `Oxygen`,
    `Vaccines`,
    "Remdesivir",
    "Plasma",
    "Food Resources",
    "Ambulance",
    "Test Centre",
  ];

  return (
    <AnimationRevealPage disabled>
      <Container tw='bg-gray-100 -mx-8 -mt-8 pt-8 px-8'>
        <Content2Xl>
          <HeroRow>
            <UpdateNotice>
              <UpdateNoticeIcon />
              Last updated on 6th May, 2021
            </UpdateNotice>
            <TextColumn>
              <Heading style={{textAlign: "left"}} as='h1' className='aa'>
                {heading}
              </Heading>
              <Description style={{textAlign: "justify"}}>{description}</Description>
              <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={doc} />
              </ImageContainer>
            </ImageColumn>
          </HeroRow>
        </Content2Xl>
      </Container>
    </AnimationRevealPage>
  );
};