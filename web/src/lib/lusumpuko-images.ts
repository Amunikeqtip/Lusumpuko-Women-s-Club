/** Local club photos in /public/lusumpuko (clean filenames). */
export const LWC = {
  womenGroupMural: "/lusumpuko/photo-01.jpg",
  teamWithGuestsMural: "/lusumpuko/photo-02.jpg",
  womenBlueUniforms: "/lusumpuko/photo-04.jpg",
  outdoorGroupSign: "/lusumpuko/photo-06.jpg",
  outdoorGroupAlt: "/lusumpuko/photo-12.jpg",
  womenGardenMortar: "/lusumpuko/photo-09.jpg",
  womenGardenDrum: "/lusumpuko/photo-10.jpg",
  nightCooking: "/lusumpuko/photo-14.jpg",
  buffetServing: "/lusumpuko/photo-15.jpg",
  guestsDiningMural: "/lusumpuko/photo-16.jpg",
  womenVillage: "/lusumpuko/photo-17.jpg",
  guestsStaffMural: "/lusumpuko/photo-18.jpg",
  photo03: "/lusumpuko/photo-03.jpg",
  photo05: "/lusumpuko/photo-05.jpg",
  photo07: "/lusumpuko/photo-07.jpg",
  photo08: "/lusumpuko/photo-08.jpg",
  photo11: "/lusumpuko/photo-11.jpg",
  photo13: "/lusumpuko/photo-13.jpg",

  /** Plated dishes & produce — use these wherever food is shown */
  foodBreakfastTray: "/lusumpuko/food-01.jpg",
  foodSadzaMeat: "/lusumpuko/food-02.jpg",
  foodGreensBowl: "/lusumpuko/food-03.jpg",
  foodHarvestBasket: "/lusumpuko/food-04.jpg",
  foodGardenGreens: "/lusumpuko/food-05.jpg",
  foodPumpkinLeaves: "/lusumpuko/food-06.jpg",
  foodGardenPlot: "/lusumpuko/food-07.jpg",
  foodMopaneSadza: "/lusumpuko/food-08.jpg",

  /** Edited table experience clip */
  tableExperienceVideo: "/lusumpuko/table-experience.mp4",
  tableExperiencePoster: "/lusumpuko/table-experience-poster.jpg",
} as const;

export const lwcUrl = (path: string) => `url('${path}')`;
