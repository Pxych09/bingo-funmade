
    let animateCount = 0;
    let animateCountv1 = 0;
    let animateCountv2 = 0;
    let animateCountv3 = 0;
    let animateCountv4 = 0;
    let animateCountv5 = 0;

    function animatePatterns_v6() {
      setInterval(() => {
        animateCountv5++
        if(animateCountv5 == 2) {
          document.querySelector(`.let_str1_n_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_g_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_o_${3}`).classList.add('bg-danger')
        }
        else if(animateCountv5 == 4) {
          document.querySelector(`.let_str1_n_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_g_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_o_${3}`).classList.remove('bg-danger')

          document.querySelector(`.let_str1_i_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_n_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_g_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_o_${4}`).classList.add('bg-danger')
        }
        else if(animateCountv5 == 6) {
          document.querySelector(`.let_str1_b_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_i_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_g_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_o_${5}`).classList.add('bg-danger')

          document.querySelector(`.let_str1_i_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_n_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_g_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_o_${4}`).classList.remove('bg-danger')
        }
        else if(animateCountv5 == 8) {
          document.querySelector(`.let_str1_b_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_i_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_g_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_o_${5}`).classList.remove('bg-danger')

          document.querySelector(`.let_str1_b_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_i_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_n_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_g_${5}`).classList.add('bg-danger')
        }
        else if(animateCountv5 == 10) {
          document.querySelector(`.let_str1_b_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_i_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_n_${5}`).classList.add('bg-danger')

          document.querySelector(`.let_str1_b_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_i_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_n_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_g_${5}`).classList.remove('bg-danger')
        }
        else if(animateCountv5 == 12) {
          document.querySelector(`.let_str1_o_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_g_${4}`).classList.add('bg-danger')

          document.querySelector(`.let_str1_b_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_i_${4}`).classList.remove('bg-danger')
        }
        else if(animateCountv5 == 14) {
          document.querySelector(`.let_str1_o_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_g_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_n_${5}`).classList.remove('bg-danger')

          document.querySelector(`.let_str1_o_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_g_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_n_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_i_${5}`).classList.add('bg-danger')
        }
        else if(animateCountv5 == 16) {
          document.querySelector(`.let_str1_o_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_g_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_i_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_b_${5}`).classList.add('bg-danger')

          document.querySelector(`.let_str1_o_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_g_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_n_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_i_${5}`).classList.remove('bg-danger')
        }
        else if(animateCountv5 == 18) {
          document.querySelector(`.let_str1_o_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_g_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_i_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_b_${5}`).classList.remove('bg-danger')

          document.querySelector(`.let_str1_g_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_n_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_i_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_b_${4}`).classList.add('bg-danger')
        }
        else if(animateCountv5 == 20) {
          document.querySelector(`.let_str1_n_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_i_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_str1_b_${3}`).classList.add('bg-danger')

          document.querySelector(`.let_str1_g_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_n_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_i_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_b_${4}`).classList.remove('bg-danger')
        }
        else if(animateCountv5 == 22) {
          animateCountv5 = 0
          document.querySelector(`.let_str1_n_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_i_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_str1_b_${3}`).classList.remove('bg-danger')
        }
      }, 600)
    }

    function animatePatterns_v5() {
      setInterval(() => {
        animateCountv4++
        if(animateCountv4 == 2) {
          document.querySelector(`.let_str_b_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_str_i_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_str_n_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_str_g_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_str_o_${1}`).classList.add('bg-danger')
        }
        else if(animateCountv4 == 4) {
          document.querySelector(`.let_str_b_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_i_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_n_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_g_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_o_${1}`).classList.remove('bg-danger')

          document.querySelector(`.let_str_b_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_str_i_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_str_n_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_str_g_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_str_o_${2}`).classList.add('bg-danger')
        }
        else if(animateCountv4 == 6) {
          document.querySelector(`.let_str_b_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_i_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_n_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_g_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_o_${2}`).classList.remove('bg-danger')

          document.querySelector(`.let_str_b_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_str_i_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_str_g_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_str_o_${3}`).classList.add('bg-danger')
        }
        else if(animateCountv4 == 8) {
          document.querySelector(`.let_str_b_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_i_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_g_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_o_${3}`).classList.remove('bg-danger')

          document.querySelector(`.let_str_b_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_str_i_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_str_n_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_str_g_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_str_o_${4}`).classList.add('bg-danger')
        }
        else if(animateCountv4 == 10) {
          document.querySelector(`.let_str_b_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_i_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_n_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_g_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_o_${4}`).classList.remove('bg-danger')

          document.querySelector(`.let_str_b_${5}`).classList.add('bg-danger')
          document.querySelector(`.let_str_i_${5}`).classList.add('bg-danger')
          document.querySelector(`.let_str_n_${5}`).classList.add('bg-danger')
          document.querySelector(`.let_str_g_${5}`).classList.add('bg-danger')
          document.querySelector(`.let_str_o_${5}`).classList.add('bg-danger')
        }
        else if(animateCountv4 == 12) {
          document.querySelector(`.let_str_b_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_str_b_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_str_b_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_str_b_${4}`).classList.add('bg-danger')

          document.querySelector(`.let_str_i_${5}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_n_${5}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_g_${5}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_o_${5}`).classList.remove('bg-danger')
        }
        else if(animateCountv4 == 14) {
          document.querySelector(`.let_str_i_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_str_i_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_str_i_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_str_i_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_str_i_${5}`).classList.add('bg-danger')

          document.querySelector(`.let_str_b_${5}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_b_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_b_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_b_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_b_${4}`).classList.remove('bg-danger')
        }
        else if(animateCountv4 == 16) {
          document.querySelector(`.let_str_i_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_i_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_i_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_i_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_i_${5}`).classList.remove('bg-danger')

          document.querySelector(`.let_str_n_${5}`).classList.add('bg-danger')
          document.querySelector(`.let_str_n_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_str_n_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_str_n_${4}`).classList.add('bg-danger')
        }
        else if(animateCountv4 == 18) {
          document.querySelector(`.let_str_g_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_str_g_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_str_g_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_str_g_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_str_g_${5}`).classList.add('bg-danger')

          document.querySelector(`.let_str_n_${5}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_n_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_n_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_n_${4}`).classList.remove('bg-danger')
        }
        else if(animateCountv4 == 20) {
          document.querySelector(`.let_str_g_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_g_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_g_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_g_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_g_${5}`).classList.remove('bg-danger')

          document.querySelector(`.let_str_o_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_str_o_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_str_o_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_str_o_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_str_o_${5}`).classList.add('bg-danger')
        }
        else if (animateCountv4 == 22) {
          animateCountv4 = 0
          document.querySelector(`.let_str_o_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_o_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_o_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_o_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_str_o_${5}`).classList.remove('bg-danger')
        }
      }, 600)
    }
    
    function animatePatterns_v4() {
      setInterval(() => {
        animateCountv3++
        if(animateCountv3 == 2) {
          document.querySelector(`.let_dia_n_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_dia_b_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_dia_n_${5}`).classList.add('bg-danger')
          document.querySelector(`.let_dia_o_${3}`).classList.add('bg-danger')
        }
        else if(animateCountv3 == 4) {
          document.querySelector(`.let_dia_n_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_dia_b_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_dia_n_${5}`).classList.remove('bg-danger')
          document.querySelector(`.let_dia_o_${3}`).classList.remove('bg-danger')

          document.querySelector(`.let_dia_n_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_dia_i_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_dia_n_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_dia_g_${3}`).classList.add('bg-danger')
        }
        else if(animateCountv3 == 6) {
          document.querySelector(`.let_dia_i_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_dia_b_${2}`).classList.add('bg-danger')

          document.querySelector(`.let_dia_n_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_dia_g_${3}`).classList.remove('bg-danger')
        }
        else if(animateCountv3 == 8) {
          document.querySelector(`.let_dia_i_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_dia_i_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_dia_b_${2}`).classList.remove  ('bg-danger')

          document.querySelector(`.let_dia_g_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_dia_g_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_dia_o_${2}`).classList.add('bg-danger')
        }
        else if(animateCountv3 == 10) {
          document.querySelector(`.let_dia_g_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_dia_g_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_dia_o_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_dia_n_${2}`).classList.remove('bg-danger')

          document.querySelector(`.let_dia_i_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_dia_b_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_dia_i_${5}`).classList.add('bg-danger')
          document.querySelector(`.let_dia_n_${4}`).classList.add('bg-danger')
        }
        else if(animateCountv3 == 12) {
          document.querySelector(`.let_dia_i_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_dia_b_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_dia_i_${5}`).classList.remove('bg-danger')

          document.querySelector(`.let_dia_g_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_dia_o_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_dia_g_${5}`).classList.add('bg-danger')
        }
        else if(animateCountv3 == 14) {
          animateCountv3 = 0
          document.querySelector(`.let_dia_g_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_dia_o_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_dia_g_${5}`).classList.remove('bg-danger')
          document.querySelector(`.let_dia_n_${4}`).classList.remove('bg-danger')
        }
      }, 600)
    }

    function animatePatterns_v2() {
      let runPattern = setInterval(() => {
        animateCountv2++

        if(animateCountv2 == 2) {
          document.querySelector(`.let_ptrn_b_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_b_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_i_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_i_${2}`).classList.add('bg-danger')
        }
        else if(animateCountv2 == 6) {
          document.querySelector(`.let_ptrn_b_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_b_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_i_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_i_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_n_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_n_${2}`).classList.add('bg-danger')
        }
        else if(animateCountv2 == 10) {
          document.querySelector(`.let_ptrn_i_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_i_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_g_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_g_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_n_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_n_${2}`).classList.add('bg-danger')
        }
        else if(animateCountv2 == 14) {
          document.querySelector(`.let_ptrn_n_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_n_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_g_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_g_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_o_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_o_${2}`).classList.add('bg-danger')
        }
        else if(animateCountv2 == 18) {
          document.querySelector(`.let_ptrn_n_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_n_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_g_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_g_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_o_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_o_${2}`).classList.remove('bg-danger')
          
          document.querySelector(`.let_ptrn_b_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_b_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_i_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_i_${3}`).classList.add('bg-danger')
        }
        else if(animateCountv2 == 22) {
          document.querySelector(`.let_ptrn_b_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_b_${3}`).classList.remove('bg-danger')

          document.querySelector(`.let_ptrn_n_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_i_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_i_${3}`).classList.add('bg-danger')
        }
        else if(animateCountv2 == 26) {
          document.querySelector(`.let_ptrn_g_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_g_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_i_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_i_${3}`).classList.remove('bg-danger')
        }
        else if(animateCountv2 == 30) {
          document.querySelector(`.let_ptrn_n_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_g_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_g_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_o_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_o_${3}`).classList.add('bg-danger')
          
          document.querySelector(`.let_ptrn_b_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_b_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_i_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_i_${3}`).classList.remove('bg-danger')
        }
        else if(animateCountv2 == 34) {
          document.querySelector(`.let_ptrn_g_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_g_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_o_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_o_${3}`).classList.remove('bg-danger')
          
          document.querySelector(`.let_ptrn_b_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_b_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_i_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_i_${4}`).classList.add('bg-danger')
        }
        else if(animateCountv2 == 38) {
          document.querySelector(`.let_ptrn_b_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_b_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_i_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_i_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_n_${4}`).classList.add('bg-danger')
        }
        else if(animateCountv2 == 42) {
          document.querySelector(`.let_ptrn_i_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_i_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_n_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_g_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_g_${4}`).classList.add('bg-danger')
        }
        else if(animateCountv2 == 46) {
          document.querySelector(`.let_ptrn_o_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_o_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_n_${4}`).classList.remove('bg-danger')
        }
        else if(animateCountv2 == 50) {
          document.querySelector(`.let_ptrn_g_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_g_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_o_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_o_${4}`).classList.remove('bg-danger')
          
          document.querySelector(`.let_ptrn_b_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_b_${5}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_i_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_i_${5}`).classList.add('bg-danger')
        }
        else if(animateCountv2 == 54) {
          document.querySelector(`.let_ptrn_n_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_n_${5}`).classList.add('bg-danger')
          
          document.querySelector(`.let_ptrn_b_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_b_${5}`).classList.remove('bg-danger')
        }
        else if(animateCountv2 == 58) {
          document.querySelector(`.let_ptrn_g_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_g_${5}`).classList.add('bg-danger')
          
          document.querySelector(`.let_ptrn_i_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_i_${5}`).classList.remove('bg-danger')
        }
        else if(animateCountv2 == 62) {
          document.querySelector(`.let_ptrn_o_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_ptrn_o_${5}`).classList.add('bg-danger')
          
          document.querySelector(`.let_ptrn_n_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_n_${5}`).classList.remove('bg-danger')
        }

        else if (animateCountv2 == 66) {
          animateCountv2 = 0;
          document.querySelector(`.let_ptrn_o_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_o_${5}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_g_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_ptrn_g_${5}`).classList.remove('bg-danger')
        }
      }, 200)
    }

    function animatePatterns_v1() {
      setInterval(() => {
        animateCountv1++
        if(animateCountv1 == 2) {
          document.querySelector(`.let_b_ver${1}`).classList.add('bg-danger')
          document.querySelector(`.let_b_ver${5}`).classList.add('bg-danger')
          document.querySelector(`.let_o_ver${1}`).classList.add('bg-danger')
          document.querySelector(`.let_o_ver${5}`).classList.add('bg-danger')
        }
        else if (animateCountv1 == 4) {
          document.querySelector(`.let_i_ver${2}`).classList.add('bg-danger')
          document.querySelector(`.let_i_ver${4}`).classList.add('bg-danger')
          document.querySelector(`.let_g_ver${2}`).classList.add('bg-danger')
          document.querySelector(`.let_g_ver${4}`).classList.add('bg-danger')

          document.querySelector(`.let_b_ver${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_b_ver${5}`).classList.remove('bg-danger')
          document.querySelector(`.let_o_ver${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_o_ver${5}`).classList.remove('bg-danger')
        }
        else if (animateCountv1 == 6) {
          animateCountv1 = 0
          document.querySelector(`.let_i_ver${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_i_ver${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_g_ver${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_g_ver${4}`).classList.remove('bg-danger')
          
          document.querySelector(`.let_b_ver${1}`).classList.add('bg-danger')
          document.querySelector(`.let_b_ver${5}`).classList.add('bg-danger')
          document.querySelector(`.let_o_ver${1}`).classList.add('bg-danger')
          document.querySelector(`.let_o_ver${5}`).classList.add('bg-danger')
        }
      }, 600)
    }

    function animatePatterns_v3() {
      setInterval(() => {
        animateCount++
        if(animateCount == 2) {
          document.querySelector(`.let_b_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_n_${5}`).classList.add('bg-danger')
          document.querySelector(`.let_o_${1}`).classList.add('bg-danger')
        }
        else if (animateCount == 4) {
          document.querySelector(`.let_b_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_n_${5}`).classList.remove('bg-danger')
          document.querySelector(`.let_o_${1}`).classList.remove('bg-danger')

          document.querySelector(`.let_i_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_n_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_g_${2}`).classList.add('bg-danger')
        }
        else if (animateCount == 6) {
          document.querySelector(`.let_b_${5}`).classList.add('bg-danger')
          document.querySelector(`.let_n_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_o_${5}`).classList.add('bg-danger')

          document.querySelector(`.let_i_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_n_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_g_${2}`).classList.remove('bg-danger')
        }
        else if (animateCount == 8) {
          document.querySelector(`.let_b_${5}`).classList.remove('bg-danger')
          document.querySelector(`.let_n_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_o_${5}`).classList.remove('bg-danger')

          document.querySelector(`.let_i_${4}`).classList.add('bg-danger')
          document.querySelector(`.let_n_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_g_${4}`).classList.add('bg-danger')
        }
        else if (animateCount == 10) {
          document.querySelector(`.let_b_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_o_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_o_${5}`).classList.add('bg-danger')

          document.querySelector(`.let_i_${4}`).classList.remove('bg-danger')
          document.querySelector(`.let_n_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_g_${4}`).classList.remove('bg-danger')
        }
        else if (animateCount == 12) {
          document.querySelector(`.let_b_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_o_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_o_${5}`).classList.remove('bg-danger')

          document.querySelector(`.let_i_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_g_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_g_${4}`).classList.add('bg-danger')
        }
        else if (animateCount == 14) {
          document.querySelector(`.let_b_${1}`).classList.add('bg-danger')
          document.querySelector(`.let_b_${5}`).classList.add('bg-danger')
          document.querySelector(`.let_o_${3}`).classList.add('bg-danger')

          document.querySelector(`.let_i_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_g_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_g_${4}`).classList.remove('bg-danger')
        }
        else if (animateCount == 16) {
          document.querySelector(`.let_b_${1}`).classList.remove('bg-danger')
          document.querySelector(`.let_b_${5}`).classList.remove('bg-danger')
          document.querySelector(`.let_o_${3}`).classList.remove('bg-danger')

          document.querySelector(`.let_g_${3}`).classList.add('bg-danger')
          document.querySelector(`.let_i_${2}`).classList.add('bg-danger')
          document.querySelector(`.let_i_${4}`).classList.add('bg-danger')
        }
        else if (animateCount == 18) {
          animateCount = 0;
          document.querySelector(`.let_g_${3}`).classList.remove('bg-danger')
          document.querySelector(`.let_i_${2}`).classList.remove('bg-danger')
          document.querySelector(`.let_i_${4}`).classList.remove('bg-danger')
        }
      }, 600);

    }

    animatePatterns_v1();
    animatePatterns_v2();
    animatePatterns_v3();
    animatePatterns_v4();
    animatePatterns_v5();
    animatePatterns_v6();

    const el_numberOfCards = document.querySelector("#numberOfCards");
    const cardsContainer = document.querySelector("#cardsContainer");
    const rollBtn = document.querySelector("#rollBtn");
    const resetBtn = document.querySelector("#resetBtn");
    const rolledNumberDisplay = document.querySelector("#rolledNumber");

    const calledCountEl = document.querySelector("#calledCount");
    const winnerCountEl = document.querySelector("#winnerCount");

    const calledBallsGrid = document.querySelector("#calledBallsGrid");

    const winToastEl = document.querySelector("#winToast");
    const winToastBody = document.querySelector("#winToastBody");
    const infoToastEl = document.querySelector("#infoToast");
    const infoToastBody = document.querySelector("#infoToastBody");

    const winToast = new bootstrap.Toast(winToastEl, { delay: 3500 });
    const infoToast = new bootstrap.Toast(infoToastEl, { delay: 2200 });

    function showWinToast(message) {
      winToastBody.textContent = message;
      winToast.show();
    }

    function showInfoToast(message) {
      infoToastBody.textContent = message;
      infoToast.show();
    }

    // === APPS SCRIPT API (JSONP) ===
