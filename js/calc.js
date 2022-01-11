 let inputEasy = document.querySelector('.easy'),
    inputWeight = document.querySelector('.weight'),
    buttonCalc = document.querySelector('.calc__btntotal')
    ,
    textResult = document.querySelector('.text'),
    textResultMain = document.querySelector('.maintotal'),
    textInfo = document.querySelector('.calc__info'),
    total = 0,
    inputWeightSumm = 0,
    inputEasySumm = 0;

    
    inputEasy.addEventListener('change', function() {
            inputEasySumm = +this.value;
            total = (inputWeightSumm/inputEasySumm*2);
            textResult.innerHTML = total;
        });

    inputWeight.addEventListener('change', function() {
            inputWeightSumm = +this.value;
            total = (inputWeightSumm/inputEasySumm*2);
        });

    buttonCalc.addEventListener('click', function(){
      textResultMain.innerHTML = 'АОто';
    });