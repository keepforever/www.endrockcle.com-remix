import { Link } from "@remix-run/react";
import { EndRockGradientText } from "./EndRockGradientText";

export const FeatureSection = () => {
  return (
    <div className="bg-gray-600 bg-opacity-40 py-12">
      {/* One */}

      <div className="mx-auto max-w-7xl px-4 lg:px-3">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-300 lg:text-6xl mb-4">
          <EndRockGradientText>
            High-energy, Alternative Rock
          </EndRockGradientText>
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Col 1 */}

          <div className=" flex justify-center items-center">
            <p className="text-3xl text-gray-300">
              EndRock is a high-energy, alternative rock cover band based in
              Cleveland, Ohio. We play alternative rock from the ‘90s and early
              ‘00s.{" "}
              <Link
                to="/contact"
                className="text-erc-yellow hover:text-yellow-300 hover:underline"
              >
                Book Now
              </Link>
            </p>
          </div>

          {/* Col 2 */}

          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl px-2 sm:px-0">
            <iframe
              title="hype video"
              width="600"
              height="375"
              style={{
                maxWidth: "100%",
                minWidth: "100%",
              }}
              src="https://www.youtube.com/embed/vI3DbQcGr7Q"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Two */}

      <div className="mx-auto mt-12 max-w-7xl px-2 lg:px-8">
        <div className="mx-auto">
          <div>
            <div className="mt-6">
              <h2 className="mb-12 text-4xl font-extrabold tracking-tight lg:text-6xl">
                <EndRockGradientText className="leading-relaxed">
                  EndRock Live in Concert
                </EndRockGradientText>
              </h2>

              {/* grid */}

              <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                {/* one */}
                <div>
                  <iframe
                    title="endrock live"
                    width="600"
                    height="375"
                    style={{
                      maxWidth: "100%",
                      minWidth: "100%",
                    }}
                    src="https://www.youtube.com/embed/V_HBF9MwuT4"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <h2 className="mt-1 text-2xl font-medium text-gray-300">
                    "Seven Nation Army" (The White Stripes Cover) @ The
                    Roundhouse Bar, Put-in-Bay Falls
                  </h2>
                </div>
                {/* two */}

                <div className="">
                  <iframe
                    title="endrock live put-in-bay"
                    width="600"
                    height="375"
                    style={{
                      maxWidth: "100%",
                      minWidth: "100%",
                    }}
                    src="https://www.youtube.com/embed/am_p8kuoRHQ"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <h2 className="mt-1 text-2xl font-medium text-gray-300">
                    "Say it Ain't So" (Weezer Cover) @ Grindstone, Berea
                  </h2>
                </div>
                {/* three */}
                <div className="">
                  <iframe
                    title="endrock live grindstone"
                    width="600"
                    height="375"
                    style={{
                      maxWidth: "100%",
                      minWidth: "100%",
                    }}
                    src="https://www.youtube.com/embed/CF9Tc9Chibs"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <h2 className="mt-1 text-2xl font-medium text-gray-300">
                    "Man in the Box" (Alice in Chains Cover) @ The Workz,
                    Cuyahoga Falls
                  </h2>
                </div>
                {/* four */}

                <div className="">
                  <iframe
                    title="endrock live the workz"
                    width="600"
                    height="375"
                    style={{
                      maxWidth: "100%",
                      minWidth: "100%",
                    }}
                    src="https://www.youtube.com/embed/h-IHjMfmyYw"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <h2 className="mt-1 text-2xl font-medium text-gray-300">
                    "Sabotage" (Beastie Boys Cover) @ Stella's Downtown CLE
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
