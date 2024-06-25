import Section from "./Section";
import Heading from "./Heading";
import { shirt, sitegram, check, refine } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
} from "./design/Services";


const Services = () => {
  return (
    <Section id="Projects">
      <div className="container">
        <Heading
          title="My Projects"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[35rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={refine}
              />
            </div>

            <div className="relative z-1 max-w-[18rem] ml-auto">
              <h4 className="h4 mb-4">Refine Dashboard</h4>
              <p className="body-2 mb-[3rem] text-n-3">
              A Dashboard of companies and tasks to keep track of your todo list, made with refine, GraphQL, nextJS, typeScript, ant-design, and more. 
              </p>
              <div className="flex gap-5 flex-row mb-1 underline">
                <a href="https://github.com/Haris1221/RefineDashboard">Learn More</a>
                <a href="https://refine-dashboard-two.vercel.app/">Live Site</a>
              </div>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={shirt}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">3D Shirt</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                Apply any color to the 3D shirt/swag for personalized styling or Ask the AI to add certain styles to the shirt instead!. Made using ThreeJs, Tailwind CSS, and ReactJs.
                </p>
                <div className="flex gap-5 flex-row mb-1 underline">
                <a href="https://github.com/Haris1221/3DShirt">Learn More</a>
                <a href="https://3dshirt-nine.vercel.app/">Live Site</a>
              </div>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Sitegram</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  A FullStack social media Instagram like app. made using Vite, Appwrite, ReactJS, TypeScript, and Tailwins CSS.
                </p>
                <div className="flex gap-5 flex-row mb-1 underline">
                <a href="https://github.com/Haris1221/SiteGram">Learn More</a>
                <a href="https://sitegram.vercel.app/">Live Site</a>
              </div>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={sitegram}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
