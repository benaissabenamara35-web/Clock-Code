
/* ---------------- DATA ---------------- */
const words = [
{en:'Oxford', ar:'أكسفورد (مدينة/جامعة)', ex:"Oxford is a famous university city in England.", cat:'أماكن'},
{en:'feeling', ar:'شعور', ex:"I have a strange <b>feeling</b> about this.", cat:'صفات/أسماء'},
{en:'foreign', ar:'أجنبي', ex:"She speaks a <b>foreign</b> language.", cat:'صفات'},
{en:'for', ar:'من أجل / لـ', ex:"This gift is <b>for</b> you.", cat:'أدوات'},
{en:'a', ar:'أداة تنكير (حرف/كلمة)', ex:"I saw <b>a</b> cat in the garden.", cat:'أدوات'},
{en:'an', ar:'أداة تنكير (قبل حرف صوتي)', ex:"She ate <b>an</b> apple.", cat:'أدوات'},
{en:'about', ar:'حول / عن', ex:"Tell me <b>about</b> your day.", cat:'أدوات'},
{en:'above', ar:'فوق', ex:"The bird flew <b>above</b> the trees.", cat:'أدوات'},
{en:'across', ar:'عبر / عبر الطريق', ex:"We walked <b>across</b> the bridge.", cat:'أدوات'},
{en:'action', ar:'حركة / فعل', ex:"The film is full of <b>action</b>.", cat:'أسماء'},
{en:'activity', ar:'نشاط', ex:"Swimming is a fun <b>activity</b>.", cat:'أسماء'},
{en:'actor', ar:'ممثل', ex:"He is a talented <b>actor</b>.", cat:'وظائف'},
{en:'actress', ar:'ممثلة', ex:"She is a famous <b>actress</b>.", cat:'وظائف'},
{en:'Add', ar:'يضيف', ex:"<b>Add</b> some sugar to the tea.", cat:'أفعال'},
{en:'address', ar:'عنوان', ex:"What is your home <b>address</b>?", cat:'أسماء'},
{en:'adult', ar:'بالغ', ex:"This film is for <b>adults</b> only.", cat:'أشخاص'},
{en:'advice', ar:'نصيحة', ex:"Can you give me some <b>advice</b>?", cat:'أسماء'},
{en:'afraid', ar:'خائف', ex:"She is <b>afraid</b> of spiders.", cat:'صفات'},
{en:'Afternoon', ar:'بعد الظهر', ex:"We met in the <b>afternoon</b>.", cat:'وقت'},
{en:'again', ar:'مرة أخرى', ex:"Please say that <b>again</b>.", cat:'أدوات'},
{en:'Age', ar:'عمر', ex:"What is your <b>age</b>?", cat:'أسماء'},
{en:'ago', ar:'منذ (فترة)', ex:"I met him two years <b>ago</b>.", cat:'أدوات'},
{en:'Agree', ar:'يوافق', ex:"I <b>agree</b> with your plan.", cat:'أفعال'},
{en:'Air', ar:'هواء', ex:"The mountain <b>air</b> is fresh.", cat:'أسماء'},
{en:'airport', ar:'مطار', ex:"We arrived at the <b>airport</b> early.", cat:'أماكن'},
{en:'All', ar:'كل / جميع', ex:"<b>All</b> the students passed the exam.", cat:'أدوات'},
{en:'also', ar:'أيضًا', ex:"She speaks French and <b>also</b> Spanish.", cat:'أدوات'},
{en:'always', ar:'دائمًا', ex:"He <b>always</b> arrives on time.", cat:'أدوات'},
{en:'amazing', ar:'مذهل', ex:"The view was <b>amazing</b>.", cat:'صفات'},
{en:'and', ar:'و', ex:"I like tea <b>and</b> coffee.", cat:'أدوات'},
{en:'angry', ar:'غاضب', ex:"He was <b>angry</b> about the delay.", cat:'صفات'},
{en:'animal', ar:'حيوان', ex:"The elephant is a big <b>animal</b>.", cat:'أسماء'},
{en:'another', ar:'آخر', ex:"Can I have <b>another</b> cup of tea?", cat:'أدوات'},
{en:'Answer', ar:'إجابة / يجيب', ex:"She knew the correct <b>answer</b>.", cat:'أسماء'},
{en:'Anyone', ar:'أي شخص', ex:"Is <b>anyone</b> home?", cat:'أدوات'},
{en:'Anything', ar:'أي شيء', ex:"Do you need <b>anything</b>?", cat:'أدوات'},
{en:'Apartment', ar:'شقة', ex:"They live in a small <b>apartment</b>.", cat:'أماكن'},
{en:'Apple', ar:'تفاحة', ex:"She ate a red <b>apple</b>.", cat:'طعام'},
{en:'April', ar:'أبريل', ex:"My birthday is in <b>April</b>.", cat:'وقت'},
{en:'Area', ar:'منطقة', ex:"This <b>area</b> is very quiet.", cat:'أماكن'},
{en:'Arm', ar:'ذراع', ex:"He broke his <b>arm</b>.", cat:'جسم'},
{en:'around', ar:'حول / في أنحاء', ex:"We walked <b>around</b> the city.", cat:'أدوات'},
{en:'Arrive', ar:'يصل', ex:"The train will <b>arrive</b> at noon.", cat:'أفعال'},
{en:'Art', ar:'فن', ex:"She studies <b>art</b> at university.", cat:'أسماء'},
{en:'Article', ar:'مقالة', ex:"I read an <b>article</b> about space.", cat:'أسماء'},
{en:'Artist', ar:'فنان', ex:"He is a famous <b>artist</b>.", cat:'وظائف'},
{en:'as', ar:'كما / بصفتها', ex:"She works <b>as</b> a teacher.", cat:'أدوات'},
{en:'ask', ar:'يسأل', ex:"Can I <b>ask</b> you a question?", cat:'أفعال'},
{en:'at', ar:'في (زمان/مكان)', ex:"We arrived <b>at</b> six o'clock.", cat:'أدوات'},
{en:'August', ar:'أغسطس', ex:"We go on holiday in <b>August</b>.", cat:'وقت'},
{en:'aunt', ar:'عمة / خالة', ex:"My <b>aunt</b> lives in Cairo.", cat:'أشخاص'},
{en:'autumn', ar:'خريف', ex:"The leaves fall in <b>autumn</b>.", cat:'وقت'},
{en:'away', ar:'بعيدًا', ex:"The beach is far <b>away</b> from here.", cat:'أدوات'},
{en:'baby', ar:'رضيع', ex:"The <b>baby</b> is sleeping.", cat:'أشخاص'},
{en:'Pack', ar:'يحزم', ex:"I need to <b>pack</b> my bag.", cat:'أفعال'},
{en:'bad', ar:'سيء', ex:"That was a <b>bad</b> idea.", cat:'صفات'},
{en:'Bag', ar:'حقيبة', ex:"She carries a big <b>bag</b>.", cat:'أشياء'},
{en:'ball', ar:'كرة', ex:"The boy kicked the <b>ball</b>.", cat:'أشياء'},
{en:'banana', ar:'موزة', ex:"He eats a <b>banana</b> every day.", cat:'طعام'},
{en:'band', ar:'فرقة موسيقية', ex:"They love that rock <b>band</b>.", cat:'أسماء'},
{en:'Bank', ar:'بنك', ex:"My father works at a <b>bank</b>.", cat:'أماكن'},
{en:'bath', ar:'حمام (استحمام)', ex:"She took a hot <b>bath</b>.", cat:'أسماء'},
{en:'Bathroom', ar:'حمّام', ex:"The <b>bathroom</b> is very clean.", cat:'أماكن'},
{en:'Beach', ar:'شاطئ', ex:"We swam at the <b>beach</b>.", cat:'أماكن'},
{en:'Beautiful', ar:'جميل', ex:"The sunset was <b>beautiful</b>.", cat:'صفات'},
{en:'Because', ar:'لأن', ex:"I stayed home <b>because</b> it rained.", cat:'أدوات'},
{en:'become', ar:'يصبح', ex:"She wants to <b>become</b> a doctor.", cat:'أفعال'},
{en:'bedroom', ar:'غرفة نوم', ex:"My <b>bedroom</b> is upstairs.", cat:'أماكن'},
{en:'beer', ar:'بيرة', ex:"He ordered a cold <b>beer</b>.", cat:'طعام'},
{en:'before', ar:'قبل', ex:"Wash your hands <b>before</b> eating.", cat:'أدوات'},
{en:'begin', ar:'يبدأ', ex:"The class will <b>begin</b> soon.", cat:'أفعال'},
{en:'behind', ar:'خلف', ex:"The cat is <b>behind</b> the sofa.", cat:'أدوات'},
{en:'Believe', ar:'يصدّق / يعتقد', ex:"I <b>believe</b> you.", cat:'أفعال'},
{en:'below', ar:'تحت / أدناه', ex:"Write your name <b>below</b>.", cat:'أدوات'},
{en:'Best', ar:'الأفضل', ex:"She is my <b>best</b> friend.", cat:'صفات'},
{en:'better', ar:'أفضل', ex:"This plan is <b>better</b> than the last one.", cat:'صفات'},
{en:'between', ar:'بين', ex:"The shop is <b>between</b> the bank and the park.", cat:'أدوات'},
{en:'bicycle', ar:'دراجة هوائية', ex:"He rides his <b>bicycle</b> to school.", cat:'أشياء'},
{en:'big', ar:'كبير', ex:"They live in a <b>big</b> house.", cat:'صفات'},
{en:'bike', ar:'دراجة', ex:"She rides her <b>bike</b> every morning.", cat:'أشياء'},
{en:'Bill', ar:'فاتورة', ex:"Can we have the <b>bill</b>, please?", cat:'أسماء'},
{en:'bird', ar:'طائر', ex:"A <b>bird</b> is singing in the tree.", cat:'حيوانات'},
{en:'birthday', ar:'عيد ميلاد', ex:"Happy <b>birthday</b> to you!", cat:'وقت'},
{en:'black', ar:'أسود', ex:"She wore a <b>black</b> dress.", cat:'ألوان'},
{en:'blog', ar:'مدونة', ex:"He writes a travel <b>blog</b>.", cat:'أسماء'},
{en:'blonde', ar:'أشقر', ex:"Her hair is <b>blonde</b>.", cat:'صفات'},
{en:'blue', ar:'أزرق', ex:"The sky is <b>blue</b> today.", cat:'ألوان'},
{en:'boat', ar:'قارب', ex:"They sailed on a small <b>boat</b>.", cat:'أشياء'},
{en:'Body', ar:'جسم', ex:"Exercise is good for the <b>body</b>.", cat:'جسم'},
{en:'book', ar:'كتاب', ex:"I am reading a good <b>book</b>.", cat:'أشياء'},
{en:'boot', ar:'حذاء طويل', ex:"He wore leather <b>boots</b>.", cat:'ملابس'},
{en:'board', ar:'لوحة', ex:"The teacher wrote on the <b>board</b>.", cat:'أسماء'},
{en:'boring', ar:'مملّ', ex:"That movie was very <b>boring</b>.", cat:'صفات'},
{en:'born', ar:'وُلد', ex:"She was <b>born</b> in 1998.", cat:'أفعال'},
{en:'both', ar:'كلاهما', ex:"<b>Both</b> of us like tea.", cat:'أدوات'},
{en:'bottle', ar:'زجاجة', ex:"Please pass the water <b>bottle</b>.", cat:'أشياء'},
{en:'Box', ar:'صندوق', ex:"He put the toys in a <b>box</b>.", cat:'أشياء'},
{en:'boy', ar:'ولد', ex:"The <b>boy</b> is playing in the park.", cat:'أشخاص'},
{en:'Boyfriend', ar:'صديق (حبيب)', ex:"She introduced her <b>boyfriend</b>.", cat:'أشخاص'},
{en:'Bread', ar:'خبز', ex:"We buy fresh <b>bread</b> daily.", cat:'طعام'},
{en:'Break', ar:'يكسر / استراحة', ex:"Let's take a short <b>break</b>.", cat:'أفعال'},
{en:'Breakfast', ar:'فطور', ex:"We eat <b>breakfast</b> at 7 AM.", cat:'طعام'},
{en:'Bring', ar:'يُحضر', ex:"Please <b>bring</b> your book tomorrow.", cat:'أفعال'},
{en:'brother', ar:'أخ', ex:"My <b>brother</b> plays football.", cat:'أشخاص'},
{en:'Brown', ar:'بنّي', ex:"She has <b>brown</b> eyes.", cat:'ألوان'},
{en:'Build', ar:'يبني', ex:"They will <b>build</b> a new school.", cat:'أفعال'},
{en:'building', ar:'مبنى', ex:"That <b>building</b> is very tall.", cat:'أماكن'},
{en:'busy', ar:'مشغول', ex:"I'm <b>busy</b> today, sorry.", cat:'صفات'},
{en:'But', ar:'لكن', ex:"I like tea, <b>but</b> not coffee.", cat:'أدوات'},
{en:'butter', ar:'زبدة', ex:"She spread <b>butter</b> on the bread.", cat:'طعام'},
{en:'by', ar:'بواسطة / بجانب', ex:"The book was written <b>by</b> a famous author.", cat:'أدوات'},
{en:'cafe', ar:'مقهى', ex:"We had coffee at the <b>cafe</b>.", cat:'أماكن'},
{en:'cake', ar:'كعكة', ex:"We baked a chocolate <b>cake</b>.", cat:'طعام'},
{en:'call', ar:'يتصل / مكالمة', ex:"Please <b>call</b> me tonight.", cat:'أفعال'},
{en:'Camera', ar:'كاميرا', ex:"He took photos with his <b>camera</b>.", cat:'أشياء'},
{en:'Can', ar:'يستطيع', ex:"She <b>can</b> swim very well.", cat:'أفعال'},
{en:'cannot', ar:'لا يستطيع', ex:"He <b>cannot</b> come today.", cat:'أفعال'},
{en:'Capital', ar:'عاصمة', ex:"Cairo is the <b>capital</b> of Egypt.", cat:'أماكن'},
{en:'car', ar:'سيارة', ex:"He drives a fast <b>car</b>.", cat:'أشياء'},
{en:'card', ar:'بطاقة', ex:"She sent me a birthday <b>card</b>.", cat:'أشياء'},
{en:'career', ar:'مسيرة مهنية', ex:"She has a great <b>career</b> in medicine.", cat:'أسماء'},
{en:'Carrot', ar:'جزرة', ex:"Rabbits love to eat <b>carrots</b>.", cat:'طعام'},
{en:'Carry', ar:'يحمل', ex:"Can you <b>carry</b> this bag?", cat:'أفعال'},
{en:'cat', ar:'قطة', ex:"My <b>cat</b> sleeps all day.", cat:'حيوانات'},
{en:'cd', ar:'قرص مضغوط', ex:"I bought a music <b>cd</b>.", cat:'أشياء'},
{en:'scent', ar:'رائحة عطرية', ex:"This perfume has a lovely <b>scent</b>.", cat:'أسماء'},
{en:'center', ar:'مركز', ex:"The library is in the city <b>center</b>.", cat:'أماكن'},
{en:'century', ar:'قرن (١٠٠ سنة)', ex:"This castle is a <b>century</b> old.", cat:'وقت'},
{en:'chair', ar:'كرسي', ex:"Please sit on this <b>chair</b>.", cat:'أشياء'},
{en:'change', ar:'يغيّر / تغيير', ex:"I want to <b>change</b> my job.", cat:'أفعال'},
{en:'chart', ar:'مخطط بياني', ex:"The <b>chart</b> shows our sales.", cat:'أسماء'},
{en:'Cheap', ar:'رخيص', ex:"I found a <b>cheap</b> flight.", cat:'صفات'},
{en:'Check', ar:'يتحقق من / يفحص', ex:"Please <b>check</b> your email.", cat:'أفعال'},
{en:'Cheese', ar:'جبن', ex:"I like <b>cheese</b> on my sandwich.", cat:'طعام'},
{en:'Chicken', ar:'دجاج', ex:"We cooked <b>chicken</b> for dinner.", cat:'طعام'},
{en:'Child', ar:'طفل', ex:"Every <b>child</b> loves to play.", cat:'أشخاص'},
{en:'Chocolate', ar:'شوكولاتة', ex:"She loves dark <b>chocolate</b>.", cat:'طعام'},
{en:'Choose', ar:'يختار', ex:"<b>Choose</b> the correct answer.", cat:'أفعال'},
{en:'Cinema', ar:'سينما', ex:"We watched a movie at the <b>cinema</b>.", cat:'أماكن'},
{en:'City', ar:'مدينة', ex:"Paris is a beautiful <b>city</b>.", cat:'أماكن'},
{en:'classroom', ar:'فصل دراسي', ex:"The <b>classroom</b> is full of students.", cat:'أماكن'},
{en:'clean', ar:'نظيف / ينظّف', ex:"He will <b>clean</b> his room.", cat:'أفعال'},
{en:'climb', ar:'يتسلق', ex:"They love to <b>climb</b> mountains.", cat:'أفعال'},
{en:'clock', ar:'ساعة حائط', ex:"The <b>clock</b> shows ten o'clock.", cat:'أشياء'},
{en:'Clothes', ar:'ملابس', ex:"She bought new <b>clothes</b>.", cat:'ملابس'},
{en:'Club', ar:'نادٍ', ex:"He joined the football <b>club</b>.", cat:'أماكن'},
{en:'Coat', ar:'معطف', ex:"Wear a <b>coat</b>, it's cold outside.", cat:'ملابس'},
{en:'Coffee', ar:'قهوة', ex:"I drink <b>coffee</b> every morning.", cat:'طعام'},
{en:'Cold', ar:'بارد', ex:"It's <b>cold</b> outside today.", cat:'صفات'},
{en:'College', ar:'كلية', ex:"She studies at a local <b>college</b>.", cat:'أماكن'},
{en:'Color', ar:'لون', ex:"What <b>color</b> do you like?", cat:'أسماء'},
{en:'Come', ar:'يأتي', ex:"Please <b>come</b> to my party.", cat:'أفعال'},
{en:'common', ar:'شائع', ex:"This is a <b>common</b> mistake.", cat:'صفات'},
{en:'company', ar:'شركة', ex:"He works for a big <b>company</b>.", cat:'أماكن'},
{en:'compare', ar:'يقارن', ex:"Let's <b>compare</b> the two prices.", cat:'أفعال'},
{en:'complete', ar:'يُكمل / كامل', ex:"Please <b>complete</b> the form.", cat:'أفعال'},
{en:'computer', ar:'حاسوب', ex:"I work on my <b>computer</b> all day.", cat:'أشياء'},
{en:'concert', ar:'حفلة موسيقية', ex:"We went to a great <b>concert</b>.", cat:'أسماء'},
{en:'conversation', ar:'محادثة', ex:"We had a nice <b>conversation</b>.", cat:'أسماء'},
{en:'cook', ar:'يطبخ', ex:"My mother loves to <b>cook</b>.", cat:'أفعال'},
{en:'cooking', ar:'الطبخ', ex:"<b>Cooking</b> is her favorite hobby.", cat:'أسماء'},
{en:'Cool', ar:'بارد / رائع', ex:"That jacket looks <b>cool</b>.", cat:'صفات'},
{en:'Correct', ar:'صحيح', ex:"Your answer is <b>correct</b>.", cat:'صفات'},
{en:'Cost', ar:'تكلفة', ex:"What is the <b>cost</b> of this trip?", cat:'أسماء'},
{en:'could', ar:'استطاع (الماضي)', ex:"She <b>could</b> not sleep last night.", cat:'أفعال'},
{en:'course', ar:'دورة / مقرر', ex:"I'm taking an English <b>course</b>.", cat:'أسماء'},
{en:'cousin', ar:'ابن/ابنة العم أو الخال', ex:"My <b>cousin</b> visits every summer.", cat:'أشخاص'},
{en:'Cow', ar:'بقرة', ex:"The <b>cow</b> gives us milk.", cat:'حيوانات'},
{en:'cream', ar:'كريمة', ex:"She put <b>cream</b> in her coffee.", cat:'طعام'},
{en:'create', ar:'يُنشئ / يبتكر', ex:"He wants to <b>create</b> a new app.", cat:'أفعال'},
{en:'culture', ar:'ثقافة', ex:"I love learning about other <b>cultures</b>.", cat:'أسماء'},
{en:'cup', ar:'كوب / فنجان', ex:"She drank a <b>cup</b> of tea.", cat:'أشياء'},
{en:'customer', ar:'زبون', ex:"The <b>customer</b> was very happy.", cat:'أشخاص'},
{en:'cut', ar:'يقطع', ex:"Please <b>cut</b> the paper carefully.", cat:'أفعال'},
{en:'dad', ar:'أبي', ex:"My <b>dad</b> works at a bank.", cat:'أشخاص'},
{en:'Ants', ar:'نمل', ex:"The <b>ants</b> are carrying food.", cat:'حيوانات'},
{en:'Dancer', ar:'راقص/راقصة', ex:"She is a professional <b>dancer</b>.", cat:'وظائف'},
{en:'Dancing', ar:'الرقص', ex:"<b>Dancing</b> makes her happy.", cat:'أسماء'},
{en:'Dangerous', ar:'خطير', ex:"That road is very <b>dangerous</b>.", cat:'صفات'},
{en:'Dark', ar:'مظلم', ex:"The room was very <b>dark</b>.", cat:'صفات'},
{en:'Date', ar:'تاريخ / موعد', ex:"What is today's <b>date</b>?", cat:'أسماء'},
{en:'Daughter', ar:'ابنة', ex:"Their <b>daughter</b> is five years old.", cat:'أشخاص'},
{en:'Day', ar:'يوم', ex:"Have a nice <b>day</b>!", cat:'وقت'},
{en:'Dear', ar:'عزيزي', ex:"<b>Dear</b> Sara, thank you for your letter.", cat:'أدوات'},
{en:'December', ar:'ديسمبر', ex:"We celebrate the new year in <b>December</b>.", cat:'وقت'},
{en:'decide', ar:'يقرر', ex:"I need to <b>decide</b> soon.", cat:'أفعال'},
{en:'delicious', ar:'لذيذ', ex:"The food was <b>delicious</b>.", cat:'صفات'},
{en:'Describe', ar:'يصف', ex:"Can you <b>describe</b> your house?", cat:'أفعال'},
{en:'description', ar:'وصف', ex:"She wrote a short <b>description</b>.", cat:'أسماء'},
{en:'Design', ar:'تصميم', ex:"I like the <b>design</b> of this app.", cat:'أسماء'},
{en:'desk', ar:'مكتب (طاولة)', ex:"He sits at his <b>desk</b> all day.", cat:'أشياء'},
{en:'detail', ar:'تفصيل', ex:"Please explain every <b>detail</b>.", cat:'أسماء'},
{en:'dialogue', ar:'حوار', ex:"We practiced a short <b>dialogue</b>.", cat:'أسماء'},
{en:'dictionary', ar:'قاموس', ex:"Look up the word in the <b>dictionary</b>.", cat:'أشياء'},
{en:'die', ar:'يموت', ex:"Plants can <b>die</b> without water.", cat:'أفعال'},
{en:'diet', ar:'حمية غذائية', ex:"She follows a healthy <b>diet</b>.", cat:'أسماء'},
{en:'difference', ar:'فرق', ex:"There is a big <b>difference</b> between them.", cat:'أسماء'},
{en:'Different', ar:'مختلف', ex:"We have <b>different</b> opinions.", cat:'صفات'},
{en:'difficult', ar:'صعب', ex:"This exam was very <b>difficult</b>.", cat:'صفات'},
{en:'dinner', ar:'عشاء', ex:"They cook <b>dinner</b> together.", cat:'طعام'},
{en:'discuss', ar:'يناقش', ex:"Let's <b>discuss</b> this tomorrow.", cat:'أفعال'},
{en:'dish', ar:'طبق', ex:"This <b>dish</b> is delicious.", cat:'طعام'},
{en:'doctor', ar:'طبيب', ex:"The <b>doctor</b> checked my heart.", cat:'وظائف'},
{en:'Dog', ar:'كلب', ex:"The <b>dog</b> is barking loudly.", cat:'حيوانات'},
{en:'dollar', ar:'دولار', ex:"It costs ten <b>dollars</b>.", cat:'أسماء'},
{en:'door', ar:'باب', ex:"Please close the <b>door</b>.", cat:'أشياء'},
{en:'down', ar:'إلى أسفل', ex:"Please sit <b>down</b>.", cat:'أدوات'},
{en:'downstairs', ar:'إلى الطابق السفلي', ex:"She went <b>downstairs</b> for breakfast.", cat:'أماكن'},
{en:'Draw', ar:'يرسم', ex:"She loves to <b>draw</b> animals.", cat:'أفعال'},
{en:'dress', ar:'فستان', ex:"She wore a beautiful <b>dress</b>.", cat:'ملابس'},
{en:'Drink', ar:'يشرب', ex:"She likes to <b>drink</b> tea.", cat:'أفعال'},
{en:'Drive', ar:'يقود', ex:"He can <b>drive</b> a car.", cat:'أفعال'},
{en:'driver', ar:'سائق', ex:"The <b>driver</b> stopped at the light.", cat:'وظائف'},
{en:'during', ar:'خلال', ex:"We slept <b>during</b> the flight.", cat:'أدوات'},
{en:'DVD', ar:'قرص فيديو رقمي', ex:"We watched a <b>DVD</b> last night.", cat:'أشياء'},
{en:'each', ar:'كل واحد', ex:"<b>Each</b> student has a book.", cat:'أدوات'},
{en:'year', ar:'سنة', ex:"Happy new <b>year</b>!", cat:'وقت'},
{en:'early', ar:'مبكرًا', ex:"We woke up <b>early</b> today.", cat:'أدوات'},
{en:'east', ar:'شرق', ex:"The sun rises in the <b>east</b>.", cat:'أماكن'},
{en:'easy', ar:'سهل', ex:"The test was <b>easy</b> for me.", cat:'صفات'},
{en:'Eight', ar:'ثمانية', ex:"I have <b>eight</b> books.", cat:'أرقام'},
{en:'Egg', ar:'بيضة', ex:"I had an <b>egg</b> for breakfast.", cat:'طعام'},
{en:'eighteen', ar:'ثمانية عشر', ex:"She is <b>eighteen</b> years old.", cat:'أرقام'},
{en:'eighty', ar:'ثمانون', ex:"My grandfather is <b>eighty</b> years old.", cat:'أرقام'},
{en:'Elephant', ar:'فيل', ex:"The <b>elephant</b> is a very big animal.", cat:'حيوانات'},
{en:'eleven', ar:'أحد عشر', ex:"There are <b>eleven</b> players in a team.", cat:'أرقام'},
{en:'Else', ar:'آخر / غير ذلك', ex:"Would you like anything <b>else</b>?", cat:'أدوات'},
{en:'Email', ar:'بريد إلكتروني', ex:"She sent me an <b>email</b>.", cat:'أشياء'},
{en:'enjoy', ar:'يستمتع', ex:"I <b>enjoy</b> reading books.", cat:'أفعال'},
{en:'enough', ar:'كافٍ', ex:"We have <b>enough</b> food.", cat:'أدوات'},
{en:'euro', ar:'يورو', ex:"This costs ten <b>euros</b>.", cat:'أسماء'},
{en:'evening', ar:'مساء', ex:"They walk in the <b>evening</b>.", cat:'وقت'},
{en:'event', ar:'حدث', ex:"We attended a big <b>event</b>.", cat:'أسماء'},
{en:'Ever', ar:'على الإطلاق', ex:"Have you <b>ever</b> been to Japan?", cat:'أدوات'},
{en:'Every', ar:'كل', ex:"<b>Every</b> day I drink water.", cat:'أدوات'},
{en:'Everybody', ar:'الجميع', ex:"<b>Everybody</b> enjoyed the party.", cat:'أدوات'},
{en:'Everyone', ar:'كل شخص', ex:"<b>Everyone</b> was happy today.", cat:'أدوات'},
{en:'Everything', ar:'كل شيء', ex:"<b>Everything</b> is ready now.", cat:'أدوات'},
{en:'Exam', ar:'امتحان', ex:"She studied hard for the <b>exam</b>.", cat:'أسماء'},
{en:'Example', ar:'مثال', ex:"Give me an <b>example</b>, please.", cat:'أسماء'},
{en:'Excited', ar:'متحمس', ex:"I'm so <b>excited</b> about the trip.", cat:'صفات'},
{en:'Exciting', ar:'مثير', ex:"It was an <b>exciting</b> game.", cat:'صفات'},
{en:'Exercise', ar:'تمرين', ex:"Daily <b>exercise</b> is good for health.", cat:'أسماء'},
{en:'Expensive', ar:'غالي الثمن', ex:"This car is too <b>expensive</b>.", cat:'صفات'},
{en:'Explain', ar:'يشرح', ex:"Can you <b>explain</b> this word?", cat:'أفعال'},
{en:'Extra', ar:'إضافي', ex:"Can I have <b>extra</b> sugar?", cat:'صفات'},
{en:'I', ar:'أنا', ex:"<b>I</b> live in Tunis.", cat:'ضمائر'},
{en:'face', ar:'وجه', ex:"She washed her <b>face</b>.", cat:'جسم'},
{en:'Fact', ar:'حقيقة', ex:"That is an interesting <b>fact</b>.", cat:'أسماء'},
{en:'Fall', ar:'يسقط / خريف (أمريكي)', ex:"Be careful not to <b>fall</b>.", cat:'أفعال'},
{en:'False', ar:'خاطئ', ex:"This statement is <b>false</b>.", cat:'صفات'},
{en:'Family', ar:'عائلة', ex:"My <b>family</b> is very big.", cat:'أشخاص'},
{en:'Famous', ar:'مشهور', ex:"He is a <b>famous</b> singer.", cat:'صفات'},
{en:'Fantastic', ar:'رائع', ex:"We had a <b>fantastic</b> holiday.", cat:'صفات'},
{en:'Far', ar:'بعيد', ex:"The school is <b>far</b> from home.", cat:'أدوات'},
{en:'Farm', ar:'مزرعة', ex:"They live on a <b>farm</b>.", cat:'أماكن'},
{en:'Farmer', ar:'مزارع', ex:"The <b>farmer</b> grows vegetables.", cat:'وظائف'},
{en:'Fast', ar:'سريع', ex:"He drives a <b>fast</b> car.", cat:'صفات'},
{en:'Fat', ar:'سمين', ex:"The cat became very <b>fat</b>.", cat:'صفات'},
{en:'father', ar:'أب', ex:"My <b>father</b> works at a bank.", cat:'أشخاص'},
{en:'favorite', ar:'المفضل', ex:"Blue is my <b>favorite</b> color.", cat:'صفات'},
{en:'February', ar:'فبراير', ex:"<b>February</b> is a short month.", cat:'وقت'},
{en:'festival', ar:'مهرجان', ex:"We enjoyed the music <b>festival</b>.", cat:'أسماء'},
{en:'fifth', ar:'خامس', ex:"This is my <b>fifth</b> visit here.", cat:'أرقام'},
{en:'fifty', ar:'خمسون', ex:"She is <b>fifty</b> years old.", cat:'أرقام'},
{en:'fill', ar:'يملأ', ex:"Please <b>fill</b> the glass with water.", cat:'أفعال'},
{en:'film', ar:'فيلم', ex:"We watched a great <b>film</b>.", cat:'أسماء'},
{en:'Final', ar:'نهائي / أخير', ex:"This is the <b>final</b> question.", cat:'صفات'},
{en:'find', ar:'يجد', ex:"I can't <b>find</b> my keys.", cat:'أفعال'},
{en:'Fine', ar:'بخير / جيد', ex:"I'm <b>fine</b>, thank you.", cat:'صفات'},
{en:'Finish', ar:'ينهي', ex:"Please <b>finish</b> your homework.", cat:'أفعال'},
{en:'Fire', ar:'نار', ex:"They lit a <b>fire</b> to stay warm.", cat:'أسماء'},
{en:'First', ar:'أول', ex:"This is my <b>first</b> visit to Tunis.", cat:'أرقام'},
{en:'fish', ar:'سمك', ex:"He caught a big <b>fish</b>.", cat:'طعام'},
{en:'five', ar:'خمسة', ex:"I have <b>five</b> pens.", cat:'أرقام'},
{en:'flat', ar:'شقة / مسطّح', ex:"They bought a new <b>flat</b>.", cat:'أماكن'},
{en:'flight', ar:'رحلة طيران', ex:"Our <b>flight</b> leaves at noon.", cat:'أسماء'},
{en:'floor', ar:'أرضية / طابق', ex:"Please clean the <b>floor</b>.", cat:'أماكن'},
{en:'fly', ar:'يطير', ex:"Birds can <b>fly</b> high.", cat:'أفعال'},
{en:'follow', ar:'يتبع', ex:"Please <b>follow</b> me.", cat:'أفعال'},
{en:'food', ar:'طعام', ex:"She cooks delicious <b>food</b>.", cat:'طعام'},
{en:'foot', ar:'قدم', ex:"He hurt his <b>foot</b>.", cat:'جسم'},
{en:'forget', ar:'ينسى', ex:"Don't <b>forget</b> your keys.", cat:'أفعال'},
{en:'form', ar:'استمارة / شكل', ex:"Please fill in this <b>form</b>.", cat:'أسماء'},
{en:'forty', ar:'أربعون', ex:"My uncle is <b>forty</b> years old.", cat:'أرقام'},
{en:'Four', ar:'أربعة', ex:"I have <b>four</b> brothers.", cat:'أرقام'},
{en:'fourteen', ar:'أربعة عشر', ex:"She is <b>fourteen</b> years old.", cat:'أرقام'},
{en:'fourth', ar:'الرابع', ex:"Today is our <b>fourth</b> day here.", cat:'أرقام'},
{en:'free', ar:'مجاني / حر', ex:"The tickets are <b>free</b> today.", cat:'صفات'},
{en:'Friday', ar:'الجمعة', ex:"We rest on <b>Friday</b>.", cat:'وقت'},
{en:'friendly', ar:'ودود', ex:"She is very <b>friendly</b>.", cat:'صفات'},
{en:'from', ar:'من', ex:"She is <b>from</b> Tunisia.", cat:'أدوات'},
{en:'Hunt', ar:'يصطاد', ex:"They went to <b>hunt</b> in the forest.", cat:'أفعال'},
{en:'Fruit', ar:'فاكهة', ex:"She eats <b>fruit</b> every day.", cat:'طعام'},
{en:'Full', ar:'ممتلئ', ex:"The bus was <b>full</b> of people.", cat:'صفات'},
{en:'Fun', ar:'ممتع / مرح', ex:"We had a lot of <b>fun</b> today.", cat:'صفات'},
{en:'Funny', ar:'مضحك', ex:"That joke was very <b>funny</b>.", cat:'صفات'},
{en:'Future', ar:'المستقبل', ex:"She thinks about her <b>future</b> often.", cat:'أسماء'},
{en:'Game', ar:'لعبة', ex:"They played a fun <b>game</b>.", cat:'أسماء'},
{en:'Garden', ar:'حديقة', ex:"We planted flowers in the <b>garden</b>.", cat:'أماكن'},
{en:'Geography', ar:'جغرافيا', ex:"I love studying <b>geography</b>.", cat:'أسماء'},
{en:'Get', ar:'يحصل على', ex:"I need to <b>get</b> some milk.", cat:'أفعال'},
{en:'girl', ar:'فتاة', ex:"The <b>girl</b> sings beautifully.", cat:'أشخاص'},
{en:'Girlfriend', ar:'صديقة (حبيبة)', ex:"He introduced his <b>girlfriend</b>.", cat:'أشخاص'},
{en:'Give', ar:'يعطي', ex:"She will <b>give</b> me the book.", cat:'أفعال'},
{en:'glass', ar:'كوب زجاجي', ex:"She drank a <b>glass</b> of water.", cat:'أشياء'},
{en:'Go', ar:'يذهب', ex:"Let's <b>go</b> to the park.", cat:'أفعال'},
{en:'Good', ar:'جيد', ex:"She got a <b>good</b> grade.", cat:'صفات'},
{en:'Goodbye', ar:'وداعًا', ex:"She waved and said <b>goodbye</b>.", cat:'تحيات'},
{en:'Grandfather', ar:'جد', ex:"My <b>grandfather</b> tells great stories.", cat:'أشخاص'},
{en:'grandmother', ar:'جدة', ex:"My <b>grandmother</b> bakes lovely bread.", cat:'أشخاص'},
{en:'Grandparent', ar:'جد أو جدة', ex:"We visit our <b>grandparents</b> every week.", cat:'أشخاص'},
{en:'Great', ar:'عظيم / رائع', ex:"That was a <b>great</b> idea!", cat:'صفات'},
{en:'Green', ar:'أخضر', ex:"The grass is <b>green</b>.", cat:'ألوان'},
{en:'Gray', ar:'رمادي', ex:"He wore a <b>gray</b> suit.", cat:'ألوان'},
{en:'Group', ar:'مجموعة', ex:"We work in a small <b>group</b>.", cat:'أسماء'},
{en:'Grow', ar:'ينمو', ex:"Plants <b>grow</b> with water and sun.", cat:'أفعال'},
{en:'Guess', ar:'يخمّن', ex:"Can you <b>guess</b> my age?", cat:'أفعال'},
{en:'guitar', ar:'جيتار', ex:"He plays the <b>guitar</b> well.", cat:'أشياء'},
{en:'gym', ar:'صالة رياضية', ex:"She goes to the <b>gym</b> daily.", cat:'أماكن'},
{en:'hair', ar:'شعر', ex:"She has long <b>hair</b>.", cat:'جسم'},
{en:'half', ar:'نصف', ex:"I ate <b>half</b> of the cake.", cat:'أرقام'},
{en:'hand', ar:'يد', ex:"He raised his <b>hand</b>.", cat:'جسم'},
{en:'happen', ar:'يحدث', ex:"What will <b>happen</b> next?", cat:'أفعال'},
{en:'happy', ar:'سعيد', ex:"He looks very <b>happy</b> today.", cat:'صفات'},
{en:'Hard', ar:'صعب / قاسٍ', ex:"This lesson is <b>hard</b>.", cat:'صفات'},
{en:'hat', ar:'قبعة', ex:"She wore a red <b>hat</b>.", cat:'ملابس'},
{en:'Hate', ar:'يكره', ex:"I <b>hate</b> waiting in line.", cat:'أفعال'},
{en:'have', ar:'يمتلك', ex:"I <b>have</b> two brothers.", cat:'أفعال'},
{en:'to', ar:'إلى', ex:"She went <b>to</b> school.", cat:'أدوات'},
{en:'Head', ar:'رأس', ex:"He nodded his <b>head</b>.", cat:'جسم'},
{en:'healthy', ar:'صحي', ex:"Vegetables are <b>healthy</b> food.", cat:'صفات'},
{en:'here', ar:'هنا', ex:"Come <b>here</b>, please.", cat:'أدوات'},
{en:'Hello', ar:'مرحبًا', ex:"<b>Hello</b>, how are you today?", cat:'تحيات'},
{en:'Help', ar:'يساعد', ex:"Can you <b>help</b> me, please?", cat:'أفعال'},
{en:'her', ar:'لها / إياها', ex:"I gave <b>her</b> a gift.", cat:'ضمائر'},
{en:'Hey', ar:'مرحبًا (غير رسمي)', ex:"<b>Hey</b>, how's it going?", cat:'تحيات'},
{en:'Hi', ar:'مرحبًا', ex:"<b>Hi</b>, nice to meet you!", cat:'تحيات'},
{en:'Him', ar:'إياه / له', ex:"I saw <b>him</b> yesterday.", cat:'ضمائر'},
{en:'His', ar:'ملكه', ex:"This is <b>his</b> book.", cat:'ضمائر'},
{en:'history', ar:'تاريخ', ex:"She loves studying <b>history</b>.", cat:'أسماء'},
{en:'Hobby', ar:'هواية', ex:"Reading is my favorite <b>hobby</b>.", cat:'أسماء'},
{en:'Holiday', ar:'عطلة', ex:"We are on <b>holiday</b> this week.", cat:'وقت'},
{en:'Home', ar:'منزل / بيت', ex:"I stayed at <b>home</b> today.", cat:'أماكن'},
{en:'homework', ar:'واجب مدرسي', ex:"She finished her <b>homework</b>.", cat:'أسماء'},
{en:'Hope', ar:'يأمل', ex:"I <b>hope</b> you feel better soon.", cat:'أفعال'},
{en:'hospital', ar:'مستشفى', ex:"She works at the <b>hospital</b>.", cat:'أماكن'},
{en:'Hot', ar:'حار', ex:"The soup is very <b>hot</b>.", cat:'صفات'},
{en:'Hotel', ar:'فندق', ex:"We stayed at a nice <b>hotel</b>.", cat:'أماكن'},
{en:'Hour', ar:'ساعة (وحدة زمن)', ex:"The meeting took one <b>hour</b>.", cat:'وقت'},
{en:'House', ar:'منزل', ex:"We bought a new <b>house</b>.", cat:'أماكن'},
{en:'How', ar:'كيف', ex:"<b>How</b> are you today?", cat:'أدوات'},
{en:'However', ar:'لكن / مع ذلك', ex:"It rained; <b>however</b>, we still went out.", cat:'أدوات'},
{en:'hundred', ar:'مئة', ex:"There are one <b>hundred</b> students.", cat:'أرقام'},
{en:'hungry', ar:'جائع', ex:"I'm very <b>hungry</b> now.", cat:'صفات'},
{en:'husband', ar:'زوج', ex:"Her <b>husband</b> works abroad.", cat:'أشخاص'},
{en:'Ice', ar:'ثلج', ex:"Put some <b>ice</b> in the drink.", cat:'طعام'},
{en:'ice cream', ar:'آيس كريم', ex:"Kids love <b>ice cream</b> in summer.", cat:'طعام'},
{en:'idea', ar:'فكرة', ex:"That's a great <b>idea</b>!", cat:'أسماء'},
{en:'If', ar:'إذا', ex:"<b>If</b> it rains, we will stay home.", cat:'أدوات'},
{en:'imagine', ar:'يتخيل', ex:"<b>Imagine</b> a world without cars.", cat:'أفعال'},
{en:'important', ar:'مهم', ex:"This meeting is very <b>important</b>.", cat:'صفات'},
{en:'improve', ar:'يُحسّن', ex:"She wants to <b>improve</b> her English.", cat:'أفعال'},
{en:'include', ar:'يتضمن', ex:"The price does not <b>include</b> breakfast.", cat:'أفعال'},
{en:'information', ar:'معلومات', ex:"I need more <b>information</b>.", cat:'أسماء'},
{en:'interest', ar:'اهتمام', ex:"She has an <b>interest</b> in art.", cat:'أسماء'},
{en:'interested', ar:'مهتم', ex:"I'm <b>interested</b> in learning English.", cat:'صفات'},
{en:'Interesting', ar:'ممتع / مثير للاهتمام', ex:"It's an <b>interesting</b> story.", cat:'صفات'},
{en:'internet', ar:'إنترنت', ex:"We use the <b>internet</b> every day.", cat:'أسماء'},
{en:'interview', ar:'مقابلة', ex:"He has a job <b>interview</b> today.", cat:'أسماء'},
{en:'introduce', ar:'يُقدّم (شخصًا)', ex:"Let me <b>introduce</b> my friend.", cat:'أفعال'},
{en:'island', ar:'جزيرة', ex:"They visited a small <b>island</b>.", cat:'أماكن'},
{en:'it', ar:'هو/هي (لغير العاقل)', ex:"<b>It</b> is raining outside.", cat:'ضمائر'},
{en:'It\'s', ar:'إنه / إنها (اختصار)', ex:"<b>It's</b> a beautiful day.", cat:'ضمائر'},
{en:'jacket', ar:'سترة', ex:"Wear a <b>jacket</b>, it's cold.", cat:'ملابس'},
{en:'January', ar:'يناير', ex:"<b>January</b> is the first month.", cat:'وقت'},
{en:'jeans', ar:'بنطال جينز', ex:"He wore blue <b>jeans</b>.", cat:'ملابس'},
{en:'job', ar:'وظيفة', ex:"She has a great <b>job</b>.", cat:'أسماء'},
{en:'join', ar:'ينضم', ex:"Would you like to <b>join</b> us?", cat:'أفعال'},
{en:'journey', ar:'رحلة (طويلة)', ex:"It was a long <b>journey</b>.", cat:'أسماء'},
{en:'juice', ar:'عصير', ex:"She likes orange <b>juice</b>.", cat:'طعام'},
{en:'July', ar:'يوليو', ex:"We swim a lot in <b>July</b>.", cat:'وقت'},
{en:'June', ar:'يونيو', ex:"School ends in <b>June</b>.", cat:'وقت'},
{en:'just', ar:'فقط / للتو', ex:"I <b>just</b> arrived home.", cat:'أدوات'},
{en:'keep', ar:'يحتفظ', ex:"You can <b>keep</b> the book.", cat:'أفعال'},
{en:'key', ar:'مفتاح', ex:"I lost my <b>key</b> yesterday.", cat:'أشياء'},
{en:'kilometer', ar:'كيلومتر', ex:"The city is ten <b>kilometers</b> away.", cat:'أسماء'},
{en:'kind', ar:'لطيف / نوع', ex:"She is very <b>kind</b> to everyone.", cat:'صفات'},
{en:'kitchen', ar:'مطبخ', ex:"Mom is cooking in the <b>kitchen</b>.", cat:'أماكن'},
{en:'No', ar:'لا', ex:"<b>No</b>, thank you.", cat:'أدوات'},
{en:'land', ar:'أرض / بر', ex:"Birds fly over the <b>land</b>.", cat:'أسماء'},
{en:'language', ar:'لغة', ex:"English is a global <b>language</b>.", cat:'أسماء'},
{en:'Large', ar:'كبير', ex:"They live in a <b>large</b> house.", cat:'صفات'},
{en:'last', ar:'الأخير / الماضي', ex:"This is my <b>last</b> chance.", cat:'صفات'},
{en:'late', ar:'متأخر', ex:"Sorry, I'm <b>late</b>.", cat:'صفات'},
{en:'later', ar:'لاحقًا', ex:"See you <b>later</b>!", cat:'أدوات'},
{en:'laugh', ar:'يضحك', ex:"She made me <b>laugh</b>.", cat:'أفعال'},
{en:'learn', ar:'يتعلّم', ex:"We <b>learn</b> new words every day.", cat:'أفعال'},
{en:'left', ar:'يسار / غادر', ex:"Turn <b>left</b> at the corner.", cat:'أدوات'},
{en:'Leg', ar:'ساق (رجل)', ex:"He hurt his <b>leg</b>.", cat:'جسم'},
{en:'lesson', ar:'درس', ex:"We had an English <b>lesson</b> today.", cat:'أسماء'},
{en:'Let', ar:'يدع / يسمح', ex:"<b>Let</b> me help you.", cat:'أفعال'},
{en:'letter', ar:'رسالة / حرف', ex:"She wrote a <b>letter</b> to her friend.", cat:'أسماء'},
{en:'library', ar:'مكتبة', ex:"She borrowed a book from the <b>library</b>.", cat:'أماكن'},
{en:'lie', ar:'يكذب', ex:"Don't <b>lie</b> to me.", cat:'أفعال'},
{en:'life', ar:'حياة', ex:"She has a happy <b>life</b>.", cat:'أسماء'},
{en:'Light', ar:'ضوء / خفيف', ex:"Turn on the <b>light</b>, please.", cat:'أشياء'},
{en:'like', ar:'يحب / مثل', ex:"I <b>like</b> chocolate.", cat:'أفعال'},
{en:'line', ar:'خط / صف', ex:"Draw a straight <b>line</b>.", cat:'أسماء'},
{en:'lion', ar:'أسد', ex:"The <b>lion</b> is the king of the jungle.", cat:'حيوانات'},
{en:'list', ar:'قائمة', ex:"She made a shopping <b>list</b>.", cat:'أسماء'},
{en:'listen', ar:'يستمع', ex:"I <b>listen</b> to music daily.", cat:'أفعال'},
{en:'little', ar:'صغير / قليل', ex:"She has a <b>little</b> dog.", cat:'صفات'},
{en:'Live', ar:'يعيش', ex:"They <b>live</b> in Tunis.", cat:'أفعال'},
{en:'local', ar:'محلي', ex:"We ate at a <b>local</b> restaurant.", cat:'صفات'},
{en:'long', ar:'طويل', ex:"She has <b>long</b> hair.", cat:'صفات'},
{en:'look', ar:'ينظر', ex:"Please <b>look</b> at this picture.", cat:'أفعال'},
{en:'lose', ar:'يخسر / يفقد', ex:"I don't want to <b>lose</b> the game.", cat:'أفعال'},
{en:'lot', ar:'الكثير', ex:"She has a <b>lot</b> of books.", cat:'أدوات'},
{en:'love', ar:'يحب', ex:"I <b>love</b> my family.", cat:'أفعال'},
{en:'lunch', ar:'غداء', ex:"We usually have <b>lunch</b> at noon.", cat:'طعام'},
{en:'Nobody', ar:'لا أحد', ex:"<b>Nobody</b> answered the phone.", cat:'أدوات'},
{en:'north', ar:'شمال', ex:"We drove to the <b>north</b> of the country.", cat:'أماكن'},
{en:'note', ar:'ملاحظة', ex:"She wrote a short <b>note</b>.", cat:'أسماء'},
{en:'nothing', ar:'لا شيء', ex:"There is <b>nothing</b> in the box.", cat:'أدوات'},
{en:'November', ar:'نوفمبر', ex:"It gets cold in <b>November</b>.", cat:'وقت'},
{en:'Now', ar:'الآن', ex:"I need to leave <b>now</b>.", cat:'أدوات'},
{en:'number', ar:'رقم', ex:"What is your phone <b>number</b>?", cat:'أسماء'},
{en:'nurse', ar:'ممرضة', ex:"The <b>nurse</b> gave me medicine.", cat:'وظائف'},
{en:'object', ar:'جسم / غرض', ex:"What is that strange <b>object</b>?", cat:'أسماء'},
{en:'October', ar:'أكتوبر', ex:"School starts in <b>October</b>.", cat:'وقت'},
{en:'of', ar:'من (ملكية)', ex:"This is a photo <b>of</b> my family.", cat:'أدوات'},
{en:'off', ar:'مطفأ / بعيدًا', ex:"Please turn <b>off</b> the light.", cat:'أدوات'},
{en:'office', ar:'مكتب', ex:"She works at the <b>office</b>.", cat:'أماكن'},
{en:'often', ar:'غالبًا', ex:"I <b>often</b> walk to work.", cat:'أدوات'},
{en:'Oh', ar:'آه (تعجب)', ex:"<b>Oh</b>, I forgot my keys!", cat:'أدوات'},
{en:'okay', ar:'حسنًا / بخير', ex:"Is everything <b>okay</b>?", cat:'أدوات'},
{en:'Old', ar:'قديم / كبير في السن', ex:"This is an <b>old</b> building.", cat:'صفات'},
{en:'once', ar:'مرة واحدة', ex:"I visited Paris <b>once</b>.", cat:'أدوات'},
{en:'one', ar:'واحد', ex:"I have <b>one</b> sister.", cat:'أرقام'},
{en:'onion', ar:'بصلة', ex:"Cut the <b>onion</b> into small pieces.", cat:'طعام'},
{en:'online', ar:'عبر الإنترنت', ex:"She shops <b>online</b> often.", cat:'أدوات'},
{en:'only', ar:'فقط', ex:"She is the <b>only</b> student here.", cat:'أدوات'},
{en:'open', ar:'مفتوح / يفتح', ex:"Please <b>open</b> the window.", cat:'أفعال'},
{en:'opinion', ar:'رأي', ex:"What is your <b>opinion</b> on this?", cat:'أسماء'},
{en:'opposite', ar:'عكس / مقابل', ex:"Cold is the <b>opposite</b> of hot.", cat:'صفات'},
{en:'or', ar:'أو', ex:"Tea <b>or</b> coffee?", cat:'أدوات'},
{en:'orange', ar:'برتقالي / برتقالة', ex:"She peeled an <b>orange</b>.", cat:'طعام'},
{en:'order', ar:'يطلب / ترتيب', ex:"I'd like to <b>order</b> a pizza.", cat:'أفعال'},
{en:'other', ar:'آخر', ex:"I have <b>other</b> plans today.", cat:'أدوات'},
{en:'out', ar:'خارج', ex:"Let's go <b>out</b> tonight.", cat:'أدوات'},
{en:'side', ar:'جانب', ex:"Sit on this <b>side</b> of the table.", cat:'أسماء'},
{en:'over', ar:'فوق / انتهى', ex:"The game is <b>over</b> now.", cat:'أدوات'},
{en:'own', ar:'خاص به / يمتلك', ex:"She has her <b>own</b> room.", cat:'أدوات'},
{en:'page', ar:'صفحة', ex:"Turn to the next <b>page</b>.", cat:'أسماء'},
{en:'painting', ar:'لوحة فنية', ex:"She bought a beautiful <b>painting</b>.", cat:'أسماء'},
{en:'pair', ar:'زوج (شيئين)', ex:"I bought a <b>pair</b> of shoes.", cat:'أسماء'},
{en:'paper', ar:'ورقة', ex:"Write your name on the <b>paper</b>.", cat:'أشياء'},
{en:'paragraph', ar:'فقرة', ex:"Read the first <b>paragraph</b>.", cat:'أسماء'},
{en:'parent', ar:'والد/والدة', ex:"Her <b>parents</b> live abroad.", cat:'أشخاص'},
{en:'park', ar:'حديقة عامة', ex:"We walked in the <b>park</b>.", cat:'أماكن'},
{en:'partner', ar:'شريك', ex:"She is my business <b>partner</b>.", cat:'أسماء'},
{en:'party', ar:'حفلة', ex:"We had fun at the <b>party</b>.", cat:'أسماء'},
{en:'passport', ar:'جواز سفر', ex:"Don't forget your <b>passport</b>.", cat:'أشياء'},
{en:'past', ar:'الماضي', ex:"We talked about the <b>past</b>.", cat:'وقت'},
{en:'pen', ar:'قلم حبر', ex:"Can I borrow your <b>pen</b>?", cat:'أشياء'},
{en:'Pencil', ar:'قلم رصاص', ex:"She writes with a <b>pencil</b>.", cat:'أشياء'},
{en:'People', ar:'أناس / شعب', ex:"Many <b>people</b> visit this museum.", cat:'أشخاص'},
{en:'pepper', ar:'فلفل', ex:"Add a little <b>pepper</b> to the soup.", cat:'طعام'},
{en:'Perfect', ar:'مثالي', ex:"That was a <b>perfect</b> day.", cat:'صفات'},
{en:'Period', ar:'فترة زمنية', ex:"It was a difficult <b>period</b> for us.", cat:'أسماء'},
{en:'Person', ar:'شخص', ex:"She is a kind <b>person</b>.", cat:'أشخاص'},
{en:'personal', ar:'شخصي', ex:"This is a <b>personal</b> question.", cat:'صفات'},
{en:'phone', ar:'هاتف', ex:"My <b>phone</b> is out of battery.", cat:'أشياء'},
{en:'photograph', ar:'صورة فوتوغرافية', ex:"He took a <b>photograph</b> of the sunset.", cat:'أسماء'},
{en:'phrase', ar:'عبارة', ex:"Learn this useful <b>phrase</b>.", cat:'أسماء'},
{en:'piano', ar:'بيانو', ex:"She plays the <b>piano</b> beautifully.", cat:'أشياء'},
{en:'picture', ar:'صورة', ex:"She took a <b>picture</b> of the mountains.", cat:'أسماء'},
{en:'piece', ar:'قطعة', ex:"Can I have a <b>piece</b> of cake?", cat:'أسماء'},
{en:'Pig', ar:'خنزير', ex:"The <b>pig</b> lives on the farm.", cat:'حيوانات'},
{en:'pink', ar:'وردي', ex:"She wore a <b>pink</b> dress.", cat:'ألوان'},
{en:'place', ar:'مكان', ex:"This is a lovely <b>place</b>.", cat:'أماكن'},
{en:'plan', ar:'خطة', ex:"We made a <b>plan</b> for the trip.", cat:'أسماء'},
{en:'plane', ar:'طائرة', ex:"The <b>plane</b> landed safely.", cat:'أشياء'},
{en:'plant', ar:'نبات', ex:"She waters the <b>plant</b> every day.", cat:'أسماء'},
{en:'play', ar:'يلعب', ex:"Children <b>play</b> in the garden.", cat:'أفعال'},
{en:'player', ar:'لاعب', ex:"He is a football <b>player</b>.", cat:'وظائف'},
{en:'Please', ar:'من فضلك', ex:"Close the door, <b>please</b>.", cat:'تحيات'},
{en:'point', ar:'نقطة', ex:"That's a good <b>point</b>.", cat:'أسماء'},
{en:'Police', ar:'الشرطة', ex:"The <b>police</b> arrived quickly.", cat:'وظائف'},
{en:'Policeman', ar:'شرطي', ex:"The <b>policeman</b> helped us find the way.", cat:'وظائف'},
{en:'Pool', ar:'حمام سباحة', ex:"They swim in the <b>pool</b>.", cat:'أماكن'},
{en:'Poor', ar:'فقير', ex:"They helped the <b>poor</b> family.", cat:'صفات'},
{en:'Popular', ar:'مشهور / شعبي', ex:"This singer is very <b>popular</b>.", cat:'صفات'},
{en:'Positive', ar:'إيجابي', ex:"Try to stay <b>positive</b>.", cat:'صفات'},
{en:'possible', ar:'ممكن', ex:"Is it <b>possible</b> to finish today?", cat:'صفات'},
{en:'post', ar:'يرسل بالبريد / منشور', ex:"She will <b>post</b> the letter today.", cat:'أفعال'},
{en:'potato', ar:'بطاطا', ex:"We had baked <b>potato</b> for dinner.", cat:'طعام'},
{en:'practice', ar:'يتدرّب / تدريب', ex:"She needs to <b>practice</b> more.", cat:'أفعال'},
{en:'Prefer', ar:'يفضّل', ex:"I <b>prefer</b> tea over coffee.", cat:'أفعال'},
{en:'Prepare', ar:'يُحضّر', ex:"She will <b>prepare</b> dinner tonight.", cat:'أفعال'},
{en:'Present', ar:'حاضر / هدية', ex:"She gave me a lovely <b>present</b>.", cat:'أسماء'},
{en:'Pretty', ar:'جميل / لطيف', ex:"That's a <b>pretty</b> dress.", cat:'صفات'},
{en:'price', ar:'سعر', ex:"What is the <b>price</b> of this shirt?", cat:'أسماء'},
{en:'Probably', ar:'على الأرجح', ex:"She will <b>probably</b> come late.", cat:'أدوات'},
{en:'problem', ar:'مشكلة', ex:"We solved the <b>problem</b> together.", cat:'أسماء'},
{en:'product', ar:'منتج', ex:"This is a new <b>product</b>.", cat:'أسماء'},
{en:'put', ar:'يضع', ex:"Please <b>put</b> the books here.", cat:'أفعال'},
{en:'quarter', ar:'ربع', ex:"It's a <b>quarter</b> past nine.", cat:'أرقام'},
{en:'Question', ar:'سؤال', ex:"She asked a good <b>question</b>.", cat:'أسماء'},
{en:'quick', ar:'سريع', ex:"That was a <b>quick</b> answer.", cat:'صفات'},
{en:'Quickly', ar:'بسرعة', ex:"She ran <b>quickly</b> to catch the bus.", cat:'أدوات'},
{en:'Quiet', ar:'هادئ', ex:"The village is <b>quiet</b> at night.", cat:'صفات'},
{en:'Quite', ar:'تمامًا / إلى حد ما', ex:"It's <b>quite</b> cold today.", cat:'أدوات'},
{en:'radio', ar:'راديو', ex:"We listen to the <b>radio</b> in the car.", cat:'أشياء'},
{en:'Rain', ar:'مطر', ex:"We stayed home because of the <b>rain</b>.", cat:'أسماء'},
{en:'Read', ar:'يقرأ', ex:"I <b>read</b> a book every night.", cat:'أفعال'},
{en:'Reader', ar:'قارئ', ex:"She is a fast <b>reader</b>.", cat:'أشخاص'},
{en:'Reading', ar:'القراءة', ex:"<b>Reading</b> is her favorite hobby.", cat:'أسماء'},
{en:'Ready', ar:'جاهز', ex:"Are you <b>ready</b> to go?", cat:'صفات'},
{en:'Real', ar:'حقيقي', ex:"Is that a <b>real</b> diamond?", cat:'صفات'},
{en:'really', ar:'حقًا', ex:"I <b>really</b> like this song.", cat:'أدوات'},
{en:'reason', ar:'سبب', ex:"What is the <b>reason</b> for this?", cat:'أسماء'},
{en:'Relax', ar:'يسترخي', ex:"Take time to <b>relax</b> this weekend.", cat:'أفعال'},
{en:'Remember', ar:'يتذكّر', ex:"I <b>remember</b> your name.", cat:'أفعال'},
{en:'repeat', ar:'يكرّر', ex:"Can you <b>repeat</b> that, please?", cat:'أفعال'},
{en:'Report', ar:'تقرير', ex:"She wrote a school <b>report</b>.", cat:'أسماء'},
{en:'restaurant', ar:'مطعم', ex:"We ate dinner at a <b>restaurant</b>.", cat:'أماكن'},
{en:'result', ar:'نتيجة', ex:"The <b>result</b> of the exam was great.", cat:'أسماء'},
{en:'return', ar:'يعود', ex:"He will <b>return</b> home tomorrow.", cat:'أفعال'},
{en:'rice', ar:'أرز', ex:"We eat <b>rice</b> with vegetables.", cat:'طعام'},
{en:'Rich', ar:'غني', ex:"He became very <b>rich</b>.", cat:'صفات'},
{en:'ride', ar:'يركب', ex:"She likes to <b>ride</b> her bike.", cat:'أفعال'},
{en:'right', ar:'صحيح / يمين', ex:"Turn <b>right</b> at the corner.", cat:'أدوات'},
{en:'river', ar:'نهر', ex:"The <b>river</b> flows to the sea.", cat:'أماكن'},
{en:'road', ar:'طريق', ex:"This <b>road</b> leads to the city.", cat:'أماكن'},
{en:'room', ar:'غرفة', ex:"My <b>room</b> is very tidy.", cat:'أماكن'},
{en:'routine', ar:'روتين', ex:"She has a morning <b>routine</b>.", cat:'أسماء'},
{en:'rule', ar:'قاعدة', ex:"Follow the <b>rule</b>, please.", cat:'أسماء'},
{en:'Sad', ar:'حزين', ex:"She felt <b>sad</b> after the news.", cat:'صفات'},
{en:'Salad', ar:'سلطة', ex:"She made a fresh <b>salad</b>.", cat:'طعام'},
{en:'Salt', ar:'ملح', ex:"Add a little <b>salt</b> to the soup.", cat:'طعام'},
{en:'Same', ar:'نفسه', ex:"We have the <b>same</b> opinion.", cat:'أدوات'},
{en:'Sandwich', ar:'شطيرة', ex:"He ate a cheese <b>sandwich</b>.", cat:'طعام'},
{en:'Saturday', ar:'السبت', ex:"We rest on <b>Saturday</b>.", cat:'وقت'},
{en:'Say', ar:'يقول', ex:"What did she <b>say</b>?", cat:'أفعال'},
{en:'school', ar:'مدرسة', ex:"I go to <b>school</b> every morning.", cat:'أماكن'},
{en:'science', ar:'علوم', ex:"He loves <b>science</b> class.", cat:'أسماء'},
{en:'scientist', ar:'عالم', ex:"The <b>scientist</b> discovered a new star.", cat:'وظائف'},
{en:'second', ar:'ثانية / الثاني', ex:"Wait just a <b>second</b>.", cat:'وقت'},
{en:'section', ar:'قسم', ex:"This <b>section</b> is for beginners.", cat:'أسماء'},
{en:'cell', ar:'خلية / زنزانة', ex:"A <b>cell</b> phone needs a battery.", cat:'أسماء'},
{en:'send', ar:'يرسل', ex:"Please <b>send</b> me the file.", cat:'أفعال'},
{en:'September', ar:'سبتمبر', ex:"School begins in <b>September</b>.", cat:'وقت'},
{en:'seven', ar:'سبعة', ex:"I have <b>seven</b> cousins.", cat:'أرقام'},
{en:'seventeen', ar:'سبعة عشر', ex:"She is <b>seventeen</b> years old.", cat:'أرقام'},
{en:'seventy', ar:'سبعون', ex:"My grandmother is <b>seventy</b> years old.", cat:'أرقام'},
{en:'share', ar:'يشارك', ex:"Let's <b>share</b> this pizza.", cat:'أفعال'},
{en:'She', ar:'هي', ex:"<b>She</b> is my sister.", cat:'ضمائر'},
{en:'sheep', ar:'خروف', ex:"The farmer has ten <b>sheep</b>.", cat:'حيوانات'},
{en:'shirt', ar:'قميص', ex:"He wore a blue <b>shirt</b>.", cat:'ملابس'},
{en:'shop', ar:'محل / يتسوّق', ex:"She bought a dress at the <b>shop</b>.", cat:'أماكن'},
{en:'short', ar:'قصير', ex:"He has <b>short</b> hair.", cat:'صفات'},
{en:'should', ar:'يجب أن', ex:"You <b>should</b> study more.", cat:'أفعال'},
{en:'Shower', ar:'دُش', ex:"He takes a <b>shower</b> every morning.", cat:'أسماء'},
{en:'Sick', ar:'مريض', ex:"She stayed home because she was <b>sick</b>.", cat:'صفات'},
{en:'Similar', ar:'مشابه', ex:"These two houses are <b>similar</b>.", cat:'صفات'},
{en:'Sing', ar:'يغنّي', ex:"She loves to <b>sing</b> songs.", cat:'أفعال'},
{en:'Singer', ar:'مغنّي', ex:"He is a talented <b>singer</b>.", cat:'وظائف'},
{en:'Sister', ar:'أخت', ex:"My <b>sister</b> is a teacher.", cat:'أشخاص'},
{en:'Sit', ar:'يجلس', ex:"Please <b>sit</b> down.", cat:'أفعال'},
{en:'Situation', ar:'وضع / موقف', ex:"It was a difficult <b>situation</b>.", cat:'أسماء'},
{en:'six', ar:'ستة', ex:"I have <b>six</b> apples.", cat:'أرقام'},
{en:'skill', ar:'مهارة', ex:"Cooking is a useful <b>skill</b>.", cat:'أسماء'},
{en:'skirt', ar:'تنورة', ex:"She wore a long <b>skirt</b>.", cat:'ملابس'},
{en:'sleep', ar:'ينام', ex:"Babies <b>sleep</b> a lot.", cat:'أفعال'},
{en:'Blow', ar:'ينفخ / يهب (ريح)', ex:"The wind began to <b>blow</b> hard.", cat:'أفعال'},
{en:'small', ar:'صغير', ex:"She has a <b>small</b> dog.", cat:'صفات'},
{en:'snake', ar:'ثعبان', ex:"Be careful, that's a <b>snake</b>!", cat:'حيوانات'},
{en:'snow', ar:'ثلج', ex:"It <b>snows</b> a lot in winter.", cat:'طقس'},
{en:'So', ar:'لذلك', ex:"It was raining, <b>so</b> we stayed home.", cat:'أدوات'},
{en:'some', ar:'بعض', ex:"I need <b>some</b> water.", cat:'أدوات'},
{en:'somebody', ar:'شخص ما', ex:"<b>Somebody</b> called you earlier.", cat:'أدوات'},
{en:'sometimes', ar:'أحيانًا', ex:"I <b>sometimes</b> walk to work.", cat:'أدوات'},
{en:'son', ar:'ابن', ex:"Their <b>son</b> is very smart.", cat:'أشخاص'},
{en:'song', ar:'أغنية', ex:"She wrote a beautiful <b>song</b>.", cat:'أسماء'},
{en:'Soon', ar:'قريبًا', ex:"We will arrive <b>soon</b>.", cat:'أدوات'},
{en:'sorry', ar:'آسف', ex:"I'm <b>sorry</b> for being late.", cat:'تحيات'},
{en:'sound', ar:'صوت', ex:"I heard a strange <b>sound</b>.", cat:'أسماء'},
{en:'soup', ar:'شوربة', ex:"Hot <b>soup</b> is perfect for winter.", cat:'طعام'},
{en:'south', ar:'جنوب', ex:"They traveled to the <b>south</b>.", cat:'أماكن'},
{en:'space', ar:'فضاء / مساحة', ex:"Scientists study outer <b>space</b>.", cat:'أسماء'},
{en:'speak', ar:'يتحدث', ex:"He can <b>speak</b> three languages.", cat:'أفعال'},
{en:'special', ar:'مميز / خاص', ex:"Today is a <b>special</b> day.", cat:'صفات'},
{en:'Spelling', ar:'تهجئة', ex:"Check your <b>spelling</b> carefully.", cat:'أسماء'},
{en:'spend', ar:'ينفق / يقضي وقتًا', ex:"We <b>spend</b> weekends together.", cat:'أفعال'},
{en:'sport', ar:'رياضة', ex:"Football is a popular <b>sport</b>.", cat:'أسماء'},
{en:'spring', ar:'ربيع', ex:"Flowers bloom in <b>spring</b>.", cat:'وقت'},
{en:'stand', ar:'يقف', ex:"Please <b>stand</b> up.", cat:'أفعال'},
{en:'start', ar:'يبدأ', ex:"The movie will <b>start</b> soon.", cat:'أفعال'},
{en:'statement', ar:'تصريح / جملة', ex:"She made an important <b>statement</b>.", cat:'أسماء'},
{en:'station', ar:'محطة', ex:"We waited at the train <b>station</b>.", cat:'أماكن'},
{en:'Stay', ar:'يبقى', ex:"Please <b>stay</b> here.", cat:'أفعال'},
{en:'still', ar:'ما زال / لا يزال', ex:"She is <b>still</b> sleeping.", cat:'أدوات'},
{en:'Stop', ar:'يتوقف', ex:"Please <b>stop</b> here.", cat:'أفعال'},
{en:'Story', ar:'قصة', ex:"She told us a funny <b>story</b>.", cat:'أسماء'},
{en:'Street', ar:'شارع', ex:"The shop is on this <b>street</b>.", cat:'أماكن'},
{en:'Strong', ar:'قوي', ex:"He is a <b>strong</b> man.", cat:'صفات'},
{en:'Student', ar:'طالب', ex:"She is a hardworking <b>student</b>.", cat:'أشخاص'},
{en:'Study', ar:'يدرس', ex:"He <b>studies</b> every evening.", cat:'أفعال'},
{en:'Style', ar:'أسلوب / طراز', ex:"I like her fashion <b>style</b>.", cat:'أسماء'},
{en:'Subject', ar:'مادة دراسية / موضوع', ex:"Math is my favorite <b>subject</b>.", cat:'أسماء'},
{en:'Success', ar:'نجاح', ex:"Hard work leads to <b>success</b>.", cat:'أسماء'},
{en:'Sugar', ar:'سكّر', ex:"Add one spoon of <b>sugar</b>.", cat:'طعام'},
{en:'Summer', ar:'صيف', ex:"We swim in <b>summer</b>.", cat:'وقت'},
{en:'Sun', ar:'شمس', ex:"The <b>sun</b> is very bright today.", cat:'طقس'},
{en:'Sunday', ar:'الأحد', ex:"We visit family on <b>Sunday</b>.", cat:'وقت'},
{en:'Supermarket', ar:'سوبرماركت', ex:"I bought bread at the <b>supermarket</b>.", cat:'أماكن'},
{en:'Sure', ar:'متأكد', ex:"Are you <b>sure</b> about this?", cat:'صفات'},
{en:'Sweater', ar:'سترة صوفية', ex:"Wear a <b>sweater</b>, it's cold.", cat:'ملابس'},
{en:'Swim', ar:'يسبح', ex:"We <b>swim</b> in the sea every summer.", cat:'أفعال'},
{en:'Swimming', ar:'السباحة', ex:"<b>Swimming</b> is great exercise.", cat:'أسماء'},
{en:'Table', ar:'طاولة', ex:"Put the plate on the <b>table</b>.", cat:'أشياء'},
{en:'take', ar:'يأخذ', ex:"Please <b>take</b> a seat.", cat:'أفعال'},
{en:'talk', ar:'يتحدث', ex:"Let's <b>talk</b> about the plan.", cat:'أفعال'},
{en:'tall', ar:'طويل القامة', ex:"He is very <b>tall</b>.", cat:'صفات'},
{en:'taxi', ar:'سيارة أجرة', ex:"We took a <b>taxi</b> to the airport.", cat:'أشياء'},
{en:'teach', ar:'يعلّم', ex:"She likes to <b>teach</b> children.", cat:'أفعال'},
{en:'teacher', ar:'معلّم', ex:"Our <b>teacher</b> explains very well.", cat:'وظائف'},
{en:'Team', ar:'فريق', ex:"Our <b>team</b> won the match.", cat:'أسماء'},
{en:'teenager', ar:'مراهق', ex:"She is a happy <b>teenager</b>.", cat:'أشخاص'},
{en:'Telephone', ar:'هاتف', ex:"The <b>telephone</b> rang loudly.", cat:'أشياء'},
{en:'Television', ar:'تلفاز', ex:"They watch <b>television</b> at night.", cat:'أشياء'},
{en:'Tell', ar:'يخبر', ex:"Please <b>tell</b> me the truth.", cat:'أفعال'},
{en:'ten', ar:'عشرة', ex:"I have <b>ten</b> fingers.", cat:'أرقام'},
{en:'tennis', ar:'كرة المضرب', ex:"She plays <b>tennis</b> every weekend.", cat:'أسماء'},
{en:'Terrible', ar:'فظيع', ex:"The weather was <b>terrible</b> today.", cat:'صفات'},
{en:'test', ar:'اختبار', ex:"We have a math <b>test</b> tomorrow.", cat:'أسماء'},
{en:'text', ar:'نص / رسالة نصية', ex:"She sent me a <b>text</b> message.", cat:'أسماء'},
{en:'then', ar:'ثم', ex:"We ate, <b>then</b> we slept.", cat:'أدوات'},
{en:'thanks', ar:'شكرًا', ex:"<b>Thanks</b> for your help!", cat:'تحيات'},
{en:'that', ar:'ذلك', ex:"I like <b>that</b> book.", cat:'أدوات'},
{en:'the', ar:'أداة التعريف', ex:"<b>The</b> sun is shining.", cat:'أدوات'},
{en:'theater', ar:'مسرح', ex:"We watched a play at the <b>theater</b>.", cat:'أماكن'},
{en:'There', ar:'هناك', ex:"Put the box over <b>there</b>.", cat:'أدوات'},
{en:'them', ar:'إياهم / لهم', ex:"I gave <b>them</b> the tickets.", cat:'ضمائر'},
{en:'they', ar:'هم', ex:"<b>They</b> live in Sfax.", cat:'ضمائر'},
{en:'thing', ar:'شيء', ex:"What is that <b>thing</b> on the table?", cat:'أسماء'},
{en:'Think', ar:'يفكّر', ex:"Let me <b>think</b> about it.", cat:'أفعال'},
{en:'Third', ar:'الثالث', ex:"This is his <b>third</b> attempt.", cat:'أرقام'},
{en:'thirsty', ar:'عطشان', ex:"I'm very <b>thirsty</b>, may I have water?", cat:'صفات'},
{en:'thirteen', ar:'ثلاثة عشر', ex:"She is <b>thirteen</b> years old.", cat:'أرقام'},
{en:'thirty', ar:'ثلاثون', ex:"My father is <b>thirty</b> five years old.", cat:'أرقام'},
{en:'this', ar:'هذا', ex:"I like <b>this</b> song.", cat:'أدوات'},
{en:'thousand', ar:'ألف', ex:"The car costs one <b>thousand</b> dollars.", cat:'أرقام'},
{en:'three', ar:'ثلاثة', ex:"I have <b>three</b> pens.", cat:'أرقام'},
{en:'through', ar:'خلال / عبر', ex:"We walked <b>through</b> the forest.", cat:'أدوات'},
{en:'Thursday', ar:'الخميس', ex:"We have class on <b>Thursday</b>.", cat:'وقت'},
{en:'ticket', ar:'تذكرة', ex:"I bought a train <b>ticket</b>.", cat:'أشياء'},
{en:'time', ar:'وقت', ex:"What <b>time</b> is it?", cat:'وقت'},
{en:'tired', ar:'متعب', ex:"I'm <b>tired</b> after work.", cat:'صفات'},
{en:'title', ar:'عنوان', ex:"What is the <b>title</b> of the book?", cat:'أسماء'},
{en:'two', ar:'اثنان', ex:"I have <b>two</b> sisters.", cat:'أرقام'},
{en:'today', ar:'اليوم', ex:"What are you doing <b>today</b>?", cat:'وقت'},
{en:'together', ar:'معًا', ex:"We studied <b>together</b> yesterday.", cat:'أدوات'},
{en:'toilet', ar:'مرحاض', ex:"Where is the <b>toilet</b>, please?", cat:'أماكن'},
{en:'Tomato', ar:'طماطم', ex:"She sliced a fresh <b>tomato</b>.", cat:'طعام'},
{en:'Tomorrow', ar:'غدًا', ex:"See you <b>tomorrow</b>!", cat:'وقت'},
{en:'Tonight', ar:'الليلة', ex:"We are going out <b>tonight</b>.", cat:'وقت'},
{en:'Tooth', ar:'سنّ', ex:"He has a bad <b>tooth</b>.", cat:'جسم'},
{en:'Topic', ar:'موضوع', ex:"Let's discuss a new <b>topic</b>.", cat:'أسماء'},
{en:'Tourist', ar:'سائح', ex:"Many <b>tourists</b> visit this beach.", cat:'أشخاص'},
{en:'Town', ar:'بلدة', ex:"They live in a small <b>town</b>.", cat:'أماكن'},
{en:'Traffic', ar:'حركة المرور', ex:"There was heavy <b>traffic</b> today.", cat:'أسماء'},
{en:'train', ar:'قطار', ex:"We traveled by <b>train</b>.", cat:'أشياء'},
{en:'travel', ar:'يسافر', ex:"They love to <b>travel</b> abroad.", cat:'أفعال'},
{en:'tree', ar:'شجرة', ex:"A bird sat on the <b>tree</b>.", cat:'أسماء'},
{en:'trip', ar:'رحلة', ex:"We had a great <b>trip</b> to Sousse.", cat:'أسماء'},
{en:'trousers', ar:'بنطال', ex:"He wore black <b>trousers</b>.", cat:'ملابس'},
{en:'true', ar:'صحيح / حقيقي', ex:"Is this story <b>true</b>?", cat:'صفات'},
{en:'try', ar:'يحاول', ex:"Please <b>try</b> again.", cat:'أفعال'},
{en:'t-shirt', ar:'تي شيرت', ex:"She wore a white <b>t-shirt</b>.", cat:'ملابس'},
{en:'Tuesday', ar:'الثلاثاء', ex:"We meet every <b>Tuesday</b>.", cat:'وقت'},
{en:'turn', ar:'يدور / دور', ex:"It's your <b>turn</b> to play.", cat:'أفعال'},
{en:'TV', ar:'تلفاز', ex:"We watched <b>TV</b> together.", cat:'أشياء'},
{en:'twelve', ar:'اثنا عشر', ex:"There are <b>twelve</b> months in a year.", cat:'أرقام'},
{en:'twenty', ar:'عشرون', ex:"She is <b>twenty</b> years old.", cat:'أرقام'},
{en:'twice', ar:'مرتين', ex:"I called her <b>twice</b> today.", cat:'أدوات'},
{en:'type', ar:'نوع / يكتب على لوحة المفاتيح', ex:"What <b>type</b> of music do you like?", cat:'أسماء'},
{en:'umbrella', ar:'مظلة', ex:"Take an <b>umbrella</b>, it's raining.", cat:'أشياء'},
{en:'Uncle', ar:'عم / خال', ex:"My <b>uncle</b> visits us often.", cat:'أشخاص'},
{en:'under', ar:'تحت', ex:"The cat is <b>under</b> the table.", cat:'أدوات'},
{en:'Understand', ar:'يفهم', ex:"I don't <b>understand</b> this word.", cat:'أفعال'},
{en:'University', ar:'جامعة', ex:"She studies at the <b>university</b>.", cat:'أماكن'},
{en:'Until', ar:'حتى', ex:"Wait <b>until</b> I finish.", cat:'أدوات'},
{en:'up', ar:'إلى أعلى', ex:"Please stand <b>up</b>.", cat:'أدوات'},
{en:'upstairs', ar:'إلى الطابق العلوي', ex:"She went <b>upstairs</b> to sleep.", cat:'أماكن'},
{en:'useful', ar:'مفيد', ex:"This tool is very <b>useful</b>.", cat:'صفات'},
{en:'usually', ar:'عادة', ex:"I <b>usually</b> wake up early.", cat:'أدوات'},
{en:'vacation', ar:'إجازة', ex:"We are on <b>vacation</b> this week.", cat:'وقت'},
{en:'vegetable', ar:'خضار', ex:"She eats <b>vegetables</b> every day.", cat:'طعام'},
{en:'very', ar:'جدًا', ex:"She is <b>very</b> smart.", cat:'أدوات'},
{en:'video', ar:'فيديو', ex:"He posted a funny <b>video</b>.", cat:'أشياء'},
{en:'village', ar:'قرية', ex:"They live in a small <b>village</b>.", cat:'أماكن'},
{en:'Visit', ar:'يزور', ex:"We will <b>visit</b> our grandparents.", cat:'أفعال'},
{en:'visitor', ar:'زائر', ex:"The museum welcomes many <b>visitors</b>.", cat:'أشخاص'},
{en:'Wait', ar:'ينتظر', ex:"Please <b>wait</b> for me here.", cat:'أفعال'},
{en:'waiter', ar:'نادل', ex:"The <b>waiter</b> brought our food.", cat:'وظائف'},
{en:'Wake', ar:'يستيقظ', ex:"I <b>wake</b> up at seven.", cat:'أفعال'},
{en:'walk', ar:'يمشي', ex:"We <b>walk</b> to school every day.", cat:'أفعال'},
{en:'Wall', ar:'جدار', ex:"She hung a picture on the <b>wall</b>.", cat:'أشياء'},
{en:'Want', ar:'يريد', ex:"I <b>want</b> a cup of tea.", cat:'أفعال'},
{en:'warm', ar:'دافئ', ex:"The weather is <b>warm</b> today.", cat:'صفات'},
{en:'Wash', ar:'يغسل', ex:"Please <b>wash</b> your hands.", cat:'أفعال'},
{en:'Watch', ar:'يشاهد / ساعة يد', ex:"We <b>watch</b> movies on weekends.", cat:'أفعال'},
{en:'Water', ar:'ماء', ex:"Drink plenty of <b>water</b>.", cat:'طعام'},
{en:'Way', ar:'طريقة / طريق', ex:"Can you show me the <b>way</b>?", cat:'أسماء'},
{en:'We', ar:'نحن', ex:"<b>We</b> live in Tunis.", cat:'ضمائر'},
{en:'where', ar:'أين', ex:"<b>Where</b> do you live?", cat:'أدوات'},
{en:'weather', ar:'طقس', ex:"The <b>weather</b> is nice today.", cat:'طقس'},
{en:'website', ar:'موقع إلكتروني', ex:"She built a new <b>website</b>.", cat:'أشياء'},
{en:'Wednesday', ar:'الأربعاء', ex:"We have a meeting on <b>Wednesday</b>.", cat:'وقت'},
{en:'week', ar:'أسبوع', ex:"I will travel next <b>week</b>.", cat:'وقت'},
{en:'welcome', ar:'أهلًا وسهلاً', ex:"<b>Welcome</b> to our home!", cat:'تحيات'},
{en:'well', ar:'جيدًا / بئر', ex:"She sings very <b>well</b>.", cat:'أدوات'},
{en:'west', ar:'غرب', ex:"The sun sets in the <b>west</b>.", cat:'أماكن'},
{en:'What', ar:'ماذا', ex:"<b>What</b> is your name?", cat:'أدوات'},
{en:'When', ar:'متى', ex:"<b>When</b> does the film start?", cat:'أدوات'},
{en:'Which', ar:'أي (اختيار)', ex:"<b>Which</b> color do you prefer?", cat:'أدوات'},
];

