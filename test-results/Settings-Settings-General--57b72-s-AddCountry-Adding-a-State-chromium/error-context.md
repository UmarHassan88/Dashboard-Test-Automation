# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Settings\Settings-General\1_Locations\AddCountry.spec.js >> Adding a State
- Location: dashboard-project\tests\Settings\Settings-General\1_Locations\AddCountry.spec.js:9:5

# Error details

```
TimeoutError: locator.click: Timeout 3000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'submit' })
    - locator resolved to <button disabled tabindex="-1" type="submit" class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation Mui-disabled MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation mui-1cnbxog">submit</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    6 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=f8e1]:
  - alert [ref=f8e2]: States Settings | List international Portal
  - generic [ref=f8e3]:
    - generic [ref=f8e4]:
      - generic [ref=f8e5]:
        - link [ref=f8e6] [cursor=pointer]:
          - /url: /dashboard/profile/me/view
        - button [ref=f8e9] [cursor=pointer]
      - paragraph [ref=f8e12]: Management Platform
      - generic [ref=f8e13]:
        - navigation [ref=f8e14]:
          - button [ref=f8e15]:
            - generic [ref=f8e20]: Accounts
        - separator [ref=f8e23]
        - navigation [ref=f8e24]:
          - button [ref=f8e25]:
            - generic [ref=f8e29]: Aqary INT users
        - separator [ref=f8e32]
        - navigation [ref=f8e33]:
          - button [ref=f8e34]:
            - generic [ref=f8e38]: Profiles
        - separator [ref=f8e41]
        - navigation [ref=f8e42]:
          - button [ref=f8e43]:
            - generic [ref=f8e48]: Projects
        - separator [ref=f8e51]
        - navigation [ref=f8e52]:
          - button [ref=f8e53]:
            - generic [ref=f8e57]: Requests
        - separator [ref=f8e60]
        - navigation [ref=f8e61]:
          - button [ref=f8e62]:
            - generic [ref=f8e66]: Financial Department
        - separator [ref=f8e69]
        - navigation [ref=f8e70]:
          - button [ref=f8e71]:
            - generic [ref=f8e75]: Legal Department
        - separator [ref=f8e78]
        - navigation [ref=f8e79]:
          - button [ref=f8e80]:
            - generic [ref=f8e85]: Aqary Area
        - separator [ref=f8e88]
        - navigation [ref=f8e89]:
          - button [ref=f8e90]:
            - generic [ref=f8e96]:
              - text: Location Guide
              - generic [ref=f8e97]: Beta
        - separator [ref=f8e98]
        - navigation [ref=f8e99]:
          - button [ref=f8e100]:
            - generic [ref=f8e105]: Blogs
        - separator [ref=f8e108]
        - navigation [ref=f8e109]:
          - button [ref=f8e110]:
            - generic [ref=f8e114]: Marketing
        - separator [ref=f8e117]
        - navigation [ref=f8e118]:
          - button [ref=f8e119]:
            - generic [ref=f8e124]: Lead Tracking
        - separator [ref=f8e127]
        - navigation [ref=f8e128]:
          - button [ref=f8e129]:
            - generic [ref=f8e134]: Control Panel
        - separator [ref=f8e137]
        - navigation [ref=f8e138]:
          - button [ref=f8e139]:
            - generic [ref=f8e145]: Ecosystem
        - separator [ref=f8e148]
        - navigation [ref=f8e149]:
          - button [ref=f8e150]:
            - generic [ref=f8e154]: Settings
          - link [ref=f8e160] [cursor=pointer]:
            - /url: /dashboard/settings/finance
            - button [ref=f8e162]:
              - generic [ref=f8e166]: Finance
          - link [ref=f8e172] [cursor=pointer]:
            - /url: /dashboard/settings/legal
            - button [ref=f8e174]:
              - generic [ref=f8e178]: Legal
          - link [ref=f8e184] [cursor=pointer]:
            - /url: /dashboard/settings/account
            - button [ref=f8e186]:
              - generic [ref=f8e192]: Account
          - link [ref=f8e198] [cursor=pointer]:
            - /url: /dashboard/settings/general
            - button [ref=f8e200]:
              - generic [ref=f8e205]: General
          - link [ref=f8e211] [cursor=pointer]:
            - /url: /dashboard/settings/listing
            - button [ref=f8e213]:
              - generic [ref=f8e217]: Listing
          - link [ref=f8e223] [cursor=pointer]:
            - /url: /dashboard/settings/services
            - button [ref=f8e225]:
              - generic [ref=f8e230]: Services
        - separator [ref=f8e233]
        - navigation [ref=f8e234]:
          - button [ref=f8e235]:
            - generic [ref=f8e239]: System Health
        - separator [ref=f8e242]
      - button [ref=f8e243] [cursor=pointer]:
        - generic [ref=f8e247]:
          - generic [ref=f8e248]: Super Admin
          - generic [ref=f8e249]: superadmin@aqaryint.com
      - generic [ref=f8e250]:
        - button [ref=f8e251] [cursor=pointer]
        - button [ref=f8e254] [cursor=pointer]
        - button [ref=f8e258] [cursor=pointer]
        - button [ref=f8e264] [cursor=pointer]
    - main [ref=f8e267]:
      - generic [ref=f8e269]:
        - navigation [ref=f8e270]:
          - list [ref=f8e271]:
            - listitem [ref=f8e272]:
              - paragraph [ref=f8e273]: Manage State
        - heading [level=3] [ref=f8e274]: Manage State
      - generic [ref=f8e276]:
        - link [ref=f8e280] [cursor=pointer]:
          - /url: /dashboard/settings/general
          - text: Manage State
        - generic [ref=f8e284]:
          - generic [ref=f8e286]:
            - button [ref=f8e287] [cursor=pointer]: Add State
            - generic [ref=f8e289]:
              - button [ref=f8e290] [cursor=pointer]
              - button [ref=f8e293] [cursor=pointer]
              - button [ref=f8e296] [cursor=pointer]
              - button [ref=f8e299] [cursor=pointer]
              - button [ref=f8e302] [cursor=pointer]
          - table [ref=f8e306]:
            - rowgroup [ref=f8e307]:
              - row [ref=f8e308]:
                - columnheader [ref=f8e309]:
                  - generic [ref=f8e310]: SN
                - columnheader [ref=f8e314]:
                  - generic [ref=f8e315]:
                    - generic [ref=f8e316] [cursor=pointer]:
                      - generic [ref=f8e317]: Country name
                      - button [ref=f8e319]
                    - button [ref=f8e323] [cursor=pointer]
                  - textbox [ref=f8e331]:
                    - /placeholder: Filter by Country name
                - columnheader [ref=f8e332]:
                  - generic [ref=f8e333]:
                    - generic [ref=f8e334] [cursor=pointer]:
                      - generic [ref=f8e335]: State name
                      - button [ref=f8e337]
                    - button [ref=f8e341] [cursor=pointer]
                  - textbox [ref=f8e349]:
                    - /placeholder: Filter by State name
                - columnheader [ref=f8e350]:
                  - generic [ref=f8e351]:
                    - generic [ref=f8e352] [cursor=pointer]:
                      - generic [ref=f8e353]: State Name Arabic
                      - button [ref=f8e355]
                    - button [ref=f8e359] [cursor=pointer]
                  - textbox [ref=f8e367]:
                    - /placeholder: Filter by State Name Arabic
                - columnheader [ref=f8e368]:
                  - generic [ref=f8e369]:
                    - generic [ref=f8e370] [cursor=pointer]:
                      - generic [ref=f8e371]: Latitude
                      - button [ref=f8e373]
                    - button [ref=f8e377] [cursor=pointer]
                - columnheader [ref=f8e380]:
                  - generic [ref=f8e381]:
                    - generic [ref=f8e382] [cursor=pointer]:
                      - generic [ref=f8e383]: Longitude
                      - button [ref=f8e385]
                    - button [ref=f8e389] [cursor=pointer]
                - columnheader [ref=f8e392]:
                  - generic [ref=f8e393]: Actions
            - rowgroup [ref=f8e397]:
              - row [ref=f8e398]:
                - cell [ref=f8e399]: "1"
                - cell [ref=f8e400]: country of peace
                - cell [ref=f8e401]: dove
                - cell [ref=f8e402]: dove
                - cell [ref=f8e403]: "120.3652"
                - cell [ref=f8e404]: "56.98568"
                - cell [ref=f8e405]:
                  - generic [ref=f8e406]:
                    - button [ref=f8e408] [cursor=pointer]
                    - button [ref=f8e414] [cursor=pointer]
              - row [ref=f8e417]:
                - cell [ref=f8e418]: "2"
                - cell [ref=f8e419]: New Zealdand
                - cell [ref=f8e420]: D
                - cell [ref=f8e421]: محافظة البريمي
                - cell [ref=f8e422]: "24.2223"
                - cell [ref=f8e423]: "54.2223"
                - cell [ref=f8e424]:
                  - generic [ref=f8e425]:
                    - button [ref=f8e427] [cursor=pointer]
                    - button [ref=f8e433] [cursor=pointer]
              - row [ref=f8e436]:
                - cell [ref=f8e437]: "3"
                - cell [ref=f8e438]: United Arab Emirates
                - cell [ref=f8e439]: Sharjah
                - cell [ref=f8e440]: الشارقة
                - cell [ref=f8e441]: "25.2691848"
                - cell [ref=f8e442]: "55.6934811"
                - cell [ref=f8e443]:
                  - generic [ref=f8e444]:
                    - button [ref=f8e446] [cursor=pointer]
                    - button [ref=f8e452] [cursor=pointer]
              - row [ref=f8e455]:
                - cell [ref=f8e456]: "4"
                - cell [ref=f8e457]: United Arab Emirates
                - cell [ref=f8e458]: Ajman
                - cell [ref=f8e459]: عجمان
                - cell [ref=f8e460]: "25.4064625"
                - cell [ref=f8e461]: "55.5555044"
                - cell [ref=f8e462]:
                  - generic [ref=f8e463]:
                    - button [ref=f8e465] [cursor=pointer]
                    - button [ref=f8e471] [cursor=pointer]
              - row [ref=f8e474]:
                - cell [ref=f8e475]: "5"
                - cell [ref=f8e476]: United Arab Emirates
                - cell [ref=f8e477]: Ras Al Khaimah
                - cell [ref=f8e478]: رأس الخيمة
                - cell [ref=f8e479]: "25.7737705"
                - cell [ref=f8e480]: "55.938232"
                - cell [ref=f8e481]:
                  - generic [ref=f8e482]:
                    - button [ref=f8e484] [cursor=pointer]
                    - button [ref=f8e490] [cursor=pointer]
              - row [ref=f8e493]:
                - cell [ref=f8e494]: "6"
                - cell [ref=f8e495]: United Arab Emirates
                - cell [ref=f8e496]: Fujairah
                - cell [ref=f8e497]: الفجيرة
                - cell [ref=f8e498]: "25.4147357"
                - cell [ref=f8e499]: "56.2313667"
                - cell [ref=f8e500]:
                  - generic [ref=f8e501]:
                    - button [ref=f8e503] [cursor=pointer]
                    - button [ref=f8e509] [cursor=pointer]
              - row [ref=f8e512]:
                - cell [ref=f8e513]: "7"
                - cell [ref=f8e514]: United Arab Emirates
                - cell [ref=f8e515]: Abu Dhabi
                - cell [ref=f8e516]: أبو ظبي
                - cell [ref=f8e517]: "24.4538352"
                - cell [ref=f8e518]: "54.3774014"
                - cell [ref=f8e519]:
                  - generic [ref=f8e520]:
                    - button [ref=f8e522] [cursor=pointer]
                    - button [ref=f8e528] [cursor=pointer]
              - row [ref=f8e531]:
                - cell [ref=f8e532]: "8"
                - cell [ref=f8e533]: New OMAN
                - cell [ref=f8e534]: Muscat
                - cell [ref=f8e535]: مسقط
                - cell [ref=f8e536]: "25.543"
                - cell [ref=f8e537]: "52.2225"
                - cell [ref=f8e538]:
                  - generic [ref=f8e539]:
                    - button [ref=f8e541] [cursor=pointer]
                    - button [ref=f8e547] [cursor=pointer]
              - row [ref=f8e550]:
                - cell [ref=f8e551]: "9"
                - cell [ref=f8e552]: Cape Verde 1783423869893
                - cell [ref=f8e553]: Test California 1783423871547
                - cell [ref=f8e554]: تحديث1783423871624
                - cell [ref=f8e555]: "39.3621"
                - cell [ref=f8e556]: "171.5377"
                - cell [ref=f8e557]:
                  - generic [ref=f8e558]:
                    - button [ref=f8e560] [cursor=pointer]
                    - button [ref=f8e566] [cursor=pointer]
              - row [ref=f8e569]:
                - cell [ref=f8e570]: "10"
                - cell [ref=f8e571]: Norway 1782989033163
                - cell [ref=f8e572]: Test New Mexico 1782989033794
                - cell [ref=f8e573]: تحديث1782989033857
                - cell [ref=f8e574]: "61.4877"
                - cell [ref=f8e575]: "-26.8747"
                - cell [ref=f8e576]:
                  - generic [ref=f8e577]:
                    - button [ref=f8e579] [cursor=pointer]
                    - button [ref=f8e585] [cursor=pointer]
              - row [ref=f8e588]:
                - cell [ref=f8e589]: "11"
                - cell [ref=f8e590]: Egypt
                - cell [ref=f8e591]: Marsa Matrouh Governorate
                - cell [ref=f8e592]: _
                - cell [ref=f8e593]: _
                - cell [ref=f8e594]: _
                - cell [ref=f8e595]:
                  - generic [ref=f8e596]:
                    - button [ref=f8e598] [cursor=pointer]
                    - button [ref=f8e604] [cursor=pointer]
              - row [ref=f8e607]:
                - cell [ref=f8e608]: "12"
                - cell [ref=f8e609]: Bahrain
                - cell [ref=f8e610]: Mana
                - cell [ref=f8e611]: _
                - cell [ref=f8e612]: "21"
                - cell [ref=f8e613]: "12"
                - cell [ref=f8e614]:
                  - generic [ref=f8e615]:
                    - button [ref=f8e617] [cursor=pointer]
                    - button [ref=f8e623] [cursor=pointer]
              - row [ref=f8e626]:
                - cell [ref=f8e627]: "13"
                - cell [ref=f8e628]: Ethiopia
                - cell [ref=f8e629]: Addis Ababa
                - cell [ref=f8e630]: _
                - cell [ref=f8e631]: "9.0358287"
                - cell [ref=f8e632]: "38.7524127"
                - cell [ref=f8e633]:
                  - generic [ref=f8e634]:
                    - button [ref=f8e636] [cursor=pointer]
                    - button [ref=f8e642] [cursor=pointer]
              - row [ref=f8e645]:
                - cell [ref=f8e646]: "14"
                - cell [ref=f8e647]: Bahrain
                - cell [ref=f8e648]: Manama
                - cell [ref=f8e649]: Manama
                - cell [ref=f8e650]: _
                - cell [ref=f8e651]: _
                - cell [ref=f8e652]:
                  - generic [ref=f8e653]:
                    - button [ref=f8e655] [cursor=pointer]
                    - button [ref=f8e661] [cursor=pointer]
              - row [ref=f8e664]:
                - cell [ref=f8e665]: "15"
                - cell [ref=f8e666]: Palau 1782989103036
                - cell [ref=f8e667]: Test Montana 1782989103665
                - cell [ref=f8e668]: تحديث1782989103724
                - cell [ref=f8e669]: "19.0018"
                - cell [ref=f8e670]: "74.4173"
                - cell [ref=f8e671]:
                  - generic [ref=f8e672]:
                    - button [ref=f8e674] [cursor=pointer]
                    - button [ref=f8e680] [cursor=pointer]
              - row [ref=f8e683]:
                - cell [ref=f8e684]: "16"
                - cell [ref=f8e685]: Australia 111
                - cell [ref=f8e686]: lllyy
                - cell [ref=f8e687]: _
                - cell [ref=f8e688]: "333"
                - cell [ref=f8e689]: "4444"
                - cell [ref=f8e690]:
                  - generic [ref=f8e691]:
                    - button [ref=f8e693] [cursor=pointer]
                    - button [ref=f8e699] [cursor=pointer]
              - row [ref=f8e702]:
                - cell [ref=f8e703]: "17"
                - cell [ref=f8e704]: United Arab Emirates
                - cell [ref=f8e705]: hjuhkil
                - cell [ref=f8e706]: _
                - cell [ref=f8e707]: "54"
                - cell [ref=f8e708]: "19"
                - cell [ref=f8e709]:
                  - generic [ref=f8e710]:
                    - button [ref=f8e712] [cursor=pointer]
                    - button [ref=f8e718] [cursor=pointer]
              - row [ref=f8e721]:
                - cell [ref=f8e722]: "18"
                - cell [ref=f8e723]: Egypt
                - cell [ref=f8e724]: Silversands North Coast
                - cell [ref=f8e725]: Helsinkii
                - cell [ref=f8e726]: _
                - cell [ref=f8e727]: _
                - cell [ref=f8e728]:
                  - generic [ref=f8e729]:
                    - button [ref=f8e731] [cursor=pointer]
                    - button [ref=f8e737] [cursor=pointer]
              - row [ref=f8e740]:
                - cell [ref=f8e741]: "19"
                - cell [ref=f8e742]: United Kingdom
                - cell [ref=f8e743]: London_2
                - cell [ref=f8e744]: لندن
                - cell [ref=f8e745]: "51.5074456555"
                - cell [ref=f8e746]: "-0.1277653"
                - cell [ref=f8e747]:
                  - generic [ref=f8e748]:
                    - button [ref=f8e750] [cursor=pointer]
                    - button [ref=f8e756] [cursor=pointer]
              - row [ref=f8e759]:
                - cell [ref=f8e760]: "20"
                - cell [ref=f8e761]: Latvia12
                - cell [ref=f8e762]: gomba town45
                - cell [ref=f8e763]: _
                - cell [ref=f8e764]: "56"
                - cell [ref=f8e765]: "85"
                - cell [ref=f8e766]:
                  - generic [ref=f8e767]:
                    - button [ref=f8e769] [cursor=pointer]
                    - button [ref=f8e775] [cursor=pointer]
          - generic [ref=f8e781]:
            - generic [ref=f8e782]:
              - generic [ref=f8e783]: Rows per page
              - generic [ref=f8e784]:
                - combobox [ref=f8e785] [cursor=pointer]: "20"
                - textbox: "20"
            - generic [ref=f8e786]: 1-20 of 207
            - generic [ref=f8e787]:
              - generic [ref=f8e788]:
                - button [disabled]
              - generic [ref=f8e789]:
                - button [disabled]
              - button [ref=f8e791] [cursor=pointer]
              - button [ref=f8e795] [cursor=pointer]
  - dialog [ref=f8e800]:
    - generic [ref=f8e801]:
      - button "close" [ref=f8e802] [cursor=pointer]
      - heading "Add State" [level=2] [ref=f8e805]
      - generic [ref=f8e807]:
        - generic [ref=f8e808]:
          - generic [ref=f8e809]:
            - text: Select Country
            - generic [ref=f8e810]: "*"
          - generic [ref=f8e813]:
            - combobox "Select Country" [ref=f8e814]
            - button "Open" [ref=f8e816] [cursor=pointer]
            - group
          - paragraph [ref=f8e819]: Please Select Country
        - generic [ref=f8e820]:
          - generic [ref=f8e821]:
            - text: State Name
            - generic [ref=f8e822]: "*"
          - generic [ref=f8e824]:
            - textbox "Enter State" [ref=f8e825]
            - group
          - paragraph [ref=f8e826]: Please Enter State
        - generic [ref=f8e827]:
          - generic [ref=f8e828]: State Name Arabic
          - generic [ref=f8e830]:
            - textbox "Enter State" [ref=f8e831]
            - group
          - paragraph [ref=f8e832]: Please Enter State
        - generic [ref=f8e833]:
          - generic [ref=f8e834]: Latitude
          - generic [ref=f8e836]:
            - spinbutton "Enter latitude" [ref=f8e837]
            - group
          - paragraph [ref=f8e838]: Please enter latitude
        - generic [ref=f8e839]:
          - generic [ref=f8e840]: Longitude
          - generic [ref=f8e842]:
            - spinbutton "Enter longitude" [ref=f8e843]
            - group
          - paragraph [ref=f8e844]: Please enter longitude
        - generic [ref=f8e845]:
          - generic [ref=f8e846]: Is Capital?
          - switch [ref=f8e849] [cursor=pointer]
        - generic [ref=f8e852]:
          - button "submit" [disabled]
          - button "clear" [ref=f8e853] [cursor=pointer]
```

