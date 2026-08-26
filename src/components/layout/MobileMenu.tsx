import { NavLink as RouterNavLink } from "react-router-dom";
import { NAV_LINKS } from "../../data/navigation";
import { Container } from "./Container";
import { Button } from "../ui/Button";
import { cn } from "../../lib/cn";

export function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="border-t border-line bg-surface lg:hidden">
      <Container className="flex flex-col gap-1 py-4">
        {NAV_LINKS.map((link) => (
          <RouterNavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            onClick={onNavigate}
            className={({ isActive }) =>
              cn(
                "rounded-md px-3 py-2.5 text-sm font-medium text-ink-muted hover:bg-surface-alt",
                isActive && "font-semibold text-gold",
              )
            }
          >
            {link.label}
          </RouterNavLink>
        ))}

        <Button to="/contact" variant="primary" className="mt-4 w-full" onClick={onNavigate}>
          Get in Touch
        </Button>
      </Container>
    </div>
  );
}
