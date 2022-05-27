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
                    console.log(res.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        },
    },
};
</script>

<style></style>
