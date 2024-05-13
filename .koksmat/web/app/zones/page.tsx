"use client";

import { useService } from "@/koksmat/useservice";
import { useContext } from "react";
import { MagicboxContext } from "@/koksmat/magicbox-context";

export interface Dashboard {
  person_id: number;
  number_of_applications: number;
  number_of_surveys: number;
  number_of_survey_responses: number;
  number_of_apps_you_own: number;
  number_of_owners: number;
  messages: any;
}
export default function Component() {
  const magicbox = useContext(MagicboxContext);
  const appDashboardService = useService<Dashboard>(
    "magic-zones.app",
    ["dashboard", magicbox.user?.email ?? "unknown"],
    "",
    600,
    "x"
  );
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"></div>
      </div>
    </main>
  );
}
