// spec.js
var PageObject=require('./PageObjects.json');
describe('Well Configuration || Workflow Suite', function() {
beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });
it('Create RRL well', function() {

browser.waitForAngularEnabled(false);
 browser.driver.manage().window().maximize();
browser.get('http://localhost:2678/#/dashboards/pedashboard');
expect(browser.getTitle()).toEqual('Weatherford ForeSite');
var until = protractor.ExpectedConditions;
waitclick(findbyxpath(PageObject.WellConfigPage.configurationTab));
waitforload();
waitclick(findbyxpath(PageObject.WellConfigPage.wellconfigurationTab));
waitclick(findbyxpath(PageObject.WellConfigPage.general));
findbyid(PageObject.WellConfigPage.wellnameinput).sendKeys("RRL");
waitclick(findbyid(PageObject.WellConfigPage.welltypedropdwn));
waitclick(findbyxpath(PageObject.WellConfigPage.welltypename));
waitclick(findbyid(PageObject.WellConfigPage.scadatypedrpdwn)); 
waitclick(findbyxpath(PageObject.WellConfigPage.scadatypename)); 
waitclick(findbyid(PageObject.WellConfigPage.cygnetdomaindrpdwn)); 
waitclick(findbyxpath(PageObject.WellConfigPage.cygnetdomainname)); 
waitforload();
var serv=element(by.xpath("//span[text()='Select service...']"));
waitclick(serv);

 
var av=element(by.xpath("//li[text()='CYG_DEMO.UIS']"));
waitclick(av);


var fac=element(by.xpath("//input[@id='facilityId']/following-sibling::button"));
waitclick(fac);

browser.waitForAngular();

waitforload();
var table=element(by.xpath("//table/tbody/tr/td[text()='RPOC_0001']"));
waitclick(table); 

browser.waitForAngular();
element(by.xpath("//button[text()=' Apply ']")).click();

var comdate=element(by.xpath("//kendo-datepicker//input"));
browser.wait(until.visibilityOf(comdate), 5000, 'Element taking too long to appear in the DOM');
comdate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a")); 
comdate.sendKeys(protractor.Key.chord(protractor.Key.DELETE));
comdate.sendKeys("12202018");
 
 var wb=element(by.xpath("(//kendo-searchbar/input)[1]"));
sendtext(wb, "1234567");

 var bh=element(by.xpath("(//kendo-searchbar/input)[2]"));
sendtext(bh, "1234");

 var iapi=element(by.xpath("//input[@id='intervalAPI']"));
sendtext(iapi, "testapi");

var wdep=element(by.id("wellDepthDatum"));
waitclick(wdep);

var dop=element(by.xpath("//li[text()='Derrick Floor']"));
waitclick(dop);

var depelev=element(by.xpath("//kendo-numerictextbox[@id='datumElevation']//input"));
sendtext(depelev, "1");

var gelev=element(by.xpath("//kendo-numerictextbox[@id='datumGroundElevation']//input"));
sendtext(gelev, "1");
waitclick(element(by.id("wellStatus")));
waitclick(element(by.xpath("//li[text()='Active']")));
waitclick(element(by.xpath("//div[text()=' Well Attributes ']")));

sendtext(element(by.xpath("//kendo-combobox[@name='lease']//input")), "lease");

sendtext(element(by.xpath("//kendo-combobox[@name='field']//input")), "fieldname");

sendtext(element(by.xpath("//kendo-combobox[@name='engineer']//input")), "engineername");

sendtext(element(by.xpath("//kendo-combobox[@name='geographicRegion']//input")), "region");

sendtext(element(by.xpath("//kendo-combobox[@name='foreman']//input")), "foreman");

sendtext(element(by.xpath("//kendo-combobox[@name='gaugerBeat']//input")), "testgauger");


waitclick(element(by.xpath("//div[text()=' Surface ']")));
waitclick(element(by.id("openPumpingUnitModalButton")));
waitforload();
waitclick(element(by.xpath("((//kendo-grid-list)[1]//table/tbody/tr/td)[1]")));
waitforload();
waitclick(element(by.xpath("((//kendo-grid-list)[2]//table/tbody/tr/td)[1]")));
waitforload();
waitclick(element(by.xpath("((//kendo-grid-list)[3]//table/tbody/tr/td)[1]")));
waitclick(element(by.xpath("//button[text()='Apply']")));
waitclick(element(by.xpath("//div[text()=' Downhole ']")));
waitclick(element(by.xpath("(//kendo-dropdownlist[@id='pumpDiameter']/span/span)[1]")));
waitclick(element(by.xpath("//li[text()='1']")));
sendtext(element(by.xpath("//kendo-numerictextbox[@id='PumpDepth']//input")), "2");
sendtext(element(by.xpath("//kendo-numerictextbox[@id='TubingOD']//input")), "5");
sendtext(element(by.xpath("//kendo-numerictextbox[@id='TubingID']//input")), "4");
sendtext(element(by.xpath("//kendo-numerictextbox[@id='TubingAnchorDepth']//input")), "1");
sendtext(element(by.xpath("//kendo-numerictextbox[@id='CasingOD']//input")), "6");
sendtext(element(by.xpath("//kendo-numerictextbox[@id='CasingWeight']//input")), "1");
sendtext(element(by.xpath("//kendo-numerictextbox[@id='TopPerforation']//input")), "1");
sendtext(element(by.xpath("//kendo-numerictextbox[@id='BottomPerforation']//input")), "2");

waitclick(element(by.xpath("//div[text()=' Rods ']")));
waitclick(element(by.xpath("//span[text()='Add ']")));
waitclick(element(by.xpath("(//table/tbody/tr/td)[3]/kendo-dropdownlist")));
waitclick(element(by.xpath("//li[text()='Fibercom']")));
waitclick(element(by.xpath("(//table/tbody/tr/td)[4]/kendo-dropdownlist")));
waitclick(element(by.xpath("//li[text()='FG']")));
waitclick(element(by.xpath("(//table/tbody/tr/td)[5]/kendo-dropdownlist")));
waitclick(element(by.xpath("//li[text()='0.99']")));
sendtext(element(by.xpath("(//table/tbody/tr/td)[6]/kendo-numerictextbox//input")), "2");
sendtext(element(by.xpath("(//table/tbody/tr/td)[7]/kendo-numerictextbox//input")), "2");
sendtext(element(by.xpath("(//table/tbody/tr/td)[9]//input")), "2");
waitclick(element(by.xpath("(//table/tbody/tr/td)[1]//span[@class='k-icon k-i-save']")));
waitclick(element(by.xpath("//span[text()='Save']")));
toastverify("Well RRL saved successfully", "Error While saving RRL well");

  });
