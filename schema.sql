-- VIVA CONECTA / CENTRAL DE FATURAMENTO
-- AVISO: O banco independente deste projeto JA FOI CRIADO E CONFIGURADO
-- em 28/10/2026 no Supabase viva-conecta-central-faturamento.
-- ESTE ARQUIVO É APENAS UMA VERIFICACAO READ-ONLY, NAO RODE MIGRACOES NOVAMENTE.
-- NAO USAR NO SUPABASE ANTIGO DO BKO / GENESYS.

select 'clients' as tabela, count(*) as registros from public.clients
union all select 'client_groups', count(*) from public.client_groups
union all select 'invoices',count(*) from public.invoices
union all select 'monthly_sends',count(*) from public.monthly_sends;
