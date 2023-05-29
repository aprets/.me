import Image from 'next/image';
import pfpBlob from 'public/pfp-blob.svg';
import pfp from 'public/pfp.svg';

import { SkillsAndProjects } from '@/components/skills-and-projects';

export const runtime = 'edge';

const Home = () => (
  <main>
    <div className="flex flex-col-reverse md:flex-row justify-between mb-24">
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 mt-8 text-neutral-900">Artur Prets</h1>
        <h2 className="text-lg text-neutral-700">
          Full-Stack / Cloud / Serverless / DevOps / Software / Networking / Security
        </h2>
        <p className="text-lg mt-6 mb-12 text-neutral-700">
          Passionate about web, cloud, software and tech in general.
          <br />
          See below for my links, contact details and projects.
        </p>
        <p className="mb-3 text-neutral-900">
          <span className="text-lg underline decoration-secondary-500 decoration-2">waaa</span>
        </p>
        <p className="mb-3 text-neutral-900">
          <a className="text-lg underline decoration-secondary-500 decoration-2" href="https://github.com/aprets">
            @aprets on GitHub
          </a>
        </p>
        <p className="mb-3 text-neutral-900">
          <a
            className="text-lg underline decoration-secondary-500 decoration-2"
            href="https://www.linkedin.com/in/aprets/"
          >
            /in/aprets on LinkedIn
          </a>
        </p>
      </div>
      <div className="flex justify-center">
        <div className="blob-bg h-96 w-96 flex justify-center">
          <Image
            className="pfp-transform"
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={pfp}
            height={225}
            priority
            alt="Profile"
            title="I am under the water. Please help me."
          />
        </div>
      </div>
    </div>
    <SkillsAndProjects />
  </main>
);
export default Home;
