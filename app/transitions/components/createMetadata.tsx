import type { Metadata } from 'next';

export const BASE_TITLE = 'GSAP Transitions';

interface MetadataParams {
  title: string;
  description: string;
  keywords: string;
}

export function CreateMetadata({ title, description, keywords }: MetadataParams):
  Metadata {
  return {
    title: `${BASE_TITLE} - ${title}`,
    description,
    keywords,
  };
}


