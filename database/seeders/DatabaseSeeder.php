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
            'name' => 'jawa timur',
        ]);
        
        Province::create([
            'name' => 'jakarta',
        ]);

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


        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
