<template>
    <div data-v-8d9064ce class="faq">
        <div data-v-8d9064ce class="title">FAQ</div>
        <div data-v-8d9064ce class="question">
            <div data-v-4a430a5b v-for="item in dataItems" :key="item.id" class="question-item">
                <div data-v-4a430a5b class="question-title" @click="toggle(item)">
                    {{item.title}}
                    <img data-v-4a430a5b src="../assets/zebra-16397135754732960.png" class="arrow" :class="{clockwise:item.display}">
                </div>
                <div data-v-4a430a5b class="answer" v-show="item.display">
                    <p data-v-4a430a5b v-for="(ans, index) in item.answer" :key="index">{{ans}}</p>
                    <div data-v-4a430a5b class="placeholder"></div>
                </div>
            </div>
    
        </div>
        <div data-v-8d9064ce class="btn">
            <div data-v-8d9064ce>View more</div>
            <div data-v-8d9064ce class="arrow"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'faq',
    data: function(){
        return {
            dataItems: [
                {
                    id: 1,
                    display: true,
                    title: 'What is Creta Class?',
                    answer: ['Creta class is a professional math-learning platform for kids 3-8']
                },
                {
                    id: 2,
                    display: false,
                    title: 'How do I start the first lesson？',
                    answer: ['Step 1：Place an order for the Trial Lessons', 'Step 2：Add your tutor on WhatsApp', 'Step 3：Download the app and study in the [Learning Center]']
                },
                {
                    id: 3,
                    display: false,
                    title: 'How do I choose the course stage for my child? ',
                    answer: ['You can choose the appropriate stage for your kid according to the recommended stage by age:', '• S1 for 2-4', '• S2 for 4-5', '• S3 for 5-6', '• S4 for 6-7', '• S5 for 7-8']
                },
                {
                    id: 4,
                    display: false,
                    title: 'When do we log in？',
                    answer: ['When your child starts learning, a lesson will be updated every Monday to Friday. You can open the App and enter the [Learning Center] to learn anytime. The unlocked lessons will support unlimited access, so your child can study anytime, anywhere.']
                }
            ]
        }
    },
    methods: {
        toggle: function(item){
            item.display = !item.display
        }
    }
}
</script>

<style scoped>
.faq[data-v-8d9064ce] {
    box-sizing: border-box;
    background: #f8f8f8;
    padding: 5.72917vw 27.60417vw;
}

.faq .title[data-v-8d9064ce] {
    font-family: PingFang SC;
    font-size: 2.08333vw;
    font-weight: 700;
    line-height: 2.5vw;
    text-align: center;
    color: #000;
    margin-bottom: 4.16667vw;
}

.question-item[data-v-4a430a5b]:not(:last-child) {
    margin-bottom: 1.25vw;
}

.question-item[data-v-4a430a5b] {
    position: relative;
    width: 100%;
    background: #fff;
    box-shadow: 0 0.20833vw 0.83333vw rgb(0 0 0 / 4%);
    border-radius: .625vw;
    overflow: hidden;
    box-sizing: border-box;
    padding: 1.25vw;
}

.question-title[data-v-4a430a5b] {
    font-family: PingFang SC;
    font-size: 1.04167vw;
    font-weight: 700;
    line-height: 1.25vw;
    color: #000;
    cursor: pointer;
}

.arrow.clockwise[data-v-4a430a5b] {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    z-index: 1000;
}

.question-item .arrow.clockwise[data-v-4a430a5b], .question-item .arrow[data-v-4a430a5b] {
    transition: -webkit-transform .3s linear;
    transition: transform .3s linear;
    transition: transform .3s linear,-webkit-transform .3s linear;
}

.question-item .arrow[data-v-4a430a5b] {
    position: absolute;
    right: 1.25vw;
    top: 1.25vw;
    width: 1.25vw;
    height: 1.25vw;

}

.btn[data-v-8d9064ce] {
    margin: 4.16667vw auto 0 auto;
    width: 8.125vw;
    height: 2.5vw;
    box-sizing: border-box;
    border: .05208vw solid #999;
    border-radius: 5.20833vw;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    cursor: pointer;
    font-family: PingFang SC;
    font-size: 1.04167vw;
    font-weight: 400;
    line-height: 1.25vw;
    color: #666;
}

.arrow[data-v-8d9064ce] {
    position: relative;
    width: .83333vw;
    height: .83333vw;
}

.faq .btn .arrow[data-v-8d9064ce]:after, .faq .btn .arrow[data-v-8d9064ce]:before {
    content: "";
    position: absolute;
    top: .36458vw;
    right: 0;
    width: .46875vw;
    height: .10417vw;
    border-radius: .3125vw;
    background: #666;
}

.faq .btn .arrow[data-v-8d9064ce]:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: right;
    transform-origin: right;
}

.faq .btn .arrow[data-v-8d9064ce]:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: right;
    transform-origin: right;
}
</style>