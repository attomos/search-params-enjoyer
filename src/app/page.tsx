import type { SearchParams } from "nuqs/server";
import MainSection from "@/app/components/MainSection";
import { loadSearchParams } from "@/app/searchParams";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Home({ searchParams }: PageProps) {
  const { visibleWorkflows } = await loadSearchParams(searchParams);

  return <MainSection visibleWorkflows={visibleWorkflows} />;
}
