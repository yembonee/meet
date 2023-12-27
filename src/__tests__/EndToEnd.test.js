import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      //headless: false,
      //slowMo: 250,
      //timeout: 0,
    });
    page = await browser.newPage();

    await page.goto("http://localhost:3000/");
    page.waitForSelector(".event");
  });

  afterAll(async () => {
    browser.close();
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .description");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event .description");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide details", async () => {
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event .desription");
    expect(eventDetails).toBeNull();
  });
});
