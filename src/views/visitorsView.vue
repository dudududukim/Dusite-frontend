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
                        v-on:keyup.enter="addmsg(input_msg)"
                        ref="inputtag"
                        @focus="makeblank()"
                        @blur="notfocused()"
                    />
                </div>
                <div class="input_button">
                    <button @click="addmsg(input_msg)">입력</button>
                </div>
            </div>
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
                                {{ msg.message }}
                            </p>
                            <i class="cline"></i>
                        </td>

                        <i class="cline" v-if="false"></i>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messages: [],
            input_msg: '',
        };
    },
    methods: {
        addmsg(msg) {
            let today = new Date();
            var inputmsg = { date: today.toLocaleDateString(), message: msg };
            this.messages.unshift(inputmsg);
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
