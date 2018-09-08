var klasa;
var wojewodztwo;
var powiat;
var poorCities = {  
		"jędrzejowski" : "Jędrzejów",
		"stalowowolski" : "Stalowa Wola",
		"Elbląg" : "Elbląg",
		"gorlicki" : "Gorlice",
		"Zabrze" : "Zabrze",
		"międzyrzecki" : "Międzyrzecz",
		"kraśnicki" : "Kraśnik",
		"rypiński" : "Rypin",
		"zambrowski" : "Zambrów",
		"skarżyski" : "Skarżysko-Kamienna",
		"Świętochłowice" : "Świętochłowice",
		"krapkowicki" : "Krapkowice",
		"ciechanowski" : "Ciechanów",
		"pleszewski" : "Pleszew",
		"olecki" : "Olecko",
		"łomżyński" : "Łomża",
		"bialski" : "Biała Podlaska",
		"mrągowski" : "Mrągowo",
		"Łomża" : "Łomża",
		"sokólski" : "Sokółka",
		"strzelecki" : "Strzelce Opolskie",
		"kluczborski" : "Kluczbork",
		"pułtuski" : "Pułtusk",
		"szczecinecki" : "Szczecinek",
		"tatrzański" : "Zakopane",
		"Jastrzębie-Zdrój" : "Jastrzębie-Zdrój",
		"krasnostawski" : "Krasnystaw",
		"jarosławski" : "Jarosław",
		"kłodzki" : "Kłodzko",
		"nakielski" : "Nakło nad Notecią",
		"Sosnowiec" : "Sosnowiec",
		"Chełm" : "Chełm",
		"krośnieński" : "Krosno",
		"koniński" : "Konin",
		"radomski" : "Radom",
		"nyski" : "Nysa",
		"hajnowski" : "Hajnówka",
		"świdnicki" : "Świebodzice",
		"pilski" : "Piła",
		"ostrowski" : "Ostrów Mazowiecka",
		"radomszczański" : "Radomsko",
		"mielecki" : "Mielec",
		"nowotarski" : "Nowy Targ",
		"tarnobrzeski" : "Tarnobrzeg",
		"elbląski" : "Elbląg",
		"nowosądecki" : "Nowy Sącz",
		"Nowy Sącz" : "Nowy Sącz",
		"Włocławek" : "Włocławek",
		"zduńskowolski" : "Zduńska Wola",
		"lubański" : "Lubań",
		"żarski" : "Żary",
		"jasielski" : "Jasło",
		"Zamość" : "Zamość",
		"zamojski" : "Zamość",
		"ostrowiecki" : "Ostrowiec Świętokrzyski",
		"kutnowski" : "Kutno",
		"radzyński" : "Radzyń Podlaski",
		"bielski" : "Bielsk Podlaski",
		"bartoszycki" : "Bartoszyce",
		"Biała Podlaska" : "Biała Podlaska",
		"gostyniński" : "Gostynin",
		"jaworski" : "Jawor",
		"Słupsk" : "Słupsk",
		"dębicki" : "Dębica",
		"kamiennogórski" : "Kamienna Góra",
		"sierpecki" : "Sierpc",
		"działdowski" : "Działdowo",
		"Tarnobrzeg" : "Tarnobrzeg",
		"pruszkowski" : "Prudnik",
		"szczycieński" : "Szczytno",
		"starachowicki" : "Starachowice",
		"grajewski" : "Grajewo",
		"dzierżoniowski" : "Dzierżoniów, Bielawa",
		"Bytom" : "Bytom",
		"Radom" : "Radom",
		"augustowski" : "Augustów",
		"Tarnów" : "Tarnów",
		"ząbkowicki" : "Ząbkowice Śląskie",
		"choszczeński" : "Choszczno",
		"przemyski" : "Przemyśl",
		"świdwiński" : "Świdwin",
		"zgorzelecki" : "Zgorzelec",
		"namysłowski" : "Namysłów",
		"piski" : "Pisz",
		"giżycki" : "Giżycko",
		"nowosolski" : "Nowa Sól",
		"ostrołęcki" : "Ostrołęka",
		"sanocki" : "Sanok",
		"jarociński" : "Jarosław",
		"chrzanowski" : "Chrzanów",
		"bytowski" : "Bytów",
		"kołobrzeski" : "Koło",
		"lidzbarski" : "Lidzbark Warmiński",
		"Konin" : "Konin",
		"przeworski" : "Przeworsk",
		"Grudziądz" : "Grudziądz",
		"złotoryjski" : "Złotoryja",
		"brzeski" : "Brzeg",
		"wałbrzyski" : "Wałbrzych",
		"kędzierzyńsko-kozielski" : "Kędzierzyn-Koźle",
		"zgierski" : "Ozorków",
		"prudnicki" : "Prudnik",
		"żagański" : "Żagań",
		"kętrzyński" : "Kętrzyn",
		"grudziądzki" : "Grudziądz",
		"złotowski" : "Złotów",
		"staszowski" : "Staszów",
		"malborski" : "Malbork",
		"kozienicki" : "Kozienice",
		"hrubieszowski" : "Hrubieszów",
		"Przemyśl" : "Przemyśl",
		"gnieźnieński" : "Gniezno",
		"niżański" : "Nisko",
		"słupski" : "Słupsk",
		"tomaszowski" : "Tomaszów Mazowiecki, Tomaszów Lubelski, Tomaszów Lubelski",
		"jeleniogórski" : "Jelenia Góra",
		"Krosno" : "Krosno",
		"chełmski" : "Chełm",
		"bolesławiecki" : "Bolesławiec",
		"tarnowski" : "Tarnów",
		"sandomierski" : "Sandomierz",
		"noworudzki" : "Nowa Ruda",
		"chełmiński" : "Chełmno",
		"ełcki" : "Ełk",
		"wieluński" : "Wieluń",
		"włocławski" : "Włocławek",
		"buski" : "Busko-Zdrój",
		"sieradzki" : "Sieradz",
		"Jelenia Góra" : "Jelenia Góra",
		"białogardzki" : "Białogard",
		"inowrocławski" : "Inowrocław",
		"konecki" : "Końskie",
		"wodzisławski" : "Rydułtowy",
		"biłgorajski" : "Biłgoraj",
		"Wałbrzych" : "Wałbrzych",
		"gryficki" : "Gryfice",
		"wałecki" : "Wałcz",
		"turecki" : "Turek",
		"braniewski" : "Braniewo",
};

