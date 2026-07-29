"use client";

import * as React from "react";
import { Select } from "@base-ui/react/select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FormSelectProps {
  id?: string;
  name?: string;
  value: string | null;
  onValueChange: (value: string | null) => void;
  options: readonly string[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const triggerClassName =
  "flex h-11 w-full cursor-pointer items-center justify-between gap-2.5 rounded-lg border border-[#E2E6EC] bg-[#F8FAFC] px-3.5 text-sm text-[#0F172A] outline-none transition-all hover:border-[#1D4ED8]/40 focus-visible:border-[#1D4ED8] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-[#1D4ED8]/15 disabled:cursor-not-allowed disabled:opacity-50 shadow-xs font-medium";

const popupClassName =
  "max-h-64 w-[var(--anchor-width)] min-w-[200px] origin-[var(--transform-origin)] overflow-hidden rounded-xl border border-[#E2E6EC] bg-white/95 backdrop-blur-lg p-1.5 shadow-[0_12px_40px_rgba(15,23,42,0.12)] transition-[transform,opacity] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0 z-50";

const itemClassName =
  "flex cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] outline-none transition-colors data-[highlighted]:bg-blue-50/80 data-[highlighted]:text-[#1D4ED8] data-[selected]:font-semibold data-[selected]:text-[#1D4ED8] data-[selected]:bg-blue-50";

export function FormSelect({
  id,
  name,
  value,
  onValueChange,
  options,
  placeholder = "Choose an option",
  required = false,
  disabled = false,
  className,
  icon: Icon,
}: FormSelectProps) {
  const items = React.useMemo(
    () => options.map((option) => ({ value: option, label: option })),
    [options]
  );

  return (
    <Select.Root
      name={name}
      id={id}
      required={required}
      disabled={disabled}
      value={value}
      onValueChange={onValueChange}
      items={items}
      modal={false}
    >
      <Select.Trigger
        aria-label={placeholder}
        className={cn(triggerClassName, className)}
      >
        {Icon && (
          <Icon className="h-4 w-4 shrink-0 text-[#1D4ED8]" />
        )}
        <Select.Value
          placeholder={placeholder}
          className="min-w-0 flex-1 truncate text-left data-placeholder:text-slate-400 font-medium"
        />
        <Select.Icon className="flex shrink-0 text-slate-400 transition-transform duration-200">
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Positioner
          side="bottom"
          align="start"
          sideOffset={6}
          alignItemWithTrigger={false}
          className="z-50 outline-none"
        >
          <Select.Popup className={popupClassName}>
            <Select.List className="max-h-56 overflow-y-auto p-0.5 outline-none space-y-0.5 scrollbar-thin">
              {options.map((option) => (
                <Select.Item
                  key={option}
                  value={option}
                  label={option}
                  className={itemClassName}
                >
                  <Select.ItemText className="truncate">{option}</Select.ItemText>
                  <Select.ItemIndicator className="text-[#1D4ED8]">
                    <Check className="h-4 w-4 stroke-[2.5]" aria-hidden="true" />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}

export { FormSelect as Select };

