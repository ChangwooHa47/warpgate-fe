interface ImagePlaceholderProps {
  width?: string;
  height?: string;
  label?: string;
  className?: string;
}

export default function ImagePlaceholder({
  width = "100%",
  height = "200px",
  label = "이미지 영역",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-gradient-to-br from-gray-50 to-gray-100 border border-dashed border-gray-200 rounded-xl flex items-center justify-center text-gray-300 text-sm ${className}`}
      style={{ width, height }}
    >
      <div className="text-center">
        <svg
          className="w-8 h-8 mx-auto mb-1.5 text-gray-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="text-xs text-gray-300">{label}</span>
      </div>
    </div>
  );
}
