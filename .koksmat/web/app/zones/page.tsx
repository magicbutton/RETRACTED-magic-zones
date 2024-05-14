"use client";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/TuN9Oe6pYbQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { JobCard } from "./components/job";

export default function Component() {
  return (
    <main className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <JobCard
          title="Software Engineeringer"
          description="Design, develop, and maintain software applications. Utilize programming languages, frameworks, and tools to build robust and scalable systems. Progress from junior developer to lead engineer or architect."
          CategoryIcon={CodeIcon}
          categoryLabel="Engineering"
          HistoryIcon={HistoryIcon}
          historyLabel="History"
        />

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <h3 className="text-xl font-semibold">Data Analysis</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Collect, analyze, and interpret data to uncover insights and drive
            business decisions. Utilize statistical tools and techniques to
            transform raw data into actionable information.
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <PieChartIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Analytics
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <HistoryIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                History
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <h3 className="text-xl font-semibold">Project Management</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Plan, organize, and oversee the execution of projects. Coordinate
            cross-functional teams, manage budgets and timelines, and ensure
            successful project delivery.
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ProjectorIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Project
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <HistoryIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                History
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <h3 className="text-xl font-semibold">Digital Marketing</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Develop and execute digital marketing strategies to promote brands,
            products, and services. Leverage various channels, such as social
            media, email, and search engine optimization, to reach and engage
            customers.
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TargetIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Marketing
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <HistoryIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                History
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <h3 className="text-xl font-semibold">Graphic Design</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Create visually appealing designs for various media, including
            websites, print materials, and digital assets. Utilize design
            principles, software tools, and creativity to communicate brand
            messages effectively.
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TypeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Design
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <HistoryIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                History
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Input
            className="w-full max-w-md rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:focus:border-gray-600 dark:focus:ring-gray-600"
            placeholder="Search..."
            type="search"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex items-center gap-2" variant="outline">
                <FilterIcon className="h-5 w-5" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem>
                Software Engineering
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Data Analysis</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Project Management
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Digital Marketing
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Graphic Design
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">Clear Filters</Button>
          <Button>Apply Filters</Button>
        </div>
      </div>
    </main>
  );
}

function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function FilterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function HistoryIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>
  );
}

function PieChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function ProjectorIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 7 3 5" />
      <path d="M9 6V3" />
      <path d="m13 7 2-2" />
      <circle cx="9" cy="13" r="3" />
      <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
      <path d="M16 16h2" />
    </svg>
  );
}

function TargetIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function TypeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  );
}
