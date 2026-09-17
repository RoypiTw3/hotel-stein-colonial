import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
  target?: "_blank";
};

const variants = {
  solid: "bg-terracotta text-white hover:bg-[#924525]",
  outline: "border border-ink/25 text-ink hover:border-terracotta hover:text-terracotta",
  light: "bg-white text-ink hover:bg-sand",
};

export default function Button({ href, children, variant = "solid", className = "", target }: Props) {
  return (
    <Link
      href={href}
      target={target}
      rel={target ? "noreferrer" : undefined}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
