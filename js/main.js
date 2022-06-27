const {to, from, set} = gsap;

gsap.registerPlugin(MorphSVGPlugin);

document.querySelectorAll(".button-pay").forEach((button) => {
    const coin1 = button.querySelector(".coin1");
    

    button.addEventListener("click", (e) => {
        if(button.done){
            return;
        }

        button.done = true;

        to(button, {
            "--button-coin-opacity": 1,
            duration:0.2,
        });

       to(button, {
           keyframes: [
               {
                   "--button-coin-x": "-50%",
                   duration: 1.5,
                   ease: "elastic.out(1, .9",
               },
               {
                "--button-money-shine-position": "202px",
                duration: 0.3,
                delay: 0.25,
                onStart() {
                  set(button, {
                    "--button-default-opacity": 0,
                    "--button-done-opacity": 1,
                  });
                   },
                 },
                 {
                     "--button-coin-scale": 1.1,
                     duration : 0.25,
                 },
                 {
                     "--button-coin-scale": 0.9,
                     "--button-coin-opacity": 0,
                     duration: 0.2,
                     onComplete(){
                         to(button, {
                             "--button-default-opacity": 1,
                             "--button-done-opacity": 0,
                             duration: 0.2,
                             delay: 3,
                             clearProps: true,
                             onComplete() {
                                 button.done = false;
                             }
                         })
                     }
                 }
           ]
       })
        
    });
});
   