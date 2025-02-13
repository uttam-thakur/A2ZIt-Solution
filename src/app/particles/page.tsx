import About from "../about/page";
import ParticlesBackground from "../component/ParticlesBackground";

export default function page() {
  return (
    <div className="relative">
      <ParticlesBackground />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white z-10">
        <h1 className="text-3xl font-bold">Welcome to Web Wonderz</h1>
      </div>
    </div>
  );
}
