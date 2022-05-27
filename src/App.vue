<template>
    <body>
        <div id="wrap">
            <div id="header">
                <div id="categories">
                    <div class="category_group">
                        <div class="category_menu">
                            <ul class="base">
                                <li
                                    class="menu"
                                    v-for="(menu, i) in menus"
                                    :key="i"
                                >
                                    <a class="tab">
                                        <router-link :to="`${menu.url}`">{{
                                            menu.name
                                        }}</router-link>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="category_more">
                            <ul class="c_more">
                                <li
                                    class="sns"
                                    v-for="(side_menu, i) in side_menus"
                                    :key="i"
                                >
                                    <a class="tab" :href="side_menu.url">
                                        {{ side_menu.name }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="container">
                <router-view />
            </div>
        </div>
    </body>
</template>

<script>
export default {
    data() {
        return {
            menus: [
                {
                    name: '소개',
                    url: '/info',
                },
                {
                    name: '글',
                    url: '/writing',
                },
                {
                    name: '전시관',
                    url: '/img',
                },
                {
                    name: '방명록',
                    url: '/visitors',
                },
            ],
            side_menus: [
                {
                    name: '인스타',
                    url: 'https://www.instagram.com/_dudududukim/',
                    visiable: true,
                },
                {
                    name: '블로그',
                    url: 'https://blog.naver.com/rlaengux',
                    visiable: true,
                },
                { name: '관리자', url: '', visiable: false },
                { name: '로그인', url: '', visiable: true },
            ],
        };
    },
};
</script>

<style>
@import url('./assets/css/main.css');
</style>
