import { VideoBySlug } from "@/src/screens";

export default function VideosBySlug({ params }: { params: { slug: string } }) {
  return <VideoBySlug slug={params.slug} />;
}
