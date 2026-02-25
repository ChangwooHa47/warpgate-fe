import type { Metadata } from "next";
import Gallery from "../_components/Gallery";

export const metadata: Metadata = {
  title: "갤러리 | Mellow",
  description: "Mellow의 공간과 메뉴를 사진으로 만나보세요.",
};

export default function GalleryPage() {
  return <Gallery />;
}
