import React from 'react'
import TitleHeader from './HeroModels/TitleHeader'
import Button from './Button'
import { Canvas } from '@react-three/fiber'
import Particles from './HeroModels/Particles'
import { OrbitControls } from '@react-three/drei'
import ContactRoom from './Models/ContactRoom'

const Contact = () => {
  return (
    <section id="contact" className='flex-center my-20'>
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader title="Get In Touch With Me" sub="📞 Contact Information" />
            <div className="mt-5">
                <p className="text-center">Feel free to reach out for collaborations, questions, or just to say hello!</p>
            </div>
            <div className="mt-16 bg-[#0E0E10] rounded-xl grid grid-cols-1 md:grid-cols-2 gap-3 relative">
                <div className="rounded-3xl p-10">
                    <label htmlFor="name" className=' relative z-2' >
                        <p className='text-[#D9ECFF] mb-2'>Your Name</p>
                        <input type="text" name="name" placeholder="What's your beautiful name" id="name" className="mb-4 w-full bg-[#2D2D38] p-2 rounded-md outline-none border-none" />
                    </label>
                    <label htmlFor="email" className="my-2 relative z-2">
                        <p className='text-[#D9ECFF] mb-2'>Your Email</p>
                        <input type="email" name="email" placeholder="What's your email address" id="email" className="mb-4 w-full bg-[#2D2D38] p-2 rounded-md outline-none border-none" />
                    </label>
                    <label htmlFor="message" className="my-2 relative z-2">
                        <p className='text-[#D9ECFF] mb-2'>Your Message</p>
                        <textarea name="message" id="message" rows={5} className="mb-4 w-full bg-[#2D2D38] p-2 rounded-md outline-none border-none"></textarea>
                    </label>
                    <Button text="Send message &rarr;" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full">
                    <Canvas>
                        <OrbitControls />
                        <Particles count={500} />
                        <ambientLight intensity={2} />
                    </Canvas>
                </div>
                <ContactRoom />
            </div>
        </div>
    </section>
  )
}

export default Contact
