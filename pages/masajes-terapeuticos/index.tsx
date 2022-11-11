import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import Layout from '../../components/template1/layout/layout';
import LayoutWhite from '../../components/template1/layout/layoutwhite';
import { Gallery } from '../../components/template1/gallery/gallery';
import FormContactColor from '../../components/template1/form/formcolor';

import { CoverPage } from '../../components/template1/coverpage/coverpage';
import { CoverPageBlue } from '../../components/template1/coverpage/coverpageblue';
import { CoverPageWhite } from '../../components/template1/coverpage/coverpagewhite';

import { ContactProfile } from '../../components/template1/contact/contact';
import { ContactProfileCover } from '../../components/template1/contact/contactcover';
import { SocialMedia } from '../../components/template1/socialmedia/socialmedia';

import { PlinthColor } from '../../components/template1/plinth/plinthcolor';
import { PlinthColorTitle } from '../../components/template1/plinthtitle/plinthcolortitle';
import { InformationColorProfile } from '../../components/template1/information/informationcolor';

// import data
import { CONTACT_DATA, CURRICULUM_DATA } from '../../profile-data/masajes-terapeuticos/config-data'; //CAMBIAR DIRECCION
import { IMAGE_DATA, PERSONAL_DATA, SOCIALNET_DATA } from '../../profile-data/masajes-terapeuticos/config-data'; //CAMBIAR DIRECCION


const ProfilePage: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0 ,width=device-width" />
        <meta key="description" name="description" content="nombre de la app" />
        <title>{PERSONAL_DATA.NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        name={PERSONAL_DATA.NAME}
        description={PERSONAL_DATA.DESCRIPTION}
        email={CONTACT_DATA.EMAIL}
        phone={CONTACT_DATA.PHONE}
        address={CONTACT_DATA.ADDRESS}
        number={CONTACT_DATA.NUMBER}
        locality={CONTACT_DATA.LOCALITY}
        province={CONTACT_DATA.PROVINCE}
        country={CONTACT_DATA.COUNTRY}
        avatar={IMAGE_DATA.AVATAR}
        url={'masajes-terapeuticos'}
      >
        <CoverPageBlue
          name={PERSONAL_DATA.NAME}
          description={PERSONAL_DATA.DESCRIPTION}
          colorName={PERSONAL_DATA.COLORNAME}
          colorDescription={PERSONAL_DATA.COLORDESCRIPTION}
          coverPageUrl={IMAGE_DATA.BANNER}
        />
         <PlinthColor
          color={PERSONAL_DATA.TEMPLATE}
        />
        {/* <PlinthColor color={PERSONAL_DATA.TEMPLATE} /> */}
        <InformationColorProfile
          name={PERSONAL_DATA.NAME}
          description={PERSONAL_DATA.HISTORY}
          pdf={CURRICULUM_DATA.CURRICULUM_VITAE}
          imgInformation={IMAGE_DATA.INFORMATION}
          btnName={'Servicios'}
          color={PERSONAL_DATA.TEMPLATE}
        />
        <PlinthColorTitle
          title={'Galería'}
          color={PERSONAL_DATA.TEMPLATE}
        />
        <Gallery
          gallery_1={IMAGE_DATA.GALLERY_1}
          gallery_2={IMAGE_DATA.GALLERY_2}
          gallery_3={IMAGE_DATA.GALLERY_3}
        />
        <PlinthColorTitle
          title={'Contacto'}
          color={PERSONAL_DATA.TEMPLATE}
        />
        <ContactProfileCover
          name={PERSONAL_DATA.NAME}
          email={CONTACT_DATA.EMAIL}
          phone={CONTACT_DATA.PHONE}
          address={CONTACT_DATA.ADDRESS}
          number={CONTACT_DATA.NUMBER}
          locality={CONTACT_DATA.LOCALITY}
          province={CONTACT_DATA.PROVINCE}
          country={CONTACT_DATA.COUNTRY}
          avatar={IMAGE_DATA.AVATAR}
          url={'masajes-terapeuticos'}
        />
        <PlinthColorTitle
          title={'Quiero más información'}
          color={PERSONAL_DATA.TEMPLATE}
        />
        <FormContactColor
          name={PERSONAL_DATA.NAME}
          email={CONTACT_DATA.EMAIL}
          color={PERSONAL_DATA.TEMPLATE}
        />
        <SocialMedia
          name={PERSONAL_DATA.NAME}
          linkedin={SOCIALNET_DATA.LINKEDIN}
          youtube={SOCIALNET_DATA.YOUTUBE}
          twitter={SOCIALNET_DATA.TWITTER}
          facebook={SOCIALNET_DATA.FACEBOOK}
          instagram={SOCIALNET_DATA.INSTAGRAM}
          tiktok={SOCIALNET_DATA.TIKTOK}
          wijex={SOCIALNET_DATA.WIJEX}
          telegram={SOCIALNET_DATA.TELEGRAM}
        />
      </Layout>
    </div>
  )
}

export default ProfilePage