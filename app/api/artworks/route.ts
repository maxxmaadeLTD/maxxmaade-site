// app/api/artworks/route.ts
import { NextResponse } from "next/server";

type Artwork = {
  title: string;
  medium: string;
  year: string;
  image: string;
  alt: string;
};

const artworks: Artwork[] = [
  {
    title: "frequently)",
    medium: "mixed media on canvas",
    year: "2025",
    image: "/art/frequent.jpg",
    alt: "Abstract mixed media composition capturing controlled chaos.",
  },
  {
    title: "up in flames",
    medium: "acrylic x spray paint x epoxys",
    year: "2024",
    image: "/art/flames.jpg",
    alt: "Explosive layered artwork with fiery textures and molten movement.",
  },
  {
    title: "voyeure",
    medium: "acrylic x spraypaint",
    year: "2023",
    image: "/art/voyeur.JPG",
    alt: "Fragmented portrait exploring clarity and distortion.",
  },
];

export async function GET() {
  return NextResponse.json(artworks);
}