let categories = ["الكل", ...Array.from(new Set(words.map(w=>w.cat)))];
let currentCat = "الكل";
let known = new Set();
let searchQuery = "";
let visibleCount = 60;
const PAGE_SIZE = 60;

/* ---------------- STARS + LIGHTS DECORATION ---------------- */
const starsWrap = document.getElementById('stars');
for(let i=0;i<70;i++){
  const s = document.createElement('div');
  s.className='star';
  s.style.left = Math.random()*100+'%';
  s.style.top = Math.random()*100+'%';
  s.style.animationDelay = (Math.random()*3)+'s';
  s.style.width = s.style.height = (Math.random()*2+1)+'px';
  starsWrap.appendChild(s);
}
const lightsWrap = document.getElementById('stringLights');
for(let i=0;i<16;i++){
  const b = document.createElement('div');
  b.className='bulb-mini';
  b.style.animationDelay = (i*0.15)+'s';
  lightsWrap.appendChild(b);
}

/* ---------------- CATEGORY CHIPS ---------------- */
const chipWrap = document.getElementById('categoryChips');
categories.forEach(cat=>{
  const chip = document.createElement('div');
  chip.className = 'chip' + (cat===currentCat ? ' active' : '');
  chip.textContent = cat;
  chip.onclick = ()=>{
    currentCat = cat;
    visibleCount = PAGE_SIZE;
    document.querySelectorAll('.chip:not(.load-more-btn)').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    renderCards();
  };
  chipWrap.appendChild(chip);
});

