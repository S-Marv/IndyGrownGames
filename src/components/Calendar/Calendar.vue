<template> 
    <div class="carousel">
      <Carousel :value="events" :numVisible="3" :numScroll="1":responsiveOptions="responsiveOptions" >
        <menuBar></menuBar>
        <template #item="slotProps">
          <Panel :header="slotProps.data.date">
                <div class="title">
                <div class>{{ slotProps.data.name }}</div>
                </div>
                <div class="info">
                  <div class>{{ slotProps.data.text }}</div>
                  <a :href="slotProps.data.link" class="info">{{ slotProps.data.link }}</a> 
                </div>
          </Panel>
        </template>
      </Carousel>
    </div>
  </template>
  
  <script>
  import  Carousel  from 'primevue/carousel'; 
  import Panel from 'primevue/panel';
  
  export default {
    components: {
      Carousel,
      Panel,
    },
    data() {
      return {
        events: [
          {
          name: "Indy Indies Night",
          date: "June 7th, 1941",
          text: "Insert random Bullshit",
          link: "https://www.facebook.com/thoseindyindies/",
          },
          {
          name: "Tabletop games",
          date: "June 7th, 1941",
          text: "we start a prototype on this day",
          link: "https://indyttgc.org/",
          },
          {
          name: "Tabletop games",
          date: "June 7th, 1941",
          text: "They maje table top games",
          link: "https://www.facebook.com/thoseindyindies/",
          }
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

  <style scoped>

.info {
  place-items: center;
  font: 1em sans-serif;
  margin-top: 30px;
}

.title{
  place-items: center;
  font: 3em sans-serif;
}

.p-panel{
  margin: 10px
}

</style>