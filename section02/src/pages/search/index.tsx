import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
} from "next";
import fetchBooks from "@/lib/fetch-books";
import { BookData } from "@/types";

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext,
// ) => {
/**
 * q 쿼리 스트링의 값부터 getServerSideProps 함수에서 읽어보도록 할거임
 * getServerSideProps 함수에 전달되는 context라는 매개변수를 이용하면됨
 * 이 매개변수의 타입은 next에서 자체제공하는 타입인 GetServerSidePropsContext
 * 이 context에는 현재 브라우저로부터 받은 요청에 대한 모든 정보가 들어가있음
 */
// console.log(context);

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const q = context.query.q;
//   const books = await fetchBooks(q as string);

//   return {
//     props: {
//       books,
//     },
//   };
// };

export default function Page() {
  const [books, setBooks] = useState<BookData[]>([]);

  const router = useRouter();
  const { q } = router.query;

  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  };

  useEffect(() => {
    if (q) {
      // 검색 결과를 불러오는 로직
      fetchSearchResult();
    }
  }, [q]);
  return (
    <div>
      {books.map((book) => {
        return <BookItem key={book.id} {...book} />;
      })}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
