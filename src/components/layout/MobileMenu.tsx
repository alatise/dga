import { NavLink as RouterNavLink } from "react-router-dom";
import { NAV_LINKS } from "../../data/navigation";
import { Container } from "./Container";
import { Button } from "../ui/Button";
import { cn } from "../../lib/cn";
import { motion } from "framer-motion";

export function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="border-t border-line bg-surface lg:hidden"
    >
      <Container className="flex flex-col gap-1 py-4">
        {NAV_LINKS.map((link) => (
          <RouterNavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            onClick={onNavigate}
            className={({ isActive }) =>
              cn(
                "rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-200",
                isActive
                  ? "bg-gold/10 font-semibold text-gold"
                  : "text-ink-muted hover:bg-surface-alt hover:text-ink",
              )
            }
          >
            {link.label}
          </RouterNavLink>
        ))}

        <Button
          to="/contact"
          variant="primary"
          className="mt-4 w-full"
          onClick={onNavigate}
        >
          Get in Touch
        </Button>
      </Container>
    </motion.div>
  );
}
