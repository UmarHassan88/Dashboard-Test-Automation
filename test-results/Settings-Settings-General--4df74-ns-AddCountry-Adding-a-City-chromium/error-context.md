# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Settings\Settings-General\1_Locations\AddCountry.spec.js >> Adding a City
- Location: dashboard-project\tests\Settings\Settings-General\1_Locations\AddCountry.spec.js:14:5

# Error details

```
Test timeout of 15000ms exceeded.
```

```
Error: locator.click: Test timeout of 15000ms exceeded.
Call log:
  - waiting for getByRole('combobox', { name: 'Select State' })
    - locator resolved to <input disabled value="" id="_r_42_" type="text" role="combobox" autocomplete="off" spellcheck="false" aria-invalid="false" aria-expanded="false" autocapitalize="none" aria-autocomplete="list" placeholder="Select State" class="MuiInputBase-input MuiOutlinedInput-input Mui-disabled MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused mui-15tr9ot"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    14 × waiting for element to be visible, enabled and stable
       - element is not enabled
     - retrying click action
       - waiting 500ms
  - operation was aborted: Test timeout of 15000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=f10e1]:
  - alert [ref=f10e2]: Cities Settings | List international Portal
  - generic [ref=f10e3]:
    - generic [ref=f10e4]:
      - generic [ref=f10e5]:
        - link [ref=f10e6] [cursor=pointer]:
          - /url: /dashboard/profile/me/view
        - button [ref=f10e9] [cursor=pointer]
      - paragraph [ref=f10e12]: Management Platform
      - generic [ref=f10e13]:
        - navigation [ref=f10e14]:
          - button [ref=f10e15]:
            - generic [ref=f10e20]: Accounts
        - separator [ref=f10e23]
        - navigation [ref=f10e24]:
          - button [ref=f10e25]:
            - generic [ref=f10e29]: Aqary INT users
        - separator [ref=f10e32]
        - navigation [ref=f10e33]:
          - button [ref=f10e34]:
            - generic [ref=f10e38]: Profiles
        - separator [ref=f10e41]
        - navigation [ref=f10e42]:
          - button [ref=f10e43]:
            - generic [ref=f10e48]: Projects
        - separator [ref=f10e51]
        - navigation [ref=f10e52]:
          - button [ref=f10e53]:
            - generic [ref=f10e57]: Requests
        - separator [ref=f10e60]
        - navigation [ref=f10e61]:
          - button [ref=f10e62]:
            - generic [ref=f10e66]: Financial Department
        - separator [ref=f10e69]
        - navigation [ref=f10e70]:
          - button [ref=f10e71]:
            - generic [ref=f10e75]: Legal Department
        - separator [ref=f10e78]
        - navigation [ref=f10e79]:
          - button [ref=f10e80]:
            - generic [ref=f10e85]: Aqary Area
        - separator [ref=f10e88]
        - navigation [ref=f10e89]:
          - button [ref=f10e90]:
            - generic [ref=f10e96]:
              - text: Location Guide
              - generic [ref=f10e97]: Beta
        - separator [ref=f10e98]
        - navigation [ref=f10e99]:
          - button [ref=f10e100]:
            - generic [ref=f10e105]: Blogs
        - separator [ref=f10e108]
        - navigation [ref=f10e109]:
          - button [ref=f10e110]:
            - generic [ref=f10e114]: Marketing
        - separator [ref=f10e117]
        - navigation [ref=f10e118]:
          - button [ref=f10e119]:
            - generic [ref=f10e124]: Lead Tracking
        - separator [ref=f10e127]
        - navigation [ref=f10e128]:
          - button [ref=f10e129]:
            - generic [ref=f10e134]: Control Panel
        - separator [ref=f10e137]
        - navigation [ref=f10e138]:
          - button [ref=f10e139]:
            - generic [ref=f10e145]: Ecosystem
        - separator [ref=f10e148]
        - navigation [ref=f10e149]:
          - button [ref=f10e150]:
            - generic [ref=f10e154]: Settings
          - link [ref=f10e160] [cursor=pointer]:
            - /url: /dashboard/settings/finance
            - button [ref=f10e162]:
              - generic [ref=f10e166]: Finance
          - link [ref=f10e172] [cursor=pointer]:
            - /url: /dashboard/settings/legal
            - button [ref=f10e174]:
              - generic [ref=f10e178]: Legal
          - link [ref=f10e184] [cursor=pointer]:
            - /url: /dashboard/settings/account
            - button [ref=f10e186]:
              - generic [ref=f10e192]: Account
          - link [ref=f10e198] [cursor=pointer]:
            - /url: /dashboard/settings/general
            - button [ref=f10e200]:
              - generic [ref=f10e205]: General
          - link [ref=f10e211] [cursor=pointer]:
            - /url: /dashboard/settings/listing
            - button [ref=f10e213]:
              - generic [ref=f10e217]: Listing
          - link [ref=f10e223] [cursor=pointer]:
            - /url: /dashboard/settings/services
            - button [ref=f10e225]:
              - generic [ref=f10e230]: Services
        - separator [ref=f10e233]
        - navigation [ref=f10e234]:
          - button [ref=f10e235]:
            - generic [ref=f10e239]: System Health
        - separator [ref=f10e242]
      - button [ref=f10e243] [cursor=pointer]:
        - generic [ref=f10e247]:
          - generic [ref=f10e248]: Super Admin
          - generic [ref=f10e249]: superadmin@aqaryint.com
      - generic [ref=f10e250]:
        - button [ref=f10e251] [cursor=pointer]
        - button [ref=f10e254] [cursor=pointer]
        - button [ref=f10e258] [cursor=pointer]
        - button [ref=f10e264] [cursor=pointer]
    - main [ref=f10e267]:
      - generic [ref=f10e269]:
        - navigation [ref=f10e270]:
          - list [ref=f10e271]:
            - listitem [ref=f10e272]:
              - paragraph [ref=f10e273]: Manage City
        - heading [level=3] [ref=f10e274]: Manage City
      - generic [ref=f10e276]:
        - link [ref=f10e280] [cursor=pointer]:
          - /url: /dashboard/settings/general
          - text: Manage City
        - generic [ref=f10e284]:
          - generic [ref=f10e286]:
            - button [ref=f10e287] [cursor=pointer]: Add City
            - generic [ref=f10e289]:
              - button [ref=f10e290] [cursor=pointer]
              - button [ref=f10e293] [cursor=pointer]
              - button [ref=f10e296] [cursor=pointer]
              - button [ref=f10e299] [cursor=pointer]
              - button [ref=f10e302] [cursor=pointer]
          - table [ref=f10e306]:
            - rowgroup [ref=f10e307]:
              - row [ref=f10e308]:
                - columnheader [ref=f10e309]:
                  - generic [ref=f10e310]: SN
                - columnheader [ref=f10e314]:
                  - generic [ref=f10e315]:
                    - generic [ref=f10e316] [cursor=pointer]:
                      - generic [ref=f10e317]: Country Name
                      - button [ref=f10e319]
                    - button [ref=f10e323] [cursor=pointer]
                  - textbox [ref=f10e331]:
                    - /placeholder: Filter by Country Name
                - columnheader [ref=f10e332]:
                  - generic [ref=f10e333]:
                    - generic [ref=f10e334] [cursor=pointer]:
                      - generic [ref=f10e335]: State name
                      - button [ref=f10e337]
                    - button [ref=f10e341] [cursor=pointer]
                  - textbox [ref=f10e349]:
                    - /placeholder: Filter by State name
                - columnheader [ref=f10e350]:
                  - generic [ref=f10e351]:
                    - generic [ref=f10e352] [cursor=pointer]:
                      - generic [ref=f10e353]: City Name
                      - button [ref=f10e355]
                    - button [ref=f10e359] [cursor=pointer]
                  - textbox [ref=f10e367]:
                    - /placeholder: Filter by City Name
                - columnheader [ref=f10e368]:
                  - generic [ref=f10e369]:
                    - generic [ref=f10e370] [cursor=pointer]:
                      - generic [ref=f10e371]: City Name Arabic
                      - button [ref=f10e373]
                    - button [ref=f10e377] [cursor=pointer]
                  - textbox [ref=f10e385]:
                    - /placeholder: Filter by City Name Arabic
                - columnheader [ref=f10e386]:
                  - generic [ref=f10e387]:
                    - generic [ref=f10e388] [cursor=pointer]:
                      - generic [ref=f10e389]: Latitude
                      - button [ref=f10e391]
                    - button [ref=f10e395] [cursor=pointer]
                - columnheader [ref=f10e398]:
                  - generic [ref=f10e399]:
                    - generic [ref=f10e400] [cursor=pointer]:
                      - generic [ref=f10e401]: Longitude
                      - button [ref=f10e403]
                    - button [ref=f10e407] [cursor=pointer]
                - columnheader [ref=f10e410]:
                  - generic [ref=f10e411]: Actions
            - rowgroup [ref=f10e415]:
              - row [ref=f10e416]:
                - cell [ref=f10e417]: "1"
                - cell [ref=f10e418]: Norway 1782989033163
                - cell [ref=f10e419]: Test New Mexico 1782989033794
                - cell [ref=f10e420]: Updated Port Barryland 1794197709640
                - cell [ref=f10e421]: اختبار1794197706766
                - cell [ref=f10e422]: "-69.2091"
                - cell [ref=f10e423]: "-165.1432"
                - cell [ref=f10e424]:
                  - generic [ref=f10e425]:
                    - button [ref=f10e427] [cursor=pointer]
                    - button [ref=f10e433] [cursor=pointer]
              - row [ref=f10e436]:
                - cell [ref=f10e437]: "2"
                - cell [ref=f10e438]: Norway 1782989033163
                - cell [ref=f10e439]: Test New Mexico 1782989033794
                - cell [ref=f10e440]: Updated Port Willard 1794024795664
                - cell [ref=f10e441]: اختبار1794024792868
                - cell [ref=f10e442]: "42.4056"
                - cell [ref=f10e443]: "-5.8793"
                - cell [ref=f10e444]:
                  - generic [ref=f10e445]:
                    - button [ref=f10e447] [cursor=pointer]
                    - button [ref=f10e453] [cursor=pointer]
              - row [ref=f10e456]:
                - cell [ref=f10e457]: "3"
                - cell [ref=f10e458]: Norway 1782989033163
                - cell [ref=f10e459]: Test New Mexico 1782989033794
                - cell [ref=f10e460]: Updated Gustavocester 1793941110540
                - cell [ref=f10e461]: اختبار1793941107331
                - cell [ref=f10e462]: "43.4006"
                - cell [ref=f10e463]: "100.1391"
                - cell [ref=f10e464]:
                  - generic [ref=f10e465]:
                    - button [ref=f10e467] [cursor=pointer]
                    - button [ref=f10e473] [cursor=pointer]
              - row [ref=f10e476]:
                - cell [ref=f10e477]: "4"
                - cell [ref=f10e478]: Norway 1782989033163
                - cell [ref=f10e479]: Test New Mexico 1782989033794
                - cell [ref=f10e480]: Updated East Annamae 1793852089176
                - cell [ref=f10e481]: اختبار1793852085862
                - cell [ref=f10e482]: "82.9435"
                - cell [ref=f10e483]: "156.6346"
                - cell [ref=f10e484]:
                  - generic [ref=f10e485]:
                    - button [ref=f10e487] [cursor=pointer]
                    - button [ref=f10e493] [cursor=pointer]
              - row [ref=f10e496]:
                - cell [ref=f10e497]: "5"
                - cell [ref=f10e498]: Norway 1782989033163
                - cell [ref=f10e499]: Test New Mexico 1782989033794
                - cell [ref=f10e500]: Updated Port Sandra 1793765648115
                - cell [ref=f10e501]: اختبار1793765645689
                - cell [ref=f10e502]: "-44.7928"
                - cell [ref=f10e503]: "57.0583"
                - cell [ref=f10e504]:
                  - generic [ref=f10e505]:
                    - button [ref=f10e507] [cursor=pointer]
                    - button [ref=f10e513] [cursor=pointer]
              - row [ref=f10e516]:
                - cell [ref=f10e517]: "6"
                - cell [ref=f10e518]: Norway 1782989033163
                - cell [ref=f10e519]: Test New Mexico 1782989033794
                - cell [ref=f10e520]: Updated Marcellusboro 1793679265717
                - cell [ref=f10e521]: اختبار1793679262926
                - cell [ref=f10e522]: "-37.513"
                - cell [ref=f10e523]: "-61.5825"
                - cell [ref=f10e524]:
                  - generic [ref=f10e525]:
                    - button [ref=f10e527] [cursor=pointer]
                    - button [ref=f10e533] [cursor=pointer]
              - row [ref=f10e536]:
                - cell [ref=f10e537]: "7"
                - cell [ref=f10e538]: Norway 1782989033163
                - cell [ref=f10e539]: Test New Mexico 1782989033794
                - cell [ref=f10e540]: Updated Avondale 1793592929736
                - cell [ref=f10e541]: اختبار1793592926479
                - cell [ref=f10e542]: "50.9202"
                - cell [ref=f10e543]: "-54.1554"
                - cell [ref=f10e544]:
                  - generic [ref=f10e545]:
                    - button [ref=f10e547] [cursor=pointer]
                    - button [ref=f10e553] [cursor=pointer]
              - row [ref=f10e556]:
                - cell [ref=f10e557]: "8"
                - cell [ref=f10e558]: Norway 1782989033163
                - cell [ref=f10e559]: Test New Mexico 1782989033794
                - cell [ref=f10e560]: Updated East Clarahaven 1793420001499
                - cell [ref=f10e561]: اختبار1793419998531
                - cell [ref=f10e562]: "-54.7615"
                - cell [ref=f10e563]: "33.7907"
                - cell [ref=f10e564]:
                  - generic [ref=f10e565]:
                    - button [ref=f10e567] [cursor=pointer]
                    - button [ref=f10e573] [cursor=pointer]
              - row [ref=f10e576]:
                - cell [ref=f10e577]: "9"
                - cell [ref=f10e578]: Norway 1782989033163
                - cell [ref=f10e579]: Test New Mexico 1782989033794
                - cell [ref=f10e580]: Updated Weststad 1793333751831
                - cell [ref=f10e581]: اختبار1793333748493
                - cell [ref=f10e582]: "37.3861"
                - cell [ref=f10e583]: "50.88"
                - cell [ref=f10e584]:
                  - generic [ref=f10e585]:
                    - button [ref=f10e587] [cursor=pointer]
                    - button [ref=f10e593] [cursor=pointer]
              - row [ref=f10e596]:
                - cell [ref=f10e597]: "10"
                - cell [ref=f10e598]: Norway 1782989033163
                - cell [ref=f10e599]: Test New Mexico 1782989033794
                - cell [ref=f10e600]: Updated Glendora 1793247407322
                - cell [ref=f10e601]: اختبار1793247403456
                - cell [ref=f10e602]: "-9.3489"
                - cell [ref=f10e603]: "123.8193"
                - cell [ref=f10e604]:
                  - generic [ref=f10e605]:
                    - button [ref=f10e607] [cursor=pointer]
                    - button [ref=f10e613] [cursor=pointer]
              - row [ref=f10e616]:
                - cell [ref=f10e617]: "11"
                - cell [ref=f10e618]: Norway 1782989033163
                - cell [ref=f10e619]: Test New Mexico 1782989033794
                - cell [ref=f10e620]: Updated Lindburgh 1793161434040
                - cell [ref=f10e621]: اختبار1793161431760
                - cell [ref=f10e622]: "54.1583"
                - cell [ref=f10e623]: "-4.7866"
                - cell [ref=f10e624]:
                  - generic [ref=f10e625]:
                    - button [ref=f10e627] [cursor=pointer]
                    - button [ref=f10e633] [cursor=pointer]
              - row [ref=f10e636]:
                - cell [ref=f10e637]: "12"
                - cell [ref=f10e638]: Norway 1782989033163
                - cell [ref=f10e639]: Test New Mexico 1782989033794
                - cell [ref=f10e640]: Updated Florineworth 1793074692224
                - cell [ref=f10e641]: اختبار1793074688908
                - cell [ref=f10e642]: "27.4077"
                - cell [ref=f10e643]: "129.0103"
                - cell [ref=f10e644]:
                  - generic [ref=f10e645]:
                    - button [ref=f10e647] [cursor=pointer]
                    - button [ref=f10e653] [cursor=pointer]
              - row [ref=f10e656]:
                - cell [ref=f10e657]: "13"
                - cell [ref=f10e658]: Norway 1782989033163
                - cell [ref=f10e659]: Test New Mexico 1782989033794
                - cell [ref=f10e660]: Updated Leannonport 1792988418355
                - cell [ref=f10e661]: اختبار1792988415385
                - cell [ref=f10e662]: "73.9405"
                - cell [ref=f10e663]: "-57.0424"
                - cell [ref=f10e664]:
                  - generic [ref=f10e665]:
                    - button [ref=f10e667] [cursor=pointer]
                    - button [ref=f10e673] [cursor=pointer]
              - row [ref=f10e676]:
                - cell [ref=f10e677]: "14"
                - cell [ref=f10e678]: Norway 1782989033163
                - cell [ref=f10e679]: Test New Mexico 1782989033794
                - cell [ref=f10e680]: Updated DeSoto 1792815438185
                - cell [ref=f10e681]: اختبار1792815434896
                - cell [ref=f10e682]: "45.2285"
                - cell [ref=f10e683]: "-92.5214"
                - cell [ref=f10e684]:
                  - generic [ref=f10e685]:
                    - button [ref=f10e687] [cursor=pointer]
                    - button [ref=f10e693] [cursor=pointer]
              - row [ref=f10e696]:
                - cell [ref=f10e697]: "15"
                - cell [ref=f10e698]: Norway 1782989033163
                - cell [ref=f10e699]: Test New Mexico 1782989033794
                - cell [ref=f10e700]: Updated Hayesmouth 1792729052633
                - cell [ref=f10e701]: اختبار1792729050750
                - cell [ref=f10e702]: "-79.6669"
                - cell [ref=f10e703]: "-139.0524"
                - cell [ref=f10e704]:
                  - generic [ref=f10e705]:
                    - button [ref=f10e707] [cursor=pointer]
                    - button [ref=f10e713] [cursor=pointer]
              - row [ref=f10e716]:
                - cell [ref=f10e717]: "16"
                - cell [ref=f10e718]: Norway 1782989033163
                - cell [ref=f10e719]: Test New Mexico 1782989033794
                - cell [ref=f10e720]: Updated Armandostead 1792642671208
                - cell [ref=f10e721]: اختبار1792642668031
                - cell [ref=f10e722]: "-87.5005"
                - cell [ref=f10e723]: "8.8193"
                - cell [ref=f10e724]:
                  - generic [ref=f10e725]:
                    - button [ref=f10e727] [cursor=pointer]
                    - button [ref=f10e733] [cursor=pointer]
              - row [ref=f10e736]:
                - cell [ref=f10e737]: "17"
                - cell [ref=f10e738]: Norway 1782989033163
                - cell [ref=f10e739]: Test New Mexico 1782989033794
                - cell [ref=f10e740]: Updated New Ena 1792556302188
                - cell [ref=f10e741]: اختبار1792556299711
                - cell [ref=f10e742]: "-35.3766"
                - cell [ref=f10e743]: "20.938"
                - cell [ref=f10e744]:
                  - generic [ref=f10e745]:
                    - button [ref=f10e747] [cursor=pointer]
                    - button [ref=f10e753] [cursor=pointer]
              - row [ref=f10e756]:
                - cell [ref=f10e757]: "18"
                - cell [ref=f10e758]: Norway 1782989033163
                - cell [ref=f10e759]: Test New Mexico 1782989033794
                - cell [ref=f10e760]: Updated Savannahchester 1792469888215
                - cell [ref=f10e761]: اختبار1792469884595
                - cell [ref=f10e762]: "54.8313"
                - cell [ref=f10e763]: "-32.3378"
                - cell [ref=f10e764]:
                  - generic [ref=f10e765]:
                    - button [ref=f10e767] [cursor=pointer]
                    - button [ref=f10e773] [cursor=pointer]
              - row [ref=f10e776]:
                - cell [ref=f10e777]: "19"
                - cell [ref=f10e778]: Norway 1782989033163
                - cell [ref=f10e779]: Test New Mexico 1782989033794
                - cell [ref=f10e780]: Updated Ariannaworth 1792383538598
                - cell [ref=f10e781]: اختبار1792383535403
                - cell [ref=f10e782]: "-19.8229"
                - cell [ref=f10e783]: "22.0363"
                - cell [ref=f10e784]:
                  - generic [ref=f10e785]:
                    - button [ref=f10e787] [cursor=pointer]
                    - button [ref=f10e793] [cursor=pointer]
              - row [ref=f10e796]:
                - cell [ref=f10e797]: "20"
                - cell [ref=f10e798]: Norway 1782989033163
                - cell [ref=f10e799]: Test New Mexico 1782989033794
                - cell [ref=f10e800]: Updated New Alphonsobury 1792210602765
                - cell [ref=f10e801]: اختبار1792210599829
                - cell [ref=f10e802]: "-36.9784"
                - cell [ref=f10e803]: "163.7677"
                - cell [ref=f10e804]:
                  - generic [ref=f10e805]:
                    - button [ref=f10e807] [cursor=pointer]
                    - button [ref=f10e813] [cursor=pointer]
          - generic [ref=f10e819]:
            - generic [ref=f10e820]:
              - generic [ref=f10e821]: Rows per page
              - generic [ref=f10e822]:
                - combobox [ref=f10e823] [cursor=pointer]: "20"
                - textbox: "20"
            - generic [ref=f10e824]: 1-20 of 199
            - generic [ref=f10e825]:
              - generic [ref=f10e826]:
                - button [disabled]
              - generic [ref=f10e827]:
                - button [disabled]
              - button [ref=f10e829] [cursor=pointer]
              - button [ref=f10e833] [cursor=pointer]
  - dialog [ref=f10e838]:
    - generic [ref=f10e839]:
      - button "close" [ref=f10e840] [cursor=pointer]
      - heading "Add City" [level=2] [ref=f10e843]
      - generic [ref=f10e845]:
        - generic [ref=f10e846]:
          - generic [ref=f10e847]:
            - text: Select Country
            - generic [ref=f10e848]: "*"
          - generic [ref=f10e851]:
            - combobox "Select Country" [expanded] [active] [ref=f10e852]: United Arab Emirates
            - button "Close" [ref=f10e854] [cursor=pointer]
            - group
          - paragraph [ref=f10e857]: Please Select Country
        - generic [ref=f10e858]:
          - generic [ref=f10e859]:
            - text: Select State
            - generic [ref=f10e860]: "*"
          - generic [ref=f10e863]:
            - combobox "Select State" [disabled] [ref=f10e864]
            - generic [ref=f10e865]:
              - button "Open" [disabled]
            - group
          - paragraph [ref=f10e866]: Please Select State
        - generic [ref=f10e867]:
          - generic [ref=f10e868]:
            - text: City Name
            - generic [ref=f10e869]: "*"
          - generic [ref=f10e871]:
            - textbox "City Name" [ref=f10e872]
            - group
          - paragraph [ref=f10e873]: Please Enter City
        - generic [ref=f10e874]:
          - generic [ref=f10e875]: City Name Arabic
          - generic [ref=f10e877]:
            - textbox "City Name Arabic" [ref=f10e878]
            - group
          - paragraph [ref=f10e879]: Please Enter City
        - generic [ref=f10e880]:
          - generic [ref=f10e881]: Upload File
          - generic [ref=f10e884]:
            - button "Choose File" [ref=f10e885]
            - group
          - paragraph [ref=f10e886]: Please upload icon
        - generic [ref=f10e887]:
          - generic [ref=f10e888]: Description
          - generic [ref=f10e890]:
            - textbox "Description" [ref=f10e891]
            - group
          - paragraph [ref=f10e892]: Enter Description
        - generic [ref=f10e893]:
          - generic [ref=f10e894]: Latitude
          - generic [ref=f10e896]:
            - spinbutton "Enter latitude" [ref=f10e897]
            - group
          - paragraph [ref=f10e898]: Please enter latitude
        - generic [ref=f10e899]:
          - generic [ref=f10e900]: Longitude
          - generic [ref=f10e902]:
            - spinbutton "Enter longitude" [ref=f10e903]
            - group
          - paragraph [ref=f10e904]: Please enter longitude
        - generic [ref=f10e905]:
          - button "submit" [disabled]
          - button "clear" [ref=f10e906] [cursor=pointer]
  - listbox [ref=f10e909]:
    - option "United Arab Emirates" [ref=f10e910] [cursor=pointer]
```

# Test source

```ts
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
  203 |   await submitButton.click({ timeout: 3000 });
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
> 215 |   await state.click();
      |               ^ Error: locator.click: Test timeout of 15000ms exceeded.
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
  304 |     name: "Company Industry",
  305 |   });
  306 |   await expect(companyIndustryOption).toBeVisible();
  307 | 
  308 |   const companyTypeOption = page.getByRole("button", { name: "Company Type" });
  309 |   await expect(companyTypeOption).toBeVisible();
  310 | 
  311 |   const companyActivityOption = page.getByRole("button", {
  312 |     name: "Company Activity",
  313 |   });
  314 |   await expect(companyActivityOption).toBeVisible();
  315 | 
```