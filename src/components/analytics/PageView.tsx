"use client";

import { useEffect } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";

export function PageView({
  event,
  params,
}: {
  event: AnalyticsEvent;
  params?: Record<string, string | number | boolean>;
}) {
  useEffect(() => {
    track(event, params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
