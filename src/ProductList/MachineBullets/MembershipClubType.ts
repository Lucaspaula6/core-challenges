import { insert } from "./Inserter";

export const verifyMembershipClubType = (
  item: any,
  order: any,
  created: any[]
) => {
  const membershipClubType = item.membership?.club?.type;
  if (!membershipClubType)
    return created;
  switch (membershipClubType) {
    case "UPGRADE":
      return insert("UPGRADE_CLUB_SMILES",  order, created, item);
    case "DOWNGRADE":
      return insert("DOWNGRADE_CLUB_SMILES",  order, created, item);
    case "MEMBERSHIP":
      return insert("CLUB_SMILES",  order, created, item);
    case "__CLUB_SMILES_DEFAULT_KEY__":
      return insert("CLUB_SMILES",  order, created, item);
    default:
      return insert("CLUB_SMILES",  order, created, item);
  }
};
