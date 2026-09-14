/* ═══════════════════════════════════════════════════════════════
   SISTEMA DE ORÇAMENTAÇÃO AUTOGLASS · credenciais do Supabase

   Publique este arquivo NA MESMA PASTA do index.html.
   O sistema lê estas duas linhas ao abrir e conecta sozinho — ninguém
   precisa digitar nada, e ao subir uma versão nova do index.html a
   conexão continua valendo, porque este arquivo não é substituído.

   Onde encontrar os valores:
     Painel do Supabase → Project Settings → API
       url = Project URL
       key = chave anon / publishable

   A chave publishable é pública por natureza: ela fica visível no navegador
   de qualquer pessoa. Quem protege os dados são as políticas de RLS criadas
   pelo supabase_schema.sql — sem login válido, ela não lê nem grava nada.

   NUNCA coloque aqui a chave "service_role" nem a senha do banco:
   essas ignoram o RLS por completo.
   ═══════════════════════════════════════════════════════════════ */

window.AG_CONFIG = {
  url: 'https://sldajxdoclkojauyadir.supabase.co',
  key: 'sb_publishable_BVVDIK1pGE6q6OLhZJX6FQ_afODSygX'
};
