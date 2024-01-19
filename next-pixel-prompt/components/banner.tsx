import { InitialMessage } from "@/app/page";
import { Button } from "@/components/ui/button";
import { testImages } from "@/lib/test-images";
import { ArrowRightIcon, ScanEyeIcon } from "lucide-react";

type Props = {
  setInitialMessage: (message: InitialMessage) => void;
};

export default function Banner({ setInitialMessage }: Props) {
  return (
    <header className="mx-auto max-w-2xl px-4 pb-4">
      <div className="rounded-lg border space-y-4 bg-background p-8">
        <div className="flex text-pink-600 items-center space-x-2">
          <ScanEyeIcon />
          <h1 className="text-lg font-semibold">Welcome to Pixel Prompt!</h1>
        </div>
        <p className="text-gray-600">
          Edit, modify and transform any image you like, however you want, just
          by chatting with it.
        </p>
        <p className="text-gray-600">
          Upload your own image to transform or select one of the example images
          below.
        </p>
        <div className="flex flex-col items-start">
          {testImages.map((testImage) => (
            <Button
              onClick={() => {
                setInitialMessage({
                  image: testImage.image,
                  prompt: testImage.prompt,
                });
              }}
              key={testImage.title}
              variant="link"
              className="p-0 text-base"
            >
              <ArrowRightIcon className="mr-2 w-4 h-4" />
              {testImage.title}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
}