const API_URL = "https://script.google.com/macros/s/AKfycbyS_FsFLMBpQduyoBHK65MY7XdfwFrtEl2NTXLKrZOGMWqUGnkOSeqOrSP3lfLKhCtdqw/exec"; // e.g. https://script.google.com/macros/s/XXXXX/exec

async function makeAPICall(payload) {
  // JSONP first (works around CORS)
  try {
    return await jsonpRequest(payload);
  } catch (e) {
    console.warn("JSONP failed:", e);
  }

  // Optional POST fallback (usually blocked by CORS unless same-origin / proper headers)
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) return await response.json();
  } catch (e) {}

  return { success: false, message: "Request failed (CORS or network)." };
}

function jsonpRequest(payload) {
  return new Promise((resolve, reject) => {
    const cb = "cb_" + Math.random().toString(36).slice(2);
    const params = new URLSearchParams();

    Object.entries(payload).forEach(([k, v]) => {
      params.append(k, typeof v === "object" ? JSON.stringify(v) : v);
    });

    params.append("callback", cb);

    const script = document.createElement("script");
    script.src = `${API_URL}?${params.toString()}`;

    window[cb] = (data) => {
      cleanup();
      resolve(data);
    };

    script.onerror = () => {
      cleanup();
      reject(new Error("JSONP script load error"));
    };

    function cleanup() {
      delete window[cb];
      script.remove();
    }

    document.body.appendChild(script);
  });
}

