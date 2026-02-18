"use client";

import { useRef } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { SignupForm } from "@/components/auth/signup-form";

export default function SignupPage() {
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <BackgroundBeamsWithCollision
      className="h-screen items-center"
      extraCollisionRefs={[formRef]}
    >
      <div ref={formRef}>
        <SignupForm />
      </div>
    </BackgroundBeamsWithCollision>
  );
}

