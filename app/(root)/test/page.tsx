"use client";
import { Button } from "@/components/ui/button";
import { randomInt } from "crypto";
import { useRouter } from "next/navigation";
import qs from "query-string";

const TestPage = ({ searchParams }: { searchParams: string }) => {
  const parsed = qs.parse(location.search);
  const router = useRouter();

  const handle = () => {
    parsed["test"] = "ss";
    parsed["tshort"] = "asd";

    const qsUrl = qs.stringifyUrl({
      url: window.location.pathname,
      query: parsed,
    });
    console.log(qsUrl);

    // router.push("/test?cate=kot");
  };
  return (
    <div>
      TestPage
      {JSON.stringify(searchParams)}
      <div>
        <Button onClick={handle}>TEst</Button>
      </div>
    </div>
  );
};

export default TestPage;
