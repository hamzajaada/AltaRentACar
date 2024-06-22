import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Legalnotice = () => {
  return (
    <>
      <Header />
      <div className="w-full h-auto lg:pt-28  pt-28  lg:px-20 px-10">
        <p className="text-[26px] lg:text-left uppercase text-center font-bold">
          LEGAL NOTICE
        </p>
        <div className="mb-3 lg:mx-0 mx-auto w-40 h-1 bg-customRed"></div>
        <p className="text-[20px] text-gray-600 font-bold uppercase text-center lg:text-left">
          IDENTITY OF THE WEBSITE OWNER
        </p>
        <p className="text-[15px] lg:mb-7 mt-3 lg:my-0 lg:mx-0  mb-5 text-center  lg:text-justify">
          The terms and conditions set out below govern access to and use of the
          website www.rentalcar-tenerife.com. This website is the property of
          Best man group, with Tax ID Code b01612217, referred to in this
          document as Rental Car. And the private individual, henceforth
          referred to as the User, who accesses the website to acquire
          information and to hire the services offered on the website.
        </p>

        {/* 222 */}

        <p className="text-[20px] text-gray-600 font-bold uppercase text-center lg:text-left">
          PATENT RIGHTS AND INTELLECTUAL PROPERTY
        </p>
        <p className="text-[15px] mt-3 lg:mt-0  lg:mb-7 lg:mx-0  mb-5 text-center  lg:text-justify">
          This website is the property of Rental Car. Intellectual Property
          rights and the rights to use and reproduce this website, its pages,
          screens, the information it contains, its appearance and design and
          its links to other websites owned by any of the companies mentioned
          above, are solely owned by Rental Car, unless otherwise specified. Any
          improper use of it by anyone other than the legitimate owner may be
          the object of prosecution in accordance with current legislation. It
          is not permitted to reproduce, transfer, change or remove any
          information, contents or notices included in this website without the
          express written authorisation of the website owner.
        </p>
        {/* 333 */}
        <p className="text-[20px] text-gray-600 font-bold uppercase text-center lg:text-left">
          LEGAL TERMS AND CONDITIONS
        </p>
        <p className="text-[15px] mt-3 lg:mt-0  lg:mb-7 lg:mx-0  mb-5 text-center  lg:text-justify">
          The use of this website constitutes an agreement between the User and
          Rental Car, which includes full and unreserved acceptance of each of
          the general conditions published by Rental Car, in the version that is
          valid and published at the time the website is accessed. To this end,
          Rental Car recommends that the User reads these terms and conditions
          attentively each time he or she accesses the website. Minors under the
          age of 18 are not allowed to access or use the website, and to this
          end registered members declare that they are over 18 and have the
          necessary legal capacity to offer and acquire the services provided on
          the Rental Car website, in accordance with these general terms and
          conditions, which the user fully understands. If a vehicle is hired by
          a minor, Rental Car bears no responsibility, and the minor or his or
          her parents or guardians must bear responsibility for any damages that
          may be caused. Rental Car may, at any time and with no prior
          notification, modify the design, presentation and/or configuration of
          its website or some or all of its contents, or modify the general
          and/or specific terms and conditions for their use.
        </p>
        <p className="text-[20px] text-gray-600 font-bold uppercase text-center lg:text-left">
          ENFORCEABLE LEGISLATION AND COMPETENT JURISDICTION
        </p>
        <p className="text-[15px] mt-3 lg:mt-0  lg:mb-7 lg:mx-0  mb-5 text-center  lg:text-justify">
          These conditions of use are subject to Spanish Law and for any
          conflict that may arise from their interpretation, the parties submit
          to the jurisdiction of the Courts of the city of Santa Cruz de
          Tenerife.
        </p>
        
        <p className="text-[15px]  lg:mt-0  lg:mb-7 lg:mx-0  text-center  lg:text-justify">
        contact@elite-rentacar.com
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Legalnotice;