it('Verify created RRL well', function() {

waitforload();
waitclick(element(by.xpath("//div[text()='Network Configuration']")));
waitforload();

waitclick(element(by.xpath("//div[@class='system-rail-container']//span[contains(@class,'k-dropdown-wrap ')]")));
waitclick(element(by.xpath("//li[text()='RRL']")));
waitforload();
waitclick(element(by.xpath("//div[text()='Well Configuration']")));
waitforload();
expect("RRL").toEqual(getinputtext(element(by.id("wellName")), "Well Name field could not be located"), "Well Name not matching");

expect("RRL").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='wellType']//span[@class='k-input']")) , "Well Type field could not be located"), "Well Type not matching");

expect("CygNet").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='scadaType']//span[@class='k-input']")), "Scada Type field could not be located"), "Scada Type not matching");

expect("27212").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='cygNetDomain']//span[@class='k-input']")), "Cygnet Domain field could not be located"), "cygNetDomain  not matching");

expect("CYG_DEMO.UIS").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='siteService']//span[@class='k-input']")), "Site Service field could not be located"), "Site Service  not matching");

expect("RPOC_0001").toEqual(getinputtext(element(by.id("facilityId")), "Facility field could not be located"), "Facility ID  not matching");

var WellboreIDtext=element(by.id("assemblyAPI")).getAttribute('value');
expect("1234567").toEqual(WellboreIDtext, "Wellbore id not matching");

var Borehole=element(by.id("subAssemblyAPI")).getAttribute('value');
expect("1234").toEqual(Borehole, "Borehole not matching");

expect("testapi").toEqual(getinputtext(element(by.id("intervalAPI")), "Interval API could not be located"), "intervalAPI  not matching");

expect("Derrick Floor").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='wellDepthDatum']//span[@class='k-input']")), "Depth Ref field could not be located"), "Depth ref  not matching");

expect("1.00").toEqual(getinputtext(element(by.xpath("//kendo-numerictextbox[@id='datumElevation']//input")), "Depth Elev could not be located"), "Depth ELev  not matching");
expect("1.00").toEqual(getinputtext(element(by.xpath("//kendo-numerictextbox[@id='datumGroundElevation']//input")), "Ground Elev could not be located"), "Ground ELev  not matching");
expect("Active").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='wellStatus']//span[@class='k-input']")), "Status field could not be located"), "Status not matching");
waitclick(element(by.xpath("//div[text()=' Well Attributes ']")));

expect("lease").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='lease']//input")), "Lease name field could not be located"), "Lease name  not matching");

expect("fieldname").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='field']//input")), "Field name field could not be located"), "Field name  not matching");

expect("engineername").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='engineer']//input")), "Engineer name field could not be located"), "Engineer name  not matching");

expect("region").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='geographicRegion']//input")), "Region name field could not be located"), "Region name  not matching");

expect("foreman").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='foreman']//input")), "Foreman name field could not be located"), "Foreman name  not matching");

expect("testgauger").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='gaugerBeat']//input")), "Gauger name field could not be located"), "Gauger name  not matching");


waitclick(element(by.xpath("//div[text()=' Surface ']")));

var punit=element(by.id("pumpingUnit")).getAttribute('value');
expect("C-80-133-54 ALT Alten C-80-133-54").toEqual(punit, "Pumping Unit not matching");

waitclick(element(by.xpath("//div[text()=' Downhole ']")));
expect("1").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='pumpDiameter']//span[@class='k-input']")), "P Diameter could not be located"),"P Diameter mismatch");
expect("2.00").toEqual(getinputtext(element(by.xpath("//kendo-numerictextbox[@id='PumpDepth']//input")), "P Depth could not be located"),"P Depth mismatch");
expect("5.000").toEqual(getinputtext(element(by.xpath("//kendo-numerictextbox[@id='TubingOD']//input")), "T OD could not be located"),"T OD mismatch");
expect("4.000").toEqual(getinputtext(element(by.xpath("//kendo-numerictextbox[@id='TubingID']//input")), "T ID could not be located"),"T ID mismatch");
expect("1.00").toEqual(getinputtext(element(by.xpath("//kendo-numerictextbox[@id='TubingAnchorDepth']//input")), "TA txtbox could not be located"),"TA Textbox mismatch");
expect("6.000").toEqual(getinputtext(element(by.xpath("//kendo-numerictextbox[@id='CasingOD']//input")), "Casing OD could not be located"),"Casing OD mismatch");
expect("1.00").toEqual(getinputtext(element(by.xpath("//kendo-numerictextbox[@id='CasingWeight']//input")), "Casing wt could not be located"),"Casing wt mismatch");
expect("1.00").toEqual(getinputtext(element(by.xpath("//kendo-numerictextbox[@id='TopPerforation']//input")), "TopPerforation could not be located"),"TopPerforation mismatch");
expect("2.00").toEqual(getinputtext(element(by.xpath("//kendo-numerictextbox[@id='BottomPerforation']//input")), "BottomPerforation could not be located"),"BottomPerforation mismatch");
  
 
waitclick(element(by.xpath("//div[text()=' Rods ']"))); 
expect("Fibercom").toEqual(getspantext(element(by.xpath("(//table/tbody/tr/td)[3]")), "Manfctr could not be located"),"Manfctr mismatch");
expect("FG").toEqual(getspantext(element(by.xpath("(//table/tbody/tr/td)[4]")), "Grade could not be located"),"Grade mismatch");
expect("2").toEqual(getspantext(element(by.xpath("(//table/tbody/tr/td)[6]")), "Lngth could not be located"),"Lngth mismatch");
expect("2").toEqual(getspantext(element(by.xpath("(//table/tbody/tr/td)[7]")), "Rod could not be located"),"ROd mismatch");
expect("4").toEqual(getspantext(element(by.xpath("(//table/tbody/tr/td)[8]")), "Total length could not be located"),"Total Lngth mismatch");
expect("02").toEqual(getspantext(element(by.xpath("(//table/tbody/tr/td)[9]")), "Guides could not be located"),"Guides Lngth mismatch");
});
it('Create ESP well', function() {
//without model file upload
var until = protractor.ExpectedConditions;

 el=element(by.xpath("//div[text()='Well Configuration']"));
waitclick(el);

 el=element(by.xpath("//button[@name='createNewWellButton']"));
waitclick(el);

element(by.id("wellName")).sendKeys("ESP");
var drop=element(by.id("wellType")).click();

browser.waitForAngular();
var rrltp=element(by.xpath("//li[text()='ESP']"));
waitclick(rrltp);

var scadatype=element(by.id("scadaType"));
waitclick(scadatype);
 
var le=element(by.xpath("//li[text()='CygNet']"));
waitclick(le);

var cygd=element(by.id("cygNetDomain"));
waitclick(cygd);

var e=element(by.xpath("//li[text()='27212']"))
waitclick(e);

 waitforload();

var serv=element(by.xpath("//span[text()='Select service...']"));
waitclick(serv);

 
var av=element(by.xpath("//li[text()='CYG_DEMO.UIS']"));
waitclick(av);


var fac=element(by.xpath("//input[@id='facilityId']/following-sibling::button"));
waitclick(fac);

browser.waitForAngular();

waitforload();
var table=element(by.xpath("//table/tbody/tr/td[text()='RPOC_0135']"));
waitclick(table); 

browser.waitForAngular();
element(by.xpath("//button[text()=' Apply ']")).click();

var comdate=element(by.xpath("//kendo-datepicker//input"));
browser.wait(until.visibilityOf(comdate), 5000, 'Element taking too long to appear in the DOM');
comdate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a")); 
comdate.sendKeys(protractor.Key.chord(protractor.Key.DELETE));
comdate.sendKeys("12202018");
 
 var wb=element(by.xpath("(//kendo-searchbar/input)[1]"));
sendtext(wb, "123456789");

 var bh=element(by.xpath("(//kendo-searchbar/input)[2]"));
sendtext(bh, "12345");

 var iapi=element(by.xpath("//input[@id='intervalAPI']"));
sendtext(iapi, "testapi12");

var wdep=element(by.id("wellDepthDatum"));
waitclick(wdep);

var dop=element(by.xpath("//li[text()='Derrick Floor']"));
waitclick(dop);

var depelev=element(by.xpath("//kendo-numerictextbox[@id='datumElevation']//input"));
sendtext(depelev, "1");

var gelev=element(by.xpath("//kendo-numerictextbox[@id='datumGroundElevation']//input"));
sendtext(gelev, "1");

waitclick(element(by.id("wellStatus")));
waitclick(element(by.xpath("//li[text()='Active']")));

waitclick(element(by.xpath("//div[text()=' Well Attributes ']")));

sendtext(element(by.xpath("//kendo-combobox[@name='lease']//input")), "lease");

sendtext(element(by.xpath("//kendo-combobox[@name='field']//input")), "fieldname");

sendtext(element(by.xpath("//kendo-combobox[@name='engineer']//input")), "engineername");

sendtext(element(by.xpath("//kendo-combobox[@name='geographicRegion']//input")), "region");

sendtext(element(by.xpath("//kendo-combobox[@name='foreman']//input")), "foreman");

sendtext(element(by.xpath("//kendo-combobox[@name='gaugerBeat']//input")), "testgauger");


waitclick(element(by.xpath("//span[text()='Save']")));
//waitclick(element(by.xpath("//div[contains(@class,'toast-message')]")));
//var text=element(by.xpath("//div[contains(@class,'toast-message')]")).getText();
toastverify("Well ESP saved successfully", "Error While saving ESP well");


  });
  
