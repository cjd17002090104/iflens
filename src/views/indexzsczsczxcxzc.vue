<template>
  <div class="header_sticky">
    <div class="boxed">
      <div class="overlay"></div>

      <section id="header" class="header">
        <div class="header-top">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <ul class="flat-unstyled" style="text-align: left;">
                  <li>
                    <a href="javascript:void(0);">
                      Currency
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <ul class="unstyled" style="width: 175px;">
                      <li>
                        <a href="index.php?&amp;my_rate=USD" title>U.S. Dollar (USD)</a>
                      </li>
                    </ul>
                  </li>
                  <!-- EBJ -->
                  <li>
                    <a href="https://www.facebook.com/MechanicalKeyboards" target="_SOC">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/MKeyboards" target="_SOC">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/mechanicalkeyboardscom/" target="_SOC">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/c/MechanicalKeyboards" target="_SOC">
                      <i class="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul class="flat-infomation">
                  <li class="phone">
                    <span style="color: #fe6200 " />Free U.S. Shipping! &nbsp;
                    <a href="tel:615.266.1420">615.266.1420</a>
                    <!-- EBJ - Black Friday / Cyber Monday banner -->
                    <a
                      href="../christmas_shipping.php"
                      style="margin-left: 5px; font-style: italic; font-weight: bold; color: green;"
                    >Christmas Ship Schedule</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul class="flat-unstyled">
                  <li class="account">
                    <a href="javascript:void(0);" title>
                      My Account
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <ul class="unstyled">
                      <!--// Start Hide Login //-->
                      <li>
                        <a
                          href="https://mechanicalkeyboards.com/shop/index.php?l=account"
                        >Login / Register</a>
                      </li>
                      <li>
                        <a
                          href="https://mechanicalkeyboards.com/shop/index.php?l=page_view&p=forgot_password"
                        >Forgot Password?</a>
                      </li>
                      <!--// End Hide Login //-->

                      <li>
                        <a
                          href="https://mechanicalkeyboards.com/shop/index.php?l=cart_view"
                        >View Cart</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="https://mechanicalkeyboards.com/shop/index.php?l=page_view&p=contact_us"
                      title
                    >Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="header-middle">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <div id="logo" class="logo">
                  <a href="/shop" title="MK Home Page - Learn, Compare, Buy">
                    <!-- EBJ -->
                    <img
                      src="../assets/images/logo_MK_Logo_no_text-orange.png"
                      alt="MechanicalKeyboards.com"
                    />
                  </a>
                </div>
              </div>
              <div class="col-md-6">
                <div class="top-search">
                  <form
                    action="index.php?l=search_list"
                    method="post"
                    class="form-search"
                    accept-charset="utf-8"
                    style="display: block;"
                  >
                    <input type="hidden" name="s[title]" value="Y" />
                    <input type="hidden" name="s[short_desc]" value="Y" />
                    <input type="hidden" name="s[full_desc]" value="N" />
                    <input type="hidden" name="s[sku]" value="Y" />
                    <input type="hidden" name="s[match]" value="all" />
                    <div class="cat-wrap">
                      <!-- <select name="s[cid]" class="top msd shell" style="width: 170px;">
                        <option value="0">- All Categories -</option>
                        <option value="1">Mechanical Keyboards</option>
                        <option value="110">..Keyboards by Brand</option>
                        <option value="111">....Ducky Keyboards</option>
                        <option value="487">......MIYA</option>
                        <option value="140">......One</option>
                        <option value="518">......One 2</option>
                        <option value="485">......One Rainbow</option>
                        <option value="484">......One RGB</option>
                        <option value="377">......Pocket</option>
                        <option value="112">......Shine 5</option>
                        <option value="370">......Shine 6</option>
                        <option value="364">......Year of the Monkey</option>
                        <option value="464">......Year of the Rooster</option>
                        <option value="754">......Year of the Dog</option>
                        <option value="764">......One 2 Mini</option>
                        <option value="766">......Shine 7</option>
                        <option value="812">......Year of the Pig</option>
                        <option value="829">......One 2 SF</option>
                        <option value="833">......One 2 Mecha Mini</option>
                        <option value="159">....Vortex Keyboards</option>
                        <option value="375">......Core</option>
                        <option value="165">......POK3R</option>
                        <option value="516">......POK3R LE</option>
                        <option value="517">......POK3R RGB</option>
                        <option value="362">......Pure</option>
                        <option value="455">......Race 3</option>
                        <option value="488">......ViBE</option>
                        <option value="725">......Race</option>
                        <option value="741">......Cypher</option>
                        <option value="777">......Tab</option>
                        <option value="815">......POK3R V2</option>
                        <option value="169">....Leopold Keyboards</option>
                        <option value="327">......FC210TP</option>
                        <option value="170">......FC660C</option>
                        <option value="358">......FC660M</option>
                        <option value="171">......FC750R</option>
                        <option value="172">......FC900R</option>
                        <option value="366">......FC980C</option>
                        <option value="365">......FC980M</option>
                        <option value="839">......FC980M OE</option>
                        <option value="840">......FC900R OE</option>
                        <option value="841">......FC750R OE</option>
                        <option value="322">....Varmilo Keyboards</option>
                        <option value="469">......VA108M</option>
                        <option value="334">......VA12M</option>
                        <option value="531">......VA21M</option>
                        <option value="325">......VA68M</option>
                        <option value="324">......VA87M</option>
                        <option value="323">......VB87M</option>
                        <option value="326">......VR68M</option>
                        <option value="470">......Z104M</option>
                        <option value="767">......MA108M</option>
                        <option value="768">......MA87M</option>
                        <option value="785">......VG104M</option>
                        <option value="834">......MA104</option>
                        <option value="242">....MK Keyboards</option>
                        <option value="520">......MK Typist</option>
                        <option value="286">......MK Disco</option>
                        <option value="368">......MK Fission</option>
                        <option value="243">......MK84</option>
                        <option value="458">......MK Shadow Guard</option>
                        <option value="340">....Filco Keyboards</option>
                        <option value="341">......Majestouch 2</option>
                        <option value="342">......Majestouch Convertible 2</option>
                        <option value="371">......Majestouch Convertible 2 TKL</option>
                        <option value="344">......Majestouch Ninja</option>
                        <option value="343">......Majestouch Minila</option>
                        <option value="461">......Majestouch Numpad</option>
                        <option value="776">......Stingray</option>
                        <option value="462">....0.01 Keyboards</option>
                        <option value="463">......Z62</option>
                        <option value="182">....KBParadise Keyboards</option>
                        <option value="183">......V60</option>
                        <option value="459">......V60 Type R</option>
                        <option value="367">......V60Plus</option>
                        <option value="184">......V80</option>
                        <option value="333">......V100</option>
                        <option value="772">......V20</option>
                        <option value="837">......Flat60</option>
                        <option value="838">......VX80</option>
                        <option value="477">....ikbc Keyboards</option>
                        <option value="478">......TD108</option>
                        <option value="483">......New Poker II</option>
                        <option value="623">......MF87</option>
                        <option value="624">......MF108</option>
                        <option value="625">......MF108</option>
                        <option value="786">......Table E 401</option>
                        <option value="787">......Table E 412</option>
                        <option value="788">......CD87 BT</option>
                        <option value="789">......CD108 BT</option>
                        <option value="352">....Ganss Keyboards</option>
                        <option value="353">......GS-87</option>
                        <option value="701">......GK-87</option>
                        <option value="356">....Mistel Keyboards</option>
                        <option value="524">......Sleeker</option>
                        <option value="357">......Barocco</option>
                        <option value="645">......MD650L</option>
                        <option value="835">......MD770</option>
                        <option value="836">......MD770 RGB</option>
                        <option value="205">....Tex Keyboards</option>
                        <option value="515">......Yoda II</option>
                        <option value="206">......Beetle</option>
                        <option value="756">......Kodachi</option>
                        <option value="177">....Deck Keyboards</option>
                        <option value="180">......Hassium</option>
                        <option value="181">......Francium</option>
                        <option value="724">......82</option>
                        <option value="173">....Matias Keyboards</option>
                        <option value="174">......FK302</option>
                        <option value="175">......FK303</option>
                        <option value="176">......FK403</option>
                        <option value="529">....Bazalias Keyboards</option>
                        <option value="530">......8839</option>
                        <option value="199">....Keycool Keyboards</option>
                        <option value="201">......87</option>
                        <option value="202">......104</option>
                        <option value="203">......108</option>
                        <option value="204">......22</option>
                        <option value="237">....WASD Keyboards</option>
                        <option value="238">......Code</option>
                        <option value="239">......Code TKL</option>
                        <option value="230">....Cherry Keyboards</option>
                        <option value="231">......MX 3.0</option>
                        <option value="232">......MX 6.0</option>
                        <option value="233">......Compact</option>
                        <option value="235">......Classic</option>
                        <option value="319">....E-Element Keyboards</option>
                        <option value="320">......87-Key</option>
                        <option value="321">......104-Key</option>
                        <option value="373">....Hyperkin Keyboards</option>
                        <option value="374">......Hyper Clack Tactile</option>
                        <option value="288">....Plum Keyboards</option>
                        <option value="347">......84</option>
                        <option value="348">......87</option>
                        <option value="349">......96</option>
                        <option value="350">......104</option>
                        <option value="351">......108</option>
                        <option value="215">....iOne Keyboards</option>
                        <option value="223">....Adesso Keyboards</option>
                        <option value="193">....Rosewill Keyboards</option>
                        <option value="221">....DSI Keyboards</option>
                        <option value="313">....Rantopad Keyboards</option>
                        <option value="314">......MXX</option>
                        <option value="315">......MT</option>
                        <option value="354">....James Donkey Keyboards</option>
                        <option value="355">......612</option>
                        <option value="361">......619</option>
                        <option value="359">....Kaihua Keyboards</option>
                        <option value="360">......K16</option>
                        <option value="213">....KUL Keyboards</option>
                        <option value="285">....Royal Kludge Keyboards</option>
                        <option value="316">......RK61</option>
                        <option value="317">......RG-987</option>
                        <option value="318">......RG-928</option>
                        <option value="465">....Wooting Keyboards</option>
                        <option value="466">......one</option>
                        <option value="769">......two</option>
                        <option value="187">....Cooler Master Keyboards</option>
                        <option value="244">....Tesoro Keyboards</option>
                        <option value="245">......Durandal</option>
                        <option value="246">......Colada</option>
                        <option value="247">......Lobera</option>
                        <option value="207">....Das Keyboards</option>
                        <option value="209">......Model 4</option>
                        <option value="226">....Thermaltake (TTE) Keyboards</option>
                        <option value="196">....Max Keyboards</option>
                        <option value="240">....Razer Keyboards</option>
                        <option value="345">....Carpe Keyboards</option>
                        <option value="346">......JD45</option>
                        <option value="210">....KBtalking (KBT) Keyboards</option>
                        <option value="212">......Next</option>
                        <option value="185">....Topre Keyboards</option>
                        <option value="482">......Realforce 104U</option>
                        <option value="480">......Realforce 23U</option>
                        <option value="481">......Realforce 87U</option>
                        <option value="369">......Realforce RGB</option>
                        <option value="186">......Type Heaven</option>
                        <option value="646">....KBDFans Keyboards</option>
                        <option value="647">......TADA68</option>
                        <option value="790">....Glorious PC Keyboards</option>
                        <option value="791">......GMMK Customizable / Barebones</option>
                        <option value="792">......GMMK Prebuilt</option>
                        <option value="831">....Obins Keyboards</option>
                        <option value="832">......Anne Pro 2</option>
                        <option value="816">....Keychron Keyboards</option>
                        <option value="817">......K2</option>
                        <option value="818">......K2 Aluminum</option>
                        <option value="770">....Alpaca Keyboards</option>
                        <option value="771">......ErgoDox 76</option>
                        <option value="758">....Ace Pad Tech Keyboards</option>
                        <option value="763">......APT04</option>
                        <option value="114">..Keyboards by Switch</option>
                        <option value="10">....Cherry Switch Keyboards</option>
                        <option value="13">......Black Cherry MX Keyboards</option>
                        <option value="12">......Blue Cherry MX Keyboards</option>
                        <option value="11">......Brown Cherry MX Keyboards</option>
                        <option value="50">......Clear Cherry MX (Chinese White) Keyboards</option>
                        <option value="83">......Dark Gray Cherry MX Keyboards</option>
                        <option value="84">......Gray Cherry MX Keyboards</option>
                        <option value="48">......Green Cherry MX Keyboards</option>
                        <option value="775">......Low Profile Red Cherry MX Keyboards</option>
                        <option value="277">......Nature White Cherry MX Keyboards</option>
                        <option value="14">......Red Cherry MX Keyboards</option>
                        <option value="475">......Silent Black Cherry MX Keyboards</option>
                        <option value="476">......Silent Red Cherry MX Keyboards</option>
                        <option value="363">......Silver Cherry MX Keyboards</option>
                        <option value="49">......White Cherry MX (Chinese Milky) Keyboards</option>
                        <option value="51">......Multi Cherry MX Keyboards</option>
                        <option value="644">......Cherry ML Keyboards</option>
                        <option value="79">....Topre Switch Keyboards</option>
                        <option value="103">......Topre 30g Keyboards</option>
                        <option value="104">......Topre 35g Keyboards</option>
                        <option value="105">......Topre 45g Keyboards</option>
                        <option value="106">......Topre 55g Keyboards</option>
                        <option value="479">......Topre Variable Keyboards</option>
                        <option value="88">....Greetech Switch Keyboards</option>
                        <option value="89">......Greetech Blue Keyboards</option>
                        <option value="90">......Greetech Brown Keyboards</option>
                        <option value="91">......Greetech Red Keyboards</option>
                        <option value="92">......Greetech Black Keyboards</option>
                        <option value="759">....Hall Effect Switch Keyboards</option>
                        <option value="761">......Hall Effect Clicky Keyboards</option>
                        <option value="762">......Hall Effect Linear Keyboards</option>
                        <option value="760">......Hall Effect Tactile Keyboards</option>
                        <option value="15">....ALPS Switch Keyboards</option>
                        <option value="17">......Green ALPS Keyboards</option>
                        <option value="16">......Black ALPS Keyboards</option>
                        <option value="18">......White ALPS Keyboards</option>
                        <option value="19">......Yellow ALPS Keyboards</option>
                        <option value="113">....Matias Switch Keyboards</option>
                        <option value="85">......Matias Click Keyboards</option>
                        <option value="86">......Matias Quiet Click Keyboards</option>
                        <option value="87">......Matias Quiet Linear Keyboards</option>
                        <option value="93">....Kailh Switch Keyboards</option>
                        <option value="97">......Kailh Black Switch Keyboards</option>
                        <option value="95">......Kailh Blue Switch Keyboards</option>
                        <option value="743">......Kailh BOX Black Switch Keyboards</option>
                        <option value="742">......Kailh BOX Brown Switch Keyboards</option>
                        <option value="745">......Kailh BOX Heavy Burnt Orange Switch Keyboards</option>
                        <option value="746">......Kailh BOX Heavy Dark Yellow Switch Keyboards</option>
                        <option value="648">......Kailh BOX Heavy Pale Blue Switch Keyboards</option>
                        <option value="744">......Kailh BOX Red Switch Keyboards</option>
                        <option value="748">......Kailh BOX Thick Jade Switch Keyboards</option>
                        <option value="747">......Kailh BOX Thick Navy Switch Keyboards</option>
                        <option value="523">......Kailh BOX White Switch Keyboards</option>
                        <option value="94">......Kailh Brown Switch Keyboards</option>
                        <option value="528">......Kailh Chocolate White Switch Keyboards</option>
                        <option value="118">......Kailh Green Switch Keyboards</option>
                        <option value="96">......Kailh Red Switch Keyboards</option>
                        <option value="751">......Kailh Speed Bronze Switch Keyboards</option>
                        <option value="752">......Kailh Speed Copper Switch Keyboards</option>
                        <option value="750">......Kailh Speed Gold Switch Keyboards</option>
                        <option value="749">......Kailh Speed Silver Switch Keyboards</option>
                        <option value="98">....Gateron Switch Keyboards</option>
                        <option value="276">......Gateron Yellow Switch Keyboards</option>
                        <option value="99">......Gateron Brown Switch Keyboards</option>
                        <option value="100">......Gateron Blue Switch Keyboards</option>
                        <option value="101">......Gateron Red Switch Keyboards</option>
                        <option value="102">......Gateron Black Switch Keyboards</option>
                        <option value="248">......Gateron Clear Switch Keyboards</option>
                        <option value="119">....KBT Switch Keyboards</option>
                        <option value="120">......KBT Black Keyboards</option>
                        <option value="121">......KBT Brown Keyboards</option>
                        <option value="122">......KBT Blue Keyboards</option>
                        <option value="123">......KBT Red Keyboards</option>
                        <option value="116">..Keyboards by Keycaps</option>
                        <option value="29">....ABS Keycap Keyboards</option>
                        <option value="30">....PBT Keycap Keyboards</option>
                        <option value="20">..Keyboards by LED Backlight</option>
                        <option value="124">....RGB LED Backlit</option>
                        <option value="125">....Multi LED Backlit</option>
                        <option value="128">....Dual (Blue / Red) LED Backlit</option>
                        <option value="127">....Dual (Blue / Green) LED Backlit</option>
                        <option value="129">....Dual (Green / Red) LED Backlit</option>
                        <option value="23">....White LED Backlit</option>
                        <option value="21">....Blue LED Backlit</option>
                        <option value="22">....Green LED Backlit</option>
                        <option value="24">....Red LED Backlit</option>
                        <option value="39">....Yellow LED Backlit</option>
                        <option value="38">....Orange LED Backlit</option>
                        <option value="25">....Purple LED Backlit</option>
                        <option value="126">....Pink (Magenta) LED Backlit</option>
                        <option value="115">..Keyboards by Size</option>
                        <option value="26">....100% / Full-size Keyboards</option>
                        <option value="27">....80% / TKL Keyboards (Tenkeyless)</option>
                        <option value="28">....60% / Compact Keyboards</option>
                        <option value="765">....Numpad Keyboards</option>
                        <option value="117">....Non-standard Size Keyboards</option>
                        <option value="9">Keyboard Accessories</option>
                        <option value="40">..Keycaps</option>
                        <option value="378">....Keycaps by Material</option>
                        <option value="448">......ABS Keycaps</option>
                        <option value="336">......PBT Keycaps</option>
                        <option value="782">......Rubber Keycaps</option>
                        <option value="784">........4-Key TPRs</option>
                        <option value="810">........22-Key TPRs</option>
                        <option value="783">........18-Key TPRs</option>
                        <option value="449">......Resin Keycaps</option>
                        <option value="452">......SLA Keycaps</option>
                        <option value="799">......POM Keycaps</option>
                        <option value="380">....Keycaps by Print</option>
                        <option value="800">......Side Printed Keycaps</option>
                        <option value="424">......Double Shot Keycaps</option>
                        <option value="427">......Dye Sub Keycaps</option>
                        <option value="425">......Laser Etched Keycaps</option>
                        <option value="428">......Laser Printed Keycaps</option>
                        <option value="426">......Pad Printed Keycaps</option>
                        <option value="337">......Blank Keycaps</option>
                        <option value="379">....Keycaps by Brand</option>
                        <option value="798">......Tex Keycaps</option>
                        <option value="801">......Pheilcia Keycaps</option>
                        <option value="803">......Maxkey Keycaps</option>
                        <option value="804">......JTK Keycaps</option>
                        <option value="806">......GMK Keycaps</option>
                        <option value="807">......Leopold Keycaps</option>
                        <option value="809">......Royal Glam Keycaps</option>
                        <option value="415">......Vortex Keycaps</option>
                        <option value="526">......Ducky Keycaps</option>
                        <option value="416">......KBParadise Keycaps</option>
                        <option value="417">......Mechanical Keyboards Inc Keycaps</option>
                        <option value="421">......Varmilo Keycaps</option>
                        <option value="418">......Tai-Hao Keycaps</option>
                        <option value="414">......Filco Keycaps</option>
                        <option value="419">......Hot Keys Project Keycaps</option>
                        <option value="420">......Gateron Keycaps</option>
                        <option value="450">......Mistel Keycaps</option>
                        <option value="451">......0.01 Keyboard Keycaps</option>
                        <option value="335">....Backlit Keycaps</option>
                        <option value="382">....Keycaps by Color</option>
                        <option value="431">......Black Keycaps</option>
                        <option value="432">......White Keycaps</option>
                        <option value="433">......Grey Keycaps</option>
                        <option value="437">......Blue Keycaps</option>
                        <option value="794">......Purple Keycaps</option>
                        <option value="445">......Green Keycaps</option>
                        <option value="441">......Red Keycaps</option>
                        <option value="793">......Pink Keycaps</option>
                        <option value="443">......Orange Keycaps</option>
                        <option value="435">......Yellow Keycaps</option>
                        <option value="447">......Clear / Translucent Keycaps</option>
                        <option value="442">......Tan / Beige Keycaps</option>
                        <option value="436">......Multi Keycaps</option>
                        <option value="383">....Keycaps by Profile</option>
                        <option value="795">......Cubic Profile Keycaps</option>
                        <option value="796">......ADA Profile Keycaps</option>
                        <option value="797">......DSA Profile Keycaps</option>
                        <option value="408">......OEM Profile Keycaps</option>
                        <option value="409">......Cherry Profile Keycaps</option>
                        <option value="407">......SA Profile Keycaps</option>
                        <option value="410">......Varmilo Profile Keycaps</option>
                        <option value="412">......Gateron Profile Keycaps</option>
                        <option value="411">......Other Profile Keycaps</option>
                        <option value="384">....Keycaps by Stem</option>
                        <option value="429">......MX Keycaps</option>
                        <option value="430">......ALPS Keycaps</option>
                        <option value="74">....Artisan Keycaps</option>
                        <option value="108">....Spacebars</option>
                        <option value="41">..Wrist Rests</option>
                        <option value="65">....Wooden Wrist Rests</option>
                        <option value="62">..Mouse and Related</option>
                        <option value="773">....Switch Desk Pads</option>
                        <option value="72">..Keycap Pullers</option>
                        <option value="75">..O-Rings</option>
                        <option value="830">....MK Pro Rings</option>
                        <option value="44">..Cases &amp; Frames</option>
                        <option value="109">..Switch Testers</option>
                        <option value="107">..Switches</option>
                        <option value="43">....Cherry MX Switches</option>
                        <option value="54">...... Black Cherry MX Switches</option>
                        <option value="57">...... Red Cherry MX Switches</option>
                        <option value="58">...... Clear Cherry MX Switches</option>
                        <option value="59">...... Gray Cherry MX Switches</option>
                        <option value="63">...... Green Cherry MX Switches</option>
                        <option value="64">...... White Cherry MX Switches</option>
                        <option value="376">...... Silent Red Cherry MX Switches</option>
                        <option value="55">...... Brown Cherry MX Switches</option>
                        <option value="56">...... Blue Cherry MX Switches</option>
                        <option value="811">....Zeal PC Switches</option>
                        <option value="45">....ALPS XM Switches</option>
                        <option value="76">....Greetech Mechanical Switches</option>
                        <option value="301">......Black Greetech Switches</option>
                        <option value="302">......Brown Greetech Switches</option>
                        <option value="303">......Blue Greetech Switches</option>
                        <option value="304">......Red Greetech Switches</option>
                        <option value="730">....Kailh Mechanical Switches</option>
                        <option value="731">......Kailh BOX Mechanical Switches</option>
                        <option value="734">......Kailh RGB Mechanical Switches</option>
                        <option value="735">......Kailh Single LED Mechanical Switches</option>
                        <option value="732">......Kailh Speed Mechanical Switches</option>
                        <option value="733">......Kailh Speed Pro Mechanical Switches</option>
                        <option value="77">....Gateron Mechanical Switches</option>
                        <option value="305">......Black Gateron Switches</option>
                        <option value="306">......Brown Gateron Switches</option>
                        <option value="307">......Blue Gateron Switches</option>
                        <option value="308">......Red Gateron Switches</option>
                        <option value="309">......Clear Gateron Switches</option>
                        <option value="310">......Yellow Gateron Switches</option>
                        <option value="311">......Green Gateron Switches</option>
                        <option value="52">....Matias Mechanical Switches</option>
                        <option value="722">....MOD Switches</option>
                        <option value="328">....Outemu Mechanical Switches</option>
                        <option value="329">......Black Outemu Switches</option>
                        <option value="330">......Brown Outemu Switches</option>
                        <option value="331">......Blue Outemu Switches</option>
                        <option value="332">......Red Outemu Switches</option>
                        <option value="460">..Plates</option>
                        <option value="47">..Parts &amp; DIY</option>
                        <option value="299">....LEDs</option>
                        <option value="300">....Diodes, Resistors, and Capacitors</option>
                        <option value="338">....Keyboard Stabilizers</option>
                        <option value="339">....Cherry MX Springs</option>
                        <option value="739">....Kailh Box Springs</option>
                        <option value="740">....ALPS Springs</option>
                        <option value="61">..Lubrication</option>
                        <option value="42">..Miscellaneous</option>
                        <option value="53">Clearance &amp; Customs</option>
                        <option value="68">..MK Customs</option>
                        <option value="67">..Return Stock</option>
                        <option value="781">....Kobo Returns</option>
                        <option value="778">....Like New</option>
                        <option value="779">....Very Good</option>
                        <option value="780">....Good</option>
                        <option value="70">....Parts Only</option>
                        <option value="774">Keyboard Displays</option>
                        <option value="643">Workspace</option>
                        <option value="453">Clothing &amp; Collectables</option>
                        <option value="819">..Keyboard Clothing</option>
                        <option value="820">..Keyboard Collectables</option>
                        <option value="60">Keyboard Services</option>
                        <option value="130">Archive</option>
                        <option value="249">..Keyboard Archive</option>
                        <option value="251">....Ducky Keyboard Archive</option>
                        <option value="649">......One Archive</option>
                        <option value="651">......Premier Archive</option>
                        <option value="652">......One RGB Archive</option>
                        <option value="671">......Shine 5 Archive</option>
                        <option value="672">......Year of the Horse Archive</option>
                        <option value="673">......Year of the Goat Archive</option>
                        <option value="674">......Year of the Snake Archive</option>
                        <option value="675">......G2 PRO Archive</option>
                        <option value="676">......G2 Archive</option>
                        <option value="677">......Year of the Rabbit Archive</option>
                        <option value="678">......Zero Archive</option>
                        <option value="702">......Zero Shine Archive</option>
                        <option value="703">......DK1087 Archive</option>
                        <option value="704">......DK1008 Archive</option>
                        <option value="709">......104UB Archive</option>
                        <option value="712">......Legend Archive</option>
                        <option value="713">......Mini Archive</option>
                        <option value="714">......Shine 1 Archive</option>
                        <option value="715">......Shine 2 Archive</option>
                        <option value="716">......Shine 3 Archive</option>
                        <option value="717">......Shine 4 Archive</option>
                        <option value="718">......Year of the Dragon Archive</option>
                        <option value="723">......Shine 6 Archive</option>
                        <option value="728">......Year of the Monkey Archive</option>
                        <option value="729">......Year of the Rooster Archive</option>
                        <option value="813">......Year of the Dog Archive</option>
                        <option value="252">....Vortex Keyboard Archive</option>
                        <option value="653">......Poker II Archive</option>
                        <option value="654">......Pure Pro Archive</option>
                        <option value="698">......Pure Archive</option>
                        <option value="699">......Poker Archive</option>
                        <option value="700">......ONI Archive</option>
                        <option value="719">......ONE Archive</option>
                        <option value="726">......Race Archive</option>
                        <option value="727">......Race II Archive</option>
                        <option value="253">....Leopold Keyboard Archive</option>
                        <option value="711">......FC660M Archive</option>
                        <option value="736">......FC750R Archive</option>
                        <option value="737">......FC900R Archive</option>
                        <option value="738">......FC980M Archive</option>
                        <option value="456">....Varmilo Keyboard Archive</option>
                        <option value="710">......VB87M Archive</option>
                        <option value="753">......VA68M Archive</option>
                        <option value="814">......VA108M Archive</option>
                        <option value="274">....MK Keyboard Archive</option>
                        <option value="708">......MK2016 Archive</option>
                        <option value="290">....Filco Keyboard Archive</option>
                        <option value="655">......Majestouch Ninja Archive</option>
                        <option value="256">....KBParadise Keyboard Archive</option>
                        <option value="650">......V60 Archive</option>
                        <option value="255">....Deck Keyboard Archive</option>
                        <option value="657">......Legend Archive</option>
                        <option value="254">....Matias Keyboard Archive</option>
                        <option value="658">......FK303 Archive</option>
                        <option value="261">....Keycool Keyboard Archive</option>
                        <option value="659">......108 Archive</option>
                        <option value="660">......84 Archive</option>
                        <option value="661">......87 Archive</option>
                        <option value="707">......Numpad Archive</option>
                        <option value="271">....Cherry Keyboard Archive</option>
                        <option value="705">......UltraSlim Archive</option>
                        <option value="706">......Keypad Archive</option>
                        <option value="291">....SteelSeries Keyboard Archive</option>
                        <option value="266">....iOne Keyboard Archive</option>
                        <option value="689">......Scorpius Archive</option>
                        <option value="690">......Xarmor Archive</option>
                        <option value="269">....Adesso Keyboard Archive</option>
                        <option value="679">......MKB Archive</option>
                        <option value="680">......AKP Archive</option>
                        <option value="259">....Rosewill Keyboard Archive</option>
                        <option value="693">......RK-9000 Archive</option>
                        <option value="694">......RK-9100 Archive</option>
                        <option value="268">....DSI Keyboard Archive</option>
                        <option value="688">......DSI Archive</option>
                        <option value="720">....James Donkey Keyboard Archive</option>
                        <option value="721">......619 Archive</option>
                        <option value="265">....KUL Keyboard Archive</option>
                        <option value="692">......ES-87 Archive</option>
                        <option value="298">....Royal Kludge Keyboard Archive</option>
                        <option value="662">......RG-987 Archive</option>
                        <option value="663">......RC930 Archive</option>
                        <option value="258">....Cooler Master Keyboard Archive</option>
                        <option value="683">......QuickFire Archive</option>
                        <option value="684">......Trigger Archive</option>
                        <option value="685">......QuickFire XT Archive</option>
                        <option value="686">......QuickFire TK Archive</option>
                        <option value="687">......QuickFire Pro Archive</option>
                        <option value="275">....Tesoro Keyboard Archive</option>
                        <option value="667">......Durandal Archive</option>
                        <option value="668">......Colada Archive</option>
                        <option value="296">....SIIG Keyboard Archive</option>
                        <option value="263">....Das Keyboard Keyboard Archive</option>
                        <option value="669">......Model 4 Archive</option>
                        <option value="670">......Model S Archive</option>
                        <option value="294">....Corsair Keyboard Archive</option>
                        <option value="270">....Thermaltake (TTE) Keyboard Archive</option>
                        <option value="695">......Meka Archive</option>
                        <option value="696">......Meka G1 Archive</option>
                        <option value="697">......Meka G-Unit Archive</option>
                        <option value="260">....Max Keyboard Keyboard Archive</option>
                        <option value="665">......Blackbird Archive</option>
                        <option value="666">......Nighthawk Archive</option>
                        <option value="267">....Azio Keyboard Archive</option>
                        <option value="681">......Levetron Archive</option>
                        <option value="682">......MGK1 Archive</option>
                        <option value="273">....Razer Keyboard Archive</option>
                        <option value="664">......BlackWidow Archive</option>
                        <option value="264">....KBtalking (KBT) Keyboard Archive</option>
                        <option value="691">......Pro Wireless Archive</option>
                        <option value="257">....Topre Keyboard Archive</option>
                        <option value="656">......Type Heaven Archive</option>
                      </select>-->
                      <span>
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </div>
                    <div class="box-search">
                      <input type="text" name="s[search]" value placeholder="Search" />
                      <span class="btn-search">
                        <button
                          type="submit"
                          class="waves-effect"
                          onclick="document.forms['searchForm'].submit();"
                        >
                          <img src="../assets/images/search.png" alt />
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-md-3">
                <div class="box-cart">
                  <div class="inner-box">
                    <ul class="menu-compare-wishlist"></ul>
                  </div>
                  <div class="inner-box">
                    <a href="index.php?l=cart_view" title="View Cart &amp; Checkout">
                      <div class="icon-cart">
                        <img src="../assets/images/cart.png" alt />
                        <span>0</span>
                      </div>
                      <div class="price">$0.00</div>
                    </a>
                    <div class="dropdown-box">
                      <ul>
                        <li style="text-align: center;">Your cart is currently empty</li>
                      </ul>
                      <div class="total">
                        <span>Subtotal:</span>
                        <span class="price">$0.00</span>
                      </div>
                      <div class="btn-cart">
                        <a
                          href="index.php?l=cart_view"
                          class="view-cart"
                          title
                        >View Cart &amp; Checkout</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="header-bottom" style="background-color: #fe6200 ">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-2">
                <div id="mega-menu">
                  <div class="btn-mega">
                    <span></span>Categories
                  </div>
                  <ul class="menu">
                    <li>
                      <a
                        href="https://mechanicalkeyboards.com/shop/index.php?l=product_list&amp;c=1"
                        title="Mechanical Keyboards"
                      >
                        <span class="menu-img">
                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </span>
                        <span class="menu-title">Mechanical Keyboards</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://mechanicalkeyboards.com/shop/index.php?l=product_list&amp;c=9"
                        title="Keyboard Accessories"
                      >
                        <span class="menu-img">
                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </span>
                        <span class="menu-title">Keyboard Accessories</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://mechanicalkeyboards.com/shop/index.php?l=product_list&amp;c=53"
                        title="Clearance &amp; Customs"
                      >
                        <span class="menu-img">
                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </span>
                        <span class="menu-title">Clearance &amp; Customs</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://mechanicalkeyboards.com/shop/index.php?l=product_list&amp;c=774"
                        title="Keyboard Displays"
                      >
                        <span class="menu-img">
                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </span>
                        <span class="menu-title">Keyboard Displays</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://mechanicalkeyboards.com/shop/index.php?l=product_list&amp;c=643"
                        title="Workspace"
                      >
                        <span class="menu-img">
                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </span>
                        <span class="menu-title">Workspace</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://mechanicalkeyboards.com/shop/index.php?l=product_list&amp;c=453"
                        title="Clothing &amp; Collectables"
                      >
                        <span class="menu-img">
                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </span>
                        <span class="menu-title">Clothing &amp; Collectabl...</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://mechanicalkeyboards.com/shop/index.php?l=product_list&amp;c=60"
                        title="Keyboard Services"
                      >
                        <span class="menu-img">
                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </span>
                        <span class="menu-title">Keyboard Services</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://mechanicalkeyboards.com/shop/index.php?l=product_list&amp;c=130"
                        title="Archive"
                      >
                        <span class="menu-img">
                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </span>
                        <span class="menu-title">Archive</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-9 col-10">
                <div class="nav-wrap">
                  <div id="mainnav" class="mainnav">
                    <ul class="menu">
                      <li class="column-1">
                        <a href="https://mechanicalkeyboards.com/shop/index.php" title>Shop Home</a>
                        <!--//
			<ul class="submenu">
				<li><a  title=""><i class="fa fa-angle-right" aria-hidden="true"></i>Sub Menu 1</a></li>
				<li><a  title=""><i class="fa fa-angle-right" aria-hidden="true"></i>Sub Menu 2</a></li>
				<li><a  title=""><i class="fa fa-angle-right" aria-hidden="true"></i>Sub Menu 3</a></li>
				<li><a  title=""><i class="fa fa-angle-right" aria-hidden="true"></i>Sub Menu 4</a></li>
			</ul>
                        //-->
                      </li>
                      <!-- EBJ -->
                      <li class="column-1">
                        <a href="../" title>MK Home</a>
                      </li>
                      <!--// Start Hide Registry //-->
                      <li class="column-1">
                        <a
                          href="https://mechanicalkeyboards.com/shop/index.php?l=page_view&amp;p=registry"
                        >Gift Registry</a>
                      </li>
                      <!--// End Hide Registry //-->

                      <li class="column-1">
                        <a
                          href="https://mechanicalkeyboards.com/shop/index.php?l=page_view&amp;p=privacy_policy"
                        >Privacy Policy</a>
                      </li>
                      <li class="column-1">
                        <a
                          href="https://mechanicalkeyboards.com/shop/index.php?l=page_view&amp;p=about_us"
                        >About Us</a>
                      </li>
                      <!--//
		<li class="column-1"><a href="https://mechanicalkeyboards.com/shop/index.php?l=page_view&amp;p=contact_us" >Contact Us</a></li>
                      //-->
                    </ul>
                  </div>
                </div>
                <div class="today-deal">
                  <a href="index.php?l=product_list&c=1" title>Keyboards</a>
                </div>
                <div class="btn-menu">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="section_direct">
        <section class="flat-row flat-slider style4">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="slider owl-carousel-15">
                  <div class="slider-item style8">
                    <div class="item-text">
                      <div class="header-item">
                        <p>Ducky's aluminum frame 60%</p>
                        <h2 class="name">Mecha Mini</h2>
                        <p>You have to feel it to believe it.</p>
                      </div>
                      <div class="content-item">
                        <div class="price">
                          <span class="sale">Only $119</span>
                          <div class="clearfix"></div>
                        </div>
                        <span class="btn-shop">
                          <a href="index.php?l=product_detail&p=5593&mkref=ss9d76u" title>
                            Mecha
                            <img src="../assets/images/right-3.png" alt />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div class="item-image">
                      <img src="../assets/images/Mecha_Mini_shop_slide.jpg" alt />
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="slider-item style8">
                    <div class="item-text">
                      <div class="header-item">
                        <p>The new Koi keyboard is truly beautiful</p>
                        <h2 class="name">Varmilo Koi</h2>
                        <p>A work of art in TKL and full sizes</p>
                      </div>
                      <div class="content-item">
                        <div class="price">
                          <span class="sale">From $166</span>
                          <div class="clearfix"></div>
                        </div>
                        <span class="btn-shop">
                          <a href="index.php?l=product_detail&p=5146&mkref=nczq6t8" title>
                            Koi
                            <img src="../assets/images/right-3.png" alt />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div class="item-image">
                      <img src="../assets/images/Varmilo_Koi_shop_slide.png" alt />
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="slider-item style8">
                    <div class="item-text">
                      <div class="header-item">
                        <p>Varmilo's latest masterpiece</p>
                        <h2 class="name">Beijing Opera</h2>
                        <p>Keyboard and matching pads in stock</p>
                      </div>
                      <div class="content-item">
                        <div class="price">
                          <span class="sale">From $146</span>
                          <div class="clearfix"></div>
                        </div>
                        <span class="btn-shop">
                          <a href="index.php?l=product_detail&p=5477&mkref=e7jtmkz" title>
                            Beijing
                            <img src="../assets/images/right-3.png" alt />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div class="item-image">
                      <img src="../assets/images/Varmilo_Beijing_shop_slide.jpg" alt />
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="slider-item style8">
                    <div class="item-text">
                      <div class="header-item">
                        <p>A programmable Ducky 60%</p>
                        <h2 class="name">One 2 Mini RGB</h2>
                        <p>RGB LEDs & DS PBT caps</p>
                      </div>
                      <div class="content-item">
                        <div class="price">
                          <span class="sale">Only $99</span>
                          <div class="clearfix"></div>
                        </div>
                        <span class="btn-shop">
                          <a href="index.php?l=product_detail&p=4322&mkref=36m9zp4" title>
                            Mini RGB
                            <img src="../assets/images/right-3.png" alt />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div class="item-image">
                      <img src="../assets/images/One_2_Mini_shop_slide.jpg" alt />
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="slider-item style8">
                    <div class="item-text">
                      <div class="header-item">
                        <p>Zinc Alloy RGB awesomeness</p>
                        <h2 class="name">Ducky Shine 7</h2>
                        <p>Limited qtys of Blackout edition in stock</p>
                      </div>
                      <div class="content-item">
                        <div class="price">
                          <span class="sale">$159</span>
                          <div class="clearfix"></div>
                        </div>
                        <span class="btn-shop">
                          <a href="index.php?l=product_detail&p=4332&mkref=rj3qdxr" title>
                            Shine 7
                            <img src="../assets/images/right-3.png" alt />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div class="item-image">
                      <img src="../assets/images/Shine_7_shop_slide.jpg" alt />
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <span id="message"></span>

        <!--// Start Hide Products //-->
        <section class="flat-imagebox">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="product-tab">
                  <ul class="tab-list">
                    <li class="active">Featured Products</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 col-sm-6">
                <div class="product-box">
                  <div class="imagebox">
                    <form
                      name="item_form4322"
                      action="https://mechanicalkeyboards.com/shop/index.php?l=addtocart"
                      method="post"
                      style="padding: 0px; margin: 0px;"
                    >
                      <input type="hidden" name="product[id]" value="4322" />
                      <input type="hidden" name="product[quantity]" value="1" />
                      <ul class="box-image owl-carousel-1">
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4322"
                            title="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDAZT1_main.png"
                              alt="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4322"
                            title="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDAZT1_1.png"
                              alt="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4322"
                            title="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDAZT1_2.png"
                              alt="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4322"
                            title="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDAZT1_3.png"
                              alt="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4322"
                            title="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDAZT1_4.png"
                              alt="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4322"
                            title="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDAZT1_5.png"
                              alt="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4322"
                            title="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDAZT1_6.png"
                              alt="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4322"
                            title="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDAZT1_7.png"
                              alt="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4322"
                            title="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDAZT1_8.png"
                              alt="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4322"
                            title="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDAZT1_9.png"
                              alt="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4322"
                            title="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDAZT1_10.png"
                              alt="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4322"
                            title="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDAZT1_11.png"
                              alt="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4322"
                            title="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDAZT1_12.png"
                              alt="Ducky One 2 Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                      </ul>
                      <div class="box-content">
                        <div class="product-name">
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4322"
                            title
                          >Ducky One 2 Mini RGB LED 60% Double Shot PBT Mechanical Keyboard</a>
                        </div>
                        <div class="price">
                          <span class="sale">$99.00</span>
                        </div>
                      </div>
                      <div class="box-bottom">
                        <div class="btn-add-cart">
                          <a
                            href="javascript:void(0);"
                            onclick="javascript:document.forms['item_form4322'].submit();"
                            title="Add To Cart"
                          >
                            <img src="../assets/images/add-cart.png" alt="Add To Cart" />Add To Cart
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="product-box">
                  <div class="imagebox">
                    <form
                      name="item_form5027"
                      action="https://mechanicalkeyboards.com/shop/index.php?l=addtocart"
                      method="post"
                      style="padding: 0px; margin: 0px;"
                    >
                      <input type="hidden" name="product[id]" value="5027" />
                      <input type="hidden" name="product[quantity]" value="1" />
                      <ul class="box-image owl-carousel-1">
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5027"
                            title="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDWWT1_main.png"
                              alt="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5027"
                            title="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDWWT1_2.jpg"
                              alt="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5027"
                            title="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDWWT1_3.jpg"
                              alt="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5027"
                            title="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDWWT1_4.jpg"
                              alt="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5027"
                            title="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDWWT1_5.jpg"
                              alt="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5027"
                            title="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDWWT1_6.jpg"
                              alt="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5027"
                            title="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDWWT1_7.jpg"
                              alt="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5027"
                            title="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDWWT1_8.jpg"
                              alt="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5027"
                            title="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDWWT1_9.jpg"
                              alt="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5027"
                            title="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDWWT1_1.png"
                              alt="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5027"
                            title="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1861ST-USPDWWT1_11.jpg"
                              alt="Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                      </ul>
                      <div class="box-content">
                        <div class="product-name">
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5027"
                            title
                          >Ducky One 2 Mini Pure White - RGB LED 60% Double Shot PBT Mechanical Keyboard</a>
                        </div>
                        <div class="price">
                          <span class="sale">$99.00</span>
                        </div>
                      </div>
                      <div class="box-bottom">
                        <div class="btn-add-cart">
                          <a
                            href="javascript:void(0);"
                            onclick="javascript:document.forms['item_form5027'].submit();"
                            title="Add To Cart"
                          >
                            <img src="../assets/images/add-cart.png" alt="Add To Cart" />Add To Cart
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="product-box">
                  <div class="imagebox">
                    <!--// Start Hide Data //-->
                    <form
                      name="item_form4332"
                      action="https://mechanicalkeyboards.com/shop/index.php?l=addtocart"
                      method="post"
                      style="padding: 0px; margin: 0px;"
                    >
                      <input type="hidden" name="product[id]" value="4332" />
                      <input type="hidden" name="product[quantity]" value="1" />
                      <ul class="box-image owl-carousel-1">
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4332"
                            title="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKSH1808ST-USPDAAT1_main.png"
                              alt="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4332"
                            title="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKSH1808ST-USPDAAT1_2.jpg"
                              alt="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4332"
                            title="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKSH1808ST-USPDAAT1_3.jpg"
                              alt="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4332"
                            title="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKSH1808ST-USPDAAT1_1.jpg"
                              alt="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4332"
                            title="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKSH1808ST-USPDAAT1_4.jpg"
                              alt="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4332"
                            title="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKSH1808ST-USPDAAT1_6.jpg"
                              alt="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4332"
                            title="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKSH1808ST-USPDAAT1_7.jpg"
                              alt="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4332"
                            title="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKSH1808ST-USPDAAT1_8.png"
                              alt="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4332"
                            title="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKSH1808ST-USPDAAT1_9.png"
                              alt="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4332"
                            title="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKSH1808ST-USPDAAT1_10.png"
                              alt="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4332"
                            title="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKSH1808ST-USPDAAT1_11.jpg"
                              alt="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4332"
                            title="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKSH1808ST-USPDAAT1_12.jpg"
                              alt="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4332"
                            title="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKSH1808ST-USPDAAT1_13.jpg"
                              alt="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4332"
                            title="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKSH1808ST-USPDAAT1_5.jpg"
                              alt="Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                      </ul>
                      <div class="box-content">
                        <div class="product-name">
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4332"
                            title
                          >Ducky Shine 7 Blackout - MK Exclusive First Release - RGB LED Double Shot PBT Mechanical Keyboard</a>
                        </div>
                        <div class="price">
                          <span class="sale">$159.00</span>
                        </div>
                      </div>
                      <div class="box-bottom">
                        <div class="btn-add-cart">
                          <a
                            href="javascript:void(0);"
                            onclick="javascript:document.forms['item_form4332'].submit();"
                            title="Add To Cart"
                          >
                            <img src="../assets/images/add-cart.png" alt="Add To Cart" />Add To Cart
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="product-box">
                  <div class="imagebox">
                    <form
                      name="item_form5461"
                      action="https://mechanicalkeyboards.com/shop/index.php?l=addtocart"
                      method="post"
                      style="padding: 0px; margin: 0px;"
                    >
                      <input type="hidden" name="product[id]" value="5461" />
                      <input type="hidden" name="product[quantity]" value="1" />
                      <ul class="box-image owl-carousel-1">
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5461"
                            title="Ducky One 2 SF RGB LED  65% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1967ST-USPDAZT1_main.jpg"
                              alt="Ducky One 2 SF RGB LED  65% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5461"
                            title="Ducky One 2 SF RGB LED  65% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1967ST-USPDAZT1_1.jpg"
                              alt="Ducky One 2 SF RGB LED  65% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5461"
                            title="Ducky One 2 SF RGB LED  65% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1967ST-USPDAZT1_2.jpg"
                              alt="Ducky One 2 SF RGB LED  65% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5461"
                            title="Ducky One 2 SF RGB LED  65% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1967ST-USPDAZT1_3.jpg"
                              alt="Ducky One 2 SF RGB LED  65% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5461"
                            title="Ducky One 2 SF RGB LED  65% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1967ST-USPDAZT1_4.jpg"
                              alt="Ducky One 2 SF RGB LED  65% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5461"
                            title="Ducky One 2 SF RGB LED  65% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1967ST-USPDAZT1_5.jpg"
                              alt="Ducky One 2 SF RGB LED  65% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5461"
                            title="Ducky One 2 SF RGB LED  65% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1967ST-USPDAZT1_6.jpg"
                              alt="Ducky One 2 SF RGB LED  65% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5461"
                            title="Ducky One 2 SF RGB LED  65% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1967ST-USPDAZT1_7.jpg"
                              alt="Ducky One 2 SF RGB LED  65% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5461"
                            title="Ducky One 2 SF RGB LED  65% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKON1967ST-USPDAZT1_8.jpg"
                              alt="Ducky One 2 SF RGB LED  65% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                      </ul>
                      <div class="box-content">
                        <div class="product-name">
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5461"
                            title
                          >Ducky One 2 SF RGB LED 65% Double Shot PBT Mechanical Keyboard</a>
                        </div>
                        <div class="price">
                          <span class="sale">$109.00</span>
                        </div>
                      </div>
                      <div class="box-bottom">
                        <div class="btn-add-cart">
                          <a
                            href="javascript:void(0);"
                            onclick="javascript:document.forms['item_form5461'].submit();"
                            title="Add To Cart"
                          >
                            <img src="../assets/images/add-cart.png" alt="Add To Cart" />Add To Cart
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="product-box">
                  <div class="imagebox">
                    <form
                      name="item_form5593"
                      action="https://mechanicalkeyboards.com/shop/index.php?l=addtocart"
                      method="post"
                      style="padding: 0px; margin: 0px;"
                    >
                      <input type="hidden" name="product[id]" value="5593" />
                      <input type="hidden" name="product[quantity]" value="1" />
                      <ul class="box-image owl-carousel-1">
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5593"
                            title="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKME1961ST-USPDAAT1_main.jpg"
                              alt="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5593"
                            title="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKME1961ST-USPDAAT1_5.jpg"
                              alt="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5593"
                            title="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKME1961ST-USPDAAT1_6.jpg"
                              alt="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5593"
                            title="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKME1961ST-USPDAAT1_7.jpg"
                              alt="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5593"
                            title="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKME1961ST-USPDAAT1_8.jpg"
                              alt="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5593"
                            title="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKME1961ST-USPDAAT1_9.jpg"
                              alt="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5593"
                            title="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKME1961ST-USPDAAT1_11.jpg"
                              alt="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5593"
                            title="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKME1961ST-USPDAAT1_12.jpg"
                              alt="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5593"
                            title="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKME1961ST-USPDAAT1_13.jpg"
                              alt="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5593"
                            title="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKME1961ST-USPDAAT1_1.jpg"
                              alt="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5593"
                            title="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKME1961ST-USPDAAT1_4.jpg"
                              alt="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5593"
                            title="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_DKME1961ST-USPDAAT1_2.jpg"
                              alt="Ducky One 2 Mecha Mini RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                      </ul>
                      <div class="box-content">
                        <div class="product-name">
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5593"
                            title
                          >Ducky One 2 Mecha Mini RGB LED 60% Double Shot PBT Mechanical Keyboard</a>
                        </div>
                        <div class="price">
                          <span class="sale">$119.00</span>
                        </div>
                      </div>
                      <div class="box-bottom">
                        <div class="btn-add-cart">
                          <a
                            href="javascript:void(0);"
                            onclick="javascript:document.forms['item_form5593'].submit();"
                            title="Add To Cart"
                          >
                            <img src="../assets/images/add-cart.png" alt="Add To Cart" />Add To Cart
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="product-box">
                  <div class="imagebox">
                    <form
                      name="item_form5270"
                      action="https://mechanicalkeyboards.com/shop/index.php?l=addtocart"
                      method="post"
                      style="padding: 0px; margin: 0px;"
                    >
                      <input type="hidden" name="product[id]" value="5270" />
                      <input type="hidden" name="product[quantity]" value="1" />
                      <span class="item-new">NEW</span>
                      <ul class="box-image owl-carousel-1">
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5270"
                            title="MK x Ducky 'Frozen Llama' Keycap Set 108 + 11 PBT Seamless Doubleshot Keycap Set"
                          >
                            <img
                              src="../assets/images/thumb_DKSA108-USPDZZZOF_main.jpg"
                              alt="MK x Ducky 'Frozen Llama' Keycap Set 108 + 11 PBT Seamless Doubleshot Keycap Set"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5270"
                            title="MK x Ducky 'Frozen Llama' Keycap Set 108 + 11 PBT Seamless Doubleshot Keycap Set"
                          >
                            <img
                              src="../assets/images/thumb_DKSA108-USPDZZZOF_1.jpg"
                              alt="MK x Ducky 'Frozen Llama' Keycap Set 108 + 11 PBT Seamless Doubleshot Keycap Set"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5270"
                            title="MK x Ducky 'Frozen Llama' Keycap Set 108 + 11 PBT Seamless Doubleshot Keycap Set"
                          >
                            <img
                              src="../assets/images/thumb_DKSA108-USPDZZZOF_2.jpg"
                              alt="MK x Ducky 'Frozen Llama' Keycap Set 108 + 11 PBT Seamless Doubleshot Keycap Set"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5270"
                            title="MK x Ducky 'Frozen Llama' Keycap Set 108 + 11 PBT Seamless Doubleshot Keycap Set"
                          >
                            <img
                              src="../assets/images/thumb_DKSA108-USPDZZZOF_3.jpg"
                              alt="MK x Ducky 'Frozen Llama' Keycap Set 108 + 11 PBT Seamless Doubleshot Keycap Set"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5270"
                            title="MK x Ducky 'Frozen Llama' Keycap Set 108 + 11 PBT Seamless Doubleshot Keycap Set"
                          >
                            <img
                              src="../assets/images/thumb_DKSA108-USPDZZZOF_4.jpg"
                              alt="MK x Ducky 'Frozen Llama' Keycap Set 108 + 11 PBT Seamless Doubleshot Keycap Set"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5270"
                            title="MK x Ducky 'Frozen Llama' Keycap Set 108 + 11 PBT Seamless Doubleshot Keycap Set"
                          >
                            <img
                              src="../assets/images/thumb_DKSA108-USPDZZZOF_7.jpg"
                              alt="MK x Ducky 'Frozen Llama' Keycap Set 108 + 11 PBT Seamless Doubleshot Keycap Set"
                            />
                          </a>
                        </li>
                      </ul>
                      <div class="box-content">
                        <div class="product-name">
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5270"
                            title
                          >MK x Ducky 'Frozen Llama' Keycap Set 108 + 11 PBT Seamless Doubleshot Keycap Set</a>
                        </div>
                        <div class="price">
                          <span class="sale">$49.00</span>
                        </div>
                      </div>
                      <div class="box-bottom">
                        <div class="btn-add-cart">
                          <a
                            href="javascript:void(0);"
                            onclick="javascript:document.forms['item_form5270'].submit();"
                            title="Add To Cart"
                          >
                            <img src="../assets/images/add-cart.png" alt="Add To Cart" />Add To Cart
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="product-box">
                  <div class="imagebox">
                    <!--// Start Hide Data //-->
                    <form
                      name="item_form4295"
                      action="https://mechanicalkeyboards.com/shop/index.php?l=addtocart"
                      method="post"
                      style="padding: 0px; margin: 0px;"
                    >
                      <input type="hidden" name="product[id]" value="4295" />
                      <input type="hidden" name="product[quantity]" value="1" />
                      <ul class="box-image owl-carousel-1">
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4295"
                            title="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_MKNightTypist_main.png"
                              alt="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4295"
                            title="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_MKNightTypist_1.jpg"
                              alt="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4295"
                            title="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_MKNightTypist_2.jpg"
                              alt="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4295"
                            title="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_MKNightTypist_3.jpg"
                              alt="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4295"
                            title="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_MKNightTypist_4.jpg"
                              alt="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4295"
                            title="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_MKNightTypist_5.jpg"
                              alt="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4295"
                            title="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_MKNightTypist_6.jpg"
                              alt="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4295"
                            title="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_MKNightTypist_7.jpg"
                              alt="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4295"
                            title="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_MKNightTypist_8.jpg"
                              alt="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4295"
                            title="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_MKNightTypist_9.jpg"
                              alt="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4295"
                            title="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_MKNightTypist_10.jpg"
                              alt="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4295"
                            title="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_MKNightTypist_11.jpg"
                              alt="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4295"
                            title="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_MKNightTypist_12.jpg"
                              alt="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4295"
                            title="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_MKNightTypist_13.jpg"
                              alt="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4295"
                            title="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_MKNightTypist_14.jpg"
                              alt="MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard"
                            />
                          </a>
                        </li>
                      </ul>
                      <div class="box-content">
                        <div class="product-name">
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4295"
                            title
                          >MK Night Typist Warm White LED Backlit, PBT Double Shot keycaps, Type C USB, Programmable, 16 Layout Mechanical Keyboard</a>
                        </div>
                        <div class="price">
                          <span class="sale">$99.00</span>
                          <span class="regular">$109.00</span>
                        </div>
                      </div>
                      <div class="box-bottom">
                        <div class="btn-add-cart">
                          <!--// Start Hide Add To Cart //-->
                          <a
                            href="javascript:void(0);"
                            onclick="javascript:document.forms['item_form4295'].submit();"
                            title="Add To Cart"
                          >
                            <img src="../assets/images/add-cart.png" alt="Add To Cart" />Add To Cart
                          </a>
                          <!--// End Hide Add To Cart //-->
                        </div>
                      </div>
                    </form>
                    <!--// End Hide Data //-->
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="product-box">
                  <div class="imagebox">
                    <!--// Start Hide Data //-->
                    <form
                      name="item_form5582"
                      action="https://mechanicalkeyboards.com/shop/index.php?l=addtocart"
                      method="post"
                      style="padding: 0px; margin: 0px;"
                    >
                      <input type="hidden" name="product[id]" value="5582" />
                      <input type="hidden" name="product[quantity]" value="1" />
                      <ul class="box-image owl-carousel-1">
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5582"
                            title="Obinslab Anne Pro 2 White RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_KB181-White_main.jpg"
                              alt="Obinslab Anne Pro 2 White RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5582"
                            title="Obinslab Anne Pro 2 White RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_KB181-White_1.jpg"
                              alt="Obinslab Anne Pro 2 White RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5582"
                            title="Obinslab Anne Pro 2 White RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_KB181-White_2.jpg"
                              alt="Obinslab Anne Pro 2 White RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5582"
                            title="Obinslab Anne Pro 2 White RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_KB181-White_3.jpg"
                              alt="Obinslab Anne Pro 2 White RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5582"
                            title="Obinslab Anne Pro 2 White RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_KB181-White_4.jpg"
                              alt="Obinslab Anne Pro 2 White RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                      </ul>
                      <div class="box-content">
                        <div class="product-name">
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5582"
                            title
                          >Obinslab Anne Pro 2 White RGB LED 60% Double Shot PBT Mechanical Keyboard</a>
                        </div>
                        <div class="price">
                          <span class="sale">$84.00</span>
                        </div>
                      </div>
                      <div class="box-bottom">
                        <div class="btn-add-cart">
                          <!--// Start Hide Add To Cart //-->
                          <a
                            href="javascript:void(0);"
                            onclick="javascript:document.forms['item_form5582'].submit();"
                            title="Add To Cart"
                          >
                            <img src="../assets/images/add-cart.png" alt="Add To Cart" />Add To Cart
                          </a>
                          <!--// End Hide Add To Cart //-->
                        </div>
                      </div>
                    </form>
                    <!--// End Hide Data //-->
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="product-box">
                  <div class="imagebox">
                    <!--// Start Hide Data //-->
                    <form
                      name="item_form5581"
                      action="https://mechanicalkeyboards.com/shop/index.php?l=addtocart"
                      method="post"
                      style="padding: 0px; margin: 0px;"
                    >
                      <input type="hidden" name="product[id]" value="5581" />
                      <input type="hidden" name="product[quantity]" value="1" />
                      <ul class="box-image owl-carousel-1">
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5581"
                            title="Obinslab Anne Pro 2 Black RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_KB181-Black_main.jpg"
                              alt="Obinslab Anne Pro 2 Black RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5581"
                            title="Obinslab Anne Pro 2 Black RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_KB181-Black_2.jpg"
                              alt="Obinslab Anne Pro 2 Black RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5581"
                            title="Obinslab Anne Pro 2 Black RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_KB181-Black_3.jpg"
                              alt="Obinslab Anne Pro 2 Black RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5581"
                            title="Obinslab Anne Pro 2 Black RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_KB181-Black_4.jpg"
                              alt="Obinslab Anne Pro 2 Black RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5581"
                            title="Obinslab Anne Pro 2 Black RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_KB181-Black_6.jpg"
                              alt="Obinslab Anne Pro 2 Black RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5581"
                            title="Obinslab Anne Pro 2 Black RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_KB181-Black_7.jpg"
                              alt="Obinslab Anne Pro 2 Black RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5581"
                            title="Obinslab Anne Pro 2 Black RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_KB181-Black_1.jpg"
                              alt="Obinslab Anne Pro 2 Black RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                      </ul>
                      <div class="box-content">
                        <div class="product-name">
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5581"
                            title
                          >Obinslab Anne Pro 2 Black RGB LED 60% Double Shot PBT Mechanical Keyboard</a>
                        </div>
                        <div class="price">
                          <span class="sale">$84.00</span>
                        </div>
                      </div>
                      <div class="box-bottom">
                        <div class="btn-add-cart">
                          <!--// Start Hide Add To Cart //-->
                          <a
                            href="javascript:void(0);"
                            onclick="javascript:document.forms['item_form5581'].submit();"
                            title="Add To Cart"
                          >
                            <img src="../assets/images/add-cart.png" alt="Add To Cart" />Add To Cart
                          </a>
                          <!--// End Hide Add To Cart //-->
                        </div>
                      </div>
                    </form>
                    <!--// End Hide Data //-->
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="product-box">
                  <div class="imagebox">
                    <!--// Start Hide Data //-->
                    <form
                      name="item_form5220"
                      action="https://mechanicalkeyboards.com/shop/index.php?l=addtocart"
                      method="post"
                      style="padding: 0px; margin: 0px;"
                    >
                      <input type="hidden" name="product[id]" value="5220" />
                      <input type="hidden" name="product[quantity]" value="1" />
                      <span class="item-new">NEW</span>
                      <ul class="box-image owl-carousel-1">
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5220"
                            title="Specter - Teal / Gray / Purple (Hot Keys Project)"
                          >
                            <img
                              src="../assets/images/thumb_HKP-SP-TP_main.jpg"
                              alt="Specter - Teal / Gray / Purple (Hot Keys Project)"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5220"
                            title="Specter - Teal / Gray / Purple (Hot Keys Project)"
                          >
                            <img
                              src="../assets/images/thumb_HKP-SP-TP_1.jpg"
                              alt="Specter - Teal / Gray / Purple (Hot Keys Project)"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5220"
                            title="Specter - Teal / Gray / Purple (Hot Keys Project)"
                          >
                            <img
                              src="../assets/images/thumb_HKP-SP-TP_2.jpg"
                              alt="Specter - Teal / Gray / Purple (Hot Keys Project)"
                            />
                          </a>
                        </li>
                      </ul>
                      <div class="box-content">
                        <div class="product-name">
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5220"
                            title
                          >Specter - Teal / Gray / Purple (Hot Keys Project)</a>
                        </div>
                        <div class="price">
                          <span class="sale">$30.00</span>
                        </div>
                      </div>
                      <div class="box-bottom">
                        <div class="btn-add-cart">
                          <!--// Start Hide Add To Cart //-->
                          <a
                            href="javascript:void(0);"
                            onclick="javascript:document.forms['item_form5220'].submit();"
                            title="Add To Cart"
                          >
                            <img src="../assets/images/add-cart.png" alt="Add To Cart" />Add To Cart
                          </a>
                          <!--// End Hide Add To Cart //-->
                        </div>
                      </div>
                    </form>
                    <!--// End Hide Data //-->
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="product-box">
                  <div class="imagebox">
                    <!--// Start Hide Data //-->
                    <form
                      name="item_form5479"
                      action="https://mechanicalkeyboards.com/shop/index.php?l=addtocart"
                      method="post"
                      style="padding: 0px; margin: 0px;"
                    >
                      <input type="hidden" name="product[id]" value="5479" />
                      <input type="hidden" name="product[quantity]" value="1" />
                      <ul class="box-image owl-carousel-1">
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5479"
                            title="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_main.jpg"
                              alt="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5479"
                            title="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_1.jpg"
                              alt="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5479"
                            title="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_2.jpg"
                              alt="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5479"
                            title="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_3.jpg"
                              alt="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5479"
                            title="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_4.jpg"
                              alt="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5479"
                            title="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_5.jpg"
                              alt="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5479"
                            title="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_6.jpg"
                              alt="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5479"
                            title="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_7.jpg"
                              alt="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5479"
                            title="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_8.jpg"
                              alt="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5479"
                            title="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_9.jpg"
                              alt="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5479"
                            title="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_10.jpg"
                              alt="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5479"
                            title="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_11.jpg"
                              alt="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5479"
                            title="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_12.jpg"
                              alt="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5479"
                            title="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_13.jpg"
                              alt="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5479"
                            title="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_14.jpg"
                              alt="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5479"
                            title="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_15.jpg"
                              alt="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5479"
                            title="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_5479_thumb_VA108M2NLL3Dj2Pv_16.jpg"
                              alt="Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                      </ul>
                      <div class="box-content">
                        <div class="product-name">
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5479"
                            title
                          >Varmilo VA108M Beijing Opera Dye Sub PBT Mechanical Keyboard</a>
                        </div>
                        <div class="price">
                          <span class="sale">$162.00</span>
                        </div>
                      </div>
                      <div class="box-bottom">
                        <div class="btn-add-cart">
                          <!--// Start Hide Add To Cart //-->
                          <a
                            href="javascript:void(0);"
                            onclick="javascript:document.forms['item_form5479'].submit();"
                            title="Add To Cart"
                          >
                            <img src="../assets/images/add-cart.png" alt="Add To Cart" />Add To Cart
                          </a>
                          <!--// End Hide Add To Cart //-->
                        </div>
                      </div>
                    </form>
                    <!--// End Hide Data //-->
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="product-box">
                  <div class="imagebox">
                    <!--// Start Hide Data //-->
                    <form
                      name="item_form3626"
                      action="https://mechanicalkeyboards.com/shop/index.php?l=addtocart"
                      method="post"
                      style="padding: 0px; margin: 0px;"
                    >
                      <input type="hidden" name="product[id]" value="3626" />
                      <input type="hidden" name="product[quantity]" value="1" />
                      <ul class="box-image owl-carousel-1">
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=3626"
                            title="Vortex POK3R Silver LE Blue Border RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_VTG61USACSBEBLK_main.jpg"
                              alt="Vortex POK3R Silver LE Blue Border RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=3626"
                            title="Vortex POK3R Silver LE Blue Border RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_VTG61USACSBEBLK_1.jpg"
                              alt="Vortex POK3R Silver LE Blue Border RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=3626"
                            title="Vortex POK3R Silver LE Blue Border RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_VTG61USACSBEBLK_2.jpg"
                              alt="Vortex POK3R Silver LE Blue Border RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=3626"
                            title="Vortex POK3R Silver LE Blue Border RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_VTG61USACSBEBLK_3.jpg"
                              alt="Vortex POK3R Silver LE Blue Border RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=3626"
                            title="Vortex POK3R Silver LE Blue Border RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_VTG61USACSBEBLK_4.jpg"
                              alt="Vortex POK3R Silver LE Blue Border RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=3626"
                            title="Vortex POK3R Silver LE Blue Border RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_VTG61USACSBEBLK_5.jpg"
                              alt="Vortex POK3R Silver LE Blue Border RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=3626"
                            title="Vortex POK3R Silver LE Blue Border RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_VTG61USACSBEBLK_6.jpg"
                              alt="Vortex POK3R Silver LE Blue Border RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=3626"
                            title="Vortex POK3R Silver LE Blue Border RGB LED  60% Double Shot PBT Mechanical Keyboard"
                          >
                            <img
                              src="../assets/images/thumb_VTG61USACSBEBLK_7.jpg"
                              alt="Vortex POK3R Silver LE Blue Border RGB LED  60% Double Shot PBT Mechanical Keyboard"
                            />
                          </a>
                        </li>
                      </ul>
                      <div class="box-content">
                        <div class="product-name">
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=3626"
                            title
                          >Vortex POK3R Silver LE Blue Border RGB LED 60% Double Shot PBT Mechanical Keyboard</a>
                        </div>
                        <div class="price">
                          <span class="sale">$169.00</span>
                        </div>
                      </div>
                      <div class="box-bottom">
                        <div class="btn-add-cart">
                          <!--// Start Hide Add To Cart //-->
                          <a
                            href="javascript:void(0);"
                            onclick="javascript:document.forms['item_form3626'].submit();"
                            title="Add To Cart"
                          >
                            <img src="../assets/images/add-cart.png" alt="Add To Cart" />Add To Cart
                          </a>
                          <!--// End Hide Add To Cart //-->
                        </div>
                      </div>
                    </form>
                    <!--// End Hide Data //-->
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="product-box">
                  <div class="imagebox">
                    <!--// Start Hide Data //-->
                    <form
                      name="item_form5790"
                      action="https://mechanicalkeyboards.com/shop/index.php?l=addtocart"
                      method="post"
                      style="padding: 0px; margin: 0px;"
                    >
                      <input type="hidden" name="product[id]" value="5790" />
                      <input type="hidden" name="product[quantity]" value="1" />
                      <span class="item-new">NEW</span>
                      <ul class="box-image owl-carousel-1">
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5790"
                            title="108 Key PBT Seamless Doubleshot Pudding Keycap Set (Ducky)"
                          >
                            <img
                              src="../assets/images/thumb_DKSA108-USPDAWN02_main.jpg"
                              alt="108 Key PBT Seamless Doubleshot Pudding Keycap Set (Ducky)"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5790"
                            title="108 Key PBT Seamless Doubleshot Pudding Keycap Set (Ducky)"
                          >
                            <img
                              src="../assets/images/thumb_DKSA108-USPDAWN02_1.jpg"
                              alt="108 Key PBT Seamless Doubleshot Pudding Keycap Set (Ducky)"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5790"
                            title="108 Key PBT Seamless Doubleshot Pudding Keycap Set (Ducky)"
                          >
                            <img
                              src="../assets/images/thumb_DKSA108-USPDAWN02_2.jpg"
                              alt="108 Key PBT Seamless Doubleshot Pudding Keycap Set (Ducky)"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5790"
                            title="108 Key PBT Seamless Doubleshot Pudding Keycap Set (Ducky)"
                          >
                            <img
                              src="../assets/images/thumb_DKSA108-USPDAWN02_3.jpg"
                              alt="108 Key PBT Seamless Doubleshot Pudding Keycap Set (Ducky)"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5790"
                            title="108 Key PBT Seamless Doubleshot Pudding Keycap Set (Ducky)"
                          >
                            <img
                              src="../assets/images/thumb_DKSA108-USPDAWN02_4.jpg"
                              alt="108 Key PBT Seamless Doubleshot Pudding Keycap Set (Ducky)"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5790"
                            title="108 Key PBT Seamless Doubleshot Pudding Keycap Set (Ducky)"
                          >
                            <img
                              src="../assets/images/thumb_DKSA108-USPDAWN02_5.jpg"
                              alt="108 Key PBT Seamless Doubleshot Pudding Keycap Set (Ducky)"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5790"
                            title="108 Key PBT Seamless Doubleshot Pudding Keycap Set (Ducky)"
                          >
                            <img
                              src="../assets/images/thumb_DKSA108-USPDAWN02_6.jpg"
                              alt="108 Key PBT Seamless Doubleshot Pudding Keycap Set (Ducky)"
                            />
                          </a>
                        </li>
                      </ul>
                      <div class="box-content">
                        <div class="product-name">
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5790"
                            title
                          >108 Key PBT Seamless Doubleshot Pudding Keycap Set (Ducky)</a>
                        </div>
                        <div class="price">
                          <span class="sale">$29.00</span>
                        </div>
                      </div>
                      <div class="box-bottom">
                        <div class="btn-add-cart">
                          <!--// Start Hide Add To Cart //-->
                          <a
                            href="javascript:void(0);"
                            onclick="javascript:document.forms['item_form5790'].submit();"
                            title="Add To Cart"
                          >
                            <img src="../assets/images/add-cart.png" alt="Add To Cart" />Add To Cart
                          </a>
                          <!--// End Hide Add To Cart //-->
                        </div>
                      </div>
                    </form>
                    <!--// End Hide Data //-->
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="product-box">
                  <div class="imagebox">
                    <!--// Start Hide Data //-->
                    <form
                      name="item_form5431"
                      action="https://mechanicalkeyboards.com/shop/index.php?l=addtocart"
                      method="post"
                      style="padding: 0px; margin: 0px;"
                    >
                      <input type="hidden" name="product[id]" value="5431" />
                      <input type="hidden" name="product[quantity]" value="1" />
                      <span class="item-new">NEW</span>
                      <ul class="box-image owl-carousel-1">
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5431"
                            title="MK Pro Rings Silicone Switch Dampening O-rings 70A 3.0mm (120 Pack)"
                          >
                            <img
                              src="../assets/images/thumb_mkProRings70A30_main.jpg"
                              alt="MK Pro Rings Silicone Switch Dampening O-rings 70A 3.0mm (120 Pack)"
                            />
                          </a>
                        </li>
                      </ul>
                      <div class="box-content">
                        <div class="product-name">
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=5431"
                            title
                          >MK Pro Rings Silicone Switch Dampening O-rings 70A 3.0mm (120 Pack)</a>
                        </div>
                        <div class="price">
                          <span class="sale">$14.00</span>
                        </div>
                      </div>
                      <div class="box-bottom">
                        <div class="btn-add-cart">
                          <!--// Start Hide Add To Cart //-->
                          <a
                            href="javascript:void(0);"
                            onclick="javascript:document.forms['item_form5431'].submit();"
                            title="Add To Cart"
                          >
                            <img src="../assets/images/add-cart.png" alt="Add To Cart" />Add To Cart
                          </a>
                          <!--// End Hide Add To Cart //-->
                        </div>
                      </div>
                    </form>
                    <!--// End Hide Data //-->
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="product-box">
                  <div class="imagebox">
                    <!--// Start Hide Data //-->
                    <form
                      name="item_form4764"
                      action="https://mechanicalkeyboards.com/shop/index.php?l=addtocart"
                      method="post"
                      style="padding: 0px; margin: 0px;"
                    >
                      <input type="hidden" name="product[id]" value="4764" />
                      <input type="hidden" name="product[quantity]" value="1" />
                      <span class="item-new">NEW</span>
                      <ul class="box-image owl-carousel-1">
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4764"
                            title="Diesel - Woodland (Hot Keys Project)"
                          >
                            <img
                              src="../assets/images/thumb_4764_thumb_HKP-DI-WL_main.jpg"
                              alt="Diesel - Woodland (Hot Keys Project)"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4764"
                            title="Diesel - Woodland (Hot Keys Project)"
                          >
                            <img
                              src="../assets/images/thumb_4764_thumb_HKP-DI-WL_1.jpg"
                              alt="Diesel - Woodland (Hot Keys Project)"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4764"
                            title="Diesel - Woodland (Hot Keys Project)"
                          >
                            <img
                              src="../assets/images/thumb_4764_thumb_HKP-DI-WL_2.jpg"
                              alt="Diesel - Woodland (Hot Keys Project)"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4764"
                            title="Diesel - Woodland (Hot Keys Project)"
                          >
                            <img
                              src="../assets/images/thumb_4764_thumb_HKP-DI-WL_3.jpg"
                              alt="Diesel - Woodland (Hot Keys Project)"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4764"
                            title="Diesel - Woodland (Hot Keys Project)"
                          >
                            <img
                              src="../assets/images/thumb_4764_thumb_HKP-DI-WL_4.jpg"
                              alt="Diesel - Woodland (Hot Keys Project)"
                            />
                          </a>
                        </li>
                      </ul>
                      <div class="box-content">
                        <div class="product-name">
                          <a
                            href="https://mechanicalkeyboards.com/shop/index.php?l=product_detail&amp;p=4764"
                            title
                          >Diesel - Woodland (Hot Keys Project)</a>
                        </div>
                        <div class="price">
                          <span class="sale">$30.00</span>
                        </div>
                      </div>
                      <div class="box-bottom">
                        <div class="btn-add-cart">
                          <!--// Start Hide Add To Cart //-->
                          <a
                            href="javascript:void(0);"
                            onclick="javascript:document.forms['item_form4764'].submit();"
                            title="Add To Cart"
                          >
                            <img src="../assets/images/add-cart.png" alt="Add To Cart" />Add To Cart
                          </a>
                          <!--// End Hide Add To Cart //-->
                        </div>
                      </div>
                    </form>
                    <!--// End Hide Data //-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--// End Hide Products //-->

        <section class="flat-iconbox">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-6">
                <div class="iconbox">
                  <div class="box-header">
                    <div class="image">
                      <img src="../assets/images/car.png" alt />
                    </div>
                    <div class="box-title">
                      <h3>Worldwide Shipping</h3>
                    </div>
                  </div>
                  <div class="box-content">
                    <p>Free Shipping to the U.S.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="iconbox">
                  <div class="box-header">
                    <div class="image">
                      <img src="../assets/images/order.png" alt />
                    </div>
                    <div class="box-title">
                      <h3>World-class Support</h3>
                    </div>
                  </div>
                  <div class="box-content">
                    <p>Before and after sale</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="iconbox">
                  <div class="box-header">
                    <div class="image">
                      <img src="../assets/images/payment.png" alt />
                    </div>
                    <div class="box-title">
                      <h3>Pay Securely</h3>
                    </div>
                  </div>
                  <div class="box-content">
                    <p>CC, PayPal, & Amazon Pay</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="iconbox">
                  <div class="box-header">
                    <div class="image">
                      <img src="../assets/images/return.png" alt />
                    </div>
                    <div class="box-title">
                      <h3>30 Day Returns</h3>
                    </div>
                  </div>
                  <div class="box-content">
                    <p>And in-house warranty support*</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="widget-ft widget-about">
                <div class="logo logo-ft">
                  <a href="https://mechanicalkeyboards.com/shop/" title="MechanicalKeyboards.com">
                    <img src="../assets/images/footer_logo_logo.png" alt="MechanicalKeyboards.com" />
                  </a>
                </div>
                <div class="widget-content">
                  <div class="icon">
                    <img src="../assets/images/call.png" alt />
                  </div>
                  <div class="info">
                    <p class="questions">Questions?</p>
                    <p class="phone">
                      <a href="tel:615.266.1420">615.266.1420</a>
                    </p>
                    <p class="address">Fairview, TN</p>
                  </div>
                </div>
                <ul class="social-list" style="text-align: center;">
                  <li>
                    <a href="https://www.facebook.com/MechanicalKeyboards" target="_SOC">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/MKeyboards" target="_SOC">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/c/MechanicalKeyboards" target="_SOC">
                      <i class="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="widget-ft widget-categories-ft">
                <div class="widget-title">
                  <h3>Information</h3>
                </div>
                <ul class="cat-list-ft">
                  <li>
                    <a
                      href="https://mechanicalkeyboards.com/shop/index.php?l=page_view&amp;p=about_us"
                    >About Us</a>
                  </li>
                  <li>
                    <a
                      href="https://mechanicalkeyboards.com/shop/index.php?l=page_view&amp;p=privacy_policy"
                    >Privacy Policy</a>
                  </li>
                  <li>
                    <a
                      href="https://mechanicalkeyboards.com/shop/index.php?l=page_view&amp;p=contact_us"
                    >Contact Us</a>
                  </li>
                  <li>
                    <a
                      href="https://mechanicalkeyboards.com/shop/index.php?l=page_view&amp;p=advanced_search"
                    >Advanced Search</a>
                  </li>
                  <li>
                    <a
                      href="https://mechanicalkeyboards.com/shop/index.php?l=page_view&amp;p=site_map"
                    >Site Map</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-6">
              <div class="widget-ft widget-menu">
                <div class="widget-title">
                  <h3>My Account</h3>
                </div>
                <ul>
                  <li>
                    <a href="https://mechanicalkeyboards.com/shop/index.php?l=account">My Account</a>
                  </li>
                  <li>
                    <a
                      href="https://mechanicalkeyboards.com/shop/index.php?l=account&amp;tab=3"
                    >Order History</a>
                  </li>
                  <li>
                    <a
                      href="https://mechanicalkeyboards.com/shop/index.php?l=account&amp;tab=5"
                    >Wishlist</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="widget-ft widget-newsletter">
                <div class="widget-title">
                  <h3>Newsletter Signup</h3>
                </div>
                <p>Submit your e-mail address to receive free updates and promotions.</p>
                <form
                  action="index.php"
                  class="subscribe-form"
                  method="post"
                  accept-charset="utf-8"
                >
                  <div class="subscribe-content">
                    <input
                      type="text"
                      name="news[email_address]"
                      class="subscribe-email"
                      placeholder="Enter Email"
                    />
                    <button type="submit" onclick="javascript:this.form.submit();">
                      <img src="../assets/images/right-2.png" alt="Subscribe" />
                    </button>
                  </div>
                </form>
                <ul class="pay-list">
                  <li>
                    <img src="../assets/images/ft-01.png" alt="PayPal" />
                  </li>
                  <li>
                    <img src="../assets/images/ft-02.png" alt="Discover" />
                  </li>
                  <li>
                    <img src="../assets/images/ft-03.png" alt="Visa" />
                  </li>
                  <li>
                    <img src="../assets/images/ft-04.png" alt="MasterCard" />
                  </li>
                  <li>
                    <img src="../assets/images/ft-05.png" alt="American Express" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <p class="copyright">
                MechanicalKeyboards.com &copy;Copyright 2019
                <a
                  href="https://www.mechanicalkeyboards.com/"
                >Mechanical Keyboards Inc</a> &nbsp;&nbsp;-&nbsp;&nbsp;
              </p>
              <p class="btn-scroll">
                <a title>
                  <img src="../assets/images/top.png" alt />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<style scoped>
