<template>
    <div id="wrt_container">
        <div class="wrt_group">
            <div class="wrt_group_post">
                <div class="wrt_group_header">
                    <span class="header"> 기록, 글, 사진, 소리 </span>
                    <div class="deco"></div>
                    <i class="cline"></i>
                </div>
                <div class="wrt_group_body">
                    <table class="wrt_post_list">
                        <caption></caption>
                        <colgroup>
                            <col class="col_num" />
                            <col class="col_click" />
                            <col class="col_post_title" />
                            <col class="col_date" />
                        </colgroup>
                        <tr id="table_header">
                            <th>
                                <span class="num"> 번호 </span>
                            </th>
                            <th>
                                <span class="click"> 조회 </span>
                            </th>
                            <th>
                                <span class="post_title"> 제목 </span>
                            </th>
                            <th>
                                <span class="date"> 날짜 </span>
                            </th>
                        </tr>
                        <tr
                            id="each_writing"
                            v-for="(wrt, i) in writings"
                            :key="i"
                        >
                            <td>
                                <a class="num">
                                    {{ wrt.num }}
                                </a>
                            </td>
                            <td>
                                <span class="click">
                                    {{ clicks[i] }}
                                </span>
                            </td>
                            <td>
                                <a class="post_title" @click="toclick(wrt.num)">
                                    {{ wrt.title }}
                                </a>
                            </td>
                            <td>
                                <span class="date">
                                    {{ wrt.date }}
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="wrt_group_footer">
                    <div class="list_page">
                        <a class="page" href="">1</a>
                        <a class="page" href="">2</a>
                        <a class="page" href="">3</a>
                        <a class="page" href="">4</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            writings: [
                {
                    num: 5,
                    clicks: 0,
                    title: 'title5_euhubxn',
                    date: '2022.05.12',
                },
                {
                    num: 4,
                    clicks: 0,
                    title: 'title4_wesxdfwexn',
                    date: '2021.12.11',
                },
                {
                    num: 3,
                    clicks: 0,
                    title: 'title3_xdfwesdf',
                    date: '2021.11.31',
                },
                {
                    num: 2,
                    clicks: 0,
                    title: 'title2_oqm;xcv',
                    date: '2020.09.08',
                },
                {
                    num: 1,
                    clicks: 0,
                    title: 'title1_first',
                    date: '2020.07.20',
                },
            ],
            clicks: [0, 0, 0, 0, 0],
        };
    },
    methods: {
        toclick(num) {
            console.log(num);
            this.clicks[this.writings.length - num]++;
        },
    },
};
</script>

<style>
@import url('../assets/css/writing.css');
</style>