it('Verify created ESP well', function() {

waitforload();
waitclick(element(by.xpath("//div[text()='Network Configuration']")));
waitforload();
waitclick(element(by.xpath("//div[@class='system-rail-container']//span[contains(@class,'k-dropdown-wrap ')]")));
waitclick(element(by.xpath("//li[text()='ESP']")));
waitforload();
waitclick(element(by.xpath("//div[text()='Well Configuration']")));
waitforload();

expect("ESP").toEqual(getinputtext(element(by.id("wellName")), "Well Name field could not be located"), "Well Name not matching");

expect("ESP").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='wellType']//span[@class='k-input']")) , "Well Type field could not be located"), "Well Type not matching");

expect("CygNet").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='scadaType']//span[@class='k-input']")), "Scada Type field could not be located"), "Scada Type not matching");

expect("27212").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='cygNetDomain']//span[@class='k-input']")), "Cygnet Domain field could not be located"), "cygNetDomain  not matching");

expect("CYG_DEMO.UIS").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='siteService']//span[@class='k-input']")), "Site Service field could not be located"), "Site Service  not matching");

expect("RPOC_0135").toEqual(getinputtext(element(by.id("facilityId")), "Facility field could not be located"), "Facility ID  not matching");

var WellboreIDtext=element(by.id("assemblyAPI")).getAttribute('value');
expect("123456789").toEqual(WellboreIDtext, "Wellbore id not matching");

var Borehole=element(by.id("subAssemblyAPI")).getAttribute('value');
expect("12345").toEqual(Borehole, "Borehole not matching");

expect("testapi12").toEqual(getinputtext(element(by.id("intervalAPI")), "Interval API could not be located"), "intervalAPI  not matching");

expect("Derrick Floor").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='wellDepthDatum']//span[@class='k-input']")), "Depth Ref field could not be located"), "Depth ref  not matching");

expect("1.00").toEqual(getinputtext(element(by.xpath("//kendo-numerictextbox[@id='datumElevation']//input")), "Depth Elev could not be located"), "Depth ELev  not matching");
expect("1.00").toEqual(getinputtext(element(by.xpath("//kendo-numerictextbox[@id='datumGroundElevation']//input")), "Ground Elev could not be located"), "Ground ELev  not matching");

expect("Active").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='wellStatus']//span[@class='k-input']")), "Status field could not be located"), "Status  not matching");

waitclick(element(by.xpath("//div[text()=' Well Attributes ']")));

expect("lease").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='lease']//input")), "Lease name field could not be located"), "Lease name  not matching");

expect("fieldname").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='field']//input")), "Field name field could not be located"), "Field name  not matching");

expect("engineername").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='engineer']//input")), "Engineer name field could not be located"), "Engineer name  not matching");

expect("region").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='geographicRegion']//input")), "Region name field could not be located"), "Region name  not matching");

expect("foreman").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='foreman']//input")), "Foreman name field could not be located"), "Foreman name  not matching");

expect("testgauger").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='gaugerBeat']//input")), "Gauger name field could not be located"), "Gauger name  not matching");

});