function inwestuj() {
    var min_x = getMinFromClass();
    var element = document.getElementById("PoorCityButton");
    if (element){
	if (document.querySelector('.PoorCity:checked').value == 1)
           {
            min_x = 10000000;
           }
    }

    var factor = 0;

    var y = document.querySelector('.entrepneur:checked').value;
      
    if (document.querySelector('.BiR:checked').value == true){
       document.getElementById("inwestuj").innerHTML = "Prawdopodobnie spełniasz kryteria ilościowe";
       min_x -= min_x * 95/100;
    } else {
        if (y == 2){
           min_x -= min_x * 80/100;
        }
        else if (y == 3){
           min_x -= min_x * 95/100;
        }
        else if (y == 4){
           min_x -= min_x * 98/100;
        }
    }

    if (y == 2){
           factor = 10;
    }
    else if (y == 3){
        factor = 20;
        }
    else if (y == 4){
        factor = 20;
    }

    var do_inwestycji = document.getElementById("doInwestycji").value;
    
    if (do_inwestycji < min_x){
       document.getElementById("inwestuj").innerHTML = "Prawdopodobnie nie spełniasz kryteriów ilościowych";
       document.getElementById("dostaniesz").innerHTML ="<br>";
       return;
    }

    if (ifPowiatWarszawski())
    {
       document.getElementById("inwestuj").innerHTML = "Prawdopodobnie spełniasz kryteria ilościowe";
       factor += getIncentiveFromPowiatWarszawski();
    }
    else {
       document.getElementById("inwestuj").innerHTML = "Prawdopodobnie spełniasz kryteria ilościowe";
       factor += getIncentiveFromWoj();
    }
    do_inwestycji = factor * do_inwestycji/100;
    document.getElementById("dostaniesz").innerHTML = "<table><tr><td><b>Koszty objęte pomocą publiczną</b> </td><td>" + do_inwestycji + "</td></tr><tr>" + "<td><b>Intensywność:</b></td> <td> " + factor + "</td></tr>";
     
}

