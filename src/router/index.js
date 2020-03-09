import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import index from '../views/index.vue'
import company from '../views/company.vue'
import travelReview from '../views/travelReview.vue'
import travelMovie from '../views/travelMovie.vue'
import travelMovieList1 from '../views/travelMovie-list1.vue'
import travelMovieList2 from '../views/travelMovie-list2.vue'
import travelWorld from '../views/travelWorld.vue'
import globalPhotos from '../views/globalPhotos.vue'
import travelPhoto from '../views/travelPhoto.vue'
import travelPhotoList from '../views/travelPhotoList.vue'


Vue.use(VueRouter)

const routes = [
  {path:'/',component:index},
  {path:'/company',component:company},
  {path:'/travelReview',component:travelReview},
  {path:'/travelMovie',component:travelMovie},
  {path:'/travelMovie-list1',component:travelMovieList1},
  {path:'/travelMovie-list2',component:travelMovieList2},
  {path:'/travelWorld',component:travelWorld},
  {path:'/globalPhotos',component:globalPhotos},
  {path:'/travelPhoto',component:travelPhoto},
  {path:'/travelPhotoList',component:travelPhotoList},
]

const router = new VueRouter({
  routes
})

export default router