/* ---------------- SEARCH ---------------- */
const searchBox = document.getElementById('searchBox');
searchBox.addEventListener('input', ()=>{
  searchQuery = searchBox.value.trim().toLowerCase();
  visibleCount = PAGE_SIZE;
  renderCards();
});

document.getElementById('loadMoreBtn').addEventListener('click', ()=>{
  visibleCount += PAGE_SIZE;
  renderCards();
});

/* ---------------- CARDS ---------------- */
const cardGrid = document.getElementById('cardGrid');
function getFilteredList(){
  return words.filter(w=>{
    const matchesCat = currentCat==="الكل" || w.cat===currentCat;
    const matchesSearch = !searchQuery ||
      w.en.toLowerCase().includes(searchQuery) ||
      w.ar.includes(searchQuery);
    return matchesCat && matchesSearch;
  });
}
function renderCards(){
  cardGrid.innerHTML='';
  const fullList = getFilteredList();
  const list = fullList.slice(0, visibleCount);
  const noResults = document.getElementById('noResults');
  const loadMoreWrap = document.querySelector('.load-more-wrap');
  noResults.style.display = fullList.length===0 ? 'block' : 'none';
  loadMoreWrap.style.display = fullList.length > visibleCount ? 'flex' : 'none';
  list.forEach((w,i)=>{
    const flash = document.createElement('div');
    flash.className='flash' + (known.has(w.en)?' known':'');
    flash.style.animationDelay = (i*0.03)+'s';
    flash.innerHTML = `
      <div class="flash-inner">
        <div class="face front">
          <button class="speak-btn" data-word="${w.en}" title="نطق الكلمة">🔊</button>
          <div class="word-en">${w.en}</div>
          <div class="word-hint">${w.cat} · اضغط للترجمة</div>
        </div>
        <div class="face back">
          <button class="speak-btn" data-word="${w.en}" title="نطق الكلمة">🔊</button>
          <div class="word-ar">${w.ar}</div>
          <div class="word-example">${w.ex}</div>
          <div class="mark-known">${known.has(w.en) ? '✓ تم التعلّم' : 'اضغط مرتين لوضع علامة تعلّمتها'}</div>
        </div>
      </div>`;
    let clickTimer=null;
    flash.addEventListener('click', (e)=>{
      if(e.target.closest('.speak-btn')){
        speak(e.target.closest('.speak-btn').dataset.word, e.target.closest('.speak-btn'));
        return;
      }
      if(clickTimer){
        clearTimeout(clickTimer); clickTimer=null;
        const wasKnown = known.has(w.en);
        wasKnown ? known.delete(w.en) : known.add(w.en);
        flash.classList.toggle('known');
        if(!wasKnown){ addXp(5); playTone(660,0.1); }
        updateStats();
        updateGamification();
        renderCards();
      } else {
        clickTimer = setTimeout(()=>{
          flash.classList.toggle('flipped');
          clickTimer=null;
        },220);
      }
    });
    cardGrid.appendChild(flash);
  });
}

