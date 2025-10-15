import React from 'react'
import TitleHeader from '../components/HeroModels/TitleHeader'
import { techStackIcons } from '../constants'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
    useGSAP(() => {
        const cards = gsap.utils.toArray('.card-border')
        cards.forEach((card, index) => {
            gsap.from(card, {
                yPercent: 100, 
                opacity: 0, 
                duration: 1, 
                delay: 0.01 * index,
                ease: 'power1.inOut', 
                scrollTrigger: {
                    trigger: '#skills', 
                    start: 'top center',
                }
            })
        })
    }, [])
  return (
    <div id="skills" className="flex-center section-padding">
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader title='My Preferred Tech Stack' sub='🤝 The Skills I Bring to the Table' />
            <div className="tech-grid">
                {techStackIcons.map((icon) => (
                    <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                        <div className="tech-card-content">
                            <div className="tech-icon-wrapper">
                                <TechIcon model={icon} />
                            </div>
                            <div className="padding-x w-full">
                                <p>
                                    {icon.name}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TechStack
