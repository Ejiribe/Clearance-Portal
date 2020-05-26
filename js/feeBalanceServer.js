const http = require('http');
const url = require('url');

const schoolFee = [
  {
    "MATRICNO": "2015/199864",
    "PAYMENT PIN": "S65377765",
    "SESSION": "2015-2016",
    "AMOUNT": "61450.0000"
  },
  {
    "MATRICNO": "2015/199864",
    "PAYMENT PIN": "130128626669",
    "SESSION": "2016-2017",
    "AMOUNT": "46650.0000"
  },
  {
    "MATRICNO": "2015/199864",
    "PAYMENT PIN": "250188498392",
    "SESSION": "2017-2018",
    "AMOUNT": "46000.0000"
  },
  {
    "MATRICNO": "2015/199864",
    "PAYMENT PIN": "210245721201",
    "SESSION": "2018-2019",
    "AMOUNT": "44000.0000"
  },
  {
    "MATRICNO": "2015/199864",
    "PAYMENT PIN": "120356723791",
    "SESSION": "2019-2020",
    "AMOUNT": "44000.0000"
  },
  {
    "MATRICNO": "2015/199869",
    "PAYMENT PIN": "D62529485",
    "SESSION": "2015-2016",
    "AMOUNT": "61450.0000"
  },
  {
    "MATRICNO": "2015/199869",
    "PAYMENT PIN": "200130606245",
    "SESSION": "2016-2017",
    "AMOUNT": "46650.0000"
  },
  {
    "MATRICNO": "2015/199869",
    "PAYMENT PIN": "100188573077",
    "SESSION": "2017-2018",
    "AMOUNT": "46000.0000"
  },
  {
    "MATRICNO": "2015/199869",
    "PAYMENT PIN": "260245580557",
    "SESSION": "2018-2019",
    "AMOUNT": "44000.0000"
  },
  {
    "MATRICNO": "2015/199869",
    "PAYMENT PIN": "110354017286",
    "SESSION": "2019-2020",
    "AMOUNT": "44000.0000"
  },
  {
    "MATRICNO": "2015/200147",
    "PAYMENT PIN": "A67290199",
    "SESSION": "2015-2016",
    "AMOUNT": "61450.0000"
  },
  {
    "MATRICNO": "2015/200147",
    "PAYMENT PIN": "270128625616",
    "SESSION": "2016-2017",
    "AMOUNT": "46650.0000"
  },
  {
    "MATRICNO": "2015/200147",
    "PAYMENT PIN": "270188499279",
    "SESSION": "2017-2018",
    "AMOUNT": "46000.0000"
  },
  {
    "MATRICNO": "2015/200147",
    "PAYMENT PIN": "270245644710",
    "SESSION": "2018-2019",
    "AMOUNT": "44000.0000"
  },
  {
    "MATRICNO": "2015/200147",
    "PAYMENT PIN": "240353937697",
    "SESSION": "2019-2020",
    "AMOUNT": "00000.0000"
  }
]

const server = http.createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  console.log("in server")
  const reqUrl = url.parse(req.url, true);
  if (req.method === 'GET' && reqUrl.pathname === '/school-fee') {
    
    const regNo = reqUrl.query.regNo
    console.log(`school fee resource called with reg no: ${regNo}`);
    var studentRecord = [];

    schoolFee.forEach(e => {
      if (e.MATRICNO == regNo) {
        studentRecord.push(e.AMOUNT);
      }
    });
    console.log(`size of student school fee record found: ${studentRecord.length}`)
    res.end(JSON.stringify(studentRecord));
  }

});
server.listen(3000, () => console.log("Server started on port 3000..."))

 const hostelFee = [
  {
    "MATRICNO": "2015/199864",
    "HOSTEL": "NKURUMAH HALL",
    "ROOM": "307C",
    "SESSION": "2016-2017",
    "AMOUNT": "12500.0000"
  },
  {
    "MATRICNO": "2015/199864",
    "HOSTEL": "MARY SLESSOR",
    "ROOM": "222C",
    "SESSION": "2017-2018",
    "AMOUNT": "12500.0000"
  },
  {
    "MATRICNO": "2015/199864",
    "HOSTEL": "NKURUMAH HALL",
    "ROOM": "317C",
    "SESSION": "2018-2019",
    "AMOUNT": "15000.0000"
  },
  {
    "MATRICNO": "2015/199864",
    "HOSTEL": "MARY SLESSOR",
    "ROOM": "224B",
    "SESSION": "2019-2020",
    "AMOUNT": "15000.0000"
  },
  {
    "MATRICNO": "2015/199869",
    "HOSTEL": "OKPARA HOSTEL",
    "ROOM": "219C",
    "SESSION": "2017-2018",
    "AMOUNT": "12500.0000"
  },
  {
    "MATRICNO": "2015/199869",
    "HOSTEL": "NKURUMAH HALL",
    "ROOM": "319B",
    "SESSION": "2018-2019",
    "AMOUNT": "15000.0000"
  },
  {
    "MATRICNO": "2015/200147",
    "HOSTEL": "AKPABIO HALL",
    "ROOM": "414C",
    "SESSION": "2016-2017",
    "AMOUNT": "12500.0000"
  },
  {
    "MATRICNO": "2015/200147",
    "HOSTEL": "EYOITA HALL",
    "ROOM": "215B",
    "SESSION": "2017-2018",
    "AMOUNT": "12500.0000"
  },
  {
    "MATRICNO": "2015/200147",
    "HOSTEL": "EYOITA HALL",
    "ROOM": "325B",
    "SESSION": "2019-2020",
    "AMOUNT": "15000.0000"
  },
  {
    "MATRICNO": "2015/200147",
    "HOSTEL": "EYOITA HALL",
    "ROOM": "315B",
    "SESSION": "2018-2019",
    "AMOUNT": "15000.0000"
  }
 ]

//  const server = http.createServer((req, res) => {
  
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const reqUrl = url.parse(req.url, true);
//     if (req.method === 'GET' && reqUrl.pathname === '/hoste-fee') {
      
//       const regNo = reqUrl.query.regNo
//       var studentRecord = [];
  
//       schoolFee.forEach(e => {
//         if (e.MATRICNO == regNo) {
//           studentRecord.push(e.AMOUNT);
//         }
//       });
//       console.log(`size of student school fee record found: ${studentRecord.length}`)
//       res.end(JSON.stringify(studentRecord));
//     }
  
//   });