/* ---------------- PRONUNCIATION ---------------- */
function speak(word, btn){
  if(!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(word);
  utter.lang = 'en-US';
  utter.rate = 0.9;
  if(btn){
    btn.classList.add('speaking');
    utter.onend = ()=> btn.classList.remove('speaking');
  }
  window.speechSynthesis.speak(utter);
}

/* ---------------- SOUND EFFECTS (Web Audio) ---------------- */
let audioCtx = null;
function playTone(freq, duration, type='sine'){
  try{
    if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(); osc.stop(audioCtx.currentTime + duration);
  }catch(e){}
}
function playCorrectSound(){ playTone(523,0.12); setTimeout(()=>playTone(784,0.18),110); }
function playWrongSound(){ playTone(200,0.3,'sawtooth'); }
function playLevelUpSound(){ [523,659,784,1047].forEach((f,i)=>setTimeout(()=>playTone(f,0.18),i*90)); }

/* ---------------- CONFETTI ---------------- */
function triggerConfetti(count=60){
  const colors = ['#f5c453','#4ee8c3','#a389f4','#ff9d4d','#ffe9b0'];
  for(let i=0;i<count;i++){
    const p = document.createElement('div');
    p.className='confetti-piece';
    p.style.left = Math.random()*100+'vw';
    p.style.background = colors[Math.floor(Math.random()*colors.length)];
    p.style.animationDuration = (2+Math.random()*1.5)+'s';
    p.style.opacity = 0.7+Math.random()*0.3;
    document.body.appendChild(p);
    setTimeout(()=>p.remove(), 4000);
  }
}

/* ---------------- TOAST ---------------- */
let toastTimer=null;
function showToast(msg){
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> toast.classList.remove('show'), 2800);
}

