fetch('https://applykiya.herokuapp.com/getLink')
    .then(data => data.json())
    .then((s)=>{
        console.log(s)
        s.map((p)=>{
            const eles = document.getElementById('data');
            const ps = document.createElement('div');
            ps.innerHTML = `
        
            <div class="list_top_questions">
            <div class="questions_box">
              <span class="question">
              ${p.companyName} (${p.formType})
              </span>
            
                <a class="solve_apply" href=${p.link} target="__"> Apply  </a>
      
        
            </div>
          </div>
            `;
            eles.append(ps)
        })
    })