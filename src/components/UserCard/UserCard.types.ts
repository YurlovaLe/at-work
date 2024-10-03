export type UserCardProps = {
  name: string,
  company: string,
  city: string,
  isArchive?: boolean,
  onEdit?: () => void,
  onArchive: () => void,
  onHide?: () => void,
};
