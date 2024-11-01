--------------------------------------------------------------

Tutorial ini ditujukan untuk membantu memudahkan dalam 
melakukan perubahan desain yang ada pada website dengan tailwind.

1. **Instal Node.js dan npm** (jika belum terinstal)
   - Anda bisa mengunduh dan menginstalnya dari [Node.js](https://nodejs.org/).

2. **Ekstrak file proyek** dari file ZIP atau TAR.GZ yang diberikan.
   - Gunakan aplikasi seperti WinRAR, 7-Zip, atau alat bawaan sistem operasi untuk ekstrak file.

3. **Buka terminal** dan arahkan ke direktori proyek.
   - Di Windows: Buka Command Prompt atau PowerShell dan gunakan perintah `cd` untuk masuk ke direktori proyek.
   - Di MacOS/Linux: Buka Terminal dan gunakan perintah `cd` untuk masuk ke direktori proyek.

4. **Instal dependensi:**
   - Jalankan perintah berikut di terminal:
     ```
     npm install
     ```

   Perintah ini akan mengunduh semua dependensi yang diperlukan yang tercantum dalam file `package.json`.

5. **Jalankan Tailwind CSS dengan menjalankan perintah berikut di terminal:**
     ```
     npm run start
     ```
   atau lebih lengkapnya bisa dilihat di dalam file `package.json` pada perintah
     ```
     npx tailwindcss -i ./style/style.css -o ./src/output.css --watch
     ```
   Perintah ini akan memulai proses Tailwind CSS yang akan memantau file `style.css` untuk setiap perubahan dan mengeluarkan hasilnya ke `src/output.css`.

6. Anda sudah dapat melakukan pembaruan dengan menggunakan tailwind CSS.

Jika ada kendala atau hal yang ingin ditanyakan silahkan menghubungi kembali. Dengan senang hati kami akan membantu untuk menyelesaikan masalah anda.
Website: https://mori-zaky.vercel.app/
Sribu: https://www.sribu.com/id/users/adibhaidarzaky