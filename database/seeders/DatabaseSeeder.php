<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Province;
use App\Models\Destination;
use App\Models\DestinationDetail;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        Province::create([
            'name' => 'jawa tengah',
        ]);
        
        Province::create([
            'name' => 'DKI jakarta',
        ]);

        Province::create([
            'name' => 'papua barat',
        ]);


        // SEEDER CANDI BOROBUDUR 

        Destination::create([
            'province_id' => 1,
            'operational' => '07:00 - 19:00',
            'name' => 'Candi Borobudur',
            'tagline' => 'Candi atau kuil Buddha terbesar di dunia',
            'slug' => Str::slug('candi borobudur candi atau kuil buddha terbesar di dunia'),
            'thumbnail' => 'https://i.ibb.co.com/tXq6Vsc/asdd.jpg',
            'images' => json_encode([
                "https://i.ibb.co.com/8YyybG7/bview3.jpg",
                "https://i.ibb.co.com/JpvZFnM/bview2.jpg",
                "https://i.ibb.co.com/Vp9wJgW/bview1.webp",
            ]),

            'short_history' => 'Candi legendaris ini diperkirakan dibangun pada abad ke-8, tepatnya sekitar tahun 750-an masehi pada masa pemerintahan dinasti Syailendra. Pembangunannya diperkirakan berlangsung sekitar 75 tahun sampai akhirnya rampung pada saat pemerintahan raja Samaratungga berlangsung. Candi Borobudur terletak diatas bukit hijau yang asri di mana Sobat Pesona bisa menyaksikan bukit-bukit hijau lain di sekitarnya. Bangunannya sendiri terdiri atas jutaan blok batu yang dibuat kedalam tiga struktur yang menggambarkan tingkatan alam semesta menurut filsafat Buddha. Bangunan kolosal ini juga dihiasi oleh 2.672 panel relief dan 504 patung Buddha.',

            'body' => 'Candi Borobudur adalah salah satu keajaiban arsitektur dunia yang terletak di Magelang, Jawa Tengah, Indonesia. Candi ini adalah monumen Buddha terbesar di dunia dan menjadi daya tarik utama wisatawan dari seluruh dunia. Borobudur bukan hanya sebuah tempat ibadah, tetapi juga simbol kebudayaan dan kebijaksanaan spiritual. Berikut adalah beberapa aspek menarik dari Candi Borobudur yang tidak terkait dengan sejarahnya. <br/> <br/> 
            Borobudur memiliki struktur berbentuk punden berundak yang terdiri dari sepuluh tingkat. Setiap tingkat memiliki filosofi tersendiri, menggambarkan perjalanan manusia dari dunia fana menuju pencerahan. Monumen ini dirancang dengan presisi yang luar biasa, menggunakan lebih dari dua juta balok batu vulkanik yang disusun tanpa menggunakan perekat apa pun. Relief yang terukir di dindingnya dianggap sebagai karya seni kelas dunia. Dengan lebih dari 2.500 panel relief, Candi Borobudur memiliki koleksi ukiran cerita yang paling lengkap dan indah di dunia. Relief-relief ini menggambarkan kehidupan sehari-hari masyarakat pada masa itu, nilai-nilai moral, serta ajaran Buddha. <br/> <br/> Borobudur dikelilingi oleh pemandangan alam yang memukau, termasuk pegunungan seperti Gunung Merapi, Gunung Merbabu, dan Bukit Menoreh. Ketika matahari terbit, candi ini menjadi tempat yang magis. Sinar matahari pagi yang perlahan-lahan menyinari relief dan stupa menciptakan pemandangan yang menenangkan dan penuh kedamaian.Selain itu, daerah sekitar Borobudur kaya akan sawah hijau yang menawarkan suasana pedesaan yang asri. Banyak wisatawan yang menikmati pemandangan ini dengan bersepeda atau berjalan kaki di sekitar kompleks candi.'

        ]);

        DestinationDetail::create([
            'destination_id' => 1,
            'name' => 'stupa',
            'description' => 'Candi Borobudur memiliki ribuan stupa yang tersebar di berbagai tingkatan. Stupa-stupa ini berisi patung Buddha dan merupakan simbol pencapaian spiritual. Stupa utama terletak di puncak candi.',
            'thumbnail' => 'https://i.ibb.co.com/f93ZPH0/Stupa-Borobudur.jpg',
        ]);

        DestinationDetail::create([
            'destination_id' => 1,
            'name' => 'relief',
            'description' => 'Relief-relief yang menghiasi dinding-dinding candi menceritakan kisah-kisah kehidupan Buddha, seperti Jataka dan Lalitavistara. Relief-relief ini sangat detail dan menggambarkan kehidupan masyarakat pada masa itu.',
            'thumbnail' => 'https://i.ibb.co.com/MgTM33Y/relief.png',
        ]);



        // SEEDER RAJA AMPAT 

        Destination::create([
            'province_id' => 3,
            'operational' => '08:00 - 17:00',
            'name' => 'Raja Ampat',
            'tagline' => 'Surga Petualangan Dunia di Ujung Papua',
            'slug' => Str::slug('raja ampat the last paradise'),
            'thumbnail' => 'https://i.ibb.co.com/X5LCG0f/raja-ampat-tm.jpg',
            'images' => json_encode([
                "https://i.ibb.co.com/kSMW8w6/rj-1.jpg",
                "https://i.ibb.co.com/sq4b32S/rj-2.jpg",
            ]),

            'short_history' => 'Raja Ampat, yang berarti "Empat Raja," berasal dari legenda masyarakat setempat di mana empat raja lahir dari telur naga yang ditemukan oleh seorang wanita. Keempat raja tersebut menjadi penguasa di pulau-pulau besar di wilayah ini: Waigeo, Salawati, Batanta, dan Misool. Wilayah ini dulunya berada di bawah kekuasaan Kerajaan Tidore, salah satu kerajaan Islam di Maluku. Pada masa kolonial Belanda, Raja Ampat menjadi bagian dari wilayah pengaruh kolonial. Tradisi budaya dan mitologi lokal tetap menjadi warisan penting masyarakat hingga saat ini.',

            'body' => 'Kabupaten Raja Ampat adalah salah satu kabupaten di provinsi Papua Barat Daya, Indonesia. Ibukota kabupaten ini terletak di Waisai. Kabupaten ini memiliki 610 pulau, termasuk kepulauan Raja Ampat. Empat di antaranya, yakni Pulau Misool, Salawati, Batanta dan Waigeo, merupakan pulau-pulau besar. Dari seluruh pulau hanya 35 pulau yang berpenghuni sedangkan pulau lainnya tidak berpenghuni dan sebagian besar belum memiliki nama. Kabupaten ini memiliki total luas 67.379,60 km² dengan rincian luas daratan 7.559,60 km² dan luas lautan 59.820,00 km². <br/> <br/> Kabupaten Raja Ampat dideklarasikan sebagai kabupaten baru, berdasarkan UU No. 26 tahun 2002 tentang Pembentukan Kabupaten Sarmi, Kabupaten Kerom, Kabupaten Sorong Selatan, dan Kabupaten Raja Ampat, tanggal 3 Mei tahun 2002. Kabupaten Raja Ampat merupakan hasil pemekaran dari Kabupaten Sorong dan termasuk salah satu dari 14 kabupaten baru di Tanah Papua. Pusat pemerintahan berada di Waisai, Distrik Waigeo Selatan, sekitar 36 mil dari Kota Sorong. Kepemerintahan di kabupaten ini baru berlangsung efektif pada tanggal 09 Mei 2003 yang ditandai dengan pembukaan selubung papan nama oleh Gubernur Papua, Alm. Drs. Yaap Salosa. <br/> <br/> Dalam perjalanan sejarah, wilayah Raja Ampat telah lama dihuni oleh masyarakat bangsawan dan menerapkan sistem kerajaan yang terpengaruhi adat Maluku. Raja Ampat menjadi bagian klaim dari Kesultanan Tidore dengan hubungan dengan tokoh Gurabesi. Setelah Kesultanan Tidore takluk dari Belanda, Kepulauan Raja Ampat menjadi bagian dari Hindia Belanda, dan selanjutnya Indonesia.'

        ]);

        DestinationDetail::create([
            'destination_id' => 2,
            'name' => 'Pulau Salawati',
            'description' => 'Pulau Salawati adalah salah satu dari empat pulau besar di Raja Ampat, yang terletak di Papua Barat Daya. Meskipun ga sepopuler Pulau Wayag atau Misool, Salawati punya daya tariknya sendiri yang bikin tempat ini jadi hidden gem buat kamu para traveler. Dengan luas sekitar 1.623 km², pulau ini adalah rumah bagi hutan hujan tropis yang lebat, pantai-pantai eksotis, dan masyarakat lokal yang masih sangat menjaga tradisi mereka.',
            'thumbnail' => 'https://i.ibb.co.com/z6vD8s0/salawati.webp',
        ]);

        DestinationDetail::create([
            'destination_id' => 2,
            'name' => 'Desa Arborek',
            'description' => 'Arborek berasal dari bahasa Biak yang berarti duri. Dulu suku Biak terkenal sebagai pelaut ulung, bahkan dijuluki sebagai Viking Papua. Suatu hari para pelaut Biak ini berlayar dari Teluk Cendrawasih menuju utara dan tidak sengaja menemukan sebuah pulau kosong berpasir putih. Setelah menjelajahi dan yakin kalau pulau ini tidak berpenghuni, akhirnya mereka memutuskan untuk tinggal dan membuat perkampungan. Karena awalnya dipenuhi dengan semak berduri, pulau ini diberi nama Arborek.',
            'thumbnail' => 'https://i.ibb.co.com/NxtYcMJ/arborek.webp',
        ]);


        // SEEDER KOTA TUA 

        Destination::create([
            'province_id' => 2,
            'operational' => '09:00 - 16:00',
            'name' => 'Kepulauan Seribu',
            'tagline' => 'Seribu Pulau Seribu Pesona',
            'slug' => Str::slug('kepulauan seribu seribu pulau seribu pesona'),
            'thumbnail' => 'https://i.ibb.co.com/gd6mC84/kp-sebiu.webp',
            'images' => json_encode([
                "https://i.ibb.co.com/pPffzMK/ks-1.jpg",
                "https://i.ibb.co.com/2YHCV18/ks-2.jpg",
            ]),

            'short_history' => 'Kepulauan Seribu adalah gugusan pulau yang terletak di Teluk Jakarta, Indonesia. Meskipun namanya "seribu," jumlah pulau sebenarnya hanya sekitar 110. Wilayah ini memiliki sejarah panjang, dimulai sejak zaman kolonial Belanda. Pada abad ke-17, beberapa pulau digunakan sebagai pos perdagangan dan benteng pertahanan. Contohnya, Pulau Bidadari memiliki Benteng Martello, yang dibangun untuk mengawasi perairan sekitar dari ancaman musuh. Pada era pasca-kemerdekaan, Kepulauan Seribu mulai dikenal sebagai destinasi wisata dan kawasan konservasi. Beberapa pulau di sini menjadi lokasi rehabilitasi satwa seperti penyu sisik dan penanaman mangrove. Hingga saat ini, Kepulauan Seribu memiliki peran penting dalam melestarikan keanekaragaman hayati laut di sekitar Jakarta.',

            'body' => 'Kabupaten Administrasi Kepulauan Seribu atau yang sering di sebut juga Kepulauan Seribu adalah sebuah kabupaten administrasi di Daerah Khusus Ibukota Jakarta, Indonesia. Wilayahnya meliputi gugusan kepulauan di Teluk Jakarta. Jumlah penduduk di Kepulauan Seribu pada tahun 2020 sebanyak 29.230 jiwa, dan meliputi 0,26% dari total jumlah penduduk DKI Jakarta tahun 2020 yakni 11.196.633 jiwa, berdasarkan data DUKCAPIL, Kementerian Dalam Negeri. <br/> <br/>Kepulauan Seribu terdiri dari pulau-pulau karang sebanyak 105 buah dengan total luas wilayah daratan sebesar 8,7 km². Posisinya secara geografis adalah pada 5°24–5°45 LS dan 106°25–106°40 BT dengan luas 870 hektare (8,70 km²). Temperatur sepanjang tahun umumnya berkisar antara 21 °C-32 °C dengan kelembaban udara rata-rata 80% <br/> <br/> Kecamatan Kepulauan Seribu Selatan membawahi tiga kelurahan yaitu Kelurahan Pulau Tidung, Kelurahan Pulau Pari, dan Kelurahan Pulau Untung Jawa. Kecamatan Kepulauan Seribu Utara membawahi tiga kelurahan juga yaitu Kelurahan Pulau Kelapa, Kelurahan Pulau Harapan, dan Kelurahan Pulau Panggang'

        ]);

        DestinationDetail::create([
            'destination_id' => 3,
            'name' => 'Pulau Tidung',
            'description' => 'Pulau Tidung adalah salah satu kelurahan di kecamatan Kepulauan Seribu Selatan, Kabupaten Kepulauan Seribu, Jakarta, Indonesia. Pulau Tidung Besar dan Tidung Kecil dihubungkan oleh jembatan panjang yang dinamakan Jembatan Cinta oleh penduduk setempat yang terletak di Kepulauan Seribu Selatan bagian barat, dengan jarak tempuh kurang lebih 3 jam perjalanan dari Muara Angke dengan kapal penumpang.',
            'thumbnail' => 'https://i.ibb.co.com/yBfJSbS/pl-tidung.jpg',
        ]);

        DestinationDetail::create([
            'destination_id' => 3,
            'name' => 'Pulau Pramuka',
            'description' => 'Pramuka berada di Kelurahan Pulau Panggang, Kecamatan Kepulauan Seribu Utara. Pulau ini berpenduduk, meski populasinya tidak sebanyak Pulau Tidung atau Pulau Harapan. Nama Pramuka berasal dari kegiatan kepramukaan yang kerap diadakan di sini. Saat ini, DKI Jakarta belum memiliki Bumi Perkemahan Cibubur. Karena sering digunakan sebagai area perkemahan dan latihan kepramukaan, nama Pulau Elang perlahan berubah menjadi Pulau Pramuka. Layaknya pulau berpenduduk lainnya di Kepulauan Seribu, pulau seluas  16,73 ha ini dihuni oleh berpenduduk dengan latar belakang etnis yang berbeda-beda, seperti Betawi, Madura, Bugis, Banten, dan bahkan Minangkabau.',
            'thumbnail' => 'https://i.ibb.co.com/JsJZtLX/pl-pramuka.jpg',
        ]);


        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
