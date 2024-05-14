"use client";

import ShowJson from "@/koksmat/components/showjson";
import { useSQLSelect } from "@/koksmat/usesqlselect";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Activity,
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  History,
  ClipboardCheck,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { set } from "date-fns";
import { useService } from "@/koksmat/useservice";

export interface Root {
  data: Data;
  error: string;
  isLoading: boolean;
}

export interface Data {
  Result: Result[];
}

export interface Result {
  id: number;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  tenant: string;
  name: string;
  description: string;
  unique_jobtype_id: string;
  arg0: any;
  arg1: any;
  arg2: any;
  arg3: any;
  arg4: any;
  arg5: any;
  arg6: any;
  arg7: any;
  arg8: any;
  arg9: any;
}

export interface JobCardProps {
  children?: React.ReactNode;
  title: string;
  description: string;

  categoryLabel: string;

  historyLabel: string;
  serviceName: string;
  args: string[];
}

export function JobList(props: {}) {
  const jobs = useSQLSelect<Data>(
    "magic-zones.app",
    `
  SELECT id,
       created_at,
       updated_at,
       deleted_at,
       tenant,
       name,
       description,
       unique_jobtype_id,
       arg0,
       arg1,
       arg2,
       arg3,
       arg4,
       arg5,
       arg6,
       arg7,
       arg8,
       arg9
FROM public.jobtype

  `
  );
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {/* <ShowJson object={jobs} />
       */}
      {jobs &&
        jobs.data &&
        jobs.data.Result.map((job, index) => {
          const service = job.arg0;
          const j = job as any;
          const args: string[] = [];
          for (let i = 1; i < 10; i++) {
            if (j[`arg${i}`]) {
              args.push(j[`arg${i}`]);
            }
          }

          return (
            <div key={index}>
              <JobCard
                serviceName={service}
                args={args}
                title={job.name}
                description={job.description}
                categoryLabel={"Category"}
                historyLabel={"History"}
              ></JobCard>
            </div>
          );
        })}
    </div>
  );
}

export function Execute(props: { cmd: string; args: string[] }) {
  const { cmd, args } = props;

  const service = useService(cmd, args, "", 600, "x");
  return <ShowJson object={{ cmd, args, service }} />;
}
export function JobCard(props: JobCardProps) {
  const {
    title,
    description,

    categoryLabel,

    historyLabel,
  } = props;
  const [showExecute, setshowExecute] = useState(false);
  const [executing, setexecuting] = useState(false);
  const executionControl = (on: boolean) => {
    if (!on) {
      setexecuting(false);
    }
    setshowExecute(on);
  };
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950  hover:shadow-lg ">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-500 dark:text-gray-400">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <Button onClick={() => setshowExecute(true)}>Run</Button>
        <div className="flex items-center space-x-2 hidden">
          <History className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {historyLabel}
          </span>
        </div>
      </div>

      {/* <Dialog open={showExecute} onOpenChange={setshowExecute}>
        <DialogTrigger className="h-5 w-5 text-gray-500 dark:text-gray-400">
          Open
        </DialogTrigger> 
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <DialogContent></DialogContent>
          <DialogFooter>
            <Button variant="default">Publish</Button>

            <Button variant="secondary" onClick={() => setshowExecute(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}
      <Sheet open={showExecute} onOpenChange={executionControl}>
        {/* <SheetTrigger className="h-5 w-5 text-gray-500 dark:text-gray-400">
       
        </SheetTrigger> */}
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription>{description}</SheetDescription>
            <style jsx>{`
              .progress-bar-value {
                width: 100%;
                height: 100%;
                background-color: rgb(5, 114, 206);
                animation: indeterminateAnimation 1s infinite linear;
                transform-origin: 0% 50%;
              }

              @keyframes indeterminateAnimation {
                0% {
                  transform: translateX(0) scaleX(0);
                }
                40% {
                  transform: translateX(0) scaleX(0.4);
                }
                100% {
                  transform: translateX(100%) scaleX(0.5);
                }
              }
            `}</style>
            <div className="h-2 overflow-hidden">
              {executing && <div className="progress-bar-value"></div>}
            </div>
          </SheetHeader>
          <div className="mt-5 space-x-2">
            <Button
              disabled={executing}
              variant="default"
              onClick={() => setexecuting(true)}
            >
              Publish
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                executionControl(false);
              }}
            >
              Cancel
            </Button>
            {executing && (
              <div className="flex items-center space-x-2">
                <Execute cmd={props.serviceName} args={props.args} />
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
