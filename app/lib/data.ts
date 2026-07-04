import { promises as fs } from "fs";
import path from "path";

export type Proposal = {
  id: string;
  clientId: string;
  clientName: string;
  projectTitle: string;
  proposalId: string;
  validity: string;
  total: string;
  subtitle: string;
  createdAt: string;
  highlights: { label: string; value: string }[];
  scopeItems: { title: string; desc: string; icon: string }[];
  timeline: { title: string; time: string; desc: string }[];
  pricing: { label: string; code: string; price: string }[];
  faqs: { q: string; a: string }[];
};

export type Client = {
  id: string;
  name: string;
  company?: string;
  email?: string;
  phone?: string;
  notes?: string;
};

const dataDir = path.join(process.cwd(), "app", "data");
const proposalsFile = path.join(dataDir, "proposals.json");
const clientsFile = path.join(dataDir, "clients.json");

async function readJson<T>(file: string): Promise<T> {
  const raw = await fs.readFile(file, "utf8");
  return JSON.parse(raw) as T;
}

async function writeJson<T>(file: string, value: T) {
  const payload = JSON.stringify(value, null, 2);
  await fs.writeFile(file, payload, "utf8");
}

export async function getProposals() {
  return readJson<Proposal[]>(proposalsFile);
}

export async function getProposalById(id: string) {
  const proposals = await getProposals();
  return proposals.find((item) => item.id === id) ?? null;
}

export async function addProposal(nextProposal: Proposal) {
  const proposals = await getProposals();
  proposals.unshift(nextProposal);
  await writeJson(proposalsFile, proposals);
  return nextProposal;
}

export async function updateProposal(id: string, updates: Partial<Proposal>) {
  const proposals = await getProposals();
  const next = proposals.map((proposal) =>
    proposal.id === id ? { ...proposal, ...updates } : proposal
  );
  await writeJson(proposalsFile, next);
}

export async function getClients() {
  return readJson<Client[]>(clientsFile);
}

export async function addClient(nextClient: Client) {
  const clients = await getClients();
  clients.unshift(nextClient);
  await writeJson(clientsFile, clients);
  return nextClient;
}
