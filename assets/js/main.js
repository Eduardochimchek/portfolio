import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".Agrosys",
  `Durante meu primeiro estágio, tive a oportunidade de adquirir valiosas lições sobre
  comportamento profissional e compreender o funcionamento da engrenagem na minha área.
  Durante seis meses de estágio, mergulhei no aprendizado e na execução de tarefas,
  adaptando minhas habilidades para ingressar na área de produto.
  Foi nesse período que aprendi e apliquei os padrões da empresa, os quais continuei a utilizar
  após ser efetivado.
  Posteriormente, fui efetivado no departamento de tecnologia da empresa, onde atuei como
  desenvolvedor full-stack.
  Foi nesse ambiente que adquiri um vasto conhecimento em template (HTML, CSS, JavaScript),
  contribuindo com soluções tanto para uso interno quanto externo da empresa.`,
  "Agrosys Tecnologia",
  "Agrosys",
  "Mar 2021 - Atualmente"
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
);