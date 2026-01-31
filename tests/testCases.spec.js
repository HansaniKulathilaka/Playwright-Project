const { test, expect } = require('@playwright/test');

const testCases = [
  
  { input: 'Good morning oyaatath', expected: 'Good morning ඔයාටත්' },
  { input: 'Adha power cut ekak thiyenavalu 8.00 a.m. idhan', expected: 'අද power cut එකක් තියෙනවලු 8.00 a.m. ඉදන්' },
  { input: 'mee URL eken gihin mee app eka download karanna. Sign up vedhdhi oyaage email ekata OTP ekakuth evanavaa', expected: 'මේ URL එකෙන් ගිහින් මේ app එක download කරන්න. Sign up වෙද්දි ඔයාගෙ email එකට OTP එකකුත් එවනවා' },
  { input: 'Maarthu 11 mama nivaadu. api gihin 2 l wage soft drink bottle tikak gamu event ekata ena ayata dhenna.', expected: 'මාර්තු 11 මම නිවාඩු. අපි ගිහින් 2 l wage soft drink bottle ටිකක් ගමු event එකට එන අයට දෙන්න.' },
  { input: 'naee naee mama heta enne naee', expected: 'නෑ නෑ මම හෙට එන්නෙ නෑ ' },
  { input: 'Appatasiri, mata oyaa illapu potha geenna baeri unaa', expected: 'අප්පටසිරි, මට ඔයා ඉල්ලපු පොත ගේන්න බැරි උනා' },
  { input: 'mama ATM eka langa inne, oyaa enne nadhdha ?', expected: 'මම ATM එක ලග ඉන්නේ, ඔයා එන්නෙ නැද්ද ?' },
  { input: 'matameepothakiyavannadhennapuluvandhaoyaata', expected: 'මටමේපොතකියවන්නදෙන්නපුලුවන්දඔයාට' },
  { input: 'Oyaalage document tika (document 1,2) me group ekata evanna', expected: 'ඔයාලගෙ document ටික (document 1,2) මේ group එකට එවන්න' },
  { input: 'ʃ (5x-2)3x  meeka anukalanaya paadamen enne.', expected: 'ʃ (5x-2)3x මේක අනුකලනය පාඩමෙන් එන්නෙ.' },
  { input: 'Heta udhee 7 ta campus eka lagata enna, api ekathu karapu gaanata amatharava Rs 500 vagee athee aragena enna hamooma.', expected: 'හෙට උදේ 7 ට campus එක ලගට එන්න, අපි එකතු කරපු ගානට අමතරව Rs 500 වගේ අතේ අරගෙන එන්න හමෝම. ' },
  { input: 'meeka hadhissi vaedak, ee nisaa hamooma mama kiyapu dheeval hoyaaganna ASAP', expected: 'මේක හදිස්සි වැඩක්, ඒ නිසා හමෝම මම කියපු දේවල් හොයාගන්න ASAP' },
  { input: 'ee column ekata "yes" kiyala dhaanna', expected: 'ඒ column එකට "yes" කියල දාන්න' },
  { input: 'cake 1 kg, coffee packet 50g mama baaragaththaa. ', expected: 'cake 1 kg, coffee packet 50g මම බාරගත්තා.' },
  { input: 'books, stickers, pens ….. thava monaa hari oyaalata mathak unoth project ekata oonee dheval, group ekata dhaanna', expected: 'books, stickers, pens ….. තව මොනා හරි ඔයාලට මතක් උනොත් project එකට ඕනේ දෙවල්, group එකට දාන්න' },
  { input: 'loku RAM usage ekak yano meekata. Samahara ayata meka download kalaama open velaa naee', expected: 'ලොකු RAM usage එකක් යනො මේකට. සමහර අයට මෙක download කලාම open වෙලා නෑ' },
  { input: 'magee WiFi ekee avlak velaa mata iiye group call eka maedhadhi yanna unaa', expected: 'මගේ WiFi එකේ අව්ලක් වෙලා මට ඊයෙ group call එක මැදදි යන්න උනා' },
  { input: 'website ekata giyaama "404 error" kiyala enavaa ', expected: 'website එකට ගියාම "404 error" කියල එනවා ' },
  { input: 'Api eeye cool planet giyaa maalabee. Aluth blouses 2 gaththaa', expected: 'අපි ඒයෙ cool planet ගියා මාලබේ. අලුත් blouses 2 ගත්තා ' },
  { input: 'oyaata Saturday kiiyatadha enna puluvan', expected: 'ඔයාට Saturday කීයටද එන්න පුලුවන්' },
  { input: 'heta zoom meeting 2 thiyenavaa. Mata velavak naethi veyi colombo yanna', expected: 'හෙට zoom meeting 2 තියෙනවා. මට වෙලවක් නැති වෙයි colombo යන්න' },
  { input: 'mata CV ekak hadhaaganna oonee', expected: 'මට CV එකක් හදාගන්න ඕනේ' },
  { input: 'mama iiye word document eka hadhala ivara karaa', expected: 'මම ඊයෙ word document එක හදල ඉවර කරා' },
  { input: 'heta lectures 3 thiyenavaa', expected: 'හෙට lectures 3 තියෙනවා' },
  

  { input: 'oyata man okkoma wisthare kiyannam heta', expected: 'ඔයට මන් ඔක්කොම විස්තරේ කියන්නම් හෙට' },
  { input: 'ʃ (5x-2)3x .dx meeka anukalanaya paadamen enne.', expected: 'ʃ (5x-2)3x .dx මේක අනුකලනය පාඩමෙන් එන්නෙ.' },
  { input: 'bye bye! Heta meet wemu.', expected: 'bye bye! හෙට meet වෙමු.' },
  { input: 'heta ta witharak mata oyage white blouse eka one. Man Gaava white blouses na', expected: 'හෙට ට විතරක් මට ඔයාගෙ white blouse එක ඕනේ. මන් ගාව white blouses නෑ' },
  { input: 'Thava dhavas 2 i apita mee vaedeeta Thiyenne ', expected: 'තව දවස් 2 යි අපිට මේ වැඩේට තියෙන්නෙ ' },
  { input: 'Figma, Adobe illustrator dheken kaemathi ekak use karanna puluvan', expected: 'Figma, Adobe illustrator දෙකෙන් කැමති එකක් use කරන්න පුලුවන්' },
  { input: 'node.js , mongo DB, use karanna kivvaa backend ekata', expected: 'node.js , mongo DB, use කරන්න කිව්වා backend එකට' },
  { input: 'heta cargills ekata yamudha api dhennaa', expected: 'හෙට cargills එකට යමුද අපි දෙන්නා' },
  { input: 'ee column ekata "not a member" kiyala dhaanna', expected: 'ඒ column එකට "not a member" කියල දාන්න' },
  { input: 'mata .png format eken oyaage diagram eka evanna.code eka .html valin save karanna ', expected: 'මට .png format එකෙන් ඔයාගෙ diagram එක එවන්න.code එක .html වලින් save කරන්න ' },

  
];

for (const tc of testCases) {
  test(tc.input, async ({ page }, testInfo) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

    const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.').or(page.locator('textarea#fromText'));
    
    const outputBox = page.locator('div.output-text').or(page.getByText(tc.expected, { exact: true }));

    await inputBox.first().waitFor({ state: 'visible', timeout: 15000 });
    await inputBox.first().fill(tc.input);
    
    //await expect(outputBox).toHaveText(expected, { timeout: 20000 });
    await outputBox.waitFor({ state: 'visible', timeout: 15000 });
    await page.waitForTimeout(500);

    const actual = (await outputBox.innerText()).trim();
    const passed = actual === tc.expected;
    console.log(`\n>>> [${testInfo.title}] ${passed ? 'PASSED' : 'FAILED'} (expected: "${tc.expected}", actual: "${actual}")\n`);

    expect(actual).toBe(tc.expected);
  });
}