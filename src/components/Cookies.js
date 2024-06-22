import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Cookies = () => {
  return (
    <>
      <Header />
      <div className="w-full h-auto lg:pt-28  pt-28  lg:px-20 px-10">
        <p className="text-[26px] lg:text-left uppercase text-center font-bold">
          COOKIE
        </p>
        <div className="mb-3 lg:mx-0 mx-auto w-20 h-1 bg-customRed"></div>
        <p className="text-[20px] text-gray-600 font-bold lg:mb-5 uppercase text-center lg:text-left">
          RENTAL CAR COOKIE POLICY
        </p>
        <p className="text-[15px] lg:mb-7 mt-3 lg:my-0 lg:mx-0  mb-5 text-center  lg:text-justify">
          Rental Car uses cookies to help provide, protect and improve the
          Rental Car platform. This policy explains how and why we use these
          technologies and the options we present to you.
          <br />A cookie is a small data file that is installed on your device
          (eg, your phone or computer). For example, one cookie could allow us
          to recognize your browser and another could store your preferences.
          Two types of cookies are used on the Rental Car Platform: 1) 'session
          cookies' 2) and 'permanent cookies'. Session cookies normally expire
          when you close your browser, while permanent cookies will remain on
          your device after you have closed the browser and can be used again
          when you access the Rental Car Platform again.
        </p>

        {/* 222 */}

        <p className="text-[20px] text-gray-600 font-bold lg:mb-5  uppercase text-center lg:text-left">
          WHY DOES RENTAL CAR USE THESE TECHNOLOGIES
        </p>
        <p className="text-[15px] lg:mb-7 mt-3 lg:my-0 lg:mx-0  mb-5 text-center  lg:text-justify">
          We use these technologies for various purposes, such as the following:
          <br />
          Allow you to use the Rental Car Platform and the Payment Services and
          <br />
          access both. Allow, facilitate and optimize the operation of the
          <br />
          Rental Car Platform and your access to it. Better understand how you
          <br />
          move around and interact with the Rental Car Platform and to improve
          it.
          <br />
          Provide you with tailored advertising (for example, on the Rental Car
          Platform, emails and on third-party websites).
        </p>
        {/* 333 */}
        <p className="text-[20px] text-gray-600 font-bold lg:mb-5  uppercase text-center lg:text-left">
          WHY DOES RENTAL CAR USE THESE TECHNOLOGIES
        </p>
        <p className="text-[15px] mt-3 lg:mt-0  lg:mb-7 lg:mx-0  mb-5 text-center  lg:text-justify">
          When you visit our websites, we install cookies on your computer.
          Cookies are small text files that websites send to your computer or
          other device connected to the Internet to identify your browser or to
          store information or settings in your browser. Cookies allow us to
          recognize you when you return.
          <br />
          In many cases, you can manage cookie preferences and choose not to use
          cookies by adjusting your browser settings. All browsers are
          different, so visit the 'help' section of your browser for cookie
          preferences and other privacy settings that may be available. Please
          note that if you decide to delete or reject cookies or delete local
          storage, this could affect the features, availability and
          functionality of our websites.
        </p>
        <p className="text-[20px] text-gray-600 font-bold lg:mb-5  uppercase text-center lg:text-left">
          WHAT TYPES OF COOKIES ARE USED IN RENTAL CAR?
        </p>
        <p className="text-[15px] mt-3 lg:mt-0  lg:mb-7 lg:mx-0  mb-5 text-center  lg:text-justify">
          - Technical cookies: are those that allow the user to navigate through
          the Rental Car client area and use its different functions. For
          example the login, access the private area, reserve a vehicle.
          <br />
          -Analysis cookies: are those that, processed by us or by third
          parties, allow us to quantify the number of users and thus carry out
          the statistical measurement and analysis of the use made by users of
          the service offered. For this, your browsing on our website is
          analyzed in order to improve the offer of products or services that we
          offer you.
        </p>
        {/* 444 */}
        <p className="text-[20px] text-gray-600 font-bold lg:mb-5  uppercase text-center lg:text-left">
          THIRD PARTIES
        </p>
        <p className="text-[15px] mt-3 lg:mt-0  lg:mb-7 lg:mx-0  mb-5 text-center  lg:text-justify">
          To help us better understand how people use the Rental Car Platform,
          we work with Google Analytics. To prevent Google Analytics from using
          your information for analytics purposes, you can install the Google
          Analytics browser opt-out add-on by{" "}
          <a href="#" className=" text-blue-500">
            {" "}
            clicking here
          </a>
          .
          <br />
          This site is governed under the
          <a href="#" className=" text-blue-500">
            {" "}
            Privacy policy
          </a>{" "}
          and the{" "}
          <a href="#" className=" text-blue-500">
            {" "}
            Terms of Service of Google
          </a>{" "}
          .
        </p>
        {/* 555 */}
        <p className="text-[20px] text-gray-600 font-bold lg:mb-5  uppercase text-center lg:text-left">
          YOUR CHOICES
        </p>
        <p className="text-[16px] uppercase text-gray-600 font-semibold  text-center lg:text-left">
          COOKIE PREFERENCES
        </p>
        <p className="text-[15px] mt-3 lg:mt-0  lg:mb-7 lg:mx-0  mb-5 text-center  lg:text-justify">
          When you visit our website, a banner appears asking if you accept the
          use of our cookies. These cookies will be activated only with your
          consent. You can edit your consent through our cookie management tool
          here. here. 
          <br/>
          Most browsers accept cookies automatically, although you
          can modify your browser settings to reject them by accessing the Help
          section of the toolbar. Please bear in mind that restricting certain
          cookies may affect the functionality of the Website and the quality of
          the Service.
        </p>
       
        <p className="text-[15px]  lg:mt-0  lg:mb-7 lg:mx-0  text-center  lg:text-justify">
        contact@Alta -rentacar.com
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Cookies;
