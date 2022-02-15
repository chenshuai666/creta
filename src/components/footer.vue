<template>
    <footer data-v-86ef3a14 class="footer">
            <div data-v-86ef3a14 class="down-load">
                <div data-v-20a1fff6 data-v-86ef3a14 class="title">Creata Class</div>
                <div data-v-20a1fff6 class="download">
                    <img data-v-20a1fff6 v-lazy:[img1] class="apple-download">
                    <img data-v-20a1fff6 v-lazy:[img2] alt="" class="google-download">
                </div>
            </div>
            <div data-v-7b0bdf7e data-v-86ef3a14 class="contact-us">
                <div data-v-7b0bdf7e class="title">Contact Us</div>
                <div data-v-7b0bdf7e class="icon-list">
                    <a data-v-7b0bdf7e href="">
                        <img data-v-7b0bdf7e v-lazy:[img3] class="icon">
                    </a>
                    <a data-v-7b0bdf7e href="">
                        <img data-v-7b0bdf7e v-lazy:[img4] class="icon">
                    </a>
                    <a data-v-7b0bdf7e href="">
                        <img data-v-7b0bdf7e v-lazy:[img5] class="icon">
                    </a>
                </div>
            </div>
            <div data-v-7f036668 data-v-86ef3a14 class="copyright">
                <div data-v-7f036668 class="line"></div>
                <div data-v-7f036668 class="text">
                    <p data-v-7f036668>6 RAFFLES QUAY #14-06 SINGAPORE(048580)</p>
                    <p data-v-7f036668>
                        <a data-v-7f036668 href="">Privacy Policy</a>
                        <a data-v-7f036668 href="">Children's Privacy Policy</a>
                        ｜ email：service@cretaclass.com 
                    </p>
                </div>
            </div>
        </footer>
</template>

<script>
import img1 from '../assets/zebra-16406756544011741.png'
import img2 from '../assets/zebra-16406756814996865.png'
import img3 from '../assets/zebra-164015357476683.png'
import img4 from '../assets/zebra-16405776100114532.png'
import img5 from '../assets/zebra-16401536197469694.png'

export default {
    name: 'footere',
    data: function(){
        return {
            img1,
            img2,
            img3,
            img4,
            img5
        }
    },
    props: {

    }
}
</script>

<style scoped>
.footer[data-v-86ef3a14] {
    position: relative;
    height: 22.8125vw;
    background: #228356;
}

.down-load[data-v-86ef3a14] {
    position: absolute;
    left: 21.35417vw;
    top: 4.16667vw;
}

.title[data-v-20a1fff6] {
    font-family: PingFang SC;
    font-size: 1.04167vw;
    font-weight: 510;
    line-height: 1.25vw;
    color: #fff;
}

.download[data-v-20a1fff6] {
    margin-top: 1.04167vw;
}

.apple-download[data-v-20a1fff6], .google-download[data-v-20a1fff6] {
    height: 2.08333vw;
    cursor: pointer;
    -webkit-filter: drop-shadow(0 .10417vw .20833vw rgba(0,0,0,.12));
    filter: drop-shadow(0 .10417vw .20833vw rgba(0,0,0,.12));
}

.apple-download[data-v-20a1fff6] {
    margin-right: .625vw;
}

.contact-us[data-v-86ef3a14] {
    position: absolute;
    left: 70.72917vw;
    top: 4.16667vw;
}

.title[data-v-7b0bdf7e] {
    font-family: PingFang SC;
    font-size: 1.04167vw;
    font-weight: 510;
    line-height: 1.25vw;
    color: #fff;
}

.icon-list[data-v-7b0bdf7e] {
    margin-top: 1.04167vw;
}

a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}

.icon[data-v-7b0bdf7e] {
    width: 2.08333vw;
    height: 2.08333vw;
    margin-right: .83333vw;
    cursor: pointer;
}

.copyright[data-v-86ef3a14] {
    position: absolute;
    left: 50%;
    top: 12.70833vw;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}

.line[data-v-7f036668] {
    width: 57.29167vw;
    height: .05208vw;
    background: hsla(0,0%,100%,.1);
}

.text[data-v-7f036668] {
    margin-top: 4.16667vw;
    font-family: PingFang SC;
    font-weight: 400;
    font-size: .625vw;
    line-height: .83333vw;
    text-align: center;
    color: hsla(0,0%,100%,.4);
}

a[data-v-7f036668] {
    color: hsla(0,0%,100%,.4);
    text-decoration: none;
}
</style>