import Image from "next/image";

export default function Loader({
  className = "h-screen",
  text,
}: {
  className?: string;
  text?: string;
}) {
  return (
    <>
      <div
        className={`w-full ${className} flex-center flex-col gap-4 bg-transparent animate-pulse select-none`}
      >
        <Image
          src="/logo.png"
          alt="Loading"
          width={600}
          height={600}
          className="w-[25vh] h-[25vh] object-contain animate-pulse"
        />
        Loading{text && " " + text}...
      </div>
    </>
  );
}
