import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import SectionHeaderNovo from '../sectionElements/SectionHeaderNovo'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'
import content from '../../content/content'

function Cards({ colorMode }) {
  let text,
    textOpacity,
    backgroundMode,
    stepNumberBg,
    stepNumberText,
    lineColor,
    textDestaque,
    image,
    borderT

  switch (colorMode) {
    case 'light':
      backgroundMode = 'bg-secondary/60'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      stepNumberBg = 'bg-white'
      stepNumberText = 'text-primaryDark'
      lineColor = 'bg-primaryDark/20'
      textDestaque = 'text-primaryDark'
      image = ' border-[8px] border-white'
      borderT = 'border-t-primaryDark'
      break
    case 'dark':
      backgroundMode = 'bg-darkOpacity'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      backgroundMode = 'bg-dark'
      stepNumberBg = 'bg-dark'
      stepNumberText = 'text-primaryLight'
      lineColor = 'bg-primaryLight/20'
      textDestaque = 'text-primaryLight'
      image = ' border-[8px] border-borderImage'
      borderT = 'border-t-primaryLight'

      break
    default:
      backgroundMode = 'bg-secondary/60'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      backgroundMode = 'bg-secondary/60'
      stepNumberBg = 'bg-white'
      stepNumberText = 'text-primaryDark'
      lineColor = 'bg-primaryDark/20'
      textDestaque = 'text-primaryDark'
      image = ' border-[8px] border-white'
      borderT = 'border-t-primaryDark'
  }

  const cards = Object.values(content.texts.cardsSection.cards)
  return (
    <SectionArea className={`${backgroundMode}`}>
      <SectionWrapper>
        <section id="">
          <div className="container mx-auto">
            <SectionHeaderNovo
              miniTitle="Áreas de Atuação"
              title="Atuação jurídica completa para proteger seus direitos"
              subtitle="Soluções legais pensadas para prevenir conflitos, resolver problemas e garantir segurança jurídica em diferentes áreas do Direito."
              colorMode={colorMode}
            />

            <div className="flex flex-wrap gap-6 mt-16 justify-center">
              {cards.map((item, index) => (
                <MotionDivDownToUp>
                  {' '}
                  <div
                    key={index}
                    className={`h-fit border-t-4 ${borderT} bg-white transition-shadow duration-300 max-w-[160px] rounded-md`}
                  >
                    <div className="pt-8 px-6 pb-8 h-full flex flex-col">
                      <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mx-auto text-primary mb-6">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-secondFont font-bold text-primary text-center">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </MotionDivDownToUp>
              ))}
            </div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default Cards
