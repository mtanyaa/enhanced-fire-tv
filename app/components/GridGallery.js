"use client";
export default function GridGallery() {
  return (
    <div className="grid">
      {Array.from({ length: 15 }, (_, i) => (
        <img key={i} src={`/pic${i + 1}.jpeg`} alt={`pic${i + 1}`} />
      ))}
    </div>
  );
}
