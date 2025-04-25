import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { fetchPhoto } from "./api";
import { Loader } from "./components/Loader/Loader";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Button } from "./components/Button/Button";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { Image } from "./types";
// Тип для одной фотографии


export const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const abortController = new AbortController();
    // const signal = abortController.signal;

    async function fetchImages() {
      const queryCut = query.split("//");
      const queryWithoutId = queryCut[1];

      if (!query) return;

      try {
        setIsLoading(true);
        const addPhoto = await fetchPhoto(queryWithoutId, page);
        setImages((prevImages) => [...prevImages, ...addPhoto.hits]);
      } catch (error: unknown) {
         if (error instanceof Error) {
           console.error(error.message);
         }
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();

    return () => {
      abortController.abort();
    };
  }, [query, page]);

  const handleSubmit = (newQuery: string) => {
    setQuery(`${nanoid()}//${newQuery}`);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {images.length > 0 && images.length % 12 === 0 && (
        <Button onLoadMore={handleLoadMore} />
      )}
    </>
  );
};
