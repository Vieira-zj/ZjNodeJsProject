<template>
  <div class="post">
    <div class="loading"
         v-if="loading">Loading...</div>
    <div v-if="error"
         class="error">
      {{ error }}
    </div>
    <transition name="slide">
      <!-- giving the post container a unique key triggers transitions 
      when the post id changes. -->
      <div v-if="post"
           class="resp_content"
           :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import common from './Common'

let url = 'http://mockserver.test.com:17891/mocktest/one/2'
export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    // 组件创建完后获取数据, 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    // 如果路由有变化, 会再次执行该方法
    // $route: 'fetchData'
    $route: function (old, newRoute) {
      // eslint-disable-next-line
      console.log(`navigate from ${old.path} to ${newRoute.path}.`)
      this.fetchData()
    }
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      common.func.sendGetTest(url, { file: `post${this.$route.params.id}.json` }, 700)
        .then(resp => {
          this.post = JSON.parse('{' + resp.data.split('{')[1])
        })
        .catch(err => this.error = err.toString())
        .finally(() => (this.loading = false))
    }
  }
}
</script>

<style scoped>
.loading {
  position: absolute;
  top: 10px;
  right: 10px;
}

.error {
  color: red;
}

.resp_content {
  transition: all 0.35s ease;
  position: absolute;
  left: 350px;
}

.slide-enter {
  opacity: 0;
  transform: translate(30px, 0);
}

.slide-leave-active {
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>