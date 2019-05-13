# Başlamadan Önce

Bu projeyi kullanabilmeniz için Clone yaptıktan sonra bazı işlemler yapmanız gerekmektedir. Bu projede hem server hem de client(mobile) bulunduğu için bu işlemler ikiye ayrılmış durumdadır.

# Server İçin Yapılması Gerekenler

Komut satırını projenizin bulunduğu konumda açın. Daha sonra ```cd server``` komutu ile server klasörünün içine girin. ```npm install``` komutu ile projenin gerekli tüm bağımlılıklarını kurun. İşlem tamamlandıktan sonra client'a(mobile) geçmeden önce ```npm start``` yada ```npm run start:dev```(Bu komutu kullanabilmek için nodemon paketini global olarak kurmanız gerekmektedir. Kurmak için ```npm install -g nodemon``` komutunu kullanabilirsiniz) komutlarından birini çalıştırın ve sunucuyu başlatın. 

# Client(Mobile) İçin Yapılması Gerekenler

Komut satırını projenizin bulunduğu konumda açın. Daha sonra ```cd mobile``` komutu ile mobile klasörünün içine girin. ```npm install``` komutunu çalıştırarak gerekli bağımlılıkları kurun. Projeyi ```react-native run-android``` ya da ```react-native run-ios``` komutlarından herhangi birisini kullanarak projenizi açık olan herhangi bir emülatörde ya da gerçek bir cihazda test edebilirsiniz. 

Ancak burada dikkat edilmesi gerek bir kaç nokta mevcuttur. Projeniz çalışabilir ancak Socket.io server'a bağlanmaması muhtemel.(ios'ta çalışır. Ancak android'de çalışmaz) Bunun sebebi Android'in localhost'u kabul etmemesi ve bunun yerine ip yazılması gerekmesinden kaynaklı. Bu ip'de bilgisayardan bilgisayara değişiklik göstermektedir. Bunun çözümü de yine yönteme göre değişiklik göstermektedir. Bunlarda farklı başlıklar altında toplanmaktadır.

# Emülatörde Test Etmek İçin

Emülatörde işiniz biraz daha kolay aslında. Windows için: komut satırını açın ve ```ipconfig``` yazın. Burada aşağıda resimlerde görünen kısımlarda yazan başlıklardan hangisi varsa onu bulun:

