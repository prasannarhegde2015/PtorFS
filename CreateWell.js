describe('ForeSite Test', function () {


    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    it('Create New Well RRL ', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:2678');
        browser.manage().window().maximize();
        waitclick(findbyxpath('//*[text()="Configuration"]'));
        waitclick(findbyxpath('//*[text()="Well Configuration"]'));
        sendtext(findbyid('wellName'), "RPOC_00001");
        waitclick(findbyid('wellType'));
        waitclick(findbycsstext('li', 'RRL'));

        waitclick(findbyid('scadaType'));
        waitclick(findbycsstext('li', 'CygNet'));
        
        waitclick(findbyid('cygNetDomain'));
        waitclick(findbycsstext('li', '9077'));
        browser.sleep(3000);
        waitclick(findbyid('siteService'));
        waitclick(findbycsstext('li', '.UIS'));
        
        waitclick(findbyxpath('// label[@for="facilityId"]/following::button[1]'));
   
        browser.sleep(3000);


    });
});


function waitclick(el) {
    var until = protractor.ExpectedConditions;
    browser.wait(until.elementToBeClickable(el), 9000, 'Element taking too long to appear in the DOM');
    el.click();
};

function waitforload() {
    var until = protractor.ExpectedConditions;
    var loader = element(by.xpath("//div[@class='block-ui-wrapper block-ui-main active']"));
    browser.wait(until.invisibilityOf(loader), 20000, 'Element taking too long to appear in the DOM');
};

function sendtext(el, text) {
    var until = protractor.ExpectedConditions;
    browser.wait(until.elementToBeClickable(el), 5000, 'Element taking too long to appear in the DOM');
    el.clear();
    el.sendKeys(text);
};

function findbyxpath(data) {
    var el = element(by.xpath(data));
    return el;
};
function findbyid(data) {
    var el = element(by.id(data));
    return el;
};
function findbycsstext(data, dta) {
    var el = element(by.cssContainingText(data, dta));
    return el;
};