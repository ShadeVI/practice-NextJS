import { Tour } from "@/lib/http";
import Image from "next/image";
import Link from "next/link";

interface ToursListProps {
  tours: Tour[];
}

async function ToursList({ tours }: ToursListProps) {
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-8">
      {tours.map((tour) => {
        return (
          <div className="bg-slate-100 p-2 rounded-md" key={tour.id}>
            <h3 className="text-balance h-16 text-center">{tour.name}</h3>
            <div className="relative h-48 mb-2">
              <Image
                src={tour.image}
                alt={`tour ${tour.name}`}
                fill
                priority
                sizes="100vw"
                className="object-cover rounded-sm"
              />
            </div>
            <Link
              className="underline hover:no-underline"
              href={`tours/${tour.id}`}
            >
              Check tour details
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default ToursList;
