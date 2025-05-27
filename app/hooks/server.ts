const API_URL = 'https://gnews.io/api/v4/search';
const API_KEY = '06bf915bed1a8c3a1d1db3f54758f8c7';

interface Noticia {
  title: string;
  description: string;
  url: string;
  image?: string;
}

interface RespostaNewsAPI {
  articles: Noticia[];
}

export async function buscarNoticias(q: string, from: string): Promise<RespostaNewsAPI> {
  const url = new URL(API_URL);
  url.searchParams.append('q', q);
  url.searchParams.append('from', from);
  url.searchParams.append('lang', 'pt');
  url.searchParams.append('sortBy', 'relevance');
  url.searchParams.append('token', API_KEY); 

  const res = await fetch(url.toString());

  if (!res.ok) {
    const msg = await res.text();
    throw new Error(`Erro: ${res.status} - ${msg}`);
  }

  return await res.json();
}
