export default function handler(req, res) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  res.status(200).json({
    supabaseUrl: supabaseUrl ? '✅ Configurada' : '❌ Não configurada',
    supabaseKey: supabaseKey ? '✅ Configurada' : '❌ Não configurada',
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseKey,
    env: process.env.NODE_ENV
  });
} 