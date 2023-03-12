import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FeatureSection, UpcomingShows, SongCarousel } from "~/components";
import carouselStyles from "react-multi-carousel/lib/styles.css";
import { shows } from "~/constants/shows";
import { songs } from "~/constants/songs";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: carouselStyles },
];

export async function loader(args: LoaderArgs) {
  return json({
    shows,
    songs,
  });
}

export default function Index() {
  const { songs, shows } = useLoaderData<typeof loader>();

  return (
    <>
      <div className="relative flex h-screen w-full items-center justify-center">
        <video
          autoPlay={true}
          className="absolute inset-0 h-screen w-full object-cover"
          id="myVideo"
          src="/end-rock-hero-video.mp4"
          poster="/end-rock-stellas-large.jpg"
          playsInline={true}
          disablePictureInPicture={true}
          muted
          loop
        />

        {/* Opacity Overlay */}

        <div className="absolute h-screen w-full bg-gradient-to-t from-gray-900 to-gray-500 opacity-60" />

        <div className="absolute top-0 left-0 bottom-0 right-0 h-screen w-full">
          <div className="flex flex-col flex-wrap justify-center px-3">
            {/* ERC Logo */}

            <div className="flex justify-center">
              <img
                src="logo-main-for-dark-bg.png"
                alt="band logo"
                className="mt-44 mb-8 object-contain sm:max-w-xs md:max-w-2xl lg:max-w-3xl"
              />
            </div>

            <div className="mx-auto flex w-full max-w-3xl items-center justify-center space-x-6 border-t-2 border-gray-200 border-opacity-50 pt-12">
              <a
                href="https://www.facebook.com/EndRockCle"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-erc-yellow rounded-md p-1 opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out hover:bg-erc-blue hover:bg-opacity-50"
              >
                <FaFacebook className="h-12 w-12 text-2xl text-erc-yellow" />
              </a>
              <a
                href="https://www.instagram.com/endrockcle/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-erc-yellow rounded-md p-1 opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out hover:bg-erc-blue hover:bg-opacity-50"
              >
                <FaInstagramSquare className="h-12 w-12 text-2xl text-erc-yellow" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <FeatureSection />

      <div className="bg-gray-600 bg-opacity-40 py-12">
        <UpcomingShows shouldHideHeader={false} shows={shows} />
      </div>

      <div className="bg-gray-600 bg-opacity-40 py-12 mb-12">
        <SongCarousel songs={songs} />
      </div>
    </>
  );
}
