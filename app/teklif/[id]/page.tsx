import { notFound } from "next/navigation";
import { getProposalById } from "@/app/lib/data";
import { ProposalView } from "@/app/components/proposal/proposal-view";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProposalPublicPage({ params }: PageProps) {
  const { id } = await params;
  const proposal = await getProposalById(id);

  if (!proposal) {
    notFound();
  }

  return <ProposalView proposal={proposal} />;
}
