# Viva Connecta — Site institucional

Site institucional da **Viva Connecta**, parceira Vivo Empresas em Guarulhos – SP.
Construído com **Next.js 14 (App Router) + React + TypeScript + Tailwind CSS**, pronto para deploy na **Vercel**.

## 1. Pré-requisitos

- [Node.js](https://nodejs.org) 18.18 ou superior (recomendado: 20 LTS)
- npm (já vem junto com o Node.js)

Para conferir se já tem o Node instalado, abra o terminal e rode:

```bash
node -v
```

## 2. Instalar as dependências

Dentro da pasta do projeto, rode:

```bash
npm install
```

## 3. Rodar localmente

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador. O site recarrega
automaticamente a cada alteração salva.

## 4. Gerar a versão de produção (opcional, para testar antes do deploy)

```bash
npm run build
npm run start
```

## 5. Publicar na Vercel

**Opção A — pelo site da Vercel (mais simples):**

1. Suba este projeto para um repositório no GitHub (ou GitLab/Bitbucket).
2. Acesse [vercel.com](https://vercel.com) e faça login.
3. Clique em **"Add New… → Project"** e selecione o repositório.
4. A Vercel detecta automaticamente que é um projeto Next.js — não é
   necessário configurar nada manualmente.
5. Clique em **Deploy** e aguarde. Em poucos minutos o site estará no ar.

**Opção B — pela CLI da Vercel:**

```bash
npm install -g vercel
vercel login
vercel
```

Siga as instruções no terminal. Para publicar a versão final (produção):

```bash
vercel --prod
```

## 6. Onde alterar os dados da empresa

Todos os dados oficiais (WhatsApp, Instagram, endereço, links do menu) ficam
centralizados em um único arquivo:

```
lib/config.ts
```

Para trocar o número de WhatsApp, o Instagram, o endereço ou qualquer outro
dado de contato, basta editar os valores nesse arquivo — eles são usados
automaticamente em todo o site (cabeçalho, hero, seções, rodapé e botão
flutuante).

> ⚠️ O único número de WhatsApp usado em todo o projeto é o oficial da Viva
> Connecta: **+55 11 91787-0756**. Nenhum outro número foi utilizado.

## 7. Estrutura do projeto

```
app/                 Páginas, layout, metadados de SEO e sitemap
components/          Seções e componentes visuais do site
components/icons/    Ícones SVG usados no projeto (WhatsApp, Instagram)
lib/config.ts        Configuração central dos dados da empresa
public/               Favicon e robots.txt
```

## 8. Formulário de contato

O site ainda não possui um backend próprio para o formulário de contato. Para
mantê-lo funcional sem inventar uma integração inexistente, ao clicar em
**"Enviar mensagem"** os dados preenchidos são usados para montar uma
mensagem que abre diretamente uma conversa no WhatsApp oficial da Viva
Connecta. Quando houver uma integração futura (por exemplo, um serviço de
e-mail ou uma API própria), essa lógica pode ser substituída no arquivo
`components/Contact.tsx`, na função `handleSubmit`.

## 9. Checklist de verificação já realizado

- [x] Único número de WhatsApp em todo o projeto: **+55 11 91787-0756**
- [x] Instagram oficial: **@vivaconectabr**
- [x] Endereço conforme informado (Av. Tiradentes, 2180 – 1º andar, Guarulhos – SP, CEP 07090-000)
- [x] Menu mobile funcional, com abertura/fechamento e rolagem até a seção
- [x] Botão flutuante do WhatsApp em todas as telas
- [x] SEO: title, description, Open Graph, favicon, sitemap.xml, robots.txt, dados estruturados (JSON-LD) de negócio local
- [x] Layout responsivo (mobile, tablet, notebook, desktop)