/* ---------------- STATS ---------------- */
function updateStats(){
  document.getElementById('statTotal').textContent = words.length;
  document.getElementById('statKnown').textContent = known.size;
  const pct = Math.round((known.size/words.length)*100);
  document.getElementById('progressFill').style.width = pct+'%';
}

/* ---------------- GAMIFICATION: XP, LEVEL, STREAK, BADGES ---------------- */
let xp = 0;
let streak = 0;
const levelTitles = ['مبتدئ','متعلّم','مجتهد','واثق','متمكّن','خبير','محترف','بارع','متقن','أسطورة'];

function xpForLevel(lvl){ return 50 * lvl * lvl; } // cumulative xp needed to reach lvl+1 roughly
function computeLevel(){
  let lvl = 1;
  while(xp >= xpForLevel(lvl) && lvl < levelTitles.length){ lvl++; }
  return lvl;
}
function addXp(n){
  const prevLevel = computeLevel();
  xp += n;
  const newLevel = computeLevel();
  updateGamification();
  checkBadges();
  if(newLevel > prevLevel){
    triggerConfetti(80);
    playLevelUpSound();
    showToast(`🎉 وصلت إلى المستوى ${newLevel}: ${levelTitles[newLevel-1]}!`);
  }
}
function updateGamification(){
  const level = computeLevel();
  const prevThresh = level>1 ? xpForLevel(level-1) : 0;
  const nextThresh = xpForLevel(level);
  const progress = Math.min(100, Math.round(((xp-prevThresh)/(nextThresh-prevThresh))*100));
  document.getElementById('levelBadge').textContent = level;
  document.getElementById('levelTitle').textContent = `المستوى ${level} · ${levelTitles[level-1] || 'أسطورة'}`;
  document.getElementById('xpFill').style.width = progress+'%';
  document.getElementById('xpText').textContent = `${xp} / ${nextThresh} XP`;
  document.getElementById('streakText').textContent = `سلسلة: ${streak}`;
  document.getElementById('streakFlame').classList.toggle('hot', streak>=3);
}

