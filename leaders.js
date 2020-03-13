// scaped from https://en.wikipedia.org/wiki/List_of_current_heads_of_state_and_government
/*
function normalize(el) {
  let text = el.text();
  if (text.indexOf('–') !== -1) {
    text = text.split('–')[1] || '';
  }
  return text.trim().replace(/\[.*\]/, '');
}
let leaders = $('table.wikitable').first().find('tr').map(function() {
return {
  country: normalize($(this).find('th')),
  state: normalize($(this).find('td:nth-of-type(1)')),
  government: normalize($(this).find('td:nth-of-type(2)')),
}
}).toArray();
JSON.stringify(leaders);
*/
window.leaders = [{"country":"State\nHead of state\nHead of government","state":"","government":""},{"country":"Afghanistan","state":"Ashraf Ghani","government":""},{"country":"Albania","state":"Ilir Meta","government":"Edi Rama"},{"country":"Algeria","state":"Abdelmadjid Tebboune","government":"Abdelaziz Djerad"},{"country":"Andorra","state":"Joan Enric Vives SicíliaCo-Prince's Representative","government":"Xavier Espot Zamora"},{"country":"Angola","state":"João Lourenço","government":""},{"country":"Antigua and Barbuda","state":"Elizabeth IIGovernor-General","government":"Gaston Browne"},{"country":"Argentina","state":"Alberto Fernández","government":""},{"country":"Armenia","state":"Armen Sarkissian","government":"Nikol Pashinyan"},{"country":"Australia","state":"Elizabeth IIGovernor-General","government":"Scott Morrison"},{"country":"Austria","state":"Alexander Van der Bellen","government":"Sebastian Kurz"},{"country":"Azerbaijan","state":"Ilham Aliyev","government":"Ali Asadov"},{"country":"Bahamas, The","state":"Elizabeth IIGovernor-General","government":"Hubert Minnis"},{"country":"Bahrain","state":"Sheikh Hamad bin Isa Al Khalifa","government":"Prince Khalifa bin Salman Al Khalifa"},{"country":"Bangladesh","state":"Abdul Hamid","government":"Sheikh Hasina"},{"country":"Barbados","state":"Elizabeth IIGovernor-General","government":"Mia Mottley"},{"country":"Belarus","state":"Alexander Lukashenko","government":"Syarhey Rumas"},{"country":"Belgium","state":"Philippe","government":"Sophie Wilmès"},{"country":"Belize","state":"Elizabeth IIGovernor-General","government":"Dean Barrow"},{"country":"Benin","state":"Patrice Talon","government":""},{"country":"Bhutan","state":"Jigme Khesar Namgyel Wangchuck","government":"Lotay Tshering"},{"country":"Bolivia","state":"Jeanine Áñez","government":""},{"country":"Bosnia and Herzegovina","state":"Valentin Inzko","government":""},{"country":"Presidency","state":"Zoran Tegeltija","government":""},{"country":"","state":"Željko Komšić (as Chairman)","government":""},{"country":"","state":"Milorad Dodik (as Member)\nŠefik Džaferović (as Member)","government":""},{"country":"Botswana","state":"Mokgweetsi Masisi","government":""},{"country":"Brazil","state":"Jair Bolsonaro","government":""},{"country":"Brunei","state":"Hassanal Bolkiah","government":""},{"country":"Bulgaria","state":"Rumen Radev","government":"Boyko Borisov"},{"country":"Burkina Faso","state":"Roch Marc Christian Kaboré","government":"Christophe Joseph Marie Dabiré"},{"country":"Burundi","state":"Pierre Nkurunziza","government":""},{"country":"Cambodia","state":"Norodom Sihamoni","government":"Hun Sen"},{"country":"Cameroon","state":"Paul Biya","government":"Joseph Ngute"},{"country":"Canada","state":"Elizabeth IIGovernor General","government":"Justin Trudeau"},{"country":"Cape Verde","state":"Jorge Carlos Fonseca","government":"Ulisses Correia e Silva"},{"country":"Central African Republic","state":"Faustin-Archange Touadéra","government":"Firmin Ngrébada"},{"country":"Chad","state":"Idriss Déby","government":""},{"country":"Chile","state":"Sebastián Piñera","government":""},{"country":"China","state":"Xi Jinping","government":""},{"country":"","state":"Xi Jinping","government":"Li Keqiang"},{"country":"Colombia","state":"Iván Duque","government":""},{"country":"Comoros","state":"Azali Assoumani","government":""},{"country":"Congo, Democratic Republic of the","state":"Félix Tshisekedi","government":"Sylvestre Ilunga"},{"country":"Congo, Republic of the","state":"Denis Sassou Nguesso","government":"Clément Mouamba"},{"country":"Costa Rica","state":"Carlos Alvarado Quesada","government":""},{"country":"Croatia","state":"Zoran Milanović","government":"Andrej Plenković"},{"country":"Cuba","state":"Raúl Castro","government":""},{"country":"","state":"Miguel Díaz-Canel","government":"Manuel Marrero Cruz"},{"country":"Cyprus","state":"Nicos Anastasiades","government":""},{"country":"Czech Republic","state":"Miloš Zeman","government":"Andrej Babiš"},{"country":"Denmark","state":"Margrethe II","government":"Mette Frederiksen"},{"country":"Djibouti","state":"Ismaïl Omar Guelleh","government":"Abdoulkader Kamil Mohamed"},{"country":"Dominica","state":"Charles Savarin","government":"Roosevelt Skerrit"},{"country":"Dominican Republic","state":"Danilo Medina","government":""},{"country":"East Timor","state":"Francisco Guterres","government":"Taur Matan RuakPrime minister-designate"},{"country":"Ecuador","state":"Lenín Moreno","government":""},{"country":"Egypt","state":"Abdel Fattah el-Sisi","government":"Moustafa Madbouly"},{"country":"El Salvador","state":"Nayib Bukele","government":""},{"country":"Equatorial Guinea","state":"Teodoro Obiang Nguema Mbasogo","government":"Francisco Pascual Obama Asue"},{"country":"Eritrea","state":"Isaias Afwerki","government":""},{"country":"Estonia","state":"Kersti Kaljulaid","government":"Jüri Ratas"},{"country":"Eswatini","state":"Mswati III","government":"Ambrose Mandvulo Dlamini"},{"country":"Ethiopia","state":"Sahle-Work Zewde","government":"Abiy Ahmed"},{"country":"Fiji","state":"Jioji Konrote","government":"Frank Bainimarama"},{"country":"Finland","state":"Sauli Niinistö","government":"Sanna Marin"},{"country":"France","state":"Emmanuel Macron","government":"Édouard Philippe"},{"country":"Gabon","state":"Ali Bongo Ondimba","government":"Julien Nkoghe Bekale"},{"country":"Gambia, The","state":"Adama Barrow","government":""},{"country":"Georgia","state":"Salome Zourabichvili","government":"Giorgi Gakharia"},{"country":"Germany","state":"Frank-Walter Steinmeier","government":"Angela Merkel"},{"country":"Ghana","state":"Nana Akufo-Addo","government":""},{"country":"Greece","state":"Katerina Sakellaropoulou","government":"Kyriakos Mitsotakis"},{"country":"Grenada","state":"Elizabeth IIGovernor-General","government":"Keith Mitchell"},{"country":"Guatemala","state":"Alejandro Giammattei","government":""},{"country":"Guinea","state":"Alpha Condé","government":"Ibrahima Kassory Fofana"},{"country":"Guinea-Bissau","state":"Umaro Sissoco Embaló","government":"Nuno Gomes Nabiam "},{"country":"Guyana","state":"David A. Granger","government":"Moses Nagamootoo"},{"country":"Haiti","state":"Jovenel Moïse","government":"Joseph Joute "},{"country":"Honduras","state":"Juan Orlando Hernández","government":""},{"country":"Hungary","state":"János Áder","government":"Viktor Orbán"},{"country":"Iceland","state":"Guðni Th. Jóhannesson","government":"Katrín Jakobsdóttir"},{"country":"India","state":"Ram Nath Kovind","government":"Narendra Modi"},{"country":"Indonesia","state":"Joko Widodo","government":""},{"country":"Iran","state":"Ali Khamenei","government":"Hassan Rouhani"},{"country":"Iraq","state":"Barham Salih","government":"Adil Abdul-Mahdi"},{"country":"Ireland","state":"Michael D. Higgins","government":"Leo Varadkar"},{"country":"Israel","state":"Reuven Rivlin","government":"Benjamin Netanyahu"},{"country":"Italy","state":"Sergio Mattarella","government":"Giuseppe Conte"},{"country":"Ivory Coast","state":"Alassane Ouattara","government":"Amadou Gon Coulibaly"},{"country":"Jamaica","state":"Elizabeth IIGovernor-General","government":"Andrew Holness"},{"country":"Japan","state":"Naruhito","government":"Shinzō Abe"},{"country":"Jordan","state":"Abdullah II","government":"Omar Razzaz"},{"country":"Kazakhstan","state":"Nursultan Nazarbayev","government":""},{"country":"","state":"Qasym-Zhomart Toqaev","government":"Askar Mamin"},{"country":"Kenya","state":"Uhuru Kenyatta","government":""},{"country":"Kiribati","state":"Taneti Maamau","government":""},{"country":"Kuwait","state":"Sheikh Sabah Al-Ahmad Al-Jaber Al-Sabah","government":"Sheikh Sabah Al-Khalid Al-Sabah"},{"country":"Kyrgyzstan","state":"Sooronbay Jeenbekov","government":"Mukhammedkalyi Abylgaziev"},{"country":"Laos","state":"Bounnhang Vorachith","government":""},{"country":"","state":"Bounnhang Vorachith","government":"Thongloun Sisoulith"},{"country":"Latvia","state":"Egils Levits","government":"Krišjānis Kariņš"},{"country":"Lebanon","state":"Michel Aoun","government":"Hassan Diab"},{"country":"Lesotho","state":"Letsie III","government":"Tom Thabane"},{"country":"Liberia","state":"George Weah","government":""},{"country":"Libya","state":"Fayez al-Sarraj","government":""},{"country":"Liechtenstein","state":"Hans-Adam II","government":"Adrian Hasler"},{"country":"","state":"Hereditary Prince Alois","government":""},{"country":"Lithuania","state":"Gitanas Nausėda","government":"Saulius Skvernelis"},{"country":"Luxembourg","state":"Henri","government":"Xavier Bettel"},{"country":"Madagascar","state":"Andry Rajoelina","government":"Christian Ntsay"},{"country":"Malawi","state":"Peter Mutharika","government":""},{"country":"Malaysia","state":"Abdullah Ri'ayatuddin","government":"Muhyiddin Yassin"},{"country":"Maldives","state":"Ibrahim Mohamed Solih","government":""},{"country":"Mali","state":"Ibrahim Boubacar Keïta","government":"Boubou Cisse"},{"country":"Malta","state":"George Vella","government":"Robert Abela"},{"country":"Marshall Islands","state":"David Kabua","government":""},{"country":"Mauritania","state":"Mohamed Ould Ghazouani","government":"Ismail Ould Bedde Ould Cheikh Sidiya"},{"country":"Mauritius","state":"Prithvirajsing Roopun","government":"Pravind Jugnauth"},{"country":"Mexico","state":"Andrés Manuel López Obrador","government":""},{"country":"Federated States of Micronesia","state":"David W. Panuelo","government":""},{"country":"Moldova","state":"Igor Dodon","government":"Ion Chicu"},{"country":"Monaco","state":"Albert II","government":"Serge Telle"},{"country":"Mongolia","state":"Khaltmaagiin Battulga","government":"Ukhnaagiin Khürelsükh"},{"country":"Montenegro","state":"Milo Đukanović","government":"Duško Marković"},{"country":"Morocco","state":"Mohammed VI","government":"Saadeddine Othmani"},{"country":"Mozambique","state":"Filipe Nyusi","government":"Carlos Agostinho do Rosário"},{"country":"Myanmar","state":"Win Myint","government":"Aung San Suu Kyi"},{"country":"Namibia","state":"Hage Geingob","government":"Saara Kuugongelwa"},{"country":"Nauru","state":"Lionel Aingimea","government":""},{"country":"Nepal","state":"Bidhya Devi Bhandari","government":"KP Sharma Oli"},{"country":"Netherlands","state":"Willem-Alexander","government":"Mark Rutte"},{"country":"New Zealand","state":"Elizabeth IIGovernor-General","government":"Jacinda Ardern"},{"country":"Nicaragua","state":"Daniel Ortega","government":""},{"country":"Niger","state":"Mahamadou Issoufou","government":"Brigi Rafini"},{"country":"Nigeria","state":"Muhammadu Buhari","government":""},{"country":"North Korea","state":"Kim Jong-un","government":""},{"country":"","state":"Kim Jong-unChairman of the Presidium of the Supreme People's Assembly","government":"Kim Jae-ryong"},{"country":"North Macedonia","state":"Stevo Pendarovski","government":"Oliver Spasovski"},{"country":"Norway","state":"Harald V","government":"Erna Solberg"},{"country":"Oman","state":"Haitham bin Tariq","government":""},{"country":"Pakistan","state":"Arif Alvi","government":"Imran Khan"},{"country":"Palau","state":"Thomas Remengesau Jr.","government":""},{"country":"Palestine","state":"Mahmoud Abbas","government":"Mohammad Shtayyeh"},{"country":"Panama","state":"Laurentino Cortizo","government":""},{"country":"Papua New Guinea","state":"Elizabeth IIGovernor-General","government":"James Marape"},{"country":"Paraguay","state":"Mario Abdo Benítez","government":""},{"country":"Peru","state":"Martín Vizcarra","government":"Vicente Zeballos"},{"country":"Philippines","state":"Rodrigo Duterte","government":""},{"country":"Poland","state":"Andrzej Duda","government":"Mateusz Morawiecki"},{"country":"Portugal","state":"Marcelo Rebelo de Sousa","government":"António Costa"},{"country":"Qatar","state":"Sheikh Tamim bin Hamad Al Thani","government":"Sheikh Khalid bin Khalifa bin Abdul Aziz Al Thani"},{"country":"Romania","state":"Klaus Iohannis","government":"Ludovic Orban"},{"country":"Russia","state":"Vladimir Putin","government":"Mikhail Mishustin"},{"country":"Rwanda","state":"Paul Kagame","government":"Édouard Ngirente"},{"country":"Saint Kitts and Nevis","state":"Elizabeth IIGovernor-General","government":"Timothy Harris"},{"country":"Saint Lucia","state":"Elizabeth IIGovernor-General","government":"Allen Chastanet"},{"country":"Saint Vincent and the Grenadines","state":"Elizabeth IIGovernor-General","government":"Ralph Gonsalves"},{"country":"Samoa","state":"Va'aletoa Sualauvi II","government":"Tuilaepa Aiono Sailele Malielegaoi"},{"country":"San Marino","state":"Luca Boschi","government":""},{"country":"","state":"Mariella Mularoni","government":""},{"country":"São Tomé and Príncipe","state":"Evaristo Carvalho","government":"Jorge Bom Jesus"},{"country":"Saudi Arabia","state":"Salman","government":"Salman"},{"country":"","state":"Mohammad bin Salman","government":""},{"country":"Senegal","state":"Macky Sall","government":""},{"country":"Serbia","state":"Aleksandar Vučić","government":"Ana Brnabić"},{"country":"Seychelles","state":"Danny Faure","government":""},{"country":"Sierra Leone","state":"Julius Maada Bio","government":"David J. Francis"},{"country":"Singapore","state":"Halimah Yacob","government":"Lee Hsien Loong"},{"country":"Slovakia","state":"Zuzana Čaputová","government":"Peter Pellegrini"},{"country":"","state":"Igor Matovič","government":""},{"country":"Slovenia","state":"Borut Pahor","government":"Janez Janša"},{"country":"Solomon Islands","state":"Elizabeth IIGovernor-General","government":"Manasseh Sogavare"},{"country":"Somalia","state":"Mohamed Abdullahi Mohamed","government":"Hassan Ali Khayre"},{"country":"South Africa","state":"Cyril Ramaphosa","government":""},{"country":"South Korea","state":"Moon Jae-in","government":"Chung Sye-kyun"},{"country":"South Sudan","state":"Salva Kiir Mayardit","government":""},{"country":"Spain","state":"Felipe VI","government":"Pedro Sánchez"},{"country":"Sri Lanka","state":"Gotabaya Rajapaksa","government":"Mahinda Rajapaksa"},{"country":"Sudan","state":"Abdel Fattah al-Burhan","government":"Abdalla Hamdok"},{"country":"Suriname","state":"Dési Bouterse","government":""},{"country":"Sweden","state":"Carl XVI Gustaf","government":"Stefan Löfven"},{"country":"Switzerland","state":"","government":""},{"country":"Federal Council","state":"","government":""},{"country":"","state":"Simonetta Sommaruga (as President)","government":""},{"country":"","state":"Guy Parmelin (as Vice President)\nUeli Maurer (as Member)\nAlain Berset (as Member)\nIgnazio Cassis (as Member)\nKarin Keller-Sutter (as Member)\nViola Amherd (as Member)","government":""},{"country":"Syria","state":"Bashar al-Assad","government":"Imad Khamis"},{"country":"Tajikistan","state":"Emomali Rahmon","government":"Kokhir Rasulzoda"},{"country":"Tanzania","state":"John Magufuli","government":"Kassim Majaliwa"},{"country":"Thailand","state":"Maha Vajiralongkorn","government":"Prayut Chan-o-cha"},{"country":"Togo","state":"Faure Gnassingbé","government":"Komi Sélom Klassou"},{"country":"Tonga","state":"Tupou VI","government":"Pōhiva Tu'i'onetoa"},{"country":"Trinidad and Tobago","state":"Paula-Mae Weekes","government":"Keith Rowley"},{"country":"Tunisia","state":"Kaïs Saïed","government":"Elyes Fakhfakh"},{"country":"Turkey","state":"Recep Tayyip Erdoğan","government":""},{"country":"Turkmenistan","state":"Gurbanguly Berdimuhamedow","government":""},{"country":"Tuvalu","state":"Elizabeth IIGovernor-General","government":"Kausea Natano"},{"country":"Uganda","state":"Yoweri Museveni","government":"Ruhakana Rugunda"},{"country":"Ukraine","state":"Volodymyr Zelensky","government":"Denys Shmyhal"},{"country":"United Arab Emirates","state":"Sheikh Khalifa bin Zayed Al Nahyan","government":"Sheikh Mohammed bin Rashid Al Maktoum"},{"country":"United Kingdom","state":"Elizabeth II","government":"Boris Johnson"},{"country":"United States","state":"Donald Trump","government":""},{"country":"Uruguay","state":"Luis Lacalle Pou","government":""},{"country":"Uzbekistan","state":"Shavkat Mirziyoyev","government":"Abdulla Aripov"},{"country":"Vanuatu","state":"Tallis Obed Moses","government":"Charlot Salwai"},{"country":"Vatican City","state":"Pope Francis","government":"Cardinal Giuseppe Bertello"},{"country":"Venezuela","state":"Nicolás Maduro","government":""},{"country":"Vietnam","state":"Nguyễn Phú Trọng","government":""},{"country":"","state":"Nguyễn Phú Trọng","government":"Nguyễn Xuân Phúc"},{"country":"Yemen","state":"Abdrabbuh Mansur Hadi","government":"Maeen Abdulmalik Saeed"},{"country":"Zambia","state":"Edgar Lungu","government":""},{"country":"Zimbabwe","state":"Emmerson Mnangagwa","government":""}]
