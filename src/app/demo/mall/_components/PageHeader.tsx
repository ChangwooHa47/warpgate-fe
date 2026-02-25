interface PageHeaderProps {
  label: string;
  title: string;
}

export default function PageHeader({ label, title }: PageHeaderProps) {
  return (
    <section className="pt-[104px] bg-[#1a1a1a]">
      <div className="container-main py-20 text-center">
        <p className="text-sm tracking-[0.3em] text-[#b8965a] mb-4">
          {label}
        </p>
        <h1
          className="text-4xl md:text-5xl font-light text-white"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