const badgeDefs = [
  {id:'b10', threshold:10, icon:'🌱', name:'البداية'},
  {id:'b25', threshold:25, icon:'📘', name:'مجتهد'},
  {id:'b50', threshold:50, icon:'⭐', name:'نجم صاعد'},
  {id:'b100', threshold:100, icon:'🔥', name:'مئة كلمة'},
  {id:'b200', threshold:200, icon:'🏆', name:'بطل الكلمات'},
  {id:'b300', threshold:300, icon:'💎', name:'ماسي'},
  {id:'b500', threshold:500, icon:'👑', name:'ملك اللغة'},
  {id:'b729', threshold:729, icon:'🌟', name:'أسطورة الإنجليزية'},
];
let unlockedBadges = new Set();
function renderBadges(){
  const wrap = document.getElementById('badgesWrap');
  wrap.innerHTML='';
  badgeDefs.forEach(b=>{
    const el = document.createElement('div');
    el.className = 'badge' + (unlockedBadges.has(b.id) ? ' unlocked' : '');
    el.id = 'badge-'+b.id;
    el.innerHTML = `<div class="badge-icon">${b.icon}</div>${b.name}<br><span style="opacity:.7">${b.threshold} كلمة</span>`;
    wrap.appendChild(el);
  });
}
function checkBadges(){
  badgeDefs.forEach(b=>{
    if(!unlockedBadges.has(b.id) && known.size >= b.threshold){
      unlockedBadges.add(b.id);
      const el = document.getElementById('badge-'+b.id);
      if(el){ el.classList.add('unlocked'); }
      triggerConfetti(50);
      showToast(`🏅 إنجاز جديد: ${b.name}!`);
    }
  });
}

