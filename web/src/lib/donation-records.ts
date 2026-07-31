export type DonationRecord = {
  reference: string;
  amount: number;
  donorEmail: string;
  donorName?: string;
  createdAt: string;
  notifiedAt?: string;
};

const globalForDonations = globalThis as typeof globalThis & {
  __lwcDonationRecords?: Map<string, DonationRecord>;
};

function getStore() {
  if (!globalForDonations.__lwcDonationRecords) {
    globalForDonations.__lwcDonationRecords = new Map();
  }

  return globalForDonations.__lwcDonationRecords;
}

export function saveDonationRecord(
  record: Omit<DonationRecord, "createdAt" | "notifiedAt">,
) {
  const entry: DonationRecord = {
    ...record,
    createdAt: new Date().toISOString(),
  };

  getStore().set(record.reference, entry);
  return entry;
}

export function getDonationRecord(reference: string) {
  return getStore().get(reference);
}

export function markDonationNotified(reference: string) {
  const existing = getStore().get(reference);

  if (!existing) {
    return null;
  }

  const updated = {
    ...existing,
    notifiedAt: new Date().toISOString(),
  };

  getStore().set(reference, updated);
  return updated;
}
