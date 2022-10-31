import React from "react";
import FooterNav from "../footer/footer";
import HeaderNavVertical from "../headervertical/header";

type Props = {
  name: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  number: string;
  locality: string;
  province: string;
  country: string;
  avatar: string;
  url: string;
  children: any;
};

export default function Layout(props: Props) {
  return (
    <div className="flex flex-col ">
      <div className="lg:flex lg:flex-row ">
        <div className="lg:flex lg:flex-col fixed z-50 w-full lg:w-min shadow-2xl mr-1">
          <HeaderNavVertical
            name={props.name}
            description={props.description}
            email={props.email}
            phone={props.phone}
            address={props.address + ' ' + props.number + ', ' + props.locality}
            avatar={props.avatar}
            url={props.url}
          />
        </div>
        <div className="lg:flex lg:flex-col w-full">
          <main className="flex-1  lg:ml-28 ">
            {props.children}
          </main>
        </div>
      </div>
      <FooterNav />
    </div>
  );
}