/* ---------------- QUIZ (with light spaced-repetition weighting) ---------------- */
let quizScore = {correct:0, total:0};
let currentQuizWord = null;
let srsBox = new Map(); // word.en -> box (1=weak,5=mastered)

function shuffle(arr){ return arr.slice().sort(()=>Math.random()-0.5); }

function pickWeightedWord(){
  const weighted = [];
  words.forEach(w=>{
    const box = srsBox.get(w.en) || 1;
    const weight = 6 - box; // box1 -> weight5, box5 -> weight1
    for(let i=0;i<weight;i++) weighted.push(w);
  });
  return weighted[Math.floor(Math.random()*weighted.length)];
}

function newQuestion(){
  const w = pickWeightedWord();
  currentQuizWord = w;
  document.getElementById('quiz-question').textContent = w.en;
  document.getElementById('quiz-feedback').textContent = '';
  document.getElementById('nextBtn').style.display='none';

  let distractors = shuffle(words.filter(x=>x.ar!==w.ar)).slice(0,3).map(x=>x.ar);
  let options = shuffle([w.ar, ...distractors]);

  const optWrap = document.getElementById('quizOptions');
  optWrap.innerHTML='';
  options.forEach(opt=>{
    const btn = document.createElement('button');
    btn.className='opt-btn';
    btn.textContent = opt;
    btn.onclick = ()=> checkAnswer(btn, opt, w);
    optWrap.appendChild(btn);
  });
}

