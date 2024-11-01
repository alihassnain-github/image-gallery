"use client";

import axios from "axios";
import Filters from "@/components/filters";
import ImgContainer from "@/components/img-container";
import ImgSkeleton from "@/components/img-skeleton";
import ImgWrapper from "@/components/img-wrapper";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

type ImageType = {
  id: number,
  width: number,
  height: number,
  url: string,
  photographer: string,
  photographer_url: string,
  photographer_id: number,
  avg_color: string,
  src: {
    original: string,
    large2x: string,
    large: string,
    medium: string,
    small: string,
    portrait: string,
    landscape: string,
    tiny: string
  },
  liked: boolean,
  alt: string
}

export default function Home() {

  const [photos, setPhotos] = useState<ImageType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async (page: number) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.pexels.com/v1/curated`, {
        params: { page, per_page: 40 },
        headers: {
          Authorization: process.env.NEXT_PUBLIC_authKey
        }
      });
      setPhotos([...photos, ...response.data.photos])
      setCurrentPage(currentPage + 1);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPhotos(currentPage);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        fetchPhotos(currentPage);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  return (
    <main className="p-4 bg-slate-50 min-h-screen">
      <Navbar />
      <Filters />
      <ImgWrapper>
        {
          loading ? (
            <ImgSkeleton />
          ) : (
            photos.length > 0 && (
              photos.map(({ id, width, height, alt, src }) => (
                <ImgContainer key={id} width={width} height={height} alt={alt} src={src.original} />
              ))
            )
          )
        }
      </ImgWrapper>
    </main>
  );
}
