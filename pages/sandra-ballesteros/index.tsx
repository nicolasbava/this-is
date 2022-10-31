import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import Layout from '../../components/template2/layout/layout';
import { Gallery } from '../../components/template2/gallery/gallery';
import { SocialMedia } from '../../components/template2/socialmedia/socialmedia';
import { PlinthTitle } from '../../components/template2/plinthtitle/plinthtitle';
import { CoverPageTextButton } from '../../components/template2/coverpage/coverpageTextButton';
import FormContact from '../../components/template2/form/form';

// import data
import { CONTACT_DATA, CURRICULUM_DATA } from '../../profile-data/sandra-ballesteros/config-data'; //CAMBIAR DIRECCION
import { IMAGE_DATA, PERSONAL_DATA, SOCIALNET_DATA } from '../../profile-data/sandra-ballesteros/config-data'; //CAMBIAR DIRECCION

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
        url={'sandra-ballesteros'}
      >
        <CoverPageTextButton
          name={PERSONAL_DATA.NAME}
          description={PERSONAL_DATA.DESCRIPTION}
          colorName={PERSONAL_DATA.COLORNAME}
          colorDescription={PERSONAL_DATA.COLORDESCRIPTION}
          coverPageUrl={IMAGE_DATA.BANNER}
          information={PERSONAL_DATA.HISTORY}
          pdf={CURRICULUM_DATA.CURRICULUM_VITAE}
          imgInformation={IMAGE_DATA.INFORMATION}
          btnName={'Mi negocio, tú negocio Wijex'}
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
        <PlinthTitle
          title={'Galería'}
        />
        <Gallery
          gallery_1={IMAGE_DATA.GALLERY_1}
          gallery_2={IMAGE_DATA.GALLERY_2}
          gallery_3={IMAGE_DATA.GALLERY_3}
        />
        <PlinthTitle
          title={'Quiero más información'}
        />
        <FormContact
          name={PERSONAL_DATA.NAME}
          email={CONTACT_DATA.EMAIL}
          background=''
          phone={CONTACT_DATA.PHONE}
          address={CONTACT_DATA.ADDRESS}
          number={CONTACT_DATA.NUMBER}
          locality={CONTACT_DATA.LOCALITY}
          province={CONTACT_DATA.PROVINCE}
          country={CONTACT_DATA.COUNTRY}
          avatar={IMAGE_DATA.AVATAR}
          url={'sandra-ballesteros'}
        />
        {/* <PlinthTitle
          title={'Quiero más información'}
        /> */}
        {/* <FormContactTwo
          name={PERSONAL_DATA.NAME}
          email={CONTACT_DATA.EMAIL}
        /> */}

      </Layout>
    </div>
  )
}

export default ProfilePage