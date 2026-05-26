// app/page.tsx
"use client";

import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import SplashScreen from "@/components/SplashScreen";

export default function SplashPage() {
  const showSplash = true;
  const router = useRouter();

  useEffect(() => {
    // Check if splash screen has been shown in this session
    const hasVisited = sessionStorage.getItem('padolabs-has-visited');
    
    if (hasVisited) {
      // Already visited, redirect to home immediately
      router.replace('/home');
    }
  }, [router]);

  const handleSplashComplete = useCallback(() => {
    // Mark as visited in this session
    sessionStorage.setItem('padolabs-has-visited', 'true');
    // Navigate to home page
    router.replace('/home');
  }, [router]);

  // Auto-hide splash after 8 seconds if not manually completed
  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        handleSplashComplete();
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [showSplash, handleSplashComplete]);

  return (
    <SplashScreen onComplete={handleSplashComplete} />
  );
}