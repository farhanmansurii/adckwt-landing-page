import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { GetAQuote } from "../get-a-quote";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export function NavSideBar({ links }: { links: any }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button  size={'icon'}><HamburgerMenuIcon/></Button>
      </SheetTrigger>
      <SheetContent>
        <div className="grid gap-4 py-4">
          {links?.map((item:any, idx:number) => (
            <SheetClose key={idx} asChild>
              <Link  href={item.href} className="w-full">
                <Button variant={"ghost"} className="text-left w-full ">
                  {item.title}
                </Button>
              </Link>
            </SheetClose>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
           <GetAQuote text="Get a Quote"/>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
