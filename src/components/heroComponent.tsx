import { Box, Flex, Grid } from "@radix-ui/themes";

export default function HeroComponent(): JSX.Element {
  return (
    <>
      <section className="lg:min-h-[80vh] flex flex-col pt-16 items-center">
        <section>
            <p className="font-bold text-secondary lg:text-4xl md:text-3xl text-2xl sm:text-center md:text-center p-2 tracking-tight">
              Now generate your Certificates for your event attendees with one CSV!
            </p>
            <p className="font-regular text-center text-lg sm:text-md p-2">
                Inspired by <a href="https://github.com/Sabyasachi-Seal/Certificate-Generator-MLSA" target="__blank" className="underline underline-offset-[4px]">Certificate-Generator-MLSA</a> of <a href="https://github.com/Sabyasachi-Seal" className="underline underline-offset-[4px]">@Sabayasachi Seal</a>  
            </p>
        </section>
        <section>
            <img src="/mlsa.png" className="w-96"></img>
        </section>
        <section className="flex justify-between items-center gap-4">
            <button className="bg-secondary text-white font-bold text-2xl rounded-md px-10 py-2 border-[1px] border-primary hover:shadow-sm hover:shadow-tertiary tracking-tighter">
                Try it out!
            </button>
        </section>
      </section>
    </>
  );
}
