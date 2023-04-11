import Carousel from "./components/Carousel";

export default function App() {
  return (
    <div>
      <Carousel
        carouselItems={[
          "https://cdn.shopify.com/s/files/1/0691/4641/files/pens_d6bb80e3-a3ea-4add-8b92-69a543a9a74a_1400x623.jpg?v=1613532661",
          "https://cdn.shopify.com/s/files/1/0691/4641/files/calendar-slide_f064b907-ed59-411d-8a80-91a1202030a6_1400x623.png?v=1613532923",
          "https://cdn.shopify.com/s/files/1/0691/4641/files/planner2_fed47059-4a22-4258-a90b-a2a306428344_1400x623.jpg?v=1613532924",
          "https://cdn.shopify.com/s/files/1/0691/4641/files/calendar-slide_f064b907-ed59-411d-8a80-91a1202030a6_1400x623.png?v=1613532923",
        ]}
      />
      <Carousel
        carouselItems={[
          "https://cdn.shopify.com/s/files/1/0691/4641/files/calendar-slide_f064b907-ed59-411d-8a80-91a1202030a6_1400x623.png?v=1613532923",
          "https://cdn.shopify.com/s/files/1/0691/4641/files/pens_d6bb80e3-a3ea-4add-8b92-69a543a9a74a_1400x623.jpg?v=1613532661",
          "https://cdn.shopify.com/s/files/1/0691/4641/files/calendar-slide_f064b907-ed59-411d-8a80-91a1202030a6_1400x623.png?v=1613532923",
          "https://cdn.shopify.com/s/files/1/0691/4641/files/planner2_fed47059-4a22-4258-a90b-a2a306428344_1400x623.jpg?v=1613532924",
          "https://cdn.shopify.com/s/files/1/0691/4641/files/calendar-slide_f064b907-ed59-411d-8a80-91a1202030a6_1400x623.png?v=1613532923",
        ]}
      />
    </div>
  );
}