# Test source

```ts
  103 |   // Wait for the map canvas
  104 |   const map = page.locator(".gm-style"); // Replace with your map element
  105 |   await map.waitFor({ state: "visible" });
  106 | 
  107 |   const box = await map.boundingBox();
  108 |   if (!box) throw new Error("Map bounding box not found");
  109 | 
  110 |   await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
  111 | 
  112 |   //page.waitForTimeout(2000);
  113 |   const closeMap = page.getByRole("button", { name: "close" });
  114 |   await closeMap.click();
  115 | }
  116 | 
  117 | export async function tillAccounts(page) {
  118 |   await Login(page);
  119 |   // const profileIcon = await page
  120 |   //   .getByRole("button")
  121 |   //   .filter({ hasText: /^$/ })
  122 |   //   .nth(5);
  123 |   // await profileIcon.click();
  124 |   // const v2Toggle = page.getByRole("checkbox", { name: "Switch to v2" });
  125 |   // await v2Toggle.click();
  126 |   const V2UIAssert = await page.getByText("Property Management Platform");
  127 |   await expect(V2UIAssert).toBeVisible();
  128 |   const AccountsMenu = page.getByRole("button", { name: "Accounts" });
  129 |   await expect(AccountsMenu).toBeVisible();
  130 |   await AccountsMenu.click();
  131 |   const createAccountOption = page.getByRole("button", {
  132 |     name: "Create Account",
  133 |   });
  134 |   await expect(createAccountOption).toBeVisible();
  135 |   await createAccountOption.click();
  136 | 
  137 |   const accountTypeSelect = page.getByRole("combobox", {
  138 |     name: "Please Select Account Type",
  139 |   });
  140 |   await accountTypeSelect.click();
  141 | }
  142 | 
  143 | export async function randomonlystringGenerator(page, locator, length = 5) {
  144 |   const chars = "abcdefghijklmnopqrstuvwxyz";
  145 |   let result = "";
  146 |   for (let i = 0; i < length; i++) {
  147 |     // const randomIndex = Math.floor(Math.random() * chars.length);
  148 |     result += chars.charAt(Math.floor(Math.random() * chars.length));
  149 |   }
  150 |   await locator.fill(`Testing${result}`);
  151 | }
  152 | 
  153 | export async function randomStringGenerator(page, locator) {
  154 |   const randomValues = Math.random().toString(36).substring(2, 4);
  155 |   await locator.fill(`Testing${randomValues}`);
  156 | }
  157 | 
  158 | export async function tillGeneralSettings(page) {
  159 |   const generalSettings = page.getByRole("button", { name: "General" });
  160 |   await expect(generalSettings).toBeVisible();
  161 |   await generalSettings.click();
  162 | }
  163 | 
  164 | export async function tillAddCountry(page) {
  165 |   await Login(page);
  166 |   await tillSettings(page);
  167 |   await tillGeneralSettings(page);
  168 |   const countryOption = page.getByRole("button", { name: "Country" });
  169 |   await countryOption.click();
  170 |   const addCountry = page.getByRole("button", { name: "Add Country" });
  171 |   await expect(addCountry).toBeVisible();
  172 |   await addCountry.click();
  173 | }
  174 | 
  175 | export async function countryGenerator(page, locator, number) {
  176 |   let array = [
  177 |     "United Arab Emirates",
  178 |     "Pakistan",
  179 |     "Egypt",
  180 |     "Lebanon",
  181 |     "SA",
  182 |     "Brazil",
  183 |     "United Kingdom",
  184 |     "Sudan",
  185 |     "Algeria",
  186 |   ];
  187 |   const ran = Math.floor(Math.random() * number);
  188 |   let rand = array[ran];
  189 |   console.log("The country " + rand + " is selected indexed at " + ran);
  190 | 
  191 |   await locator.fill(rand);
  192 | }
  193 | 
  194 | export async function randomIntGenerator(page, locator) {
  195 |   const randomInt = Math.floor(Math.random() * 10).toString();
  196 | 
  197 |   await locator.fill(randomInt);
  198 | }
  199 | 
  200 | export async function submitButton(page) {
  201 |   const submitButton = page.getByRole("button", { name: "submit" });
  202 |   await expect(submitButton).toBeVisible();
> 203 |   await submitButton.click({ timeout: 3000 });
      |                      ^ TimeoutError: locator.click: Timeout 3000ms exceeded.
  204 | }
  205 | 
  206 | export async function selectCountry(page) {
  207 |   const select = page.getByRole("combobox", { name: "Select Country" });
  208 |   await select.click();
  209 |   await countryGenerator(page, select, 1);
  210 |   await dropdownSelectOnly(page, select);
  211 | }
  212 | 
  213 | export async function selectState(page) {
  214 |   const state = page.getByRole("combobox", { name: "Select State" });
  215 |   await state.click();
  216 |   await dropdownSelectOnly(page, state);
  217 | }
  218 | 
  219 | export async function selectCity(page) {
  220 |   const city = page.getByRole("combobox", { name: "Select City" });
  221 |   await city.click();
  222 |   await dropdownSelectOnly(page, city);
  223 | }
  224 | 
  225 | export async function selectCommunity(page) {
  226 |   const community = page.getByRole("combobox", { name: "Select Community" });
  227 |   await community.click();
  228 |   await dropdownSelectOnly(page, community);
  229 | }
  230 | 
  231 | export async function selectSubCommunity(page) {
  232 |   const subCommunity = page.getByRole("combobox", {
  233 |     name: "Select Sub Community",
  234 |   });
  235 |   await subCommunity.click();
  236 |   await dropdownSelectOnly(page, subCommunity);
  237 | }
  238 | 
  239 | export async function uploadFile(page, locator) {
  240 |   // await locator.click();
  241 |   await locator.setInputFiles("C:\\Users\\umar\\Downloads\\scanner.png");
  242 | }
  243 | 
  244 | export async function selectlatlang(page) {
  245 |   const lat = page.getByPlaceholder("Enter latitude");
  246 |   await randomIntGenerator(page, lat);
  247 |   const long = page.getByPlaceholder("Enter longitude");
  248 |   await randomIntGenerator(page, long);
  249 | }
  250 | 
  251 | export async function fetchElementValue(page, locator) {
  252 |   const elementValue = await locator.inputValue();
  253 |   console.log("Input Value: ", elementValue);
  254 | }
  255 | 
  256 | export async function mandatorycountryValidation(page) {
  257 |   await submitButton(page); //Submitting Empty Form to check Validations
  258 |   const country = page.getByText("Select Country *");
  259 |   //Validating the Required Fields b
  260 |   await expect(country).toHaveClass(/Mui error Mui-required/);
  261 | }
  262 | 
  263 | export async function mandatoryfieldsValidationCustom(page, locator) {
  264 |   await submitButton(page); //Submitting Empty Form to check Validations
  265 |   //Validating the Required Fields by classes
  266 |   await expect(locator).toHaveClass(/Mui-required/);
  267 | }
  268 | 
  269 | export async function dropdownSelectfromLast(page, locator) {
  270 |   await page.waitForTimeout(1000);
  271 |   await page.keyboard.press("ArrowUp");
  272 | 
  273 |   await locator.press("Enter");
  274 | }
  275 | 
  276 | export async function tillLegal(page) {
  277 |   const legalOption = page.getByRole("button", { name: "Legal", exact: true });
  278 |   await expect(legalOption).toBeVisible();
  279 |   await legalOption.click();
  280 |   const licensesSection = page.getByRole("button", { name: "Licenses" });
  281 |   await expect(licensesSection).toBeVisible();
  282 |   const certificatesSection = page.getByRole("button", { name: "Certificate" });
  283 |   await expect(certificatesSection).toBeVisible();
  284 |   const legalConditionSection = page.getByRole("button", {
  285 |     name: "Legal condition",
  286 |   });
  287 |   await expect(legalConditionSection).toBeVisible();
  288 | }
  289 | 
  290 | export async function mandatoryFields(page, locator) {
  291 |   await submitButton(page); //Submitting Empty Form to check Validations
  292 |   const childErrorClass = await locator.locator(".Mui-required");
  293 |   await expect(childErrorClass).toBeVisible();
  294 | }
  295 | 
  296 | export async function tillSettingsAccounts(page) {
  297 |   const accountOption = page.getByRole("button", {
  298 |     name: "Account",
  299 |     exact: true,
  300 |   });
  301 |   await expect(accountOption).toHaveText("Account");
  302 |   await accountOption.click();
  303 |   const companyIndustryOption = page.getByRole("button", {
```