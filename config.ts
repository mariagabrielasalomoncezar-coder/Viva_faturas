/**
 * Configuração central da Viva Connecta.
 *
 * Este é o ÚNICO lugar do projeto onde os dados oficiais da empresa
 * devem ser definidos. Nenhum componente deve escrever número de
 * WhatsApp, Instagram, endereço ou e-mail "na mão" — sempre importe
 * os valores a partir deste arquivo.
 *
 * Para atualizar qualquer dado de contato no futuro, altere apenas
 * os valores abaixo.
 */

export const COMPANY_NAME = "Viva Connecta";

export const COMPANY_TAGLINE = "Conectando sua empresa ao que realmente importa.";

// Número oficial de WhatsApp em formato internacional (somente dígitos),
// usado para montar o link wa.me. NÃO usar nenhum outro número no projeto.
export const WHATSAPP_NUMBER = "5511917870756";

// Formato de exibição do mesmo número, usado em textos e no rodapé.
export const WHATSAPP_NUMBER_DISPLAY = "+55 11 91787-0756";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Viva Connecta e gostaria de conhecer as soluções para minha empresa.";

export function buildWhatsAppLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const INSTAGRAM_HANDLE = "@vivaconectabr";
export const INSTAGRAM_URL = "https://www.instagram.com/vivaconectabr";

// Nenhum e-mail oficial foi fornecido pelo cliente. Preencha aqui quando
// houver um e-mail definido — o site só deve exibi-lo quando este valor
// não estiver vazio (ver componentes de Contato e Rodapé).
export const EMAIL = "";

export const ADDRESS = {
  street: "Av. Tiradentes, 2180 – 1º andar",
  city: "Guarulhos",
  state: "SP",
  zip: "07090-000",
  full: "Av. Tiradentes, 2180 – 1º andar, Guarulhos – SP, CEP 07090-000",
};

export const SITE_URL = "https://vivaconecta.vercel.app";

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Vivo Empresas", href: "#vivo-empresas" },
  { label: "Contato", href: "#contato" },
];