async function loadBingoDataFromSheet() {
  const res = await makeAPICall({ action: "getBingoData" });
  if (!res || !res.success) {
    throw new Error(res?.message || "Failed to load bingo data.");
  }
  return res.bingo_data; // {b:[], i:[], n:[], g:[], o:[]}
}


    const totalBox = 5;

    let bingo_data = null; // will be loaded from Google Sheet API

    let calledNumbers = [];
    let winners = new Set();

    function updateBadges() {
      calledCountEl.textContent = `Called: ${calledNumbers.length}`;
      const w = winners.size;
      if (w > 0) {
        winnerCountEl.classList.remove("d-none");
        winnerCountEl.textContent = `Winners: ${w}`;
      } else {
        winnerCountEl.classList.add("d-none");
      }
    }

    function sampleUnique(arr, count) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy.slice(0, count);
    }

    function getLetterForNumber(n) {
      if (n >= 1 && n <= 15) return "B";
      if (n >= 16 && n <= 30) return "I";
      if (n >= 31 && n <= 45) return "N";
      if (n >= 46 && n <= 60) return "G";
      return "O";
    }

    function playRollSound() {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioCtx();
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "sine";
        o.frequency.value = 740;
        g.gain.value = 0.05;
        o.connect(g);
        g.connect(ctx.destination);
        o.start();
        setTimeout(() => {
          o.stop();
          ctx.close();
        }, 120);
      } catch (_) {}
    }

    function animateRolledNumber() {
      rolledNumberDisplay.classList.remove("roll-animate");
      void rolledNumberDisplay.offsetWidth;
      rolledNumberDisplay.classList.add("roll-animate");
    }

    /* Called Balls Grid (BINGO layout 5 cols x 15 rows) */
    function buildCalledGrid() {
      calledBallsGrid.querySelectorAll(".grid-ball").forEach(el => el.remove());

      const ranges = [
        [1, 15],   // B
        [16, 30],  // I
        [31, 45],  // N
        [46, 60],  // G
        [61, 75],  // O
      ];

      for (let row = 0; row < 15; row++) {
        for (let col = 0; col < 5; col++) {
          const number = ranges[col][0] + row;

          const cell = document.createElement("div");
          cell.className = "grid-ball";
          cell.dataset.number = String(number);
          cell.textContent = number; // JUST THE NUMBER ✅

          calledBallsGrid.appendChild(cell);
        }
      }
    }

    function renderCalledBalls() {
      document.querySelectorAll(".grid-ball").forEach(ball => {
        const num = parseInt(ball.dataset.number, 10);
        if (calledNumbers.includes(num)) ball.classList.add("called");
        else ball.classList.remove("called");
      });
    }

    function createCell(text, cardIndex, row, col, isFree = false) {
      const span = document.createElement("span");
      span.classList.add("text-center", "bg-light");

      span.dataset.card = String(cardIndex);
      span.dataset.row = String(row);
      span.dataset.col = String(col);

      if (isFree) {
        span.textContent = "FREE";
        span.classList.remove("bg-light");
        span.classList.add("free-space", "marked");
        span.dataset.number = "FREE";
      } else {
        span.textContent = text;
        span.dataset.number = String(text);
      }

      // click-to-mark (optional)
      span.addEventListener("click", () => {
        if (span.textContent === "FREE") return;
        span.classList.toggle("marked");
        checkAllWinners();
      });

      return span;
    }

    function createColumn(letterKey, cardIndex, colIndex) {
      const column = document.createElement("div");
      column.classList.add("d-flex", "flex-column", "gap-1", "w-100");

    const source = (bingo_data && bingo_data[letterKey]) ? bingo_data[letterKey] : [];
    const nums = sampleUnique(source, totalBox);


      nums.forEach((num, rowIndex) => {
        const isFree = (letterKey === "n" && rowIndex === 2);
        column.appendChild(createCell(num, cardIndex, rowIndex, colIndex, isFree));
      });

      return column;
    }

    function createCard(cardNumber) {
      const cardIndex = cardNumber - 1;

      const card = document.createElement("div");
      card.classList.add("card", "p-2", "border-primary", "shadow-sm");
      card.dataset.card = String(cardIndex);

      const headerTop = document.createElement("div");
      headerTop.classList.add("bingo-card-head");
      headerTop.innerHTML = `<span>${String(cardNumber).padStart(2, "0")}</span>`;

      const headerLetters = document.createElement("div");
      headerLetters.classList.add("d-flex", "justify-content-evenly", "fw-bold", "py-2", "gap-1");
      headerLetters.innerHTML = `
        <div class="w-100 text-center bingo-letter">B</div>
        <div class="w-100 text-center bingo-letter">I</div>
        <div class="w-100 text-center bingo-letter">N</div>
        <div class="w-100 text-center bingo-letter">G</div>
        <div class="w-100 text-center bingo-letter">O</div>
      `;

      const body = document.createElement("div");
      body.classList.add("d-flex", "gap-1");
      ["b","i","n","g","o"].forEach((letter, colIndex) => {
        body.appendChild(createColumn(letter, cardIndex, colIndex));
      });

      card.appendChild(headerTop);
      card.appendChild(headerLetters);
      card.appendChild(body);

      return card;
    }

    function generateCards() {
      const count = Math.max(0, parseInt(el_numberOfCards.value) || 0);
      cardsContainer.replaceChildren();
      winners.clear();

      for (let i = 1; i <= count; i++) {
        cardsContainer.appendChild(createCard(i));
      }

      calledNumbers = [];
      rolledNumberDisplay.textContent = "0";
      updateBadges();
      renderCalledBalls();
      showInfoToast("Cards generated.");
    }

    function highlightNumber(number) {
      document
        .querySelectorAll(`span[data-number="${number}"]`)
        .forEach(cell => cell.classList.add("marked"));
    }

    function rollBall() {
      const cardCount = parseInt(el_numberOfCards.value) || 0;
      if (cardCount <= 0) return;

      if (calledNumbers.length >= 75) {
        showInfoToast("All numbers have been called!");
        return;
      }

      let number;
      do {
        number = Math.floor(Math.random() * 75) + 1;
      } while (calledNumbers.includes(number));

      calledNumbers.push(number);

      const letter = getLetterForNumber(number);
      rolledNumberDisplay.textContent = `${letter} - ${number}`;

      animateRolledNumber();
      playRollSound();

      renderCalledBalls();
      highlightNumber(number);
      checkAllWinners();

      updateBadges();
      showInfoToast(`${letter} - ${number}`);
    }

    /* Winner detection with pattern info + win-line highlighting */
    function checkWinnerForCard(cardIndex) {
      const size = 5;

      const getCell = (r, c) =>
        document.querySelector(`.card[data-card="${cardIndex}"] span[data-row="${r}"][data-col="${c}"]`);

      const marked = Array.from({ length: size }, () => Array(size).fill(false));
      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          const cell = getCell(r, c);
          marked[r][c] = !!cell && cell.classList.contains("marked");
        }
      }

      // rows
      for (let r = 0; r < size; r++) {
        if (marked[r].every(Boolean)) {
          const cells = Array.from({ length: size }, (_, c) => getCell(r, c)).filter(Boolean);
          return { won: true, label: `Row ${r + 1}`, cells };
        }
      }

      // cols
      const colNames = ["B", "I", "N", "G", "O"];
      for (let c = 0; c < size; c++) {
        let ok = true;
        for (let r = 0; r < size; r++) {
          if (!marked[r][c]) { ok = false; break; }
        }
        if (ok) {
          const cells = Array.from({ length: size }, (_, r) => getCell(r, c)).filter(Boolean);
          return { won: true, label: `Column ${colNames[c]}`, cells };
        }
      }

      // diagonals
      let d1 = true;
      for (let i = 0; i < size; i++) if (!marked[i][i]) d1 = false;
      if (d1) {
        const cells = Array.from({ length: size }, (_, i) => getCell(i, i)).filter(Boolean);
        return { won: true, label: `Diagonal (↘︎)`, cells };
      }

      let d2 = true;
      for (let i = 0; i < size; i++) if (!marked[i][size - 1 - i]) d2 = false;
      if (d2) {
        const cells = Array.from({ length: size }, (_, i) => getCell(i, size - 1 - i)).filter(Boolean);
        return { won: true, label: `Diagonal (↙︎)`, cells };
      }

      return { won: false, label: "", cells: [] };
    }

    function checkAllWinners() {
      const count = parseInt(el_numberOfCards.value) || 0;

      for (let cardIndex = 0; cardIndex < count; cardIndex++) {
        if (winners.has(cardIndex)) continue;

        const result = checkWinnerForCard(cardIndex);

        if (result.won) {
          winners.add(cardIndex);

          const cardEl = document.querySelector(`.card[data-card="${cardIndex}"]`);
          if (cardEl) cardEl.classList.add("winner");

          // highlight winning line cells
          result.cells.forEach(cell => cell.classList.add("win-line"));

          showWinToast(
            `🎉 BINGO! Card No. ${String(cardIndex + 1).padStart(2, "0")} — ${result.label}`
          );

          updateBadges();
        }
      }
    }

    function resetGame() {
      calledNumbers = [];
      winners.clear();
      rolledNumberDisplay.textContent = "0";

      document.querySelectorAll(".card").forEach(card => card.classList.remove("winner"));
      document.querySelectorAll(".card span").forEach(span => {
        span.classList.remove("win-line");
        if (span.textContent === "FREE") span.classList.add("marked");
        else span.classList.remove("marked");
      });

      updateBadges();
      renderCalledBalls();
      showInfoToast("Game reset.");
    }

    el_numberOfCards.addEventListener("input", generateCards);
    rollBtn.addEventListener("click", rollBall);
    resetBtn.addEventListener("click", resetGame);

    // Init
(async function init() {
  el_numberOfCards.value = 3;
  buildCalledGrid();

  try {
    showInfoToast("Loading bingo data from Google Sheet...");
    bingo_data = await loadBingoDataFromSheet();
    showInfoToast("Bingo data loaded ✅");
  } catch (err) {
    console.error(err);
    showInfoToast("Failed to load sheet data. Using fallback.");
    // Fallback if API fails (keeps app working)
    bingo_data = {
      b: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
      i: [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
      n: [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],
      g: [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
      o: [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75],
    };
  }

  generateCards();
  renderCalledBalls();
})();
