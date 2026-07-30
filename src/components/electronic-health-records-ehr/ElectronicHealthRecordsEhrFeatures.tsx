"use client";

import React from "react";
import EhrFeatureRow from "./EhrFeatureRow";
import { ehrContainerClassName, ehrSectionAltClassName } from "./ehrSectionLayout";

const EHR_FEATURES = [
  {
    titlePlain: "Stay connected to your",
    titleHighlight: "patients and medical records",
    titleSuffix: "on the go",
    description:
      "Manage your electronic medical records (EMR) and electronic health records (EHR) with our free EHR software. Our software utilizes the latest technologies such as machine learning and cloud computing to deliver you a secure, scalable, interoperable, and intelligent system for your healthcare data processing.",
    imageSrc: "/consultants-laptop.png",
    imageAlt: "BellMedEx EHR software for accessing patient records on the go",
    reverse: false,
  },
  {
    titlePlain: "Create",
    titleHighlight: "comprehensive charts",
    titleSuffix: "for your patients in minutes",
    description:
      "Patients charting with our EHR software is a breeze. You can input, edit, and view all the applicable data about your patients in a secure and standardized fashion. This help you improve the quality of care, reduce errors, and save time and money.",
    imageSrc: "/medical-billing-software-dashboard.png",
    imageAlt: "BellMedEx EHR patient charting and medical summary dashboard",
    reverse: true,
  },
  {
    titlePlain: "Connect with pharmacies and patients with",
    titleHighlight: "e-prescription",
    endPeriod: true,
    description:
      "E-prescription with our EHR software is a game-changer. You can send prescriptions electronically to pharmacies, conserving paper, minimizing errors, and combating fraud. This will support you in improving your prescribing process, ensuring patient safety, and enhancing patient experience.",
    imageSrc: "/clearinghouse-nurse-hero.png",
    imageAlt: "BellMedEx EHR e-prescription and telehealth connectivity",
    reverse: false,
  },
  {
    titlePlain: "Enhance your interoperability with",
    titleHighlight: "health information exchanges",
    endPeriod: true,
    description:
      "You can link your practice to different beneficial integrations with our EHR software, such as health information exchanges. These integrations assist you to transmit and obtain essential health data. For example, you can submit immunization data to your state registry, receive lab results from your preferred lab provider, and verify medication history from your pharmacy network.",
    imageSrc: "/consultants-laptop.png",
    imageAlt: "BellMedEx EHR health information exchange integrations",
    reverse: true,
  },
  {
    titlePlain: "Save time and resources with",
    titleHighlight: "electronic medical billing",
    endPeriod: true,
    description:
      "Our free EHR software makes your medical billing simple and efficient. You can quickly produce, dispatch, and review claims, as well as deal with payments and returns. Our software sticks to the freshest rules and benchmarks, and shields medical records from illicit use. This feature is key for pumping up your revenue cycle and pleasing your patients.",
    imageSrc: "/medical-billing-software-dashboard.png",
    imageAlt: "BellMedEx EHR electronic medical billing workflow",
    reverse: false,
  },
];

import { EhrFeaturesData } from "@/payload/types/electronicHealthRecordsEhr";
import { defaultElectronicHealthRecordsEhrData } from "@/lib/defaults/electronicHealthRecordsEhr";

interface ElectronicHealthRecordsEhrFeaturesProps {
  data?: EhrFeaturesData;
}

export default function ElectronicHealthRecordsEhrFeatures({ data }: ElectronicHealthRecordsEhrFeaturesProps) {
  const content = data || defaultElectronicHealthRecordsEhrData.features;
  const featuresList = content.features && content.features.length > 0 ? content.features : defaultElectronicHealthRecordsEhrData.features.features;

  return (
    <section
      className={ehrSectionAltClassName}
      aria-label="Electronic health records software features"
    >
      <div className={ehrContainerClassName}>
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {featuresList.map((feature, idx) => (
            <EhrFeatureRow
              key={`${feature.titleHighlight}-${feature.titlePlain}-${idx}`}
              titlePlain={feature.titlePlain}
              titleHighlight={feature.titleHighlight}
              titleSuffix={feature.titleSuffix}
              endPeriod={feature.endPeriod}
              description={feature.description}
              imageSrc={feature.imageSrc}
              fallbackSrc={EHR_FEATURES[idx]?.imageSrc ?? "/consultants-laptop.png"}
              imageAlt={feature.imageAlt || feature.titleHighlight}
              reverse={feature.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
