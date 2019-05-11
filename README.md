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

Projemizin mobile klasöründeki projenin içindeki App.js dosyasını açıyoruz.

```
const ip = '192.168.43.105';//Ip adresi yanlış olursa çalışmaz.
```

Not: IOS için localhost yazmanız yeterli olacaktır.

Bu satırın karşısındaki tek tırnak arasındaki değere kopyaladığınız ip adresini yapıştırın. Daha sonra kaydedin.

Hemen ardından da ```react-native run-android``` komutu ile projenizi açın. Yanlış ip adresini almadıysanız Socket.io server'a başarılı şekilde bağlantı sağlanacaktır. 

İsminizi girdikten sonra Yukarıdaki Kişi aktif yazan kısımda sayı 0 kalıyorsa, bağlantı başarısız demektir. Eğer 1 ya da daha fazla bir değer varsa bağlantı başarılı demektir.

# Gerçek Cihazda Uygulamayı Test Etmek

Uygulamayı gerçek cihazda test etmek emülatöre göre bir tık daha zahmetli olabilir.

# Wifi destekleyen bilgisayar için;

Bu seçenek için yapmanız gereken test etmek istediğiniz cihaz ile bilgisayarın aynı ağda bağlı olması. Daha sonra bilgisayarınızın Wifi üzerinden local ip adresini bulmanız gerekmekte. Bunun için yine ```ipconfig``` komutunu komut satırında çalıştırırsanız yine üst başlıktaki işlemi yapmanız gerekir.

![Gerçek Cihaz ipconfig 1](https://www.kodevreni.com/uploads/monthly_2019_05/Screenshot_1.png.f108306841dc7793b63c21ce61eb9a59.png "Gerçek Cihaz ipconfig 1")

Dikdörtgen ile gösterilen kısımdaki ip'yi kopyalayın. Daha sonra yine yukarıdaki başlık gibi;

App.js dosyasını açın ve şu satırı bulun;

```
const ip = '192.168.43.105';//Ip adresi yanlış olursa çalışmaz.
```
Buraya ip adresini yapıştırın. Daha sonra kaydederek ```react-native run-android``` komutunu çalıştırabilirsiniz.

# Wifi desteklemeyen bilgisayar için;

Bunun için yine ```ipconfig``` komutunu komut satırında çalıştırırsanız yine üst başlıktaki işlemi yapmanız gerekir.

![Gerçek Cihaz ipconfig 2](https://www.kodevreni.com/uploads/monthly_2019_05/Screenshot_3.png.d7aad61709260d57ad18878a9556f32a.png "Gerçek Cihaz ipconfig 2")

Yukarıdaki dikdörtgenle işaretli kısımdaki adresi kopyalayıp yine App.js içerisindeki şu satırı bulun:

```
const ip = '192.168.43.105';//Ip adresi yanlış olursa çalışmaz.
```

Daha sonra kopyaladığınız adresi buraya yapıştırın. 

Buna rağmen yine de çalışmıyorsa muhtemelen doğru ip adresini kopyalayamamışsınızdır. Yaşadığınız sorunları bana bildirebilirsiniz.

Sorunları bildirmek için ise http://www.kodevreni.com adresinde konu açarak dile getirebilirsiniz. 

# Uygulamadan Resimler

![Gerçek Cihaz Huawei P9 Lite 2017 1920 x 1080](https://www.kodevreni.com/uploads/monthly_2019_05/Screenshot_20190511-160227.thumb.jpg.fb828acb4636d7e9bd77dde92cce7a21.jpg "Gerçek Cihaz Huawei P9 Lite 2017 1920 x 1080")

Gerçek Cihaz Huawei P9 Lite 2017 1920 x 1080

![Emülatör Google Nexus S 480x800](https://www.kodevreni.com/uploads/monthly_2019_05/Screenshot_1557579743.thumb.png.725dfdf971eb3de178710ccb3fd7aa4d.png "Emülatör Google Nexus S 480x800")

Emülatör Google Nexus S 480x800

![Emülatör Google Pixel 2 1920x1080](https://www.kodevreni.com/uploads/monthly_2019_05/Screenshot_1557579731.thumb.png.e6e0d99e282b154a2b4d2a3a337cfffa.png "Emülatör Google Pixel 2 1920x1080")

Emülatör Google Pixel 2 1920x1080

Bu şekilde 3 farklı cihazla local bir test gerçekleştirdim. Sonuç başarılıydı.

Not: Tabii bu server projesini bir server'a deploy edebilirsiniz. Bunun için internetten "Node.js deploy" yazarak istediğiniz sonuçları bulabilirsiniz.
