import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { cn } from "../../lib/cn";

interface AccordionItem {
  question: string;
  answer: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-line border-t border-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="py-4">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 text-left text-sm font-semibold text-ink transition-colors duration-200 ease-standard hover:text-gold"
            >
              {item.question}
              <FiPlus
                aria-hidden
                size={16}
                className={cn(
                  "shrink-0 transition-transform duration-200 ease-standard",
                  isOpen && "rotate-45",
                )}
              />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-standard"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed text-ink-muted transition-opacity duration-200 ease-standard",
                    isOpen ? "opacity-100 delay-100" : "opacity-0",
                  )}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
