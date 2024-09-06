import { fetchTours } from "@/lib/http";

interface TourDetailsProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  type Tour = {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
  };

  const data: Tour[] = await fetchTours();

  return data.map((tour) => {
    return {
      id: tour.id,
    };
  });
}

async function TourDetailsPage({ params }: TourDetailsProps) {
  const { id } = params;

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
export default TourDetailsPage;