it('Create Plunger Lift well', function() {
//without model file upload
var until = protractor.ExpectedConditions;

 el=element(by.xpath("//div[text()='Well Configuration']"));
waitclick(el);

 el=element(by.xpath("//button[@name='createNewWellButton']"));
waitclick(el);

element(by.id("wellName")).sendKeys("PL");
var drop=element(by.id("wellType")).click();

browser.waitForAngular();
var rrltp=element(by.xpath("//li[text()='Plunger Lift']"));
waitclick(rrltp);

waitclick(element(by.id("fluidType")));
waitclick(element(by.xpath("//li[text()='Dry Gas']")));
var scadatype=element(by.id("scadaType"));
waitclick(scadatype);
 
var le=element(by.xpath("//li[text()='CygNet']"));
waitclick(le);

var cygd=element(by.id("cygNetDomain"));
waitclick(cygd);

var e=element(by.xpath("//li[text()='27212']"))
waitclick(e);

 waitforload();

var serv=element(by.xpath("//span[text()='Select service...']"));
waitclick(serv);

 
var av=element(by.xpath("//li[text()='CYG_DEMO.UIS']"));
waitclick(av);


var fac=element(by.xpath("//input[@id='facilityId']/following-sibling::button"));
waitclick(fac);

browser.waitForAngular();

waitforload();
var table=element(by.xpath("//table/tbody/tr/td[text()='RPOC_0269']"));
waitclick(table); 

browser.waitForAngular();
element(by.xpath("//button[text()=' Apply ']")).click();

var comdate=element(by.xpath("//kendo-datepicker//input"));
browser.wait(until.visibilityOf(comdate), 5000, 'Element taking too long to appear in the DOM');
comdate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a")); 
comdate.sendKeys(protractor.Key.chord(protractor.Key.DELETE));
comdate.sendKeys("12202018");
 
 var wb=element(by.xpath("(//kendo-searchbar/input)[1]"));
sendtext(wb, "12345670");

 var bh=element(by.xpath("(//kendo-searchbar/input)[2]"));
sendtext(bh, "123450");

 var iapi=element(by.xpath("//input[@id='intervalAPI']"));
sendtext(iapi, "testapi123");

var wdep=element(by.id("wellDepthDatum"));
waitclick(wdep);

var dop=element(by.xpath("//li[text()='Derrick Floor']"));
waitclick(dop);

var depelev=element(by.xpath("//kendo-numerictextbox[@id='datumElevation']//input"));
sendtext(depelev, "1");

var gelev=element(by.xpath("//kendo-numerictextbox[@id='datumGroundElevation']//input"));
sendtext(gelev, "1");

waitclick(element(by.id("wellStatus")));
waitclick(element(by.xpath("//li[text()='Active']")));

waitclick(element(by.xpath("//div[text()=' Well Attributes ']")));

sendtext(element(by.xpath("//kendo-combobox[@name='lease']//input")), "lease");

sendtext(element(by.xpath("//kendo-combobox[@name='field']//input")), "fieldname");

sendtext(element(by.xpath("//kendo-combobox[@name='engineer']//input")), "engineername");

sendtext(element(by.xpath("//kendo-combobox[@name='geographicRegion']//input")), "region");

sendtext(element(by.xpath("//kendo-combobox[@name='foreman']//input")), "foreman");

sendtext(element(by.xpath("//kendo-combobox[@name='gaugerBeat']//input")), "testgauger");


waitclick(element(by.xpath("//span[text()='Save']")));

toastverify("Well PL saved successfully", "Error While saving PL well");


  });
it('Verify created Plunger Lift well', function() {

waitforload();
waitclick(element(by.xpath("//div[text()='Network Configuration']")));
waitforload();
waitclick(element(by.xpath("//div[@class='system-rail-container']//span[contains(@class,'k-dropdown-wrap ')]")));
waitclick(element(by.xpath("//li[text()='PL']")));
waitforload();
waitclick(element(by.xpath("//div[text()='Well Configuration']")));
waitforload();

expect("PL").toEqual(getinputtext(element(by.id("wellName")), "Well Name field could not be located"), "Well Name not matching");

expect("Plunger Lift").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='wellType']//span[@class='k-input']")) , "Well Type field could not be located"), "Well Type not matching");

expect("CygNet").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='scadaType']//span[@class='k-input']")), "Scada Type field could not be located"), "Scada Type not matching");

expect("27212").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='cygNetDomain']//span[@class='k-input']")), "Cygnet Domain field could not be located"), "cygNetDomain  not matching");

expect("CYG_DEMO.UIS").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='siteService']//span[@class='k-input']")), "Site Service field could not be located"), "Site Service  not matching");

expect("RPOC_0269").toEqual(getinputtext(element(by.id("facilityId")), "Facility field could not be located"), "Facility ID  not matching");

var WellboreIDtext=element(by.id("assemblyAPI")).getAttribute('value');
expect("12345670").toEqual(WellboreIDtext, "Wellbore id not matching");

var Borehole=element(by.id("subAssemblyAPI")).getAttribute('value');
expect("123450").toEqual(Borehole, "Borehole not matching");

expect("testapi123").toEqual(getinputtext(element(by.id("intervalAPI")), "Interval API could not be located"), "intervalAPI  not matching");

expect("Derrick Floor").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='wellDepthDatum']//span[@class='k-input']")), "Depth Ref field could not be located"), "Depth ref  not matching");

expect("1.00").toEqual(getinputtext(element(by.xpath("//kendo-numerictextbox[@id='datumElevation']//input")), "Depth Elev could not be located"), "Depth ELev  not matching");
expect("1.00").toEqual(getinputtext(element(by.xpath("//kendo-numerictextbox[@id='datumGroundElevation']//input")), "Ground Elev could not be located"), "Ground ELev  not matching");

expect("Active").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='wellStatus']//span[@class='k-input']")), "Status field could not be located"), "Status  not matching");

waitclick(element(by.xpath("//div[text()=' Well Attributes ']")));

expect("lease").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='lease']//input")), "Lease name field could not be located"), "Lease name  not matching");

expect("fieldname").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='field']//input")), "Field name field could not be located"), "Field name  not matching");

expect("engineername").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='engineer']//input")), "Engineer name field could not be located"), "Engineer name  not matching");

expect("region").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='geographicRegion']//input")), "Region name field could not be located"), "Region name  not matching");

expect("foreman").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='foreman']//input")), "Foreman name field could not be located"), "Foreman name  not matching");

expect("testgauger").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='gaugerBeat']//input")), "Gauger name field could not be located"), "Gauger name  not matching");



});
it('Create Natural Flow well', function() {
//without model file upload
var until = protractor.ExpectedConditions;

 el=element(by.xpath("//div[text()='Well Configuration']"));
waitclick(el);

 el=element(by.xpath("//button[@name='createNewWellButton']"));
waitclick(el);

element(by.id("wellName")).sendKeys("NFlow");
var drop=element(by.id("wellType")).click();

browser.waitForAngular();
var rrltp=element(by.xpath("//li[text()='Naturally Flowing']"));
waitclick(rrltp);
var scadatype=element(by.id("scadaType"));
waitclick(scadatype);
 
var le=element(by.xpath("//li[text()='CygNet']"));
waitclick(le);

var cygd=element(by.id("cygNetDomain"));
waitclick(cygd);

var e=element(by.xpath("//li[text()='27212']"))
waitclick(e);
waitforload();
var serv=element(by.xpath("//span[text()='Select service...']"));
waitclick(serv); 
var av=element(by.xpath("//li[text()='CYG_DEMO.UIS']"));
waitclick(av);
var fac=element(by.xpath("//input[@id='facilityId']/following-sibling::button"));
waitclick(fac);
browser.waitForAngular();
waitforload();
var table=element(by.xpath("//table/tbody/tr/td[text()='RPOC_0403']"));
waitclick(table); 
browser.waitForAngular();
element(by.xpath("//button[text()=' Apply ']")).click();
var comdate=element(by.xpath("//kendo-datepicker//input"));
browser.wait(until.visibilityOf(comdate), 5000, 'Element taking too long to appear in the DOM');
comdate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a")); 
comdate.sendKeys(protractor.Key.chord(protractor.Key.DELETE));
comdate.sendKeys("12202018");
 
 var wb=element(by.xpath("(//kendo-searchbar/input)[1]"));
sendtext(wb, "123456701");

 var bh=element(by.xpath("(//kendo-searchbar/input)[2]"));
sendtext(bh, "1234501");

 var iapi=element(by.xpath("//input[@id='intervalAPI']"));
sendtext(iapi, "testapi1234");

var wdep=element(by.id("wellDepthDatum"));
waitclick(wdep);

var dop=element(by.xpath("//li[text()='Derrick Floor']"));
waitclick(dop);

var depelev=element(by.xpath("//kendo-numerictextbox[@id='datumElevation']//input"));
sendtext(depelev, "1");

var gelev=element(by.xpath("//kendo-numerictextbox[@id='datumGroundElevation']//input"));
sendtext(gelev, "1");

waitclick(element(by.id("wellStatus")));
waitclick(element(by.xpath("//li[text()='Active']")));

waitclick(element(by.xpath("//div[text()=' Well Attributes ']")));

sendtext(element(by.xpath("//kendo-combobox[@name='lease']//input")), "lease");

sendtext(element(by.xpath("//kendo-combobox[@name='field']//input")), "fieldname");

sendtext(element(by.xpath("//kendo-combobox[@name='engineer']//input")), "engineername");

sendtext(element(by.xpath("//kendo-combobox[@name='geographicRegion']//input")), "region");

sendtext(element(by.xpath("//kendo-combobox[@name='foreman']//input")), "foreman");

sendtext(element(by.xpath("//kendo-combobox[@name='gaugerBeat']//input")), "testgauger");


waitclick(element(by.xpath("//span[text()='Save']")));
//waitclick(element(by.xpath("//div[contains(@class,'toast-message')]")));
//var text=element(by.xpath("//div[contains(@class,'toast-message')]")).getText();
toastverify("Well NFlow saved successfully", "Error While saving NF well");

 });
