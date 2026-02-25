"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getProduct } from "../../_data/products";
import { useCart } from "../../_context/CartContext";
import { formatPrice, cn } from "../../_lib/utils";

const BASE_PATH = "/demo/ecommerce";

export default function ProductDetailPage() {
  const params = useParams();
  const product = getProduct(params.id as string);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariants, setSelectedVariants] = useState<
    Record<string, string>
  >({});
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-32 text-center">
        <p className="text-muted">상품을 찾을 수 없습니다.</p>
        <Link
          href={`${BASE_PATH}/products`}
          className="inline-block mt-4 text-sm border-b border-line hover:border-primary pb-0.5 text-muted hover:text-primary transition-colors"
        >
          전체 제품으로 돌아가기
        </Link>
      </div>
    );
  }

  const variantsMissing =
    (product.variants?.length ?? 0) > 0 &&
    Object.keys(selectedVariants).length < (product.variants?.length ?? 0);

  const handleAddToCart = () => {
    addItem(product, selectedVariants);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-8 md:px-12 pt-12 pb-24">
      <Link
        href={`${BASE_PATH}/products`}
        className="inline-block text-sm text-muted hover:text-primary transition-colors mb-8"
      >
        &larr; Back
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Images */}
        <div>
          <div className="relative aspect-[3/4] bg-surface overflow-hidden mb-4">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={cn(
                    "relative w-16 h-20 bg-surface overflow-hidden border-2 transition-colors",
                    selectedImage === i ? "border-primary" : "border-transparent"
                  )}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <p className="text-xs tracking-[0.2em] text-muted uppercase mb-2">
            {product.nameEn}
          </p>
          <h1 className="text-2xl font-light mb-2">{product.name}</h1>
          <p className="text-lg text-muted mb-8">
            {formatPrice(product.price)}
          </p>

          <p className="text-sm text-muted leading-loose mb-8">
            {product.description}
          </p>

          {/* Variants */}
          {product.variants?.map((variant) => (
            <div key={variant.label} className="mb-6">
              <p className="text-xs text-muted mb-3">
                {variant.label}
              </p>
              <div className="flex gap-2">
                {variant.options.map((option) => (
                  <button
                    key={option}
                    onClick={() =>
                      setSelectedVariants((prev) => ({
                        ...prev,
                        [variant.label]: option,
                      }))
                    }
                    className={cn(
                      "text-sm px-4 py-2 border transition-all duration-300",
                      selectedVariants[variant.label] === option
                        ? "border-primary bg-primary text-base"
                        : "border-line text-muted hover:border-primary hover:text-primary"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {product.stock === "low_stock" && (
            <p className="text-xs text-accent mb-4">재고 소량</p>
          )}

          {variantsMissing && (
            <p className="text-xs text-accent mt-2">
              옵션을 선택해주세요
            </p>
          )}

          <button
            onClick={handleAddToCart}
            disabled={
              product.stock === "out_of_stock" || variantsMissing
            }
            className={cn(
              "w-full py-4 text-sm tracking-wider transition-all duration-500 mt-4",
              product.stock === "out_of_stock" || variantsMissing
                ? "bg-line text-muted cursor-not-allowed"
                : added
                  ? "bg-primary text-base"
                  : "bg-primary text-base hover:bg-primary/90"
            )}
          >
            {product.stock === "out_of_stock"
              ? "품절"
              : added
                ? "장바구니에 담았습니다"
                : "장바구니에 담기"}
          </button>

          {/* Details */}
          <div className="mt-12 pt-8 border-t border-line">
            <p className="text-xs text-muted mb-4 tracking-wider uppercase">
              Details
            </p>
            <ul className="space-y-2">
              {product.details.map((detail, i) => (
                <li key={i} className="text-sm text-muted">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
