import videoDefault from "@/assets/video/default.mp4";

export const VideoAsGif = () => {
  return (
    <video
      src={videoDefault}
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    />
  );
};
