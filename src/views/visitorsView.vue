<template>
    <div id="visit_container">
        <div class="visitors_group">
            <div id="input_pack">
                <div class="input_box">
                    <input
                        id="vistors_msg"
                        type="text"
                        v-model="input_msg"
                        placeholder="작성란"
                        v-on:keyup.enter="postVisitorsMsg(input_msg)"
                        ref="inputtag"
                        @focus="makeblank()"
                        @blur="notfocused()"
                    />
                </div>
                <div class="input_button">
                    <button @click="postVisitorsMsg(input_msg)">입력</button>
                </div>
            </div>
            <visitorsList msg="DB linked" />
        </div>
    </div>
</template>

<script>
import visitorsList from '@/components/visitorsList.vue';
import axios from 'axios';

export default {
    name: 'VisitorsView',
    components: {
        visitorsList,
    },
    data() {
        return {
            messages: [],
            input_msg: '',
        };
    },
    methods: {
        postVisitorsMsg(msg) {
            if (!msg) return alert('내용을 입력해 주세요!');
            let today = new Date();
            today = today.toLocaleDateString();
            axios
                .post('/api/postVisitorsMsg', {
                    date: today,
                    contents: msg,
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.error(err);
                });
            this.input_msg = '';
        },
        notfocused() {
            this.$refs.inputtag.placeholder = '작성란';
        },
        makeblank() {
            this.$refs.inputtag.placeholder = '';
        },
    },
};
</script>

<style>
@import url('../assets/css/visitors.css');
</style>
