# Viva Conecta — reformulação visual (28/10/2026)

## O que mudou

- Dashboard com cabeçalho refinado, competência no topo, faixa roxa com resumo do mês e CTA para os pendentes.
- Cartões de indicadores com cores e ícones próprios para clientes, envios, pendentes e contatos com e-mail.
- Painel de vencimentos por grupo, com porcentagem real, barras de progresso e quantidades de enviados/pendentes.
- Indicador circular de evolução, com nota de que o registro de envio não implica entrega ou leitura do destinatário.
- Área de atalhos para iniciar os envios, encontrar contatos sem e-mail ou localizar um cliente.
- Menu lateral escuro reorganizado por função, identificação do usuário conectado e navegação adaptada ao tablet/celular.
- Filtros rápidos nas três carteiras, além dos filtros e pesquisa já existentes.
- Refinamentos tipográficos, cores, bordas e espaçamentos do sistema inteiro.

## O que foi preservado

- O login Supabase existente, as tabelas, os vínculos de vencimentos e os cadastros já salvos.
- Fluxo de cadastro da fatura, armazenamento privado de PDF, conferência manual e envio por e-mail.
- WhatsApp manual, sem disparo automático.
- Competência mensal e histórico dos envios.
- Nenhuma conexão com Plus CRM, Simplifique, BKO, Gênesis ou Dashboard comercial.

## Publicação

1. Use o **mesmo projeto `viva_faturas` no Vercel**; a atualização do ZIP **não publica sozinha**.
2. Publique o código que está na pasta `viva-central-faturamento` (raiz com `package.json`, `app`, `components`, etc.), substituindo a versão anterior. O método depende de como o Vercel recebe os arquivos em seu projeto.
3. Confirme que `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` continuam configurados para Production (não utilize `service_role` no cliente).
4. Faça um deployment novo e verifique o login e as três carteiras. **Não execute novamente SQL de criação, nem importe os clientes de novo.**
5. Antes de enviar PDFs reais por e-mail, configure `RESEND_API_KEY` e `EMAIL_FROM` no servidor, valide um domínio no provedor e teste com um destinatário autorizado.

**Importante:** esta versão foi verificada sintaticamente, mas não houve um build Next.js integral neste ambiente por indisponibilidade das dependências do projeto. O build e o teste funcional precisam ser confirmados no Vercel.