![Emülatör ipconfig 1](https://www.kodevreni.com/uploads/monthly_2019_05/Screenshot_2.png.fba58d6375bc67205edfb24af2c244a6.png "Emülatör ipconfig 1")
ya da
![Emülatör ipconfig 2](https://www.kodevreni.com/uploads/monthly_2019_05/Screenshot_3.png.d7aad61709260d57ad18878a9556f32a.png "Emülatör ipconfig 2")

Buradalarda kırmızı dikdörtgen arasındaki ip'yi kopyalıyoruz.

Projemizin mobile klasöründeki projenin içindeki src/store/IOStore.js dosyasını açıyoruz.

```
@observable ip = '192.168.x.x'; //Ip adresi yanlış olursa çalışmaz.
```

Not: IOS için localhost yazmanız yeterli olacaktır.

Bu satırın karşısındaki tek tırnak arasındaki değere kopyaladığınız ip adresini yapıştırın. Daha sonra kaydedin.

Hemen ardından da ```react-native run-android``` komutu ile projenizi açın. Yanlış ip adresini almadıysanız Socket.io server'a başarılı şekilde bağlantı sağlanacaktır. 

İsminizi girdikten sonra 5 saniye sonunda bağlantı gerçekleşmezse , bağlantı başarısız demektir. Zaten bir alert pencersiyle uyarılacaksınız.

# Gerçek Cihazda Uygulamayı Test Etmek

Uygulamayı gerçek cihazda test etmek emülatöre göre bir tık daha zahmetli olabilir.

# Wifi destekleyen bilgisayar için;

Bu seçenek için yapmanız gereken test etmek istediğiniz cihaz ile bilgisayarın aynı ağda bağlı olması. Daha sonra bilgisayarınızın Wifi üzerinden local ip adresini bulmanız gerekmekte. Bunun için yine ```ipconfig``` komutunu komut satırında çalıştırırsanız yine üst başlıktaki işlemi yapmanız gerekir.

![Gerçek Cihaz ipconfig 1](https://www.kodevreni.com/uploads/monthly_2019_05/Screenshot_1.png.f108306841dc7793b63c21ce61eb9a59.png "Gerçek Cihaz ipconfig 1")

Dikdörtgen ile gösterilen kısımdaki ip'yi kopyalayın. Daha sonra yine yukarıdaki başlık gibi;

src/store/IOStore.js dosyasını açın ve şu satırı bulun;

```
@observable ip = '192.168.x.x'; //Ip adresi yanlış olursa çalışmaz.
```
Buraya ip adresini yapıştırın. Daha sonra kaydederek ```react-native run-android``` komutunu çalıştırabilirsiniz.

# Wifi desteklemeyen bilgisayar için; 

Bu seçenekte muhtemelen bilgisayarınıza internet kablo ile bağlıdır. Test etmek istediğiniz cihazı da kablosu bağlı olan modeme wifi ile bağlanmanız yeterli. Sonra ise ip adresini almanız gerekmektedir. Bunun için yine ```ipconfig``` komutunu komut satırında çalıştırırsanız yine üst başlıktaki işlemi yapmanız gerekir.

![Gerçek Cihaz ipconfig 2](https://www.kodevreni.com/uploads/monthly_2019_05/Screenshot_3.png.d7aad61709260d57ad18878a9556f32a.png "Gerçek Cihaz ipconfig 2")

Yukarıdaki dikdörtgenle işaretli kısımdaki adresi kopyalayıp yine src/store/IOStore.js içerisindeki şu satırı bulun:

```
@observable ip = '192.168.x.x'; //Ip adresi yanlış olursa çalışmaz.
```

Daha sonra kopyaladığınız adresi buraya yapıştırın. 

Buna rağmen yine de çalışmıyorsa muhtemelen doğru ip adresini kopyalayamamışsınızdır. Yaşadığınız sorunları bana bildirebilirsiniz.

Sorunları bildirmek için ise http://www.kodevreni.com adresinde konu açarak dile getirebilirsiniz. 

# Uygulamadan Resimler

Gerçek Cihaz Huawei P9 Lite 2017 1920 x 1080

![Gerçek Cihaz Huawei P9 Lite 2017 1920 x 1080](https://www.kodevreni.com/uploads/monthly_2019_05/Huawei-main.thumb.jpg.ab923259060b346329a2ce2a802431cb.jpg "Gerçek Cihaz Huawei P9 Lite 2017 1920 x 1080")

![Gerçek Cihaz Huawei P9 Lite 2017 1920 x 1080](https://www.kodevreni.com/uploads/monthly_2019_05/Huawei-drawer.thumb.jpg.cc714b2dd1ee4554347cbbe92530c582.jpg "Gerçek Cihaz Huawei P9 Lite 2017 1920 x 1080")

Emülatör Google Nexus S 480x800

![Emülatör Google Nexus S 480x800](https://www.kodevreni.com/uploads/monthly_2019_05/S-main.thumb.png.d9b95cf864dcae801ec3a7f83b64a83e.png "Emülatör Google Nexus S 480x800")

![Emülatör Google Nexus S 480x800](https://www.kodevreni.com/uploads/monthly_2019_05/S-drawer.thumb.png.38bae0c74b8cdf4454d059806cfd7469.png "Emülatör Google Nexus S 480x800")

Emülatör Google Pixel 2 1920x1080

![Emülatör Google Pixel 2 1920x1080](https://www.kodevreni.com/uploads/monthly_2019_05/Pixel-main.thumb.png.23df8ea7ba242fd9fb031c8770ed4abc.png "Emülatör Google Pixel 2 1920x1080")

![Emülatör Google Pixel 2 1920x1080](https://www.kodevreni.com/uploads/monthly_2019_05/Pixel-drawer.thumb.png.93327230211045bce405b95f8c6e9274.png "Emülatör Google Pixel 2 1920x1080")

Bu şekilde 3 farklı cihazla local bir test gerçekleştirdim. Sonuç başarılıydı.

Not: Tabii bu server projesini bir server'a deploy edebilirsiniz. Bunun için internetten "Node.js deploy" yazarak istediğiniz sonuçları bulabilirsiniz.

# Projeye Hazır Olarak Erişmek Ya da Soru Sormak İsteyenler

Bunun için https://www.kodevreni.com/4601-react-native-ve-socketio-ile-real-time-chat-uygulamas%C4%B1/ adresini ziyaret edebilirsiniz.

# Proje Güncelleme Notları

Proje artık tek ekran içinde değil, 2 ekran içerisinde çalışmakta.
Ayrıca Chat ekranında sağ menü yer almakta ve bu menü de aktif olan kullanıcı listesi yer almakta.
Ayrıca kodlama düzeni açısından da bir kaç düzenleme getirildi.
Projeye Mobx store eklendi.
Proje Icon eklendi.