function checkAnswer(btn, chosen, w){
  document.querySelectorAll('.opt-btn').forEach(b=>b.disabled=true);
  quizScore.total++;
  const prevBox = srsBox.get(w.en) || 1;
  if(chosen === w.ar){
    btn.classList.add('correct');
    quizScore.correct++;
    streak++;
    srsBox.set(w.en, Math.min(5, prevBox+1));
    document.getElementById('quiz-feedback').textContent = 'إجابة صحيحة! 🎉';
    document.getElementById('quiz-feedback').style.color = 'var(--teal)';
    known.add(w.en);
    playCorrectSound();
    addXp(10 + streak);
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('.opt-btn').forEach(b=>{
      if(b.textContent === w.ar) b.classList.add('correct');
    });
    srsBox.set(w.en, 1);
    streak = 0;
    document.getElementById('quiz-feedback').textContent = `إجابة خاطئة، الصحيح هو: ${w.ar}`;
    document.getElementById('quiz-feedback').style.color = '#ff8080';
    playWrongSound();
  }
  document.getElementById('quiz-score').textContent = `النتيجة: ${quizScore.correct} / ${quizScore.total}`;
  document.getElementById('statScore').textContent = Math.round((quizScore.correct/quizScore.total)*100)+'%';
  document.getElementById('nextBtn').style.display='inline-block';
  updateStats();
  updateGamification();
  renderCards();
}

document.getElementById('nextBtn').onclick = newQuestion;

/* ---------------- MATCHING GAME ---------------- */
let matchSelected = null;
let matchPairsLeft = 0;

function initMatchGame(){
  const board = document.getElementById('matchBoard');
  const status = document.getElementById('matchStatus');
  const win = document.getElementById('matchWin');
  win.style.display = 'none';
  status.style.display = 'block';
  status.textContent = 'اضغط على كلمة إنجليزية ثم ترجمتها العربية لمطابقتهما';
  matchSelected = null;

  const chosen = shuffle(words).slice(0, 6);
  matchPairsLeft = chosen.length;
  const enTiles = shuffle(chosen.map(w=>({key:w.en, text:w.en, ar:w.ar})));
  const arTiles = shuffle(chosen.map(w=>({key:w.en, text:w.ar, ar:w.ar})));

  board.innerHTML = `
    <div class="match-col" id="matchColEn"></div>
    <div class="match-col" id="matchColAr"></div>
  `;
  const colEn = document.getElementById('matchColEn');
  const colAr = document.getElementById('matchColAr');

  enTiles.forEach((t,i)=>{
    const tile = document.createElement('div');
    tile.className='match-tile';
    tile.textContent = t.text;
    tile.dataset.key = t.key;
    tile.dataset.side = 'en';
    tile.style.animationDelay = (i*0.05)+'s';
    tile.onclick = ()=> handleMatchClick(tile);
    colEn.appendChild(tile);
  });
  arTiles.forEach((t,i)=>{
    const tile = document.createElement('div');
    tile.className='match-tile';
    tile.textContent = t.text;
    tile.dataset.key = t.key;
    tile.dataset.side = 'ar';
    tile.style.animationDelay = (i*0.05)+'s';
    tile.onclick = ()=> handleMatchClick(tile);
    colAr.appendChild(tile);
  });
}

function handleMatchClick(tile){
  if(tile.classList.contains('matched')) return;
  if(!matchSelected){
    matchSelected = tile;
    tile.classList.add('selected');
    return;
  }
  if(matchSelected === tile){
    tile.classList.remove('selected');
    matchSelected = null;
    return;
  }
  if(matchSelected.dataset.side === tile.dataset.side){
    matchSelected.classList.remove('selected');
    matchSelected = tile;
    tile.classList.add('selected');
    return;
  }
  // different sides selected - check match
  if(matchSelected.dataset.key === tile.dataset.key){
    matchSelected.classList.remove('selected');
    matchSelected.classList.add('matched');
    tile.classList.add('matched');
    playCorrectSound();
    known.add(tile.dataset.key);
    addXp(8);
    updateStats();
    matchSelected = null;
    matchPairsLeft--;
    if(matchPairsLeft === 0){
      document.getElementById('matchStatus').style.display='none';
      document.getElementById('matchWin').style.display='block';
      triggerConfetti(70);
      showToast('🎉 أكملت لعبة المطابقة!');
    }
  } else {
    playWrongSound();
    matchSelected.classList.add('wrong-shake');
    tile.classList.add('wrong-shake');
    const prevSelected = matchSelected;
    setTimeout(()=>{
      prevSelected.classList.remove('selected','wrong-shake');
      tile.classList.remove('wrong-shake');
    },400);
    matchSelected = null;
  }
}
document.getElementById('newMatchBtn').onclick = initMatchGame;

/* ---------------- INIT ---------------- */
renderCards();
updateStats();
updateGamification();
renderBadges();
newQuestion();
initMatchGame();
