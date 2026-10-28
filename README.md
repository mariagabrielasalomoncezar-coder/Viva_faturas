# Viva Conecta · Central de Faturamento (visual premium)

Atualização em 28/10/2026 — aplicação independente em Next.js, Supabase e Vercel.

## Estado do projeto

- Novo banco Supabase **`viva-conecta-central-faturamento`** já configurado em seu próprio projeto.
- **2.045 clientes reais**, **2.058 vínculos de vencimento** e dados de contato disponíveis já importados diretamente no Supabase novo.
- **228 clientes com e-mail** e **189 com WhatsApp identificado**; revise os contatos antes de enviar faturas.
- Um usuário administrador já possui perfil na tabela `profiles` (credenciais gerenciadas apenas no Supabase Auth).
- **Nenhum e-mail foi enviado** e nenhuma fatura foi marcada como enviada; todos os indicadores começam do zero.
- Status de pagamento não é obtido automaticamente: não existe integração com CRM ou Simplifique.

## Aparência / recursos

- Design premium roxo e branco com menu lateral escuro, hero, indicadores, gráfico de progresso, grupos de vencimento, tabelas e filtros.
- Três carteiras: `03-05-08`, `10-13-15-17` e `21-25-28`, com status de envio por competência.
- Pesquisa por nome, CNPJ ou e-mail; painel da empresa, contatos editáveis, histórico e datas para conferir.
- Upload de PDF até 10 MB em bucket privado; serviço de e-mail Resend com confirmação humana.
- WhatsApp manual com mensagem padrão de disponibilidade ou cobrança e botão de registro (nunca dispara automaticamente).
- Importação JSON privada e idempotente, sem excluir clientes ou reverter envios já feitos.

## Publicar a nova interface no Vercel

No projeto Vercel existente `viva_faturas` publique os arquivos **dentro da pasta `viva-central-faturamento`** do ZIP. Não crie outro Supabase e não rode novamente o script SQL no projeto antigo.

As variáveis de ambiente já cadastradas no Vercel são:

```env
NEXT_PUBLIC_SUPABASE_URL=https://spepelsnsndmrkzqsjvk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<chave pública do novo Supabase já cadastrada no Vercel>
```

Atenção: os nomes das variáveis devem corresponder exatamente aos usados pelo código. Após subir o ZIP, faça um novo Deployment para que o visual atualizado seja publicado.

## E-mail real

Sem os dois valores abaixo, o botão de envio acusa configuração pendente, mesmo que a interface esteja funcionando:

```env
RESEND_API_KEY=<segredo somente no servidor>
EMAIL_FROM="Viva Conecta <faturas@dominio-verificado-da-viva.com.br>"
```

Configure um domínio próprio e verificado no Resend, cadastro de remetente e um endereço de retorno apropriado. **Nunca adicione a chave secreta ao GitHub, ao frontend ou ao arquivo `.env.example`.**

## Privacidade / operação

- O ZIP entregue contém **código, sem cadastros reais**. Os clientes já estão no Supabase privado e o JSON fica em arquivo separado.
- Não coloque o JSON real dos clientes em repositório público. O script de importação é apenas para atualizações futuras.
- Não envie automaticamente. Revise o destinatário, PDF, competência e vencimento antes do primeiro teste.
- O envio aceito pelo Resend não garante leitura ou entrega final ao destinatário.
- CAR, conciliação bancária e cobrança automática ficam para futuras versões.
- **O projeto antigo BKO/Genesys/Dashboard não foi alterado.**

## Testes

1. Acesse `https://vivafaturas.vercel.app` e entre com o usuário já criado no Supabase novo.
2. Confira Dashboard e os 3 grupos com 2.045 cadastros únicos e 2.058 vínculos.
3. Abra um cliente de teste, confira e-mail e vencimento e anexe um PDF de teste.
4. Configure Resend e envie **somente para um endereço de teste autorizado**.
5. Confira o log e o indicador mensal, e verifique que a mudança de competência não apaga o histórico anterior.
