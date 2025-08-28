import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import { Fox } from "../models";
import { Loader } from "../components";

const Contact = () => {
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {/* Left side - Contact Info */}
      <div className='flex-1 min-w-[50%] flex flex-col gap-6'>
        <h1 className='head-text'>Get in Touch</h1>

        <div className='mt-10 flex flex-col gap-5 text-slate-600 text-lg'>
          <p>
            📞 <strong>Phone:</strong>{" "}
            <a
              href='tel:+971565916778'
              className='text-blue-600 hover:underline'
            >
              +971 565916778
            </a>
          </p>
          <p>
            📧 <strong>Email:</strong>{" "}
            <a
              href='mailto:aneeshabdulrahman786@gmail.com'
              className='text-blue-600 hover:underline'
            >
              aneeshabdulrahman786@gmail.com
            </a>
          </p>
          <p>
            📍 <strong>Address:</strong> Karama, Dubai, UAE
          </p>
        </div>
      </div>

      {/* Right side - Fox animation */}
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
