export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  //   console.log(props);

  const { id } = await params;
  return <div>북페이지/[id] 페이지 : {id}</div>;
}
