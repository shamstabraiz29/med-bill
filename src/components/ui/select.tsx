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
}

const triggerClassName =
  "flex h-11 w-full cursor-pointer items-center justify-between gap-2 rounded-xl border border-[#E2E6EC] bg-[#F8FAFC] px-3.5 text-sm text-[#0F172A] outline-none transition-all focus-visible:border-[#1D4ED8] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-blue-100/40 disabled:cursor-not-allowed disabled:opacity-50";

const popupClassName =
  "max-h-60 w-[var(--anchor-width)] origin-[var(--transform-origin)] overflow-hidden rounded-xl border border-[#E2E6EC] bg-white py-1 shadow-[0_8px_30px_rgba(29,78,216,0.12)] transition-[transform,opacity] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0";

const itemClassName =
  "flex cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm text-[#0F172A] outline-none data-[highlighted]:bg-blue-50 data-[selected]:font-semibold data-[selected]:text-[#1D4ED8]";

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
        <Select.Value
          placeholder={placeholder}
          className="min-w-0 flex-1 truncate text-left data-placeholder:text-slate-400"
        />
        <Select.Icon className="flex shrink-0 text-slate-400">
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
            <Select.List className="max-h-56 overflow-y-auto p-1 outline-none">
              {options.map((option) => (
                <Select.Item
                  key={option}
                  value={option}
                  label={option}
                  className={itemClassName}
                >
                  <Select.ItemText className="truncate">{option}</Select.ItemText>
                  <Select.ItemIndicator className="text-[#1D4ED8]">
                    <Check className="h-4 w-4" aria-hidden="true" />
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
