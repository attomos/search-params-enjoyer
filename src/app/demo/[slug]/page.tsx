import type { SearchParams } from "nuqs/server";
import MainSection from "@/app/components/MainSection";
import { loadSearchParams } from "@/app/searchParams";

type PageProps = {
  searchParams: Promise<SearchParams>;
  params: Promise<{ slug: string }>;
};

export default async function Home({ searchParams, params }: PageProps) {
  const { visibleWorkflows } = await loadSearchParams(searchParams);
  const { slug } = await params;

  return <MainSection visibleWorkflows={visibleWorkflows} slug={slug} />;
}
