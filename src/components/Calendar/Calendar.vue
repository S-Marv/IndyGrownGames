<template> 
    <div class="carousel">
      <Carousel :value="events" :numVisible="3" :numScroll="1":responsiveOptions="responsiveOptions" >
        <template #item="slotProps">
          <div class="border border-surface-1000 dark:border-surface-1700 rounded m-2 p-4">
            <div class="mb-4">
              <div class="relative mx-auto">
                <img :src="slotProps.data" class="w-full rounded" width="350px"/>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </template>
  
  <script>
  import  Carousel  from 'primevue/carousel'; 
  
  export default {
    components: {
      Carousel,
    },
    data() {
      return {
        events: [
          "calendar/Indy Indies Night.png",
          "calendar/Indy Indies Night.png",
          "calendar/Indy Indies Night.png",
          "calendar/Indy Indies Night.png",
          "calendar/Indy Indies Night.png",
          "calendar/Indy Indies Night.png",
        ],
        responsiveOptions: [
          {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 1,
          },
          {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 1,
          },
          {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1,
          }
        ]
      };
    },
  };
  </script>