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
                        {{ msg.message }}
                    </p>
                    <i class="cline"></i>
                </td>

                <i class="cline" v-if="false"></i>
            </tr>
        </table>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
