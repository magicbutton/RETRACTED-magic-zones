import { JobList } from "../components/job";

export default function Page(props: { children: any }) {
  const { children } = props;
  return <JobList />;
}
