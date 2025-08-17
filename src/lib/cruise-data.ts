export interface CruiseLine {
  name: string;
  slug: string;
  logo?: string;
}

export const cruiseLines: CruiseLine[] = [
  { name: "A&K Cruises", slug: "ak-cruises" },
  { name: "Ama Waterways", slug: "ama-waterways" },
  { name: "American Cruise Lines", slug: "american-cruise-lines" },
  { name: "Antarctica 21", slug: "antartica-21" },
  { name: "Aqua Expeditions", slug: "aqua-expeditions" },
  { name: "Atlas Ocean Voyages", slug: "atlas-ocean-voyages" },
  { name: "Aurora Expeditions", slug: "aurora-expeditions" },
  { name: "Australis", slug: "australis" },
  { name: "Avalon Waterways", slug: "avalon-waterways" },
  { name: "Belmond", slug: "belmond" },
  { name: "Celebrity Cruises", slug: "celebrity-cruises" },
  { name: "Coral Expeditions", slug: "coral-expeditions" },
  { name: "Crystal", slug: "crystal" },
  { name: "Ecoventura", slug: "ecoventura" },
  { name: "Emerald Cruises", slug: "emerald-cruises" },
  { name: "European Waterways", slug: "european-waterways" },
  { name: "Explora Journeys", slug: "explora-journeys" },
  { name: "Four Seasons Yacht", slug: "four-seasons-yacht" },
  { name: "Hebridean Island Cruises", slug: "hebridean-island-cruises" },
  { name: "Heritage Expeditions", slug: "heritage-expeditions" },
  { name: "Hurtigruten", slug: "hurtigruten" },
  { name: "HX Hurtigruten Expeditions", slug: "hx-hurtigruten-expeditions" },
  { name: "Kazazian Nile Cruises", slug: "kazazian-nile-cruises" },
  { name: "National Geographic Lindblad Expeditions", slug: "national-geographic-lindblad-expeditions" },
  { name: "Nour El Nil", slug: "nour-el-nil" },
  { name: "Oceanwide Expeditions", slug: "oceanwide-expeditions" },
  { name: "Orient Express Sailing Yachts", slug: "orient-express-sailing-yachts" },
  { name: "Pandaw", slug: "pandaw" },
  { name: "Paul Gauguin Cruises", slug: "paul-gauguin-cruises" },
  { name: "Pearl Sea Cruises", slug: "pearl-sea-cruises" },
  { name: "Polar Latitudes", slug: "polar-latitudes" },
  { name: "Ponant", slug: "ponant" },
  { name: "Quark Expeditions", slug: "quark-expeditions" },
  { name: "Regent Seven Seas Cruises", slug: "regent-seven-seas-cruises" },
  { name: "Scenic Ocean Cruises", slug: "scenic-ocean-cruises" },
  { name: "Seabourn", slug: "seabourn" },
  { name: "Sea Cloud Cruises", slug: "sea-cloud-cruises" },
  { name: "SeaDream Yacht Club", slug: "seaDream-yacht-club" },
  { name: "Silversea", slug: "silversea" },
  { name: "Star Clippers", slug: "star-clippers" },
  { name: "Swan Hellenic", slug: "swan-hellenic" },
  { name: "Tauck", slug: "tauck" },
  { name: "The Ritz-Carlton Yacht Collection", slug: "the-ritz-carlton-yacht-collection" },
  { name: "Uniworld Boutique River Cruises", slug: "uniworld-boutique-river-cruises" },
  { name: "Viking Expedition Cruises", slug: "viking-expedition-cruises" },
  { name: "Viking River Cruisers", slug: "viking-river-cruisers" },
  { name: "Viking Voyage Canvas 66", slug: "viking-voyage-canvas-66" },
  { name: "Windstar Cruises", slug: "windstar-cruises" }
];

export const getCruiseLineBySlug = (slug: string): CruiseLine | undefined => {
  return cruiseLines.find(cruise => cruise.slug === slug);
};

export const getAllSlugs = (): string[] => {
  return cruiseLines.map(cruise => cruise.slug);
};
