const merchantBtn = document.getElementById('merchantBtn');
        const agentBtn = document.getElementById('agentBtn');
        const formGroupAgent = document.querySelector('.form-group-agent');

        merchantBtn.addEventListener('click', () => {
            agentBtn.classList.remove('active');
            merchantBtn.classList.add('active');
            // formGroupAgent.style.display = 'none';
        });

        agentBtn.addEventListener('click', () => {
            merchantBtn.classList.remove('active');
            agentBtn.classList.add('active');
            // formGroupAgent.style.display = 'block';
        });