it('Verify created Natural Flow well', function() {

waitforload();
waitclick(element(by.xpath("//div[text()='Network Configuration']")));
waitforload();
waitclick(element(by.xpath("//div[@class='system-rail-container']//span[contains(@class,'k-dropdown-wrap ')]")));
waitclick(element(by.xpath("//li[text()='NFlow']")));
waitforload();
waitclick(element(by.xpath("//div[text()='Well Configuration']")));
waitforload();

expect("NFlow").toEqual(getinputtext(element(by.id("wellName")), "Well Name field could not be located"), "Well Name not matching");

expect("Naturally Flowing").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='wellType']//span[@class='k-input']")) , "Well Type field could not be located"), "Well Type not matching");

expect("CygNet").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='scadaType']//span[@class='k-input']")), "Scada Type field could not be located"), "Scada Type not matching");

expect("27212").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='cygNetDomain']//span[@class='k-input']")), "Cygnet Domain field could not be located"), "cygNetDomain  not matching");

expect("CYG_DEMO.UIS").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='siteService']//span[@class='k-input']")), "Site Service field could not be located"), "Site Service  not matching");

expect("RPOC_0403").toEqual(getinputtext(element(by.id("facilityId")), "Facility field could not be located"), "Facility ID  not matching");

var WellboreIDtext=element(by.id("assemblyAPI")).getAttribute('value');
expect("123456701").toEqual(WellboreIDtext, "Wellbore id not matching");

var Borehole=element(by.id("subAssemblyAPI")).getAttribute('value');
expect("1234501").toEqual(Borehole, "Borehole not matching");

expect("testapi1234").toEqual(getinputtext(element(by.id("intervalAPI")), "Interval API could not be located"), "intervalAPI  not matching");

expect("Derrick Floor").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='wellDepthDatum']//span[@class='k-input']")), "Depth Ref field could not be located"), "Depth ref  not matching");

expect("1.00").toEqual(getinputtext(element(by.xpath("//kendo-numerictextbox[@id='datumElevation']//input")), "Depth Elev could not be located"), "Depth ELev  not matching");
expect("1.00").toEqual(getinputtext(element(by.xpath("//kendo-numerictextbox[@id='datumGroundElevation']//input")), "Ground Elev could not be located"), "Ground ELev  not matching");

expect("Active").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='wellStatus']//span[@class='k-input']")), "Status field could not be located"), "Status  not matching");

waitclick(element(by.xpath("//div[text()=' Well Attributes ']")));

expect("lease").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='lease']//input")), "Lease name field could not be located"), "Lease name  not matching");

expect("fieldname").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='field']//input")), "Field name field could not be located"), "Field name  not matching");

expect("engineername").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='engineer']//input")), "Engineer name field could not be located"), "Engineer name  not matching");

expect("region").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='geographicRegion']//input")), "Region name field could not be located"), "Region name  not matching");

expect("foreman").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='foreman']//input")), "Foreman name field could not be located"), "Foreman name  not matching");

expect("testgauger").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='gaugerBeat']//input")), "Gauger name field could not be located"), "Gauger name  not matching");

});
it('Create Gas Lift well', function() {
//without model file upload
var until = protractor.ExpectedConditions;

 el=element(by.xpath("//div[text()='Well Configuration']"));
waitclick(el);

 el=element(by.xpath("//button[@name='createNewWellButton']"));
waitclick(el);

element(by.id("wellName")).sendKeys("GL");
var drop=element(by.id("wellType")).click();

browser.waitForAngular();
var rrltp=element(by.xpath("//li[text()='Gas Lift']"));
waitclick(rrltp);

waitclick(element(by.id("fluidType")));
waitclick(element(by.xpath("//li[text()='Black Oil']")));
var scadatype=element(by.id("scadaType"));
waitclick(scadatype);
 
var le=element(by.xpath("//li[text()='CygNet']"));
waitclick(le);

var cygd=element(by.id("cygNetDomain"));
waitclick(cygd);

var e=element(by.xpath("//li[text()='27212']"))
waitclick(e);

 waitforload();

var serv=element(by.xpath("//span[text()='Select service...']"));
waitclick(serv);

 
var av=element(by.xpath("//li[text()='CYG_DEMO.UIS']"));
waitclick(av);


var fac=element(by.xpath("//input[@id='facilityId']/following-sibling::button"));
waitclick(fac);

browser.waitForAngular();

waitforload();
var table=element(by.xpath("//table/tbody/tr/td[text()='RPOC_0002']"));
waitclick(table); 

browser.waitForAngular();
element(by.xpath("//button[text()=' Apply ']")).click();

var comdate=element(by.xpath("//kendo-datepicker//input"));
browser.wait(until.visibilityOf(comdate), 5000, 'Element taking too long to appear in the DOM');
comdate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a")); 
comdate.sendKeys(protractor.Key.chord(protractor.Key.DELETE));
comdate.sendKeys("12202018");
 
 var wb=element(by.xpath("(//kendo-searchbar/input)[1]"));
sendtext(wb, "1567");

 var bh=element(by.xpath("(//kendo-searchbar/input)[2]"));
sendtext(bh, "156");

 var iapi=element(by.xpath("//input[@id='intervalAPI']"));
sendtext(iapi, "testapi1238");

var wdep=element(by.id("wellDepthDatum"));
waitclick(wdep);

var dop=element(by.xpath("//li[text()='Derrick Floor']"));
waitclick(dop);

var depelev=element(by.xpath("//kendo-numerictextbox[@id='datumElevation']//input"));
sendtext(depelev, "1");

var gelev=element(by.xpath("//kendo-numerictextbox[@id='datumGroundElevation']//input"));
sendtext(gelev, "1");

waitclick(element(by.id("wellStatus")));
waitclick(element(by.xpath("//li[text()='Active']")));

waitclick(element(by.xpath("//div[text()=' Well Attributes ']")));

sendtext(element(by.xpath("//kendo-combobox[@name='lease']//input")), "lease");

sendtext(element(by.xpath("//kendo-combobox[@name='field']//input")), "fieldname");

sendtext(element(by.xpath("//kendo-combobox[@name='engineer']//input")), "engineername");

sendtext(element(by.xpath("//kendo-combobox[@name='geographicRegion']//input")), "region");

sendtext(element(by.xpath("//kendo-combobox[@name='foreman']//input")), "foreman");

sendtext(element(by.xpath("//kendo-combobox[@name='gaugerBeat']//input")), "testgauger");


waitclick(element(by.xpath("//span[text()='Save']")));
//waitclick(element(by.xpath("//div[contains(@class,'toast-message')]")));
//var text=element(by.xpath("//div[contains(@class,'toast-message')]")).getText();
toastverify("Well GL saved successfully", "Error While saving GL well");


  });
