import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState();
  const navivate = useNavigate();
  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navivate(`/auth?createNew=${longUrl}`);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        The Only URL shortner <br /> you&rsquo;ll ever need!👇
      </h2>
      <form
        onSubmit={handleShorten}
        className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
      >
        <Input
          type="url"
          value={longUrl}
          placeholder="Enter your looong URL"
          onChange={(e) => setLongUrl(e.target.value)}
          className="h-full flex-1 py-4 px-4"
        />
        <Button className="h-full " type="submit" variant="destructive">
          Shorten!
        </Button>
      </form>
      <img
        src="/banner.png"
        alt="Banner"
        className="w-full my-11 md:px-11"
      ></img>
      {/* <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img
              src="/3.jpg"
              alt="Banner"
              className="w-60% my-11 md:px-11"
            ></img>
          </CarouselItem>
          <CarouselItem>
            <img
              src="/banner.png"
              alt="Banner"
              className="w-60% my-11 md:px-11"
            ></img>
          </CarouselItem>
          <CarouselItem>
            <img
              src="/1.jpg"
              alt="Banner"
              className="w-60% my-11 md:px-11 bg-cover align-center"
            ></img>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}

      <Accordion type="multiple" collapsible className="w-full md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>How this URL shortner will work?</AccordionTrigger>
          <AccordionContent>
            Create Account using Signup and Login with Add you long url.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What analytics are available for my shortened?
          </AccordionTrigger>
          <AccordionContent>
            Yes. All the analytics like Device, country and city per clicks
            details wit graphics
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LandingPage;
