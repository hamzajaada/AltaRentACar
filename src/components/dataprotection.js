import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Dataprotection = () => {
  return (
    <>
      <Header />
      <div className="w-full h-auto lg:pt-28  pt-28 pb-20   lg:px-20 px-10">
        <p className="text-[26px] lg:text-left uppercase text-center font-bold">
          PRIVACY POLICY
        </p>
        <div className="mb-3 lg:mx-0 mx-auto w-20 h-1 bg-customRed"></div>
        <p className="text-[15px] lg:mb-7 mt-3 lg:my-5 lg:mx-0  mb-5 text-center  lg:text-justify">
          The use of our site is possible without an indication of personal
          data. Different regulations may apply to the use of individual
          services on our site, which will be explained separately in this case
          below. Your personal data (for example, name, address, e-mail,
          telephone number, etc.) will only be processed by us in accordance
          with the provisions of European data protection law. Data is personal
          when it can be clearly assigned to a specific natural person. The
          legal basis for data protection can be found in the Federal Data
          Protection Act (BDSG) and the Telemedia Act (TMG). The following
          regulations inform you in this respect about the type, scope and
          purpose of the collection, use and processing of personal data by the
          provider.
        </p>

        {/* PA 1 */}
        <p className="text-[20px]  text-center lg:text-left font-bold text-gray-600  mt-3 lg:mb-0 lg:mx-0  mb-5 ">
          SSL encryption
        </p>
        <p className="text-[15px]  lg:mb-5 lg:mx-0  mb-5 text-center  lg:text-justify">
          To protect the security of your data during transmission, we use
          state-of-the-art encryption (SSL) technology over HTTPS.
        </p>
        {/* PA 2 */}
        <p className="text-[20px] text-center lg:text-left font-bold text-gray-600  mt-3 lg:mb-5 lg:mx-0   mb-5 ">
          Cookies
        </p>
        <p className="text-[15px]  lg:mb-5 lg:mx-0  mb-5 text-center  lg:text-justify">
          We use on our site so-called cookies to recognize multiple uses of our
          offer, by the same user / Internet access holder. Cookies are small
          text files that your Internet browser stores and saves on your
          computer. They serve to optimize our website and our offers. These are
          mostly so-called "session cookies", which are deleted after the end of
          your visit. However, these cookies sometimes provide information to
          automatically recognize you. This recognition is based on the IP
          address stored in the cookies. The information obtained in this way
          serves to optimize our offers and to give you easier access to our
          site. You can prevent the installation of cookies by setting your
          browser accordingly; however, we point out that in this case you may
          not be able to fully use all functions of our website.
        </p>
        {/* PA 3 */}
        <p className="text-[20px]  text-center lg:text-left font-bold text-gray-600  mt-3 lg:mb-5 lg:mx-0  mb-5 ">
          Use of Google Analytics with anonymization function
        </p>
        <p className="text-[15px]  lg:mb-5 lg:mx-0  mb-5 text-center  lg:text-justify">
          We use Google Analytics, a web analytics service provided by Google
          Inc., 1600 Amphitheater Parkway, Mountain View, CA 94043 USA,
          hereafter "Google". Google Analytics uses so-called "cookies", text
          files that are stored on your computer and thereby allow an analysis
          of the use of the website by you. The information generated by these
          cookies, such as the time, location and frequency of your website
          visit, including your IP address, is transmitted to Google in the
          United States and stored there. We use Google Analytics on our website
          with an IP anonymization feature. In this case, your IP address will
          already be shortened and thus anonymised by Google within member
          states of the European Union or in other contracting states of the
          Agreement on the European Economic Area. Google will use this
          information to evaluate your use of our site, to compile reports on
          our website activity, and to provide other services related to website
          activity and internet usage. Google may also transfer this information
          to third parties if required by law or as far as third parties process
          this data on behalf of Google. Google does not claim to link your IP
          address to any other data provided by Google. You can prevent the
          installation of cookies by setting your browser software accordingly;
          however, we point out that in this case you may not be able to fully
          use all functions of our website. In addition, Google offers a
          deactivation option for the most popular browsers, giving you more
          control over what data Google collects and processes. If you enable
          this option, website visit information will not be sent to Google
          Analytics. Activation does not prevent information from being
          transmitted to us or any other web analytics services we may use. For
          more information about Google's opt-out option and to enable this
          option, please visit the following link:
          https://tools.google.com/dlpage/gaoptout?hl=en .
        </p>

        {/* PA 4 */}
        <p className="text-[20px]  text-center lg:text-left font-bold text-gray-600  mt-3 lg:mb-5 lg:mx-0  mb-5 ">
          Server data
        </p>
        <p className="text-[15px]  lg:mb-5 lg:mx-0  mb-5 text-center  lg:text-justify">
          For technical reasons u.a. The following data, which your Internet
          browser transmits to us or to our web space provider, is recorded
          (so-called server log files): - browser type and browser version - The
          operating system used - Website from which you visit us (Referrer URL)
          - Website you visit - Date and time of your access - Your Internet
          Protocol (IP) address. These anonymous data are stored separately from
          any personal information that you may provide and so do not allow any
          conclusions to be drawn about a particular person. They are evaluated
          for statistical purposes in order to optimize our website and our
          offers.
        </p>
        
        {/* PA 5 */}
        <p className="text-[20px]  text-center lg:text-left font-bold text-gray-600  mt-3 lg:mb-5 lg:mx-0  mb-5 ">
          Contact Forms
        </p>
        <p className="text-[15px]  lg:mb-5 lg:mx-0  mb-5 text-center  lg:text-justify">
          We offer you the opportunity to contact us by e-mail, reservation form
          and via a contact form. In this case, the information provided by the
          user will be stored for the purpose of processing his contact. A
          passing on to third does not take place. A comparison of the data
          collected with data, which may be collected by other components of our
          site, is also not done.
        </p>
        {/* PA 6 */}
        <p className="text-[20px]  text-center lg:text-left font-bold text-gray-600  mt-3 lg:mb-5 lg:mx-0  mb-5 ">
          Information / revocation / cancellation
        </p>
        <p className="text-[15px]  lg:mb-5 lg:mx-0  mb-5 text-center  lg:text-justify">
          On the basis of the Federal Data Protection Act you can contact us
          free of charge with questions regarding the collection, processing or
          use of your personal data and their correction, blocking, deletion or
          revocation of a given consent. We point out that you are entitled to a
          correction of incorrect data or deletion of personal data should this
          claim not be prevented by a statutory retention obligation.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Dataprotection;