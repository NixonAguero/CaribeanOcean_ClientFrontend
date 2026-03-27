import type { Hero } from "../types/hero.types";
//import apiClient from "../../../shared/services/apiClient.ts";

export async function getHero(): Promise<Hero> {
  //const response = await apiClient.get("/hero");

  const response: Hero = {
    id: "1",
    title: "Caribbean Ocean",
    description:
      "Discover paradise where the rainforest embraces the Caribbean Sea. Located on the shores of Puerto Viejo de Talamanca, Costa Rica, the Caribbean Ocean Resort & Spa is the ideal destination for those seeking luxury, nature, and authenticity in perfect harmony.",
    images: [
      {
        url: "https://www.bloomberglinea.com/resizer/v2/JJDK73QEDRFCRIRY7CHZ22KOXM.jpg?auth=0aab150f895974b82e39a44380febb2a8e9c061f0b07157346ad45a52b00a2ad&width=800&height=449&quality=80&smart=true",
      },
      {
        url: "https://www.expreso.info/files/2023-04/intercontinental_dominica_cabrits1.jpg",
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/450441214.jpg?k=4295f98720ec46f52485f1cbb826b97296ab97404a058ac73713295ce1cb7544&o=",
      },
      {
        url: "https://i0.wp.com/travelandleisure-es.com/wp-content/uploads/2025/11/TAL-header-aerial-club-med-punta-cana-CLBMDPUNTACANARENO1125-c3aca336a9de4d7eb8de1797e5a638a5.webp?fit=750%2C499&ssl=1",
      },
    ],
  };

  return response;
}