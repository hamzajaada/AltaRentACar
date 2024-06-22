import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Termes = () => {
  return (
    <>
      <Header />
      <div className="w-full h-auto lg:pt-28  pt-28 pb-20   lg:px-20 px-10">
        <p className="text-[26px] lg:text-left uppercase text-center font-bold">
          TERMS OF RENT
        </p>

        <div className="mb-3 lg:mx-0 mx-auto w-20 h-1 bg-customRed"></div>
        <p className="text-[17px]  text-center lg:text-left font-bold text-gray-600  mt-3 lg:my-0 lg:mx-0  mb-5 ">
          RETURNING AND DELIVERY VEHICLES
        </p>
        <p className="text-[15px]  mt-3 lg:mb-5 lg:mx-0  mb-5 text-center  lg:text-justify">
          Free delivery ( return) from 09:00 to 19:00
          <br />
          The night time delivery ( return) from 19.00 to 09.00 has an
          additional cost - 40€ to the total rental price.
        </p>
        <p className="text-[17px]  text-center lg:text-left font-bold text-gray-600  mt-3 lg:mb-5 lg:mx-0  mb-5 ">
          OUR ADVANTAGES:
        </p>
        <p className="text-[15px] mt-3 lg:mb-5 lg:mx-0  mb-5 text-center  lg:text-justify">
          Getting a car without waiting in line.
          <br />
          Free delivery to a hotel in the south of the island when ordering from
          3 days.
          <br />
          No restrictions on daily mileage.
          <br />
          Special conditions for regular clients
        </p>
        <p className="text-[17px]  text-center lg:text-left font-bold text-gray-600  mt-3 lg:mb-5 lg:mx-0  mb-5 ">
          CAR INSURANCE
        </p>
        <p className="text-[15px]  text-center lg:text-left font-bold text-gray-900  mt-3 lg:mb-5 lg:mx-0  mb-5 ">
          {" "}
          - This tariff includes:
        </p>
        <p className="text-[15px]  mt-3 lg:mb-5 lg:mx-0  mb-5 text-center  lg:text-justify">
          Standard insurance
        </p>
        <p className="text-[15px]  text-center lg:text-left font-bold text-gray-900  mt-3 lg:mb-5 lg:mx-0  mb-3 ">
          {" "}
          - This tariff does not include:
        </p>
        <p className="text-[15px]   lg:mb-5 lg:mx-0  mb-5 text-center  lg:text-justify">
          - Damage to wheels (rims) and tyres.
          <br />
          - It is forbidden to drive the vehicle off asphalted roads or in
          forbidden or dangerous areas (such as sand roads, beaches, mountains,
          etc).
          <br />
          - Lost the keys dame or deteriorate the key or the remote control.
          <br />
          - Damage caused by filling the tank with the wrong fuel (.Inadequate
          refuelling).
          <br />
          - Accident or damages caused by inadequate (dangerous) driving or
          under the influence of alcohol or other substances.
          <br />
          - Any damage caused by bad parking.
          <br />
          - The charges of any possible law intervention because of any traffic
          violation.
          <br />- Rental Car Tenerife are not liable for personal belongings
          inside the car.
        </p>
        <p className="text-[15px]  text-center lg:text-left font-bold text-gray-900  mt-3 lg:mb-5 lg:mx-0  mb-5 ">
          {" "}
          - You can choose full insurance for additional fee when you book your
          car
        </p>
        <p className="text-[17px]  text-center lg:text-left font-bold text-gray-600  mt-3 lg:mb-5 lg:mx-0  mb-5 ">
          ROAD ASSISTANCE :
        </p>
        <p className="text-[15px]  mt-3 lg:mb-5 lg:mx-0  mb-5 text-center  lg:text-justify">
          Service 24 hours of road assistance free of charge incase of
          breakdown.We have offices in all the most important areas of
          Tenerife,so being close whenever you should need us.
        </p>
        <p className="text-[17px]  text-center lg:text-left font-bold text-gray-600  mt-3 lg:mb-5 lg:mx-0  mb-5 ">
          CONDITIONS OF PAYMENT AND RENTAL :
        </p>
        <p className="text-[15px]  mt-3 lg:mb-5 lg:mx-0  mb-5 text-center  lg:text-justify">
          An advance payment of 10-25% of the cost of renting a car with early
          booking may be required.
          <br />
          - The minimum age to be able to rent is 23 and at least 2 years
          driving experience.
          <br />
          - Young Driver - This supplement is obligatory for drivers 23-25 years
          old Each extra driver has a cost of 9,90€ for the total rental of the
          vehicle.
          <br />
          - We don´t need the details of a credit card to reserve.
          <br />
          - Please,remember that a deposit of 300 euro must be left by credit or
          debit card at the time of pick-up, which will be charged at the start
          of rental and will be returned at the end.
          <br />
          - For special cars, convertibles, minibuses the deposit can be from
          1000 euros. This deposit is required to ensure that the vehiclle will
          be returned at the specified time and date on the contract.
          <br />
          - if the vehicle will be left at ou offices the deposit may be paid in
          cash. Upon receipt of the car, you, from your part, are obliged to
          record the damage, if there are any.
          <br />
          - In case of incident:
          <br /> - 1. do not leave the accident site;
          <br /> - 2. Inform us about the incident;
          <br />- 3. call the police and document it.
          <br />- The deposit will be returned two weeks after the rental ends.
        </p>
        <p className="text-[17px]  text-center lg:text-left font-bold text-gray-600  mt-3 lg:mb-5 lg:mx-0  mb-5 ">
          CANCELLATION POLICY
        </p>
        <p className="text-[15px]  mt-3 lg:mb-5 lg:mx-0  mb-5 text-center  lg:text-justify">
          We don´t charge if your plans are turned upside down.
          <br />
          - If you have reserved a vehicle and for some reason you need to cancel
          the reservation three days before,we don´t charge a thing.
          <br /> - The reservation will be cancelled with no charge.
          <br /> - If for any reason you want to hand over the car ahead of time,
          money for it will not be returned.
          <br /> - In exceptional cases, we can cancel the reservation without
          giving any reason.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Termes;
