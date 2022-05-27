<template>
    <div>main</div>
</template>

<script>
import axios from 'axios';

export default {
    created() {
        this.proxyRequest();
    },
    methods: {
        proxyRequest: () => {
            axios
                .get('/api/getList')
                .then((res) => {
                    const responseData = res.data;
                    const visitorsData = JSON.parse(responseData);
                    console.log(visitorsData[0].contents);
                })
                .catch((err) => {
                    console.error(err);
                });
        },
    },
};
</script>

<style></style>
