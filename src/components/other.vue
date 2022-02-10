<template>
    <div class="flex">
        <div class="category-list">
            <div class="category" v-for="item in content" :key="item.id" :class="{active:item.id==num}" @click="change(item.id)">
                {{item.category}}
            </div>
        </div>
        <div class="question faq-list">
            <div class="question-item" v-for="(con, index) in content[num-1].faq" :key="index">
                <div class="question-title" @click="toggle(con)">
                    {{con.question}}
                    <img src="../assets/zebra-16397135754732960.png" class="arrow" :class="{clockwise: con.display}">
                </div>
                <div class="answer" v-show="con.display">
                    <p v-for="(ans, q) in con.answer" :key="q">{{ans}}</p>
                    <div class="placeholder"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'other',
    data: function() {
        return {
            num: 1,
            content: [
                {
                    id: 1,
                    category: 'About Creta Class',
                    faq: [
                            {
                                display: true,
                                question: 'What is Creta Class?',
                                answer: ['Creta class is a professional math-learning platform for kids 3-8']
                            },
                            {
                                display: false,
                                question: 'How is the curriculum of Creta Class developed？',
                                answer: ['Our curriculum is designed based on the self-developed effective Creta Approach by early education specialists from Ivy League schools and other top universities.']
                            }
                        ]
                },
                {
                    id: 2,
                    category: 'How to learn',
                    faq: [
                            {
                                display: true,
                                question: 'What is Creta Class2?',
                                answer: ['Creta class is a professional math-learning platform for kids 3-8']
                            },
                            {
                                display: false,
                                question: 'How is the curriculum of Creta Class developed？',
                                answer: ['Our curriculum is designed based on the self-developed effective Creta Approach by early education specialists from Ivy League schools and other top universities.']
                            }
                        ]
                },
                {
                    id: 3,
                    category: 'After sale',
                    faq: [
                            {
                                display: true,
                                question: 'What is Creta Class?3',
                                answer: ['Creta class is a professional math-learning platform for kids 3-8']
                            },
                            {
                                display: false,
                                question: 'How is the curriculum of Creta Class developed？',
                                answer: ['Our curriculum is designed based on the self-developed effective Creta Approach by early education specialists from Ivy League schools and other top universities.']
                            }
                        ]
                }
            ]
        }
    },
    methods: {
        change: function(arg){
            this.num = arg
        },
        toggle: function(con){
            con.display = !con.display
        }
    }
}
</script>

<style scoped>
.flex {
    background: #f8f8f8;
    padding: 5.72917vw 21.35417vw;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: flex-start;
    align-items: flex-start;
}

.flex .category-list {
    margin-right: 1.35417vw;
    box-sizing: border-box;
    padding: 1.5625vw .83333vw;
    background: #fff;
    box-shadow: 0 0.20833vw 0.83333vw rgb(0 0 0 / 4%);
    border-radius: .625vw;
}

.flex .category-list .category {
    position: relative;
    font-family: PingFang SC;
    font-size: 1.04167vw;
    font-weight: 700;
    line-height: 1.25vw;
    color: #000;
    cursor: pointer;
}

.flex .category-list .category.active {
    color: #0c6;
}

.flex .faq-list {
    -webkit-flex: 1;
    flex: 1;
}

.question-item:not(:last-child) {
    margin-bottom: 1.25vw;
}

.question-item {
    position: relative;
    width: 100%;
    background: #fff;
    box-shadow: 0 0.20833vw 0.83333vw rgb(0 0 0 / 4%);
    border-radius: .625vw;
    overflow: hidden;
    box-sizing: border-box;
    padding: 1.25vw;
}

.question-item .question-title {
    font-family: PingFang SC;
    font-size: 1.04167vw;
    font-weight: 700;
    line-height: 1.25vw;
    color: #000;
    cursor: pointer;
}

.question-item .arrow.clockwise {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}

.question-item .arrow.clockwise, .question-item .arrow {
    transition: -webkit-transform .3s linear;
    transition: transform .3s linear;
    transition: transform .3s linear,-webkit-transform .3s linear;
}

.question-item .arrow {
    position: absolute;
    right: 1.25vw;
    top: 1.25vw;
    width: 1.25vw;
    height: 1.25vw;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
}

.question-item .answer {
    position: relative;
    top: 1.25vw;
    box-sizing: border-box;
    font-family: PingFang SC;
    font-size: .72917vw;
    font-weight: 400;
    line-height: 1.04167vw;
    color: #000;
}

.question-item .answer p {
    min-height: 1.04167vw;
}

.question-item .answer .placeholder {
    height: 1.25vw;
}

</style>