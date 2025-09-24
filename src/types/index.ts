import { ButtonHTMLAttributes, HTMLAttributes } from "react";

import { Locale } from "@/config/i18n.config";

export type AnswersProps = {
  idx: string;
  path: string;
  text: string;
};

export type AvailableProps = {
  status: "on" | "off";
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  className?: string;
  variant?: "primary" | "secondary";
}

type CarouselList = {
  video: boolean;
  url: string;
  title: string | undefined;
};

export type CarouselProps = {
  media: CarouselList[];
};

export type GoBackProps = {
  label: string;
};

export type HoveredRootProps = {
  title: string;
  children: React.ReactNode;
};

export interface HoveredSlotProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export type HoveredItemProps = {
  startDate: string;
  endDate: string;
  company: string;
  occupation: string;
};

export type HoveredSlideProps = {
  startDate: string;
  endDate: string;
};

export type HoverVideoProps = {
  src: string;
};

export type NavigationBarProps = {
  className?: string;
};

export type LanguageProps = {
  currentLocale: Locale;
};

export type ProfileProps = {
  orientation: "row" | "column";
  size: "sm" | "lg";
};

export type QuestionProps = {
  answers: AnswersProps[];
  skip: string;
};

export type WorksFeatured = {
  path: string;
  startDate: string;
  endDate: string;
  company: string;
  occupation: string;
  featured?: {
    cta: string;
    description_title: string;
    description: string;
  };
};