it('Verify created Gas Lift well', function() {

waitforload();
waitclick(element(by.xpath("//div[text()='Network Configuration']")));
waitforload();
waitclick(element(by.xpath("//div[@class='system-rail-container']//span[contains(@class,'k-dropdown-wrap ')]")));
waitclick(element(by.xpath("//li[text()='GL']")));
waitforload();
waitclick(element(by.xpath("//div[text()='Well Configuration']")));
waitforload();

expect("GL").toEqual(getinputtext(element(by.id("wellName")), "Well Name field could not be located"), "Well Name not matching");

expect("Gas Lift").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='wellType']//span[@class='k-input']")) , "Well Type field could not be located"), "Well Type not matching");

expect("CygNet").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='scadaType']//span[@class='k-input']")), "Scada Type field could not be located"), "Scada Type not matching");

expect("27212").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='cygNetDomain']//span[@class='k-input']")), "Cygnet Domain field could not be located"), "cygNetDomain  not matching");

expect("CYG_DEMO.UIS").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='siteService']//span[@class='k-input']")), "Site Service field could not be located"), "Site Service  not matching");

expect("RPOC_0002").toEqual(getinputtext(element(by.id("facilityId")), "Facility field could not be located"), "Facility ID  not matching");

var WellboreIDtext=element(by.id("assemblyAPI")).getAttribute('value');
expect("1567").toEqual(WellboreIDtext, "Wellbore id not matching");

var Borehole=element(by.id("subAssemblyAPI")).getAttribute('value');
expect("156").toEqual(Borehole, "Borehole not matching");

expect("testapi1238").toEqual(getinputtext(element(by.id("intervalAPI")), "Interval API could not be located"), "intervalAPI  not matching");

expect("Derrick Floor").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='wellDepthDatum']//span[@class='k-input']")), "Depth Ref field could not be located"), "Depth ref  not matching");

expect("1.00").toEqual(getinputtext(element(by.xpath("//kendo-numerictextbox[@id='datumElevation']//input")), "Depth Elev could not be located"), "Depth ELev  not matching");
expect("1.00").toEqual(getinputtext(element(by.xpath("//kendo-numerictextbox[@id='datumGroundElevation']//input")), "Ground Elev could not be located"), "Ground ELev  not matching");

expect("Active").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='wellStatus']//span[@class='k-input']")), "Status field could not be located"), "Status  not matching");

waitclick(element(by.xpath("//div[text()=' Well Attributes ']")));

expect("lease").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='lease']//input")), "Lease name field could not be located"), "Lease name  not matching");

expect("fieldname").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='field']//input")), "Field name field could not be located"), "Field name  not matching");

expect("engineername").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='engineer']//input")), "Engineer name field could not be located"), "Engineer name  not matching");

expect("region").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='geographicRegion']//input")), "Region name field could not be located"), "Region name  not matching");

expect("foreman").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='foreman']//input")), "Foreman name field could not be located"), "Foreman name  not matching");

expect("testgauger").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='gaugerBeat']//input")), "Gauger name field could not be located"), "Gauger name  not matching");

});
it('Create Gas Injection well', function() {
//without model file upload
var until = protractor.ExpectedConditions;

 el=element(by.xpath("//div[text()='Well Configuration']"));
waitclick(el);

 el=element(by.xpath("//button[@name='createNewWellButton']"));
waitclick(el);

element(by.id("wellName")).sendKeys("GIJ");
var drop=element(by.id("wellType")).click();

browser.waitForAngular();
var rrltp=element(by.xpath("//li[text()='Gas Injection']"));
waitclick(rrltp);
var scadatype=element(by.id("scadaType"));
waitclick(scadatype);
 
var le=element(by.xpath("//li[text()='CygNet']"));
waitclick(le);

var cygd=element(by.id("cygNetDomain"));
waitclick(cygd);

var e=element(by.xpath("//li[text()='27212']"))
waitclick(e);
waitforload();
var serv=element(by.xpath("//span[text()='Select service...']"));
waitclick(serv); 
var av=element(by.xpath("//li[text()='CYG_DEMO.UIS']"));
waitclick(av);
var fac=element(by.xpath("//input[@id='facilityId']/following-sibling::button"));
waitclick(fac);
browser.waitForAngular();
waitforload();
var table=element(by.xpath("//table/tbody/tr/td[text()='SAM_0171']"));
waitclick(table); 
browser.waitForAngular();
element(by.xpath("//button[text()=' Apply ']")).click();
var comdate=element(by.xpath("//kendo-datepicker//input"));
browser.wait(until.visibilityOf(comdate), 5000, 'Element taking too long to appear in the DOM');
comdate.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a")); 
comdate.sendKeys(protractor.Key.chord(protractor.Key.DELETE));
comdate.sendKeys("12202018");
 
 var wb=element(by.xpath("(//kendo-searchbar/input)[1]"));
sendtext(wb, "88888");

 var bh=element(by.xpath("(//kendo-searchbar/input)[2]"));
sendtext(bh, "8888");

 var iapi=element(by.xpath("//input[@id='intervalAPI']"));
sendtext(iapi, "testapi8888");

var wdep=element(by.id("wellDepthDatum"));
waitclick(wdep);

var dop=element(by.xpath("//li[text()='Derrick Floor']"));
waitclick(dop);

var depelev=element(by.xpath("//kendo-numerictextbox[@id='datumElevation']//input"));
sendtext(depelev, "1");

var gelev=element(by.xpath("//kendo-numerictextbox[@id='datumGroundElevation']//input"));
sendtext(gelev, "1");

waitclick(element(by.id("wellStatus")));
waitclick(element(by.xpath("//li[text()='Active']")));

waitclick(element(by.xpath("//div[text()=' Well Attributes ']")));

sendtext(element(by.xpath("//kendo-combobox[@name='lease']//input")), "lease");

sendtext(element(by.xpath("//kendo-combobox[@name='field']//input")), "fieldname");

sendtext(element(by.xpath("//kendo-combobox[@name='engineer']//input")), "engineername");

sendtext(element(by.xpath("//kendo-combobox[@name='geographicRegion']//input")), "region");

sendtext(element(by.xpath("//kendo-combobox[@name='foreman']//input")), "foreman");

sendtext(element(by.xpath("//kendo-combobox[@name='gaugerBeat']//input")), "testgauger");


waitclick(element(by.xpath("//span[text()='Save']")));
//waitclick(element(by.xpath("//div[contains(@class,'toast-message')]")));
//var text=element(by.xpath("//div[contains(@class,'toast-message')]")).getText();
toastverify("Well GIJ saved successfully", "Error While saving NF well");

 });
