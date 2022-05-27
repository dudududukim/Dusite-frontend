<template>
    <div id="img_container">
        <h1 class="blind">갤러기 결과</h1>
        <div class="img_group">
            <section class="img_each" v-for="(img, i) in images" :key="i">
                <div class="img_pack">
                    <div class="img_img">
                        <div class="img_img_in">
                            <img :alt="`imgage${i + 1}`" :src="img.url" />
                        </div>
                    </div>
                    <div class="img_info">
                        <div class="img_info_place">
                            {{ img.location }}
                        </div>
                        <div class="img_info_title">
                            {{ img.title }}
                        </div>
                        <div class="img_info_detail">
                            {{ images_description[i] }}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            images: [
                {
                    title: '제주도',
                    location: 'Jeju_Island (KR)',
                    description: '',
                    url: require('../assets/img/section1.jpg'),
                },
                {
                    title: '바다와 파도',
                    location: 'Busan (KR)',
                    description: '',
                    url: require('../assets/img/section2.jpg'),
                },
                {
                    title: '경복궁 경회루',
                    location: 'Seoul(KR)',
                    description: '',
                    url: require('../assets/img/section3.jpg'),
                },
                {
                    title: '경복궁 경회루\n(야간)',
                    location: 'Seoul(KR)',
                    description: '',
                    url: require('../assets/img/section4.jpg'),
                },
                {
                    title: '청와대',
                    location: 'Seoul(KR)',
                    description: '',
                    url: require('../assets/img/section5.jpg'),
                },
            ],
            images_description: [
                'This is the A-cup of my jeju travel. It was really tough day but this photo gives us kind of coziness. This might be pure function of photograph.',
                'This might be my favorite shots through GR3. Although this photo is crop, it has really sharp details presenting dynamic waves and the color balance is surely warm.',
                'While snowing hardly, the spark was initally started pushing me way out home. I could see them most beautiful scape of gyeongbukgong.',
                'It was a tough day. I was expecting the touches that palace would give me but it was just crowded people in the palace',
                '2022.05.10 청와대 is realsed to public.',
            ],
        };
    },
};
</script>
<style>
@import url('../assets/css/img.css');
</style>
