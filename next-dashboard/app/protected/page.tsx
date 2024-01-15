import SignOut from "@/components/SignOut";

export default function Protected() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
        <iframe
          src="https://www.youtube.com/embed/yNwKYgM6SkM?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full px-6 max-w-screen-lg aspect-video"
        />
        <SignOut />
      </div>
    </div>
  );
}