function getParameterByName() {
     
    var url_string = window.location.href;
    var url = new URL(url_string);
    powiat = url.searchParams.get("powiat");
    klasa = url.searchParams.get("klasa");
    wojewodztwo = url.searchParams.get("woj");
    document.getElementById("powiat").innerHTML = "<strong> Powiat: </strong>" + powiat + "<br>";
    document.getElementById("wojewodztwo_name").innerHTML = "<strong> Województwo: </strong>" + wojewodztwo;
	if (isPowiatPoor(powiat)){
		document.getElementById("tablica").innerHTML = '<tr><th>Pytanie</th><th>Twoja odpowiedź</th></tr> \
							<tr><td><i> Jakim przedsiębiorcą jesteś? </i></td><td> \
								<input type="checkbox" class="entrepneur" value=1 name="entrepneur[1][]"/> Dużym przedsiębiorcą<br>\
								<input type="checkbox" class="entrepneur" value=2 name="entrepneur[1][]"/> Średnim przedsiębiorcą<br>\
								<input type="checkbox" class="entrepneur" value=3 name="entrepneur[1][]"/> Małym przedsiębiorcą<br> \
								<input type="checkbox" class="entrepneur" value=4 name="entrepneur[1][]"/> Mikroprzedsiębiorcą<br><br>\
							</td></tr> \
							<tr><td><i> Ile chcesz zainwestować? </i></td><td>\
							    <input type="number" id="doInwestycji" value=""><br><br></td></tr> \
							<tr><td><i> Czy zamierzasz przeprowadzić inwestycję w zakresie nowoczesnych usług dla biznesu albo prac badawczych i rozwojowych (B+R)? </i></td><td>\
							<input type="checkbox" class="BiR"" value=1 name="BiR[1][]"/> Tak <br><br> \
		                    <input type="checkbox" class="BiR"" value=2 name="BiR[1][]"/> Nie <br><br></td></tr>\
							<tr><td><i> Czy zamierzasz przeprowadzić inwestycję w podanym mieście lub gminie graniczącej z takim miastem? </i></td><td><b>\
		                    Miasto tracące funkcje społeczno-gospodarcze:</b> '+ poorCities[powiat] +
							' <div id="PoorCityButton"><br><br><input type="checkbox" class="PoorCity"" value=1 name="PoorCity[1][]"/> Tak <br><br> \
		                   <input type="checkbox" class="PoorCity"" value=2 name="PoorCity[1][]"/> Nie <br></div></td></tr>\
							</table>';
	} else
	{
		
                document.getElementById("tablica").innerHTML = '<tr><th>Pytanie</th><th>Twoja odpowiedź</th></tr> \
							<tr><td><i> Jakim przedsiębiorcą jesteś? </i></td><td> \
								<input type="checkbox" class="entrepneur" value=1 name="entrepneur[1][]"/> Dużym przedsiębiorcą<br>\
								<input type="checkbox" class="entrepneur" value=2 name="entrepneur[1][]"/> Średnim przedsiębiorcą<br>\
								<input type="checkbox" class="entrepneur" value=3 name="entrepneur[1][]"/> Małym przedsiębiorcą<br> \
								<input type="checkbox" class="entrepneur" value=4 name="entrepneur[1][]"/> Mikroprzedsiębiorcą<br><br>\
							</td></tr> \
							<tr><td><i> Ile chcesz zainwestować? </i></td><td>\
							    <input type="number" id="doInwestycji" value=""><br><br></td></tr> \
							<tr><td><i> Czy zamierzasz przeprowadzić inwestycję w zakresie nowoczesnych usług dla biznesu albo prac badawczych i rozwojowych (B+R)? </i></td><td>\
							<input type="checkbox" class="BiR"" value=1 name="BiR[1][]"/> Tak <br><br> \
		                    <input type="checkbox" class="BiR"" value=2 name="BiR[1][]"/> Nie <br><br></td></tr>\
							</table>';
	}
		
}

function close_window() {
    close();
}

function ifPowiatWarszawski() {
    var warszawskie = ['sochaczewski', 'warszawski zachodni', 'grodziski', 'pruszkowski', 'piaseczyński', 'żyrardowski', 'grójecki', 'Warszawa'];
    console.log(warszawskie.includes(powiat));
    return warszawskie.includes(powiat);
}

function getIncentiveFromPowiatWarszawski() {
    var warszawskie = { "sochaczewski" : 20,
  "warszawski zachodni": 20,
  "grodziski": 20,
  "pruszkowski": 20,
  "piaseczyński": 20,
  "żyrardowski": 20,
   "grójecki": 20,
   "Warszawa" : 10 };
    return warszawskie[powiat];
}

function getMinFromClass() {
   
    var min_xs_dict = {'I': 100000000.0,
			 'II': 80000000.0,
			 'III': 60000000.0,
			 'IV': 40000000.0,
			 'V': 20000000.0,
			 'VI': 15000000.0,
			 'VII': 10000000.0}

    return min_xs_dict[klasa];


}

function getIncentiveFromWoj() {

  var incentives_woj = {'DOLNOŚLĄSKIE': 25,
 'KUJAWSKO-POMORSKIE': 35,
 'LUBELSKIE': 50,
 'LUBUSKIE': 35,
 'MAZOWIECKIE': 35,
 'MAŁOPOLSKIE': 35,
 'OPOLSKIE': 35,
 'PODKARPACKIE': 50,
 'PODLASKIE': 50,
 'POMORSKIE': 35,
 'WARMIŃSKO-MAZURSKIE': 50,
 'WIELKOPOLSKIE': 25,
 'ZACHODNIOPOMORSKIE': 35,
 'ŁÓDZKIE': 35,
 'ŚLĄSKIE': 25,
 'ŚWIĘTOKRZYSKIE': 35 };

  return incentives_woj[wojewodztwo];
}

function isPowiatPoor(powiat) {
   return powiat in poorCities;
}

getParameterByName();

$("input:checkbox").on('click', function() {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this);
  if ($box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});