it('Verify created Gas Injection well', function() {

waitforload();
waitclick(element(by.xpath("//div[text()='Network Configuration']")));
waitforload();
waitclick(element(by.xpath("//div[@class='system-rail-container']//span[contains(@class,'k-dropdown-wrap ')]")));
waitclick(element(by.xpath("//li[text()='GIJ']")));
waitforload();
waitclick(element(by.xpath("//div[text()='Well Configuration']")));
waitforload();
expect("GIJ").toEqual(getinputtext(element(by.id("wellName")), "Well Name field could not be located"), "Well Name not matching");

expect("Gas Injection").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='wellType']//span[@class='k-input']")) , "Well Type field could not be located"), "Well Type not matching");

expect("CygNet").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='scadaType']//span[@class='k-input']")), "Scada Type field could not be located"), "Scada Type not matching");

expect("27212").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='cygNetDomain']//span[@class='k-input']")), "Cygnet Domain field could not be located"), "cygNetDomain  not matching");

expect("CYG_DEMO.UIS").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='siteService']//span[@class='k-input']")), "Site Service field could not be located"), "Site Service  not matching");

expect("SAM_0171").toEqual(getinputtext(element(by.id("facilityId")), "Facility field could not be located"), "Facility ID  not matching");

var WellboreIDtext=element(by.id("assemblyAPI")).getAttribute('value');
expect("88888").toEqual(WellboreIDtext, "Wellbore id not matching");

var Borehole=element(by.id("subAssemblyAPI")).getAttribute('value');
expect("8888").toEqual(Borehole, "Borehole not matching");

expect("testapi8888").toEqual(getinputtext(element(by.id("intervalAPI")), "Interval API could not be located"), "intervalAPI  not matching");

expect("Derrick Floor").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='wellDepthDatum']//span[@class='k-input']")), "Depth Ref field could not be located"), "Depth ref  not matching");

expect("1.00").toEqual(getinputtext(element(by.xpath("//kendo-numerictextbox[@id='datumElevation']//input")), "Depth Elev could not be located"), "Depth ELev  not matching");
expect("1.00").toEqual(getinputtext(element(by.xpath("//kendo-numerictextbox[@id='datumGroundElevation']//input")), "Ground Elev could not be located"), "Ground ELev  not matching");

expect("Active").toEqual(getspantext(element(by.xpath("//kendo-dropdownlist[@id='wellStatus']//span[@class='k-input']")), "Status field could not be located"), "Status  not matching");

waitclick(element(by.xpath("//div[text()=' Well Attributes ']")));

expect("lease").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='lease']//input")), "Lease name field could not be located"), "Lease name  not matching");

expect("fieldname").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='field']//input")), "Field name field could not be located"), "Field name  not matching");

expect("engineername").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='engineer']//input")), "Engineer name field could not be located"), "Engineer name  not matching");

expect("region").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='geographicRegion']//input")), "Region name field could not be located"), "Region name  not matching");

expect("foreman").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='foreman']//input")), "Foreman name field could not be located"), "Foreman name  not matching");

