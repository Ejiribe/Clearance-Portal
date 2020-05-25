const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'NGN',
  minimumFractionDigits: 2
})

const schoolFeeAmount = 242100;

function getSchoolFeeBalance(regNo) {
  $('#mainContent').css('display', 'none')
  $('#feeContent').css('display', 'block')
  console.log("got user: " + regNo)
  
  fetch(`http://localhost:3000/school-fee?regNo=${regNo}`)
    .then(function (response) {
      console.log('in success block')
      return response.text();
    }, function () {
        console.log('in failed block')
        return 'failed';
    })
    .then(function (text) {
      
      const resp = JSON.parse(text);
      var feePaid = 0
      resp.forEach(e => {
        feePaid += parseInt(e)
      });
      
      if (text==='failed') {
        $('#target').html('Fee Details Unavailabe, kindly check back later!');
        $('#target1').css('display', 'none')
        $('#target2').css('display', 'none')
      }
      else if ((schoolFeeAmount - feePaid) <= 0) {
        $('#target').html('No Outstanding School Fee');
        $('#target1').css('display','none')
        $('#target2').css('display', 'none')
      }
      else {
        
        console.log(`total school fee paid: ${feePaid}`);
        $('#target').html(`Total School Fee Amount: ${formatter.format(schoolFeeAmount)} <p></p>Total School Fee Paid: ${formatter.format(feePaid)} <p></p> Outstanding School Fee: ${formatter.format(schoolFeeAmount - feePaid)}`);
        $('#target1').css('display','inline-block')
        $('#target2').css('display','inline-block')
      }
      
  });
}