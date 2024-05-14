import { Button } from "@/components/ui/button";

export default function ShowJson(props: { object: any }) {
  const { object } = props;
  return (
    <div className="bg-gray-100 p-4">
      <Button
        onClick={async () => {
          navigator.clipboard
            .writeText(JSON.stringify(object ?? "No data - sorry", null, 2))
            .then(() => {
              console.log("copied");
            })
            .catch((error) => {
              console.error("copy failed", error);
            });
        }}
        variant={"default"}
      >
        Copy to clipboard
      </Button>

      <pre className="bg-gray-200 p-4 ">{JSON.stringify(object, null, 2)}</pre>
    </div>
  );
}
