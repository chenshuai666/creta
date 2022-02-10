<template>
    <header>
            <div class="fixed">
                <div class="flix">
                    <div>
                        <img data-v-70cb7f29 src="../assets/logo.0cb3e91.png" alt="logo">
                    </div>
                    <div>
                        <a href="#/home" class="nav-item">Home</a>
                        <a href="#/FAQ" class="nav-item">FAQ</a>
                    </div>
                    <div class="nav-btn">Try it now</div>
                </div>
            </div>
        </header>
</template>

<script>
export default {
    name: 'headere',
    props: {

    }
}
</script>

<style scoped>
header {
    width: 100%;
    height: 4.16667vw;
}

img[data-v-70cb7f29] {
    height: 2.29167vw;
}

a, a:hover, a:visited {
    text-decoration: none;
}

.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4.16667vw;
    background: #fff;
    box-shadow: 0 0.20833vw 0.83333vw 0 rgb(0 0 0 / 4%);
    z-index: 1000;
}

.flix {
    position: relative;
    margin: 0 21.3541vw;
    display: flex;
    height: 100%;
    align-items: center;
}

.nav-btn {
    position: absolute;
    right: 0;
    height: 2.29167vw;
    width: 6.97917vw;
    border: .07813vw solid #0c6;
    box-sizing: border-box;
    border-radius: 5.20833vw;
    font-family: PingFang SC;
    font-size: 1.04167vw;
    font-weight: 500;
    line-height: 2.13542vw;
    text-align: center;
    color: #0c6;
    cursor: pointer;
}

.nav-item {
    margin-left: 4.0625vw;
    font-family: PingFang SC;
    font-size: 1.04167vw;
    font-weight: 500;
    color: #000;
    line-height: 1.25vw;
    cursor: pointer;
    position: relative;
    -webkit-text-decoration-line: none;
    text-decoration-line: none;
}
</style>