import Vue from 'vue'


Vue.directive("lazy", {
    bind: function (el, binding) {
      console.log(binding.arg);
      let lazyLoadObser = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          let lazyImg = entry.target;
          if (entry.intersectionRatio > 0) {
            lazyImg.src = binding.arg;
            lazyLoadObser.unobserve(lazyImg); //卸载监听
          }
        });
      });
      lazyLoadObser.observe(el);
    },
  });