@import "../assets/css/index/bootstrap.min.css";
@import "../assets/css/index/stylesheet.css";
@import "../assets/css/index/lightbox.css";
@import "../assets/css/index/style.css";

@import "../assets/css/index/responsive.css";
@import "../assets/css/index/responsive_adjust.css";
@import "../assets/css/index/featherlight.min.css";
</style>

<script type="text/javascript" src="../assets/js/tether.min.js"></script>
<script type="text/javascript" src="../assets/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../assets/js/waypoints.min.js"></script>
<script type="text/javascript" src="../assets/js/easing.js"></script>
<script type="text/javascript" src="../assets/js/jquery.zoom.min.js"></script>
<script type="text/javascript" src="../assets/js/jquery.flexslider-min.js"></script>
<script type="text/javascript" src="../assets/js/owl.carousel.js"></script>
<script type="text/javascript" src="../assets/js/jquery.mCustomScrollbar.js"></script>
<script type="text/javascript" src="../assets/js/waves.min.js"></script>
<script type="text/javascript" src="../assets/js/tabs.js"></script>
<script type="text/javascript" src="../assets/js/custom.js"></script>
<script type="text/javascript" src="../assets/js/main.js"></script>
<script type="text/javascript" src="../assets/js/featherlight.min.js"></script>
<script type="text/javascript" src="../assets/js/global.js"></script>
<script type="text/javascript" src="../assets/js/ebj.js"></script>
<script src="../assets/js/lightbox.js"></script>
    <script>
lightbox.option({
  resizeDuration: 300,
  wrapAround: true,
  fadeDuration: 200,
  imageFadeDuration: 200
});
</script>
<script type="text/javascript" src="../assets/js/jquery.min.js"></script>

<script>
$(document).ready(function() {
  var slideProduct = function() {
    $(".owl-carousel-1").owlCarousel({
      autoplay: false,
      nav: true,
      dots: false,
      responsive: true,
      margin: 0,
      loop: true,
      items: 1,
      onInitialize: function(event) {
        if ($(".owl-carousel .item").length <= 1) {
          this.settings.loop = false;
        }
      }
    });
  };
  slideProduct();
});
</script>
<script type="text/javascript">
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-4020623-14"]);
_gaq.push(["_trackPageview"]);

(function() {
  var ga = document.createElement("script");
  ga.type = "text/javascript";
  ga.async = true;
  ga.src =
    ("https:" == document.location.protocol ? "https://ssl" : "http://www") +
    ".google-analytics.com/ga.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(ga, s);
})();
</script>
