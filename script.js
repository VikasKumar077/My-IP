let ipAddress = document.getElementById("ipAddress");
let ISPname = document.getElementById("ISPname");
let CITYname = document.getElementById('CITYname');
let REGION = document.getElementById("REGIONname");
let COUNTRYname = document.getElementById("COUNTRYname");
let COUNTRYcode = document.getElementById("COUNTRYcode");
let TIMEZONE = document.getElementById("TIMEZONE");


fetch("https://ipapi.co/json/")
  .then((response) => {
    return response.json();
  })
  .then((apidata) => {
    ipAddress.innerHTML = apidata.ip;
    ISPname.textContent = apidata.org;
    CITYname.textContent = apidata.city;
    REGION.textContent = apidata.region;
    COUNTRYname.textContent = apidata.country_name;
    COUNTRYcode.textContent = apidata.country_code;
    TIMEZONE.textContent = apidata.timezone;
    console.log(apidata);
  })
  .catch((error) => {
    console.log(`The Error ${error}`);
  });


// for entered ip address--
let lookupBtn = document.getElementById("lookupBtn");

lookupBtn.addEventListener('click', () => {
        
    let EnteredIp = document.getElementById("EnteredIp").value;
    
    if (EnteredIp == "")
    {
        alert('Enter IP Address');
    }
    else
    {
        fetch(`https://ipapi.co/${EnteredIp}/json/`)
          .then((response2) => {
            return response2.json();
          })
          .then((apidata2) => {
            if (apidata2.error==true) {
              let warning = document.getElementById("warning");
              let allData2 = document.getElementById("all-data2");
              warning.style.display = "block";
              allData2.style.display = "none";
            } else {
              let container2 = document.getElementById("container2");
              container2.style.display = "block";
              let Version = document.getElementById("Version");
              let ipAddress2 = document.getElementById("ipAddress2");
              let ISPname2 = document.getElementById("ISPname2");
              let CITYname2 = document.getElementById("CITYname2");
              let REGION2 = document.getElementById("REGIONname2");
              let COUNTRYname2 = document.getElementById("COUNTRYname2");
              let COUNTRYcapital = document.getElementById("COUNTRYcapital");
              let COUNTRYcode2 = document.getElementById("COUNTRYcode2");
              let TIMEZONE2 = document.getElementById("TIMEZONE2");
              Version.innerHTML = apidata2.version;
              ipAddress2.innerHTML = apidata2.ip;
              ISPname2.textContent = apidata2.org;
              CITYname2.textContent = apidata2.city;
              REGION2.textContent = apidata2.region;
              COUNTRYname2.textContent = apidata2.country_name;
              COUNTRYcapital.textContent = apidata2.country_capital;
              COUNTRYcode2.textContent = apidata2.country_code;
              TIMEZONE2.textContent = apidata2.timezone;
              console.log(apidata2);
            }
          })

          .catch((error2) => {
            console.log(`The Error ${error2}`);
          });
    }

    })