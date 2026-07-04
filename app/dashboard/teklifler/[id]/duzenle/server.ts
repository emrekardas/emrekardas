"use server";

import { redirect } from "next/navigation";
import { updateProposal } from "@/app/lib/data";

export async function updateProposalAction(formData: FormData) {
  const id = String(formData.get("id") ?? "").trim();
  const clientName = String(formData.get("clientName") ?? "").trim();
  const projectTitle = String(formData.get("projectTitle") ?? "").trim();
  const proposalId = String(formData.get("proposalId") ?? "").trim();
  const total = String(formData.get("total") ?? "").trim();
  const validity = String(formData.get("validity") ?? "").trim();
  const subtitle = String(formData.get("subtitle") ?? "").trim();

  if (!id || !clientName || !projectTitle || !proposalId || !total || !validity || !subtitle) {
    redirect(`/dashboard/teklifler/${id}/duzenle`);
  }

  await updateProposal(id, {
    clientName,
    projectTitle,
    proposalId,
    total,
    validity,
    subtitle,
  });

  redirect(`/dashboard/teklifler/${id}`);
}
