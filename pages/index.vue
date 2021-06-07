<template>
  <div>
    <section1 :swiper1="swiper1" :swiper2="swiper2" />
    <section2 :recomendlist="recomendlist" :recomendimg="recomendimg" />
    <advertising>
      <nuxt-link to="/">
        <img :src="advertisinglist[0].image" alt="" />
      </nuxt-link>
    </advertising>
    <section4
      :alivelist="alivelist"
      @change="changel"
      :alivelist1="alivelist1"
    />
    <section5 :animationlist="animationlist" :ranklist="ranklist" />
    <advertising>
      <nuxt-link to="/">
        <img :src="advertisinglist[1].image" alt="" />
      </nuxt-link>
    </advertising>
    <section6
      @changeWeek="changeWeek"
      :weeklist="weeklist"
      :palyname="palyname"
      :ranklist="ranklist"
    />
    <section7 :hotasync="hotasync" :ranklist="ranklist" />
    <advertising>
      <nuxt-link to="/">
        <img :src="advertisinglist[2].image" alt="" />
      </nuxt-link>
    </advertising>
    <section8 :manga="manga" />
    <section9 :spacialrec="spacialrec" />
  </div>
</template>

<script>
import { state } from '@/store/todos';
console.log(state().events);
import { mapState } from 'vuex';
import { getNavData } from "../plugins/axios";
import section1 from './indexChilds/section1';
import section2 from './indexChilds/section2';
import section4 from './indexChilds/section4';
import section5 from './indexChilds/section5';
import section6 from './indexChilds/section6';
import section7 from './indexChilds/section7';
import section8 from './indexChilds/section8';
import section9 from './indexChilds/section9';
export default {
  async fetch({ store, error }) {
    try {
      await store.dispatch('todos/fetchEvents')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'error'
      })
    }
  },
  computed: mapState({
    events: state => state.events.events
  }),
  components: {
    section1,
    section2,
    section4,
    section5,
    section6,
    section7,
    section8,
    section9
  },
  data() {
    return {
      weeklist: [],
      palyname: '',
      alivelist1: []
    };
  },
  methods: {
    changeWeek(index) {
      // console.log(index);
      getNavData(index).then(res => {
        this.weeklist = res.data.hot.list
        // console.log(this.hot);
      })
    },
    changel(index) {
      getNavData(index).then(res => {
        this.alivelist1 = res.data.hot.alivesample
        console.log(this.alivelist1);
      })
    }
  },
  asyncData() {
    return getNavData(0).then((res) => {
      // console.log(res.data);
      return {
        swiper1: res.data.swiper1,
        swiper2: res.data.swiper2.list1,
        recomendlist: res.data.recomend.list,
        recomendimg: res.data.recomend.img,
        advertisinglist: res.data.advertising,
        alivelist: res.data.alive,
        alivelist1: res.data.sample,
        animationlist: res.data.animation,
        weeklist: res.data.hot.list,
        palyname: res.data.hot.name,
        hotasync: res.data.hotasync,
        manga: res.data.manga,
        spacialrec: res.data.spacialrec,
        ranklist: res.data.ranklist
      };
    });
  },
};
</script>

<style scoped>
</style>
