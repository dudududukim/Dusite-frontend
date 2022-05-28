<template>
    <div id="list_pack">
        <table class="visitor_list">
            <caption></caption>
            <colgroup>
                <col class="col_date" />
                <col class="col_message" />
            </colgroup>
            <tr id="each_writing" v-for="(msg, i) in messages" :key="i">
                <td>
                    <p class="date">
                        {{ msg.date }}
                    </p>
                    <i class="cline"></i>
                </td>
                <td>
                    <p class="post_title">
                        {{ msg.contents }}
                    </p>
                    <i class="cline"></i>
                </td>

                <i class="cline" v-if="false"></i>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    created() {
        this.getVisitorsList();
    },
    data() {
        return {
            messages: [],
        };
    },
    methods: {
        getVisitorsList: function () {
            axios
                .get('/api/getVisitorsList')
                .then((res) => {
                    const visitorsList = res.data;
                    for (let i = 0; i < visitorsList.length; i++) {
                        this.messages.unshift(visitorsList[i]);
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        },
    },
};
</script>

<style></style>
