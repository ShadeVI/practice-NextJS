import ToursList from "@/components/ToursList";
import { fetchTours } from "@/lib/http";

async function ToursPage() {
  const tours = await fetchTours();
  return (
    <section>
      <ToursList tours={tours} />
    </section>
  );
}
export default ToursPage;
