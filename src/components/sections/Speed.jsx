import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import { Clock, Gavel, ShieldCheck } from 'lucide-react'
import SectionHeaderNovo from '../sectionElements/SectionHeaderNovo'

function Speed({ colorMode }) {
  let backgroundMode, text, textOpacity, textDestaque, cardBg, iconBg
  switch (colorMode) {
    case 'light':
      backgroundMode = 'bg-terciary/60'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      iconBg = 'bg-white text-primaryDark'

      break
    case 'dark':
      backgroundMode = 'bg-darkOpacity'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      iconBg = 'bg-darkOpacity text-primaryLight'

      break
    default:
      backgroundMode = 'bg-secondary/60'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      iconBg = 'bg-white text-primaryDark'
  }
  return (
    <SectionArea className={`${backgroundMode}`}>
      <SectionWrapper>
        <section className="">
          <SectionHeaderNovo
            miniTitle="Rapidez e Praticidade"
            title="Dependendo do caso, o divórcio pode ser resolvido:"
            colorMode={colorMode}
          />
          <div className="max-w-4xl mx-auto bg-secondary/50 rounded-3xl p-8 md:p-12 border">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  text: 'Em poucos dias, conforme o tipo de divórcio',
                  icon: Clock,
                },
                { text: 'Sem audiência, na maioria dos casos', icon: Gavel },
                {
                  text: 'Sem necessidade de comparecimento presencial',
                  icon: ShieldCheck,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <item.icon className={`w-6 h-6 ${textOpacity}`} />
                  </div>
                  <p className={`font-medium font-secondFont ${textOpacity}`}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p
                className={`text-title2 font-medium font-secondFont inline-block px-4 py-1.5 rounded-full text-black/70`}
              >
                Tudo conforme a lei.
              </p>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default Speed
