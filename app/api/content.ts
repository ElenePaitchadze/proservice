import url from './url';

export default async function getContent(cat_id: string, lng: string) {
  try {
    const res = await fetch(`${url}api_content.php?lang=${lng}&&cat_id=${cat_id}`, { 
      cache: 'no-cache' 
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching content page data:", error);
    return null;
  }
}