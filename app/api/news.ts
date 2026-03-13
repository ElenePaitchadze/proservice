import url from './url';

export default async function getNews(type: number, lng: string, page: number) {
  try {
    const res = await fetch(`${url}api.php?m=${type}&&lang=${lng}&&p=${page}`, { 
      cache: 'no-cache' 
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching news data:", error);
    return null;
  }
}

export async function getNewsItem(type: number, lng: string, news_id: string) {
  try {
    const res = await fetch(`${url}api.php?m=${type}&&lang=${lng}&&news_id=${news_id}`, { 
      cache: 'no-cache' 
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching single news data:", error);
    return null;
  }
}