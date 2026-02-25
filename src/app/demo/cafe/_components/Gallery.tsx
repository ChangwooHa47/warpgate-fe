const posts = [
  { id: 1, label: "라떼 아트", span: "col-span-2 row-span-2" },
  { id: 2, label: "원두", span: "" },
  { id: 3, label: "크루아상", span: "" },
  { id: 4, label: "내부 공간", span: "" },
  { id: 5, label: "아인슈페너", span: "" },
  { id: 6, label: "테라스", span: "col-span-2 row-span-2" },
  { id: 7, label: "티라미수", span: "" },
  { id: 8, label: "핸드드립", span: "" },
];

function GalleryItem({
  post,
}: {
  post: { id: number; label: string; span: string };
}) {
  return (
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`${post.span} bg-milk rounded-sm overflow-hidden group relative`}
    >
      {/* Placeholder for actual images: <Image src={`/gallery-${post.id}.jpg`} alt={post.label} fill className="object-cover" /> */}
      <div className="w-full h-full min-h-[160px] flex flex-col items-center justify-center gap-2 transition-colors duration-500 group-hover:bg-latte/40">
        <span className="text-latte/60 text-[10px] tracking-[0.3em] uppercase group-hover:text-caramel/80 transition-colors duration-500">
          {String(post.id).padStart(2, "0")}
        </span>
        <span className="text-latte text-xs tracking-widest group-hover:text-caramel transition-colors duration-500">
          {post.label}
        </span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/5 transition-colors duration-500" />
    </a>
  );
}

export default function Gallery() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="divider mx-auto mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-4">
            Gallery
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-warm-gray hover:text-caramel transition-colors text-sm tracking-wide"
          >
            @mellow_yeonnam
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[140px] md:auto-rows-[180px]">
          {posts.map((post) => (
            <GalleryItem key={post.id} post={post} />
          ))}
        </div>

      </div>
    </section>
  );
}
