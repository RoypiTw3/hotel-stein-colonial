import Icon from "./Icon";

type IconName = "pool" | "tree" | "people" | "car" | "coffee" | "wifi" | "gym" | "pet";

export default function ServiceItem({ name, icon }: { name: string; icon: IconName }) {
  return (
    <div className="flex min-h-28 items-center gap-5 border-t border-ink/15 py-5">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-sand text-terracotta"><Icon name={icon} /></span>
      <p className="font-medium text-ink">{name}</p>
    </div>
  );
}
