// AboutPage.js
import React from "react";
import GradientBackground from "../Styles/GradientBackground";
import teamImage from "../config/photo-1517694712202-14dd9538aa97.avif";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const AboutPage = () => {
  return (
    <div className="relative bg-white min-h-screen">
      <GradientBackground />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Company Mission
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Built on values, fueled by data and driven by creativity. We are
            independently owned by marketers, built for marketers, putting
            client results first.
          </p>
        </div>

        <div className="mt-10 flex justify-center ">
          <img
            className="object-scale-down rounded-lg shadow-xl shadow-2xl transition-transform  hover:-translate-y-1 hover:scale-105 "
            src={teamImage}
            alt="SPDigital Team"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <span className="block text-sm font-semibold text-indigo-600 uppercase">
              Aug 2021
            </span>
            <h3 className="mt-2 text-xl font-bold text-gray-900">
              Founded company
            </h3>
            <p className="mt-1 text-gray-500">
              Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur
              asperiores et dolorem dolorem optio voluptate repudiandae.
            </p>
          </div>
          <div>
            <span className="block text-sm font-semibold text-indigo-600 uppercase">
              Dec 2021
            </span>
            <h3 className="mt-2 text-xl font-bold text-gray-900">
              Secured $65m in funding
            </h3>
            <p className="mt-1 text-gray-500">
              Provident quia at esse. Vero evel eos repudiandae aspernatur.
              Cumque minima impedit sapiente a architecto nihil.
            </p>
          </div>
          <div>
            <span className="block text-sm font-semibold text-indigo-600 uppercase">
              Feb 2022
            </span>
            <h3 className="mt-2 text-xl font-bold text-gray-900">
              Released beta
            </h3>
            <p className="mt-1 text-gray-500">
              Sunt perspiciatis incidunt. Non necessitatibus aliquid.
              Consequatur ut officiis earum eum quia facilis. Hic deleniti
              dolorem quia et.
            </p>
          </div>
          <div>
            <span className="block text-sm font-semibold text-indigo-600 uppercase">
              Dec 2022
            </span>
            <h3 className="mt-2 text-xl font-bold text-gray-900">
              Global launch of product
            </h3>
            <p className="mt-1 text-gray-500">
              Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id
              architecto voluptatem hic aut pariatur velit.
            </p>
          </div>
        </div>
      </div>

      <div className=" py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our People Section */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Worldwide Impact
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati
            eos iste. Soluta rerum quidem minus ut molestiae velit error quod.
            Excepturi quidem expedita molestias quas.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 text-center">
          <StatisticsCounter
            end={8.9}
            prefix="$"
            suffix=" billion"
            title="Total Revenue Generated"
          />
          <StatisticsCounter end={401093} title="Transactions this year" />
          <StatisticsCounter end={250000} title="Users on the platform" />
        </div>
      </div>
    </div>
  );
};

const StatisticsCounter = ({ end, prefix = "", suffix = "", title }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 px-5 py-6 bg-white rounded-lg shadow-md sm:my-5 ">
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div
            className=" text-indigo-600"
            style={{ height: "3em", fontSize: "2.5em" }}
          >
            {isVisible ? (
              <CountUp
                start={0}
                end={end}
                prefix={prefix}
                suffix={suffix}
                duration={2}
              />
            ) : null}
          </div>
        )}
      </VisibilitySensor>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  );
};

export default AboutPage;