expect("testgauger").toEqual(getinputtext(element(by.xpath("//kendo-combobox[@name='gaugerBeat']//input")), "Gauger name field could not be located"), "Gauger name  not matching");

});
it('Create Water Injection well', function() {
//without model file upload 
//var until = protractor.ExpectedConditions;

waitclick(findbyxpath(PageObject.WellConfigPage.wellconfigurationTab));
waitclick(findbyxpath(PageObject.WellConfigPage.createnewwellbutton));
sendtext(findbyid(PageObject.WellConfigPage.wellnameinput), "WIJ");
waitclick(findbyid(PageObject.WellConfigPage.welltypedropdwn));
var rrltp=element(by.xpath("//li[text()='Water Injection']"));
waitclick(rrltp);
waitclick(findbyid(PageObject.WellConfigPage.scadatypedrpdwn));
waitclick(findbyxpath(PageObject.WellConfigPage.scadatypename));
waitclick(findbyid(PageObject.WellConfigPage.cygnetdomaindrpdwn));
waitclick(findbyxpath(PageObject.WellConfigPage.cygnetdomainname));
waitforload();
waitclick(findbyxpath(PageObject.WellConfigPage.cygnetservicedrpdwn));
waitclick(findbyxpath(PageObject.WellConfigPage.cygnetservicename)); 
waitclick(findbyxpath(PageObject.WellConfigPage.facilitybutton)); 
browser.waitForAngular();
waitforload();
var table=element(by.xpath("//table/tbody/tr/td[text()='RPOC_0404']"));
waitclick(table); 
browser.waitForAngular();
waitclick(findbyxpath(PageObject.WellConfigPage.applybutton)); 
waitclick(findbyxpath(PageObject.WellConfigPage.commissioninput)); 
sendspecialkey(findbyxpath(PageObject.WellConfigPage.commissioninput),"selectall");
sendspecialkey(findbyxpath(PageObject.WellConfigPage.commissioninput),"delete");
sendtext(findbyxpath(PageObject.WellConfigPage.commissioninput), "12202018");
sendtext(findbyxpath(PageObject.WellConfigPage.wellboreinput), "76567"); 
sendtext(findbyxpath(PageObject.WellConfigPage.boreholeinput), "3456");
sendtext(findbyxpath(PageObject.WellConfigPage.intervalinput), "testapi2222");
waitclick(findbyid(PageObject.WellConfigPage.welldepthreference)); 
var dop=element(by.xpath("//li[text()='Derrick Floor']"));
waitclick(dop);
sendtext(findbyxpath(PageObject.WellConfigPage.depthelevation),"1"); 
sendtext(findbyxpath(PageObject.WellConfigPage.groundelevation),"1"); 
waitclick(findbyid(PageObject.WellConfigPage.wellstatusdrpdwn));
waitclick(element(by.xpath("//li[text()='Active']")));
waitclick(findbyxpath(PageObject.WellConfigPage.wellattributetab));
sendtext(findbyxpath(PageObject.WellConfigPage.leasename),"lease"); 
sendtext(findbyxpath(PageObject.WellConfigPage.fieldname),"fieldname"); 
sendtext(findbyxpath(PageObject.WellConfigPage.engineername),"engineername"); 
sendtext(findbyxpath(PageObject.WellConfigPage.regionname),"regionname"); 
sendtext(findbyxpath(PageObject.WellConfigPage.foremanname),"foreman"); 
sendtext(findbyxpath(PageObject.WellConfigPage.gaugername),"testgauger"); 
waitclick(findbyxpath(PageObject.WellConfigPage.savebutton));
toastverify("Well WIJ saved successfully", "Error While saving WIJ well");
});
it('Verify created Water Injection well', function() {
waitforload();
waitclick(findbyxpath(PageObject.NetworkConfigPage.networkconfigurationtab));
waitforload();
waitclick(findbyxpath(PageObject.selectwelldropdown));
waitclick(element(by.xpath("//li[text()='GIJ']")));
waitforload();
waitclick(findbyxpath(PageObject.WellConfigPage.wellconfigurationTab));
waitforload();
expect("WIJ").toEqual(getinputtext(findbyid(PageObject.WellConfigPage.wellnameinput), "Well Name field could not be located"), "Well Name not matching");

expect("Water Injection").toEqual(getspantext(findbyxpath(PageObject.WellConfigPage.welltypefetchtextfield) , "Well Type field could not be located"), "Well Type not matching");

expect("CygNet").toEqual(getspantext(findbyxpath(PageObject.WellConfigPage.scadatypefetchtextfield), "Scada Type field could not be located"), "Scada Type not matching");

expect("27212").toEqual(getspantext(findbyxpath(PageObject.WellConfigPage.cygnetdomainfetchtextfield), "Cygnet Domain field could not be located"), "cygNetDomain  not matching");

expect("CYG_DEMO.UIS").toEqual(getspantext(findbyxpath(PageObject.WellConfigPage.cygnetservicefetchtextfield), "Site Service field could not be located"), "Site Service  not matching");

expect("RPOC_0404").toEqual(getinputtext(findbyid(PageObject.WellConfigPage.facilityfetchtextfield), "Facility field could not be located"), "Facility ID  not matching");

var WellboreIDtext=findbyid(PageObject.WellConfigPage.wellborefetchtextfield).getAttribute('value');
expect("76567").toEqual(WellboreIDtext, "Wellbore id not matching");

var Borehole=findbyid(PageObject.WellConfigPage.boreholefetchtextfield).getAttribute('value');
expect("3456").toEqual(Borehole, "Borehole not matching");

expect("testapi2222").toEqual(getinputtext(findbyxpath(PageObject.WellConfigPage.intervalinput), "Interval API could not be located"), "intervalAPI  not matching");

expect("Derrick Floor").toEqual(getspantext(findbyxpath(PageObject.WellConfigPage.welldepthreferencefetchtextfield), "Depth Ref field could not be located"), "Depth ref  not matching");

expect("1.00").toEqual(getinputtext(findbyxpath(PageObject.WellConfigPage.depthelevation), "Depth Elev could not be located"), "Depth ELev  not matching");
expect("1.00").toEqual(getinputtext(findbyxpath(PageObject.WellConfigPage.groundelevation), "Ground Elev could not be located"), "Ground ELev  not matching");

expect("Active").toEqual(getspantext(findbyxpath(PageObject.WellConfigPage.wellstatusfetchtextfield), "Status field could not be located"), "Status  not matching");

waitclick(findbyxpath(PageObject.WellConfigPage.wellattributetab));

expect("lease").toEqual(getinputtext(findbyxpath(PageObject.WellConfigPage.leasename), "Lease name field could not be located"), "Lease name  not matching");

expect("fieldname").toEqual(getinputtext(findbyxpath(PageObject.WellConfigPage.fieldname), "Field name field could not be located"), "Field name  not matching");

expect("engineername").toEqual(getinputtext(findbyxpath(PageObject.WellConfigPage.engineername), "Engineer name field could not be located"), "Engineer name  not matching");

expect("regionname").toEqual(getinputtext(findbyxpath(PageObject.WellConfigPage.regionname), "Region name field could not be located"), "Region name  not matching");

expect("foreman").toEqual(getinputtext(findbyxpath(PageObject.WellConfigPage.foremanname), "Foreman name field could not be located"), "Foreman name  not matching");

expect("testgauger").toEqual(getinputtext(findbyxpath(PageObject.WellConfigPage.gaugername), "Gauger name field could not be located"), "Gauger name  not matching");

});
});
function waitclick(el){	
var until = protractor.ExpectedConditions;
browser.wait(until.elementToBeClickable(el), 9000, 'Element taking too long to appear in the DOM');	
el.click();
};
function toastverify(comptext, reasontext){
var until = protractor.ExpectedConditions;
var toast=element(by.xpath("//div[contains(@class,'toast-message')]"));
browser.wait(until.presenceOf(toast), 20000, 'Element taking too long to appear in the DOM');	
var text=element(by.xpath("//div[contains(@class,'toast-message')]")).getText();
expect(text).toContain(comptext, reasontext);
	
}
function getinputtext(el, errortext){	
var until = protractor.ExpectedConditions;
browser.wait(until.elementToBeClickable(el), 9000, errortext);	
var text=el.getAttribute('value');
return text;
};
function getspantext(el, errortext){	
var until = protractor.ExpectedConditions;
browser.wait(until.elementToBeClickable(el), 5000, errortext);	
var text=el.getText();
return text;
};
function waitforload(){
var until = protractor.ExpectedConditions;
var loader=element(by.xpath("//div[@class='block-ui-wrapper block-ui-main active']"));
browser.wait(until.invisibilityOf(loader), 20000, 'Element taking too long to appear in the DOM');
};
function sendtext(el, text){	
var until = protractor.ExpectedConditions;
browser.wait(until.elementToBeClickable(el), 5000, 'Element taking too long to appear in the DOM');	
el.sendKeys(text);
};
function findbyxpath(data){	
var el=element(by.xpath(data));
return el;
};
function findbyid(data){	
var el=element(by.id(data));
return el;
};
function sendspecialkey(el,data){
	switch(data){
		
		case 'selectall':
		el.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a")); 
		break;
		case 'delete':
		el.sendKeys(protractor.Key.chord(protractor.Key.DELETE));
		break;
		default:
		expect("Keys to be valid").toEqual("Key values could not be found under sendspecialkey method");
		
	}
	
};