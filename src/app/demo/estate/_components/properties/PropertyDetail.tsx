"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Property } from "../../_lib/types";
import { formatPrice, formatArea } from "../../_lib/utils";
import { TYPE_COLORS } from "../../_lib/constants";

const BASE_PATH = "/demo/estate";

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link href={BASE_PATH} className="text-muted hover:text-primary">
              홈
            </Link>
          </li>
          <li className="text-muted">/</li>
          <li>
            <Link
              href={`${BASE_PATH}/properties`}
              className="text-muted hover:text-primary"
            >
              매물 검색
            </Link>
          </li>
          <li className="text-muted">/</li>
          <li className="text-foreground font-medium">{property.title}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
            <Image
              src={property.images[selectedImage]}
              alt={property.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          {property.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto">
              {property.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                    selectedImage === index
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${property.title} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Property Info */}
        <div>
          {/* Tags */}
          <div className="flex gap-2 mb-4">
            <span
              className={`px-3 py-1 text-sm font-medium rounded-full ${TYPE_COLORS[property.type].bg} ${TYPE_COLORS[property.type].text}`}
            >
              {property.type}
            </span>
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-700">
              {property.category}
            </span>
          </div>

          {/* Title & Address */}
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {property.title}
          </h1>
          <p className="text-muted mb-4">{property.address}</p>

          {/* Price */}
          <div className="bg-card rounded-xl p-6 border border-border mb-6">
            <p className="text-sm text-muted mb-1">가격</p>
            <p className="text-3xl font-bold text-primary">
              {formatPrice(
                property.type,
                property.price,
                property.deposit,
                property.monthly
              )}
            </p>
          </div>

          {/* Key Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="text-xs text-muted mb-1">면적</p>
              <p className="text-sm font-semibold">
                {property.exclusiveM2}㎡
                <span className="text-muted font-normal">
                  {" "}
                  ({(property.exclusiveM2 / 3.3058).toFixed(0)}평)
                </span>
              </p>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="text-xs text-muted mb-1">층수</p>
              <p className="text-sm font-semibold">
                {property.floor} / {property.totalFloors}층
              </p>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="text-xs text-muted mb-1">방향</p>
              <p className="text-sm font-semibold">{property.direction}</p>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="text-xs text-muted mb-1">준공년도</p>
              <p className="text-sm font-semibold">{property.builtYear}년</p>
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">특징</h3>
            <div className="flex flex-wrap gap-2">
              {property.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              상세 설명
            </h3>
            <p className="text-muted leading-relaxed">{property.description}</p>
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <Link
              href={`${BASE_PATH}/consultation`}
              className="flex-1 inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-primary text-background rounded-lg hover:bg-primary-dark transition-colors"
            >
              상담 신청하기
            </Link>
            <button className="px-6 py-3 text-sm font-medium border border-border text-foreground rounded-lg hover:bg-card transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Full Info Table */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-foreground mb-6">상세 정보</h2>
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-6 py-4 bg-gray-50 font-medium text-foreground w-1/4">
                  매물명
                </td>
                <td className="px-6 py-4 text-muted">{property.title}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 bg-gray-50 font-medium text-foreground">
                  단지명
                </td>
                <td className="px-6 py-4 text-muted">{property.complex}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 bg-gray-50 font-medium text-foreground">
                  주소
                </td>
                <td className="px-6 py-4 text-muted">{property.address}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 bg-gray-50 font-medium text-foreground">
                  면적
                </td>
                <td className="px-6 py-4 text-muted">
                  {formatArea(property.supplyM2, property.exclusiveM2)}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 bg-gray-50 font-medium text-foreground">
                  층수
                </td>
                <td className="px-6 py-4 text-muted">
                  {property.floor} / 총 {property.totalFloors}층
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 bg-gray-50 font-medium text-foreground">
                  방향
                </td>
                <td className="px-6 py-4 text-muted">{property.direction}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 bg-gray-50 font-medium text-foreground">
                  준공년도
                </td>
                <td className="px-6 py-4 text-muted">{property.builtYear}년</td>
              </tr>
              <tr>
                <td className="px-6 py-4 bg-gray-50 font-medium text-foreground">
                  등록일
                </td>
                <td className="px-6 py-4 text-muted">
                  {new Date(property.createdAt).toLocaleDateString("ko-KR")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
