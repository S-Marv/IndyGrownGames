<template> 
    <SectionHeader title="Come and check out some events!"/>
    <div class="carousel">
      <Carousel :value="events" :numVisible="3" :numScroll="1":responsiveOptions="responsiveOptions" >
        <template #item="slotProps">
          <Card>
            <template #header>
              <div style="padding-left: 1rem;">{{ slotProps.data.date }}</div>
                <div class="title" id="Calendar">
                <div class>{{ slotProps.data.name }}</div>
                </div>
                <div class="info">
                  <div class>{{ slotProps.data.text }}</div>
                  <a :href="slotProps.data.link" class="info">{{ slotProps.data.link }}</a> 
                </div>
                </template>
            </Card>
        </template>
      </Carousel>
    </div>
  </template>
  
  <script>
  import  Carousel  from 'primevue/carousel'; 
  import Panel from 'primevue/panel';
  import Card from 'primevue/card';
  import SectionHeader from '../SectionHeader.vue';
  
  export default {
    components: {
      Carousel,
      Panel,
      Card,
      SectionHeader,
    },
    data() {
      return {
        events: [
          {
          name: "Indy Indies Night",
          date: "June 7th, 1941",
          text: "Insert random info I am going to add random stuff again to see if it messes up centering",
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
          },
          {
          name: "Tabletop games",
          date: "June 7th, 1941",
          text: "They maje table top games",
          link: "https://www.facebook.com/thoseindyindies/",
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
  text-align: center;
  font-family: "Jersey", sans-serif;
  font-size: 1em;
  margin-top: 30px;
  padding: 0px 1rem;
}

.title{
  text-align: center;
  font-family: "Jersey", sans-serif;
  font-size: 3em;
}

.p-card{
  margin: 10px;
  border: solid;
  border-image: var(--top-down-gradient) 1;
}

</style>
