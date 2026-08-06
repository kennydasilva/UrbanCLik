import { Megaphone, FileStack, PenTool, Share2 } from "lucide-react";
import type { ServiceItem } from "@/types";

export const SERVICES: ServiceItem[] = [
  {
    id: "marketing-branding",
    number: "01",
    title: "Marketing & Branding",
    description:
      "Construímos marcas fortes e memoráveis, alinhadas com os objetivos e os valores do seu negócio.",
    icon: Megaphone,
  },
  {
    id: "producao-conteudo",
    number: "02",
    title: "Produção de Conteúdo",
    description:
      "Criamos conteúdo relevante e consistente para comunicar a mensagem certa ao público certo.",
    icon: FileStack,
  },
  {
    id: "design-comunicacao-visual",
    number: "03",
    title: "Design e Comunicação Visual",
    description:
      "Desenvolvemos identidades visuais e materiais gráficos que traduzem a essência da sua marca.",
    icon: PenTool,
  },
  {
    id: "gestao-redes-sociais",
    number: "04",
    title: "Gestão de Redes Sociais",
    description:
      "Gerimos as suas redes sociais com estratégia, criatividade e foco em resultados reais.",
    icon: Share2,
  },
];
