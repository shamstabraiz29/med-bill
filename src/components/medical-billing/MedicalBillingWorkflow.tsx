"use client";

import React, { Fragment } from "react";
import { getIcon } from "@/lib/icons";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import BillingWorkflowStepCard from "./BillingWorkflowStepCard";
import BillingWorkflowConnector from "./BillingWorkflowConnector";
import { defaultMedicalBillingData } from "@/lib/defaults/medicalBilling";

interface WorkflowStep {
  id: number;
  iconName: string;
  title: string;
  description: string;
}

interface StepCardProps {
  step: WorkflowStep;
  delay?: number;
  className?: string;
}

function StepCard({ step, delay = 0, className }: StepCardProps) {
  const Icon = getIcon(step.iconName);

  return (
    <MotionWrapper variant="fadeUp" delay={delay} className={className}>
      <div role="listitem" className="h-full">
        <BillingWorkflowStepCard
          step={step.id}
          icon={Icon}
          title={step.title}
          description={step.description}
          className="h-full"
        />
      </div>
    </MotionWrapper>
  );
}

interface MedicalBillingWorkflowProps {
  data?: typeof defaultMedicalBillingData.workflow;
}

export default function MedicalBillingWorkflow({ data }: MedicalBillingWorkflowProps) {
  const workflowData = data || defaultMedicalBillingData.workflow;
  const steps = workflowData.steps;

  return (
    <section
      className="w-full bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
      aria-labelledby="billing-workflow-heading"
    >
      <div className="w-full max-w-7xl">
        <SectionHeader
          badge={workflowData.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="billing-workflow-heading">
              {workflowData.titlePlain}
              <span className="font-bold text-blue-600">{workflowData.titleHighlight}</span>
            </span>
          }
          className="mb-12 mx-auto max-w-4xl sm:mb-16"
        />

        {/* Mobile: vertical flow */}
        <div
          className="flex flex-col gap-6 sm:hidden w-full"
          role="list"
          aria-label="Billing process steps"
        >
          {steps.map((step, idx) => (
            <Fragment key={step.id}>
              <StepCard step={step} delay={idx * 0.06} />
              {idx < steps.length - 1 && (
                <BillingWorkflowConnector direction="vertical" />
              )}
            </Fragment>
          ))}
        </div>

        {/* Tablet: 2-column rows with arrows */}
        <div
          className="hidden sm:flex lg:hidden flex-col gap-6 w-full"
          role="list"
          aria-label="Billing process steps"
        >
          {steps.length >= 2 && (
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 lg:gap-6 w-full">
              <StepCard step={steps[0]} className="min-w-0" />
              <BillingWorkflowConnector direction="horizontal" />
              <StepCard step={steps[1]} delay={0.06} className="min-w-0" />
            </div>
          )}

          {steps.length > 2 && <BillingWorkflowConnector direction="vertical" />}

          {steps.length >= 4 && (
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 lg:gap-6 w-full">
              <StepCard step={steps[2]} delay={0.12} className="min-w-0" />
              <BillingWorkflowConnector direction="horizontal" />
              <StepCard step={steps[3]} delay={0.18} className="min-w-0" />
            </div>
          )}

          {steps.length > 4 && <BillingWorkflowConnector direction="vertical" />}

          {steps.length >= 5 && (
            <div className="w-full">
              <StepCard step={steps[4]} delay={0.24} />
            </div>
          )}
        </div>

        {/* Desktop: 3 + 2 row layout with arrows */}
        <div
          className="hidden lg:flex flex-col gap-6 w-full"
          role="list"
          aria-label="Billing process steps"
        >
          {steps.length >= 3 && (
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-6 lg:gap-8 w-full">
              <StepCard step={steps[0]} className="min-w-0" />
              <BillingWorkflowConnector direction="horizontal" />
              <StepCard step={steps[1]} delay={0.06} className="min-w-0" />
              <BillingWorkflowConnector direction="horizontal" />
              <StepCard step={steps[2]} delay={0.12} className="min-w-0" />
            </div>
          )}

          {steps.length > 3 && <BillingWorkflowConnector direction="vertical" />}

          {steps.length >= 5 && (
            <div className="grid grid-cols-3 items-center gap-6 lg:gap-8 w-full">
              <StepCard step={steps[3]} delay={0.18} className="min-w-0" />
              <BillingWorkflowConnector direction="horizontal" className="justify-self-center" />
              <StepCard step={steps[4]} delay={0.24} className="min-w-0" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
