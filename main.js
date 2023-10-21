const merchantBtn = document.getElementById('merchantBtn');
        const agentBtn = document.getElementById('agentBtn');
        const formGroupAgent = document.querySelector('.form-group-agent');

        merchantBtn.addEventListener('click', () => {
            agentBtn.classList.remove('active');
            merchantBtn.classList.add('active');
            formGroupAgent.style.display = 'none';
        });

        agentBtn.addEventListener('click', () => {
            merchantBtn.classList.remove('active');
            agentBtn.classList.add('active');
            formGroupAgent.style.display = 'block';
        });

        document.addEventListener("DOMContentLoaded", function () {
            const form = document.querySelector(".form");
          
            form.addEventListener("submit", function (event) {
              event.preventDefault();
              const val1 = document.getElementById('val1').value
              const val2 = document.getElementById('val2').value
              const val3 = document.getElementById('val3').value
              const val4 = document.getElementById('val4').value
              const val5 = document.getElementById('val5').value
              const val6 = document.getElementById('val6').value
              
              const obj = {
                val1,val2,val3,val4,val5,val6
              }
              console.log(obj);
            });
          });