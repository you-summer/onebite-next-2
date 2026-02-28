import { BookData } from "@/types";

export default async function fetchBooks(q?: string): Promise<BookData[]> {
  // : Promise<BookData[]> 반환값 타입! 비동기니까 Promise
  let url = `http://localhost:12345/book`;

  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
