import { Icon24x24PoliticsVote } from "./Icon24x24PoliticsVote";

type Props = {
  icon: "icon-politics-vote";
  className?: string;
};

export function AppIcon24x24({ icon, className }: Props) {
  switch (icon) {
    case "icon-politics-vote":
      return <Icon24x24PoliticsVote className={className} />;
    default:
      throw new Error(`Icon ${icon} not found`);
  }
}
