import { createRouter, createWebHashHistory } from "vue-router";

import WorksPage from "@/components/WorksPage";
import AboutPage from "@/components/AboutPage";
import ServicesPage from "@/components/ServicesPage";
import BlogPage from "@/components/BlogPage";
import ContactsPage from "@/components/ContactsPage";
import MainPage from "@/components/MainPage";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '',
            name: 'Main',
            component: MainPage
        },
        {
            path: '/works',
            name: 'Works',
            component: WorksPage
        },
        {
            path: '/about',
            name: 'About',
            component: AboutPage
        },
        {
            path: '/services',
            name: 'Services',
            component: ServicesPage
        },
        {
            path: '/blog',
            name: 'Blog',
            component: BlogPage
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: ContactsPage
        }
    ],
})