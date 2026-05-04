import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import {
  Clock,
  Gavel,
  ShieldCheck,
  CircleDollarSign,
  Users,
  UserCheck,
  ScrollText,
  Landmark,
  Shield,
} from "lucide-react";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

function Speed({ colorMode }) {
  let backgroundMode, text, textOpacity, textDestaque, cardBg, iconBg;
  switch (colorMode) {
    case "light":
      backgroundMode = "bg-terciary/60";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      iconBg = "bg-white text-primaryDark";

      break;
    case "dark":
      backgroundMode = "bg-darkOpacity";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      iconBg = "bg-darkOpacity text-primaryLight";

      break;
    default:
      backgroundMode = "bg-secondary/60";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      iconBg = "bg-white text-primaryDark";
  }

  const servicos = [
    {
      titulo: "Pensão Alimentícia",
      descricao: "Fixação, revisão e cobrança, assegurando valores justos.",
      icone: (
        <CircleDollarSign
          strokeWidth={1.5}
          className="w-8 h-8 text-primaryDark"
        />
      ),
    },
    {
      titulo: "Guarda e Regularização de Visitas",
      descricao:
        "Definição de guarda e visitas, com foco no bem-estar dos filhos.",
      icone: <Users strokeWidth={1.5} className="w-8 h-8 text-primaryDark" />,
    },
    {
      titulo: "Reconhecimento de Paternidade",
      descricao:
        "Atuação no reconhecimento, garantindo direitos e segurança jurídica.",
      icone: (
        <UserCheck strokeWidth={1.5} className="w-8 h-8 text-primaryDark" />
      ),
    },
    {
      titulo: "Testamento (Planejamento Sucessório)",
      descricao:
        "Organização da sucessão para proteger bens e evitar conflitos.",
      icone: (
        <ScrollText strokeWidth={1.5} className="w-8 h-8 text-primaryDark" />
      ),
    },
    {
      titulo: "Inventário",
      descricao: "Condução de inventários com divisão segura e ágil.",
      icone: (
        <Landmark strokeWidth={1.5} className="w-8 h-8 text-primaryDark" />
      ),
    },
    {
      titulo: "Interdição e Curatela",
      descricao: "Proteção legal para quem não pode gerir seus interesses.",
      icone: <Shield strokeWidth={1.5} className="w-8 h-8 text-primaryDark" />,
    },
  ];

  return (
    <SectionArea className={`${backgroundMode}`}>
      <SectionWrapper>
        <section className="">
          <SectionHeaderNovo
            miniTitle="Rapidez e Praticidade"
            title="Dependendo do caso, o divórcio pode ser resolvido:"
            colorMode={colorMode}
          />
          <div className="relative w-full p-8 mx-auto overflow-hidden bg-white border rounded-xl md:p-12">
            <div
              className={`absolute top-0 left-0 bg-primaryDark h-2 w-full`}
            />
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  text: "Em poucos dias, conforme o tipo de divórcio",
                  icon: Clock,
                },
                { text: "Sem audiência, na maioria dos casos", icon: Gavel },
                {
                  text: "Sem necessidade de comparecimento presencial",
                  icon: ShieldCheck,
                },
              ].map((item, idx) => (
                <MotionDivDownToUp>
                  <div
                    key={idx}
                    className="flex flex-col items-center space-y-4 text-center"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primaryDark">
                      <item.icon className={`w-6 h-6 text-white`} />
                    </div>
                    <p className={`font-medium font-secondFont ${textOpacity}`}>
                      {item.text}
                    </p>
                  </div>
                </MotionDivDownToUp>
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
        <div className="mt-10 ">
          <SectionHeaderNovo
            title="Atuação cuidadosa e estratégica também nas demais demandas familiares:"
            colorMode={colorMode}
          />
          <div className="grid w-full max-w-5xl grid-cols-1 gap-6 px-4 mx-auto mt-8 font-medium font-secondFont md:grid-cols-2 lg:grid-cols-3">
            {servicos.map((servico, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-8 text-center transition-shadow duration-300 bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md"
              >
                <div className="p-3 mb-5 bg-gray-100 rounded-full ">
                  {servico.icone}
                </div>
                <h3 className="mb-3 text-lg font-bold text-primaryDark">
                  {servico.titulo}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {servico.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default Speed;
