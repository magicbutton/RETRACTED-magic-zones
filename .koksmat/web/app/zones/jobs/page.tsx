import { JobDashboard } from "@/components/job-dashboard";

export default function Page(props: { children: any }) {
  const { children } = props;
  return <JobDashboard />;
}
