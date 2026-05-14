import React from "react";
import { notFound } from "next/navigation";
import { portfolioData } from "@/lib/data/portfolio";
import ProjectDetailClient from "@/components/portafolio/ProjectDetailClient";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = portfolioData.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Proyecto no encontrado | BlackCherry IT",
    };
  }

  const baseUrl = "https://blackcherryitconsulting.com";

  return {
    title: `${project.title} | ${project.category} | BlackCherry IT Consulting`,
    description: project.narrativeText,
    keywords: [
      project.title,
      project.category,
      "desarrollo web México",
      "diseño web profesional",
      "BlackCherry IT Consulting",
    ],
    alternates: {
      canonical: `${baseUrl}/portafolio/${id}`,
    },
    openGraph: {
      title: `${project.title} | BlackCherry IT Consulting`,
      description: project.narrativeText,
      url: `${baseUrl}/portafolio/${id}`,
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | BlackCherry IT Consulting`,
      description: project.narrativeText,
      images: [project.heroImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = portfolioData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://blackcherryitconsulting.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Portafolio",
        "item": "https://blackcherryitconsulting.com/portafolio"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": `https://blackcherryitconsulting.com/portafolio/${id}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDetailClient project={project} />
    </>
  );
}