"use client";

import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import Filters from "@/components/filters";
import ImgContainer from "@/components/img-container";
import ImgSkeleton from "@/components/img-skeleton";
import ImgWrapper from "@/components/img-wrapper";
import Navbar from "@/components/navbar";
import { useCallback, useEffect, useState } from "react";

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

  const fetchPhotos = useCallback(async (page: number) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.pexels.com/v1/curated`, {
        params: { page, per_page: 2 },
        headers: {
          Authorization: process.env.NEXT_PUBLIC_authKey
        }
      });
      const newPhotos = response.data.photos;
      console.log(response);
      setPhotos((prev) => [...prev, ...newPhotos])
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPhotos(currentPage);
  }, [currentPage]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="p-4 min-h-screen max-w-[1600px] mx-auto">
      <Navbar />
      <Filters />
      <ImgWrapper>
        {
          loading ? (
            <>
              <ImgSkeleton />
              <ImgSkeleton />
              <ImgSkeleton />
              <ImgSkeleton />
              <ImgSkeleton />
            </>
          ) : (
            photos.length > 0 && (
              photos.map(({ width, height, alt, src }) => (
                <ImgContainer key={uuidv4()} width={width} height={height} alt={alt} src={src.original} />
              ))
            )
          )
        }
      </ImgWrapper>
    </main>
  );
}
