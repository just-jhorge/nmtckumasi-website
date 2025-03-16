import Header from "./Header";
import Gallery from "./Gallery";
import LatestNews from "./LatestNews";
import Statistics from "./Statistics";
import Introduction from "./Introduction";
import UpcomingEvents from "./UpcomingEvents";

export default function Page() {
  return (
    <>
      <Header />
      <Introduction />
      <Statistics />
      <UpcomingEvents />
      <LatestNews />
      <Gallery />
    </>
  );
}
