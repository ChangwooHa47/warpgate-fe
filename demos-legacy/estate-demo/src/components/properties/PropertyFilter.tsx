"use client";

import { memo } from "react";
import { PropertyFilter as FilterType, TransactionType, ViewMode } from "@/types";
import { PRICE_MIN, PRICE_MAX, AREA_MIN, AREA_MAX, DEFAULT_FILTER, TYPE_COLORS, REGIONS } from "@/lib/constants";
import { ListIcon, GridIcon, CloseIcon } from "@/components/ui/Icons";

interface PropertyFilterProps {
  filter: FilterType;
  onChange: (filter: FilterType) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  resultCount: number;
}

const selectClass =
  "px-3.5 py-2 text-[14px] rounded-lg border border-border bg-white text-gray-700 cursor-pointer hover:border-gray-400 transition-colors appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2212%22%20height%3d%2212%22%20viewBox%3d%220%200%2012%2012%22%3e%3cpath%20fill%3d%22%23666%22%20d%3d%22M3%204.5l3%203%203-3%22%2f%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_10px_center] pr-8";

const TRANSACTION_TYPES: TransactionType[] = ["매매", "전세", "월세"];

function PropertyFilter({
  filter,
  onChange,
  viewMode,
  onViewModeChange,
  resultCount,
}: PropertyFilterProps) {
  const toggleType = (type: TransactionType) => {
    const current = filter.type;
    const next = current.includes(type)
      ? current.filter((t) => t !== type)
      : [...current, type];
    onChange({ ...filter, type: next.length > 0 ? next : [type] });
  };

  // Collect active filter chips
  const activeChips: { label: string; onRemove: () => void }[] = [];

  if (filter.region) {
    activeChips.push({
      label: filter.region,
      onRemove: () => onChange({ ...filter, region: "" }),
    });
  }
  if (filter.priceMin !== PRICE_MIN || filter.priceMax !== PRICE_MAX) {
    const label =
      filter.priceMax === PRICE_MAX
        ? `${filter.priceMin}억 이상`
        : filter.priceMin === PRICE_MIN
        ? `${filter.priceMax}억 이하`
        : `${filter.priceMin}~${filter.priceMax}억`;
    activeChips.push({
      label,
      onRemove: () => onChange({ ...filter, priceMin: PRICE_MIN, priceMax: PRICE_MAX }),
    });
  }
  if (filter.areaMin !== AREA_MIN || filter.areaMax !== AREA_MAX) {
    const label =
      filter.areaMax === AREA_MAX
        ? `${filter.areaMin}m² 이상`
        : filter.areaMin === AREA_MIN
        ? `${filter.areaMax}m² 이하`
        : `${filter.areaMin}~${filter.areaMax}m²`;
    activeChips.push({
      label,
      onRemove: () => onChange({ ...filter, areaMin: AREA_MIN, areaMax: AREA_MAX }),
    });
  }
  if (filter.floor) {
    activeChips.push({
      label: filter.floor,
      onRemove: () => onChange({ ...filter, floor: "" }),
    });
  }
  if (filter.roomCount) {
    activeChips.push({
      label: filter.roomCount,
      onRemove: () => onChange({ ...filter, roomCount: "" }),
    });
  }

  const hasActiveFilters = activeChips.length > 0;

  const resetFilters = () => {
    onChange({ ...DEFAULT_FILTER, category: filter.category });
  };

  return (
    <div className="border-b border-border bg-white">
      {/* Row 1: Type toggle pills + View mode + Sort */}
      <div className="flex items-center justify-between px-5 pt-3.5 pb-3">
        <div className="flex gap-1.5">
          {TRANSACTION_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => toggleType(type)}
              className={`px-3.5 py-1.5 text-[13px] font-medium rounded-full border transition-colors ${
                filter.type.includes(type)
                  ? TYPE_COLORS[type].pill
                  : TYPE_COLORS[type].pillInactive
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => onViewModeChange("list")}
              className={`p-1.5 transition-colors ${viewMode === "list" ? "bg-gray-100 text-gray-900" : "text-gray-400 hover:text-gray-600"}`}
              title="리스트 보기"
            >
              <ListIcon />
            </button>
            <button
              onClick={() => onViewModeChange("grid")}
              className={`p-1.5 transition-colors ${viewMode === "grid" ? "bg-gray-100 text-gray-900" : "text-gray-400 hover:text-gray-600"}`}
              title="그리드 보기"
            >
              <GridIcon />
            </button>
          </div>
          <select
            value={filter.sortBy}
            onChange={(e) =>
              onChange({ ...filter, sortBy: e.target.value as FilterType["sortBy"] })
            }
            className={selectClass}
          >
            <option value="default">정렬</option>
            <option value="price-asc">낮은가격순</option>
            <option value="price-desc">높은가격순</option>
            <option value="area-desc">넓은면적순</option>
            <option value="newest">최신등록순</option>
          </select>
        </div>
      </div>

      {/* Row 2: Dropdown filters */}
      <div className="flex flex-wrap items-center gap-2 px-5 pb-3">
        <select
          value={filter.region}
          onChange={(e) => onChange({ ...filter, region: e.target.value })}
          className={selectClass}
        >
          <option value="">지역</option>
          {REGIONS.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>

        <select
          value={`${filter.priceMin}-${filter.priceMax}`}
          onChange={(e) => {
            const [min, max] = e.target.value.split("-").map(Number);
            onChange({ ...filter, priceMin: min, priceMax: max });
          }}
          className={selectClass}
        >
          <option value={`${PRICE_MIN}-${PRICE_MAX}`}>가격</option>
          <option value="0-10">10억 이하</option>
          <option value="10-20">10~20억</option>
          <option value="20-30">20~30억</option>
          <option value="30-50">30~50억</option>
          <option value={`50-${PRICE_MAX}`}>50억 이상</option>
        </select>

        <select
          value={`${filter.areaMin}-${filter.areaMax}`}
          onChange={(e) => {
            const [min, max] = e.target.value.split("-").map(Number);
            onChange({ ...filter, areaMin: min, areaMax: max });
          }}
          className={selectClass}
        >
          <option value={`${AREA_MIN}-${AREA_MAX}`}>면적</option>
          <option value="0-60">60m² 이하 (18평↓)</option>
          <option value="60-85">60~85m² (18~25평)</option>
          <option value="85-130">85~130m² (25~39평)</option>
          <option value="130-170">130~170m² (39~51평)</option>
          <option value={`170-${AREA_MAX}`}>170m² 이상 (51평↑)</option>
        </select>

        <select
          value={filter.roomCount}
          onChange={(e) => onChange({ ...filter, roomCount: e.target.value as FilterType["roomCount"] })}
          className={selectClass}
        >
          <option value="">방 수</option>
          <option value="1룸">1룸</option>
          <option value="2룸">2룸</option>
          <option value="3룸">3룸</option>
          <option value="4룸+">4룸+</option>
        </select>

        <select
          value={filter.floor}
          onChange={(e) => onChange({ ...filter, floor: e.target.value as FilterType["floor"] })}
          className={selectClass}
        >
          <option value="">층수</option>
          <option value="저층">저층 (1~5층)</option>
          <option value="중층">중층 (6~15층)</option>
          <option value="고층">고층 (16층↑)</option>
        </select>
      </div>

      {/* Row 3: Active filter chips + result count */}
      <div className="flex items-center justify-between px-5 pb-3">
        <div className="flex items-center gap-2 flex-wrap flex-1 min-w-0">
          {activeChips.map((chip) => (
            <span
              key={chip.label}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/5 text-primary text-[13px] font-medium rounded-full border border-primary/20"
            >
              {chip.label}
              <button
                onClick={chip.onRemove}
                className="w-4 h-4 flex items-center justify-center rounded-full hover:bg-primary/10 transition-colors"
              >
                <CloseIcon />
              </button>
            </span>
          ))}
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-[13px] text-red-500 hover:text-red-600 font-medium transition-colors"
            >
              전체 초기화
            </button>
          )}
        </div>
        <span className="text-[13px] text-gray-500 shrink-0 ml-3">
          <span className="font-semibold text-gray-900">{resultCount.toLocaleString()}</span>개 매물
        </span>
      </div>
    </div>
  );
}

export default memo(PropertyFilter);
