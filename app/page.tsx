import Introduction from "@/components/introduction";
import WorkComponent from "@/components/works";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-60 justify-between p-4">
         <Introduction/>
         <WorkComponent number={1}/>
         <WorkComponent number={2}/>
         <WorkComponent number={3}/>
    </main>
  );
}
