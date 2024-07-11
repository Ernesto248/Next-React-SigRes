import React from "react";
import AnimatedImage from "@/components/AnimatedImage";

export default function Home() {
  return (
    <main>
      <AnimatedImage
        src="/logo.png"
        alt="Animated Image"
        title="Bienvenido a SigRes"
      />
    </main>
  );
}
