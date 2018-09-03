import mongoose from 'mongoose';
import News from './src/models/news';

mongoose.connect("mongodb://localhost:27017/news");
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

News.updateTags("5b8bac2dca1aa75144ea253a",{title:"test1111",text:`<h1><strong>Гид по тарифам</strong></h1>

<h1>&nbsp;</h1>

<h2><strong>Чем отличаются, как выбрать и как оплатить?</strong></h2>

<p>&nbsp;</p>

<p><strong>В этой статье разбираемся с четырьмя основными тарифами на Платформе: Микро, Эконом, Бизнес и Бизнес +, узнаем, как их платить и сменить, а также зачем нужен дополнительный пакет. </strong></p>

<p>&nbsp;</p>

<h2><strong>Чем отличаются тарифы?</strong></h2>

<p>&nbsp;</p>

<p><strong>В Платформе есть четыре основных тарифа:</strong></p>

<p>&nbsp;</p>

<ul>
	<li>
	<p><span class="marker"><strong>Микро</strong></span></p>
	</li>
	<li>
	<p><span class="marker"><strong>Эконом</strong></span></p>
	</li>
	<li>
	<p><span class="marker"><strong>Бизнес</strong></span></p>
	</li>
	<li>
	<p><span class="marker"><strong>Бизнес +</strong></span></p>
	</li>
</ul>

<p>&nbsp;</p>

<p><strong>Плюс тариф &quot;Пробный&quot;. Он дает возможность новым пользователям протестировать все функции Платформы в течение 14 дней бесплатно. Тариф Микро можно оплатить на месяц, остальные тарифы &ndash; на месяц, три месяца или год. Чем дольше срок оплаты, тем больше скидка:</strong></p>

<p>&nbsp;</p>

<ul>
	<li>
	<p><strong>три месяца со скидкой 10%,</strong></p>
	</li>
	<li>
	<p><strong>год по цене 10 месяцев.</strong></p>
	</li>
</ul>

<p>&nbsp;</p>

<blockquote>
<p><strong>При оплате любого тарифа на год &ndash; бесплатный домен.</strong></p>
</blockquote>

<p>&nbsp;</p>

<p><strong>Как оплатить тариф?</strong></p>

<p>&nbsp;</p>

<p><strong>В личном кабинете в разделе &ldquo;Оплатить тариф&rdquo;, выбираем нужный, выбираем срок и нажимаем &ldquo;Оплатить&rdquo;.</strong></p>

<p>&nbsp;</p>

<p><strong>Откроется страница оплаты &ndash; выбираем удобный способ.</strong></p>

<p>&nbsp;</p>

<p><strong>На почту придет уведомление об оплате, а в личном кабинете будет указан ваш тариф и количество оплаченных дней.</strong></p>

<p>&nbsp;</p>

<p><strong>Если нужно оплатить дополнительный пакет, обращаемся в службу технической поддержки. В личном кабинете появится счет на остаток периода до окончания тарифа. В течение суток после оплаты расширение будет добавлено. В следующем месяце можно оплачивать тариф Бизнес или Бизнес+ вместе с расширением через личный кабинет.</strong></p>

<p>&nbsp;</p>

<p><strong>Если нужно отключить дополнительный пакет, пишем в чат службы поддержки или на почту help@platformalp.ru.</strong></p>

<p>&nbsp;</p>

<p><strong>Если меняем Пробный тариф на любой другой, заходим в личный кабинет в раздел &ldquo;Оплатить тариф&rdquo;, выбираем нужный и нажимаем &ldquo;Оплатить&rdquo;.</strong></p>

<p>&nbsp;</p>

<p><strong>Для смены любого тарифа кроме &ldquo;Пробного&rdquo; пишите в службу поддержки. Внимательно с количеством активных страниц и доменов. Они не должны превышать лимит тарифа, на который вы переходите.</strong></p>
`,tags:['Новость','Статья']},true).then(a=>console.log(a))