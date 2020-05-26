const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'NGN',
  minimumFractionDigits: 2
})

const schoolFeeAmount = 242100;

function getSchoolFeeBalance(regNo) {
  $('#mainContent').css('display', 'none')
  $('#profileContent').css('display', 'none')
  $('#hostelContent').css('display', 'none')
  $('#clearanceContent').css('display', 'none')
  $('#feeContent').css('display', 'block')
 
  
  fetch(`http://localhost:3000/school-fee?regNo=${regNo}`)
    .then(function (response) {
      return response.text();
    }, function () {
        return 'failed';
    })
    .then(function (text) {

      const resp = JSON.parse(text);
      var feePaid = 0
      resp.forEach(e => {
      feePaid += parseInt(e)
      console.log(feePaid)
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
        $('#target').html(`Total School Amount: ${formatter.format(schoolFeeAmount)}<p><p></p>Total School Fee Paid:${formatter.format(feePaid)}</p> Outstanding School Fee: ${formatter.format(schoolFeeAmount - feePaid)}`);
        $('#target1').css('display','none')
        $('#target2').css('display','inline-block')
      }
      
  });
}
function getProfile(){
  $('#mainContent').css('display', 'none')
  $('#feeContent').css('display', 'none')
  $('#hostelContent').css('display', 'none')
  $('#clearanceContent').css('display', 'none')
  $('#profileContent').css('display', 'block')
}

function getHostelFeeBalance(){
  $('#mainContent').css('display', 'none')
  $('#feeContent').css('display', 'none')
  $('#profileContent').css('display', 'none')
  $('#clearanceContent').css('display', 'none')
  $('#hostelContent').css('display', 'block')

}

function getClearanceStatus(){
  $('#mainContent').css('display', 'none')
  $('#feeContent').css('display', 'none')
  $('#profileContent').css('display', 'none')
  $('#hostelContent').css('display', 'none')
  $('#clearanceContent').css('display', 'block')
  
}