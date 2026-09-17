type IconName = "pool" | "tree" | "people" | "car" | "coffee" | "wifi" | "gym" | "pet" | "arrow" | "check";

export default function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    pool: <><path d="M3 12c2 0 2 1.5 4 1.5s2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 2 1.5"/><path d="M3 17c2 0 2 1.5 4 1.5s2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 2 1.5M7 12V7a3 3 0 0 1 6 0"/></>,
    tree: <><path d="M12 22v-7M8.5 15h7L18 11h-3l2-4h-3l-2-5-2 5H7l2 4H6z"/></>,
    people: <><circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2.5 20c.5-4 2.2-6 5.5-6s5 2 5.5 6M14 15c3.8-.7 6.4 1.2 7 4"/></>,
    car: <><path d="M3 16v-5l2-5h14l2 5v5M5 16h14M7 19h.01M17 19h.01M5 11h14"/></>,
    coffee: <><path d="M5 8h12v7a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5zM17 10h2a3 3 0 0 1 0 6h-2M8 4h.01M12 3h.01"/></>,
    wifi: <><path d="M4 9a12 12 0 0 1 16 0M7 13a8 8 0 0 1 10 0M10 17a4 4 0 0 1 4 0"/><circle cx="12" cy="21" r=".5"/></>,
    gym: <><path d="M7 9v6M4 8v8M2 10v4M17 9v6M20 8v8M22 10v4M7 12h10"/></>,
    pet: <><circle cx="7" cy="8" r="2"/><circle cx="17" cy="8" r="2"/><circle cx="4" cy="13" r="2"/><circle cx="20" cy="13" r="2"/><path d="M8 18c1.5-4 6.5-4 8 0 1 3-1.5 4-4 2.5C9.5 22 7 21 8 18Z"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>{paths[name]}</svg>;
}
