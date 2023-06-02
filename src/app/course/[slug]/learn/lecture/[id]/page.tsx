import { AspectRatio } from "~/components/ui/aspect-ratio";

export default function CourseView() {
  return (
    <div>
      <div className="w-full">
        <AspectRatio ratio={16 / 9}>
          <iframe
            className="h-full w-full rounded"
            src="https://www.youtube.com/embed/7undQz4u1t0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
            allowFullScreen
          />
        </AspectRatio>
      </div>
    </div>
  );
}
