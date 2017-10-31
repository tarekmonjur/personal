import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Index from './../components/index.vue';
import Home from './../components/home.vue';
import About from './../components/about.vue';
import Blog from './../components/blog.vue';
import Contact from './../components/contact.vue';
import Portfolio from './../components/portfolio.vue';
import Resume from './../components/resume.vue';

const routes = [
    { path: '/',
        components: { default:Home },
        title:'Home page',
        meta: { active: 'about' }
    },
    { path: '/about',
        components: { default:About },
        meta: { active: 'about' }
    },
    { path: '/blog',
        components: { default:Blog },
        meta: { active: 'blog' }
    },
    { path: '/contact',
        components: { default:Contact },
        meta: { active: 'contact' }
    },
    { path: '/portfolio',
        components: { default:Portfolio },
        meta: { active: 'portfolio' }
    },
    { path: '/resume',
        components: { default:Resume },
        meta: { active: 'resume' }
    }
];

const router = new VueRouter({
    // mode: 'history',
    routes:routes,
});


new Vue({
    el:'#root',
    router:router,
    render: h => h(Index)
